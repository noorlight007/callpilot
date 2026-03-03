"use server";

import axios from "axios";

import { headers } from "next/headers";

export async function getCountryCode() {
    const headersList = await headers();
    const vercelCountry = headersList.get("x-vercel-ip-country");
    const host = headersList.get("host") || "";

    // 1. Priority: Vercel's native country header
    if (vercelCountry) {
        return vercelCountry;
    }

    // 2. Localhost: Use detection APIs (safe because there's no server IP mismatch)
    const isLocal = host.includes("localhost") || host.includes("127.0.0.1");
    if (isLocal) {
        try {
            const response = await axios.get("https://ipapi.co/json/");
            if (response.data && response.data.country_code) {
                return response.data.country_code;
            }
        } catch (error) {
            console.error("Primary geo-IP service failed locally:", error);
        }

        try {
            const response = await axios.get("https://ipwho.is/");
            if (response.data && response.data.country_code) {
                return response.data.country_code;
            }
        } catch (error) {
            console.error("Fallback geo-IP service failed locally:", error);
        }
    }

    // 3. Other Servers: Do not call APIs to avoid "wrong" (server-side) country code
    // This prevents showing the server's location (e.g. US) when the visitor is elsewhere.
    return null;
}
