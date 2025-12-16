'use client';
import { useEffect, useRef } from "react";

export default function MapIframe() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const onLoad = () => {
      // Give the iframe a small delay to render content
      setTimeout(() => {
        iframe.contentWindow?.postMessage({ action: "invalidateMap" }, "*");
      }, 100);
    };

    iframe.addEventListener("load", onLoad);
    return () => iframe.removeEventListener("load", onLoad);
  }, []);

  return (
    <div className="h-96 w-full rounded-xl overflow-hidden border-2 border-slate-300">
      <iframe
        ref={iframeRef}
        src="https://arl-navisense.com/map-embed.html?token=13ec4f07b7a6bbf982bf88e5d8d79b88c69f37ea526cd586cbc13af7a937d794"
        title="Navisense Map"
        className="w-full h-full border-0"
        allowFullScreen
      />
    </div>
  );
}
