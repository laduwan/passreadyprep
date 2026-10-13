import UIKit
import Capacitor

/// The app's bridge view controller. Plugins that live in this app target
/// (rather than in a package) are registered here, before the web view loads.
class AppViewController: CAPBridgeViewController {
    override func capacitorDidLoad() {
        bridge?.registerPluginInstance(StoreKitPlugin())
    }
}
