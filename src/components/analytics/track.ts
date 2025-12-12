"use client";

// Define the shape of our analytics events
type AnalyticsEventParams = Record<string, string | number | boolean>;

/**
 * Track an analytics event
 * Safely wraps window.gtag call
 */
export const track = (
    eventName: string,
    params?: AnalyticsEventParams
) => {
    if (typeof window === "undefined") return;

    // Check if gtag exists (Google Analytics)
    if ("gtag" in window && typeof (window as any).gtag === "function") {
        try {
            (window as any).gtag("event", eventName, params);
        } catch (err) {
            console.warn("Analytics error:", err);
        }
    } else {
        // Fallback logging for development
        if (process.env.NODE_ENV === "development") {
            console.log(`[Analytics] ${eventName}`, params || "");
        }
    }
};
