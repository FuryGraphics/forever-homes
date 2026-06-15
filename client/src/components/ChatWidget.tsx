import { useEffect } from "react";
import { useLocation } from "wouter";

const WIDGET_ID = "6a305382e20523fdce610d88";
const SCRIPT_ID = "leadconnector-chat-loader";
const HIDE_STYLE_ID = "leadconnector-chat-hide";

/**
 * Loads the LeadConnector chat widget on every page except the contact form
 * (`/contact`). The loader injects a <chat-widget> element into the body, so we
 * toggle its visibility by route rather than tearing the script down.
 */
export default function ChatWidget() {
  const [location] = useLocation();
  const hidden = location.startsWith("/contact");

  // Inject the loader script once.
  useEffect(() => {
    if (document.getElementById(SCRIPT_ID)) return;
    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.src = "https://widgets.leadconnectorhq.com/loader.js";
    script.setAttribute(
      "data-resources-url",
      "https://widgets.leadconnectorhq.com/chat-widget/loader.js",
    );
    script.setAttribute("data-widget-id", WIDGET_ID);
    document.body.appendChild(script);
  }, []);

  // Show/hide the injected widget based on the current route.
  useEffect(() => {
    let style = document.getElementById(HIDE_STYLE_ID) as HTMLStyleElement | null;
    if (!style) {
      style = document.createElement("style");
      style.id = HIDE_STYLE_ID;
      document.head.appendChild(style);
    }
    style.textContent = hidden ? "chat-widget { display: none !important; }" : "";
  }, [hidden]);

  return null;
}
