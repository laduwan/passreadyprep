import UIKit
import Capacitor

/// The app's bridge view controller. Plugins that live in this app target
/// (rather than in a package) are registered here, before the web view loads.
class AppViewController: CAPBridgeViewController {
    override func capacitorDidLoad() {
        // StoreKit 2 In-App Purchase (App Store guideline 3.1.1).
        // See docs/AppReview_Reply_v1.0_build2.md.
        bridge?.registerPluginInstance(StoreKitPlugin())
    }
}
