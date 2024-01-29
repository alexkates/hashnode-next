"use client";

import { GA_TRACKING_ID } from "./analytics";

export default function Scripts() {
  const googleAnalytics = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    gtag('js', new Date());`;
  return (
    <>
      <script async src={`https://ping.hashnode.com/gtag/js?id=${GA_TRACKING_ID}`} />
      <script dangerouslySetInnerHTML={{ __html: googleAnalytics }} />
    </>
  );
}
