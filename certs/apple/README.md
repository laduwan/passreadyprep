# Apple root certificates

Used by `utils/appleIap.js` to verify App Store signed transactions and
server notifications. Run `node tools/apple/fetch-root-certs.js` to download
`AppleRootCA-G3.cer`, `AppleRootCA-G2.cer` and `AppleIncRootCertificate.cer`
from apple.com into this folder. If the folder only holds this README, the
server downloads them itself the first time a purchase is verified.

The files are Apple's public certificates — they are safe to commit.
