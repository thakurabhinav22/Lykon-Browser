// Lykon Shield — Device-Level Google AdSense Blocker
const { Services } = ChromeUtils.import("resource://gre/modules/Services.jsm");

const ADSENSE_DOMAINS = [
  "googlesyndication.com",
  "doubleclick.net",
  "googleadservices.com",
  "googletagservices.com",
  "adservice.google.com",
  "partner.googleadservices.com",
  "pagead2.googlesyndication.com"
];

class LykonShieldAdBlocker {
  constructor() {
    Services.obs.addObserver(this, "http-on-modify-request");
  }

  observe(subject, topic, data) {
    if (topic === "http-on-modify-request") {
      let channel = subject.QueryInterface(Ci.nsIChannel);
      let uri = channel.URI;

      if (ADSENSE_DOMAINS.some(domain => uri.host.includes(domain))) {
        channel.cancel(Cr.NS_BINDING_ABORTED);
      }
    }
  }

  QueryInterface = ChromeUtils.generateQI(["nsIObserver"]);
}

// Activate when Shield is enabled
if (Services.prefs.getBoolPref("privacy.lykon.shield.enabled", true)) {
  new LykonShieldAdBlocker();
}