import UIKit
import Capacitor

/// The app's bridge view controller. Plugins that live in this app target
/// (rather than in a package) are registered here, before the web view loads.
class AppViewController: CAPBridgeViewController {
    override func capacitorDidLoad() {
        // StoreKitPlugin is not registered: nothing is sold in the app
        // (companion build, docs/AppReview_Reply_v1.0_build3.md). Register it
        // here again — bridge?.registerPluginInstance(StoreKitPlugin()) — if
        // In-App Purchase comes back.
    }
}
