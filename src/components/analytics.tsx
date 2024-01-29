"use client";

import Cookies from "js-cookie";
import { useEffect } from "react";
import { v4 } from "uuid";

type Props = {
  publicationId: string;
  postId: string;
};

export const GA_TRACKING_ID = "G-72XG3F8LNJ"; // This is Hashnode's GA tracking ID

export default function Analytics({ publicationId, postId }: Props) {
  useEffect(() => {
    if (!publicationId || !postId) return;

    const _sendViewsToHashnodeInternalAnalytics = async () => {
      const event: Record<string, string | number | object> = {
        event_type: "pageview",
        time: new Date().getTime(),
        event_properties: {
          hostname: window.location.hostname,
          url: window.location.pathname,
          eventType: "pageview",
          publicationId: publicationId,
          dateAdded: new Date().getTime(),
          referrer: window.document.referrer,
        },
      };

      let deviceId = Cookies.get("__amplitudeDeviceID");
      if (!deviceId) {
        deviceId = v4();
        Cookies.set("__amplitudeDeviceID", deviceId, {
          expires: 365 * 2,
        });
      }

      event["device_id"] = deviceId;

      await fetch(`/ping/data-event`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ events: [event] }),
      });
    };

    const _sendViewsToHashnodeAnalyticsDashboard = async () => {
      const LOCATION = window.location;
      const NAVIGATOR = window.navigator;
      const currentFullURL = LOCATION.protocol + "//" + LOCATION.hostname + LOCATION.pathname + LOCATION.search + LOCATION.hash;

      const query = new URL(currentFullURL).searchParams;

      const utm_id = query.get("utm_id");
      const utm_campaign = query.get("utm_campaign");
      const utm_source = query.get("utm_source");
      const utm_medium = query.get("utm_medium");
      const utm_term = query.get("utm_term");
      const utm_content = query.get("utm_content");

      let referrer = document.referrer || "";
      if (referrer.indexOf(window.location.hostname) !== -1) {
        referrer = "";
      }

      const data = {
        publicationId,
        postId,
        timestamp: Date.now(),
        url: currentFullURL,
        referrer: referrer,
        title: document.title,
        charset: document.characterSet || document.charset,
        lang: NAVIGATOR.language,
        userAgent: NAVIGATOR.userAgent,
        historyLength: window.history.length,
        timezoneOffset: new Date().getTimezoneOffset(),
        utm_id,
        utm_campaign,
        utm_source,
        utm_medium,
        utm_term,
        utm_content,
      };

      fetch(`/ping/view`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data }),
      });
    };

    const _sendPageViewsToHashnodeGoogleAnalytics = () => {
      // @ts-ignore
      if (!window.gtag) return;
      // @ts-ignore
      window.gtag("config", GA_TRACKING_ID, {
        transport_url: "https://ping.hashnode.com",
        first_party_collection: true,
      });
    };

    _sendPageViewsToHashnodeGoogleAnalytics();
    _sendViewsToHashnodeInternalAnalytics();
    _sendViewsToHashnodeAnalyticsDashboard();
  }, [postId, publicationId]);

  return null;
}
