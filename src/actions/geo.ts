import axios from "axios";

export async function getCountryCode() {
    try {
        // Try primary provider (client-side call automatically detects visitor IP)
        const response = await axios.get("https://ipapi.co/json/");
        if (response.data && response.data.country_code) {
            return response.data.country_code;
        }
    } catch (error) {
        console.error("Primary geo-IP service failed, trying fallback...", error);
    }

    try {
        // Fallback provider (client-side call automatically detects visitor IP)
        const response = await axios.get("https://ipwho.is/");
        if (response.data && response.data.country_code) {
            return response.data.country_code;
        }
    } catch (error) {
        console.error("All geo-IP services failed:", error);
    }

    return null;
}
