import Foundation
import Capacitor
import StoreKit

/// StoreKit 2 bridge for the bundled web pages (client/native/native-iap.js).
///
/// The pages call it as `window.Capacitor.Plugins.StoreKit.<method>()`. Every
/// purchase and entitlement is returned as the transaction's signed JWS, which
/// the page posts to the PassReady server (routes/applePayment.js); the
/// server verifies it with Apple's root certificates and grants the plan.
/// Nothing is unlocked on the device alone.
@objc(StoreKitPlugin)
public class StoreKitPlugin: CAPPlugin, CAPBridgedPlugin {
    public let identifier = "StoreKitPlugin"
    public let jsName = "StoreKit"
    public let pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "getProducts", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "purchase", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "currentEntitlements", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "unfinished", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "finishTransaction", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "restore", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "manageSubscriptions", returnType: CAPPluginReturnPromise)
    ]

    private var updatesTask: Task<Void, Never>?

    /// Renewals, purchases finished on another device and purchases that were
    /// interrupted are delivered by StoreKit while the app runs. They are
    /// forwarded as `transactionUpdated` events; the page verifies and
    /// finishes them. Retained until a listener consumes them.
    public override func load() {
        updatesTask = Task.detached { [weak self] in
            for await result in Transaction.updates {
                guard let self = self else { return }
                if case .verified(let transaction) = result {
                    self.notifyListeners("transactionUpdated",
                                         data: self.describe(transaction, jws: result.jwsRepresentation),
                                         retainUntilConsumed: true)
                }
            }
        }
    }

    deinit {
        updatesTask?.cancel()
    }

    // MARK: - Products

    @objc func getProducts(_ call: CAPPluginCall) {
        guard let ids = call.getArray("ids", String.self), !ids.isEmpty else {
            call.reject("ids is required")
            return
        }
        Task {
            do {
                let products = try await Product.products(for: ids)
                let list: [[String: Any]] = products.map { self.describe($0) }
                call.resolve(["products": list])
            } catch {
                call.reject("Could not load products: \(error.localizedDescription)")
            }
        }
    }

    // MARK: - Purchase

    @objc func purchase(_ call: CAPPluginCall) {
        guard let id = call.getString("id") else {
            call.reject("id is required")
            return
        }
        let tokenString = call.getString("appAccountToken")
        Task { @MainActor in
            do {
                guard let product = try await Product.products(for: [id]).first else {
                    call.reject("This product is not available right now.", "not_available")
                    return
                }
                var options: Set<Product.PurchaseOption> = []
                if let tokenString = tokenString, let token = UUID(uuidString: tokenString) {
                    options.insert(.appAccountToken(token))
                }
                let result = try await product.purchase(options: options)
                switch result {
                case .success(let verification):
                    switch verification {
                    case .verified(let transaction):
                        var data = self.describe(transaction, jws: verification.jwsRepresentation)
                        data["state"] = "purchased"
                        call.resolve(data)
                    case .unverified(_, let error):
                        call.reject("Apple could not verify this purchase: \(error.localizedDescription)", "unverified")
                    }
                case .pending:
                    call.resolve(["state": "pending"])
                case .userCancelled:
                    call.resolve(["state": "cancelled"])
                @unknown default:
                    call.resolve(["state": "unknown"])
                }
            } catch {
                call.reject("Purchase failed: \(error.localizedDescription)", "failed")
            }
        }
    }

    // MARK: - Entitlements

    @objc func currentEntitlements(_ call: CAPPluginCall) {
        Task {
            let list = await self.collect(Transaction.currentEntitlements)
            call.resolve(["transactions": list])
        }
    }

    @objc func unfinished(_ call: CAPPluginCall) {
        Task {
            let list = await self.collect(Transaction.unfinished)
            call.resolve(["transactions": list])
        }
    }

    /// Restore Purchases: ask the App Store to refresh, then return everything
    /// this Apple ID currently owns.
    @objc func restore(_ call: CAPPluginCall) {
        Task {
            do {
                try await AppStore.sync()
            } catch {
                call.reject("Restore failed: \(error.localizedDescription)", "failed")
                return
            }
            let list = await self.collect(Transaction.currentEntitlements)
            call.resolve(["transactions": list])
        }
    }

    /// Called once the server has recorded the purchase. Until then the
    /// transaction stays unfinished and StoreKit re-delivers it on launch.
    @objc func finishTransaction(_ call: CAPPluginCall) {
        guard let id = call.getString("transactionId") else {
            call.reject("transactionId is required")
            return
        }
        Task {
            var finished = false
            for await result in Transaction.unfinished {
                if case .verified(let transaction) = result, String(transaction.id) == id {
                    await transaction.finish()
                    finished = true
                }
            }
            call.resolve(["finished": finished])
        }
    }

    // MARK: - Manage

    @objc func manageSubscriptions(_ call: CAPPluginCall) {
        Task { @MainActor in
            guard let scene = self.bridge?.viewController?.view.window?.windowScene else {
                call.reject("No active window", "no_scene")
                return
            }
            do {
                try await AppStore.showManageSubscriptions(in: scene)
                call.resolve()
            } catch {
                call.reject("Could not open subscription management: \(error.localizedDescription)", "failed")
            }
        }
    }

    // MARK: - Helpers

    private func collect(_ transactions: Transaction.Transactions) async -> [[String: Any]] {
        var list: [[String: Any]] = []
        for await result in transactions {
            if case .verified(let transaction) = result {
                list.append(describe(transaction, jws: result.jwsRepresentation))
            }
        }
        return list
    }

    private func describe(_ transaction: Transaction, jws: String) -> [String: Any] {
        var data: [String: Any] = [
            "jws": jws,
            "transactionId": String(transaction.id),
            "originalTransactionId": String(transaction.originalID),
            "productId": transaction.productID,
            "purchaseDate": transaction.purchaseDate.timeIntervalSince1970 * 1000
        ]
        if let expires = transaction.expirationDate {
            data["expiresDate"] = expires.timeIntervalSince1970 * 1000
        }
        if let revoked = transaction.revocationDate {
            data["revocationDate"] = revoked.timeIntervalSince1970 * 1000
        }
        return data
    }

    private func describe(_ product: Product) -> [String: Any] {
        var data: [String: Any] = [
            "id": product.id,
            "displayName": product.displayName,
            "description": product.description,
            "displayPrice": product.displayPrice,
            "price": NSDecimalNumber(decimal: product.price).doubleValue,
            "currency": product.priceFormatStyle.currencyCode,
            "type": typeName(product.type)
        ]
        if let subscription = product.subscription {
            data["subscriptionPeriod"] = [
                "unit": unitName(subscription.subscriptionPeriod.unit),
                "value": subscription.subscriptionPeriod.value
            ]
        }
        return data
    }

    private func typeName(_ type: Product.ProductType) -> String {
        switch type {
        case .autoRenewable: return "autoRenewable"
        case .nonRenewable: return "nonRenewing"
        case .nonConsumable: return "nonConsumable"
        case .consumable: return "consumable"
        default: return "unknown"
        }
    }

    private func unitName(_ unit: Product.SubscriptionPeriod.Unit) -> String {
        switch unit {
        case .day: return "day"
        case .week: return "week"
        case .month: return "month"
        case .year: return "year"
        @unknown default: return "unknown"
        }
    }
}
