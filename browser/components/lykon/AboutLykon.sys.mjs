import { XPCOMUtils } from "resource://gre/modules/XPCOMUtils.sys.mjs";

const ABOUT_PAGE_URL = "chrome://browser/content/CustomUI/newtab.html";

export class AboutLykon {
  classID = Components.ID("{9d8b9d6e-4f71-4d5e-b3b8-lykon000001}");
  QueryInterface = ChromeUtils.generateQI(["nsIAboutModule"]);

  getURIFlags() {
    return (
      Ci.nsIAboutModule.ALLOW_SCRIPT |
      Ci.nsIAboutModule.URI_SAFE_FOR_UNTRUSTED_CONTENT
    );
  }

  newChannel(uri, loadInfo) {
    const channel = Services.io.newChannel(
      ABOUT_PAGE_URL,
      null,
      null
    );
    channel.loadInfo = loadInfo;
    return channel;
  }
}
