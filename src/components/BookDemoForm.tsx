"use client";

// Book a Demo form. Submission handling is unchanged from the previous form:
// POST ${NEXT_PUBLIC_API_BASE_URL}/core/demo/requests with the same core payload.
// New fields (company_type, ats, need) are sent as extra keys alongside the
// existing ones so nothing the backend already reads changes shape.
import { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import s from "@/components/home/landing.module.css";
import { countries } from "@/lib/countries";
import { getCountryCode } from "@/actions/geo";
import { FREE_TRIAL_CALLS } from "@/lib/pricing";

const COMPANY_TYPES = ["ATS, HCM or CRM platform", "Staffing or recruitment agency", "In-house Talent Acquisition Team", "Other"];
const ATS_OPTIONS = ["JobAdder", "Recruit CRM", "Ashby", "Greenhouse", "iCIMS", "Other"];
// Values match what the backend already accepts for daily_call_volume.
const VOLUME_OPTIONS = [
  { value: "0_250", label: "0-250" },
  { value: "251_500", label: "251-500" },
  { value: "501_1000", label: "501-1000" },
  { value: "1001+", label: "1001+" },
];
const NEED_OPTIONS = [
  { value: "screening", label: "AI Applicant Screening Call + Automation", category: "Lead_and_Applicant_5_Qualification" },
  { value: "partnership", label: "ATS / HCM / CRM partnership", category: "Others" },
];

export default function BookDemoForm() {
  const searchParams = useSearchParams();
  const planParam = searchParams.get("plan") || "";
  const intentParam = searchParams.get("intent") || "";

  const [f, setF] = useState({
    firstName: "", lastName: "", companyName: "", companyWebsite: "", email: "",
    countryIso: "US", phoneNumber: "", companyType: "", ats: "", volume: "", need: "screening",
  });
  const set = (k: keyof typeof f, v: string) => setF((p) => ({ ...p, [k]: k === "phoneNumber" ? v.replace(/^0+/, "") : v }));

  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getCountryCode().then((code) => {
      if (code && countries.some((c) => c.code === code.toUpperCase())) set("countryIso", code.toUpperCase());
    }).catch(() => {});
  }, []);

  const dial = countries.find((c) => c.code === f.countryIso)?.dial_code || "+1";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setError(null);
    const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "https://api.callpilot.pro/api/v1";
    const need = NEED_OPTIONS.find((n) => n.value === f.need) || NEED_OPTIONS[0];
    const payload = {
      first_name: f.firstName,
      last_name: f.lastName,
      email: f.email,
      phone: f.phoneNumber ? `${dial}${f.phoneNumber}` : null,
      mobile: null,
      company_name: f.companyName || null,
      company_website: f.companyWebsite || null,
      number_of_staff: null,
      daily_call_volume: f.volume || null,
      business_category: need.category,
      need: need.label,
      company_type: f.companyType || null,
      ats: f.ats || null,
      plan: planParam || null,
      intent: intentParam || "demo",
    };
    try {
      const res = await fetch(`${API_BASE_URL}/core/demo/requests`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        setStatus("done");
      } else {
        const msg = data && typeof data === "object"
          ? Object.entries(data).map(([k, v]) => `${k}: ${Array.isArray(v) ? v.join(", ") : v}`).join("\n")
          : "Something went wrong. Please try again.";
        setError(msg || "Something went wrong. Please try again.");
        setStatus("idle");
      }
    } catch {
      setError("Failed to connect to the server. Please check your internet connection.");
      setStatus("idle");
    }
  }

  if (status === "done") {
    return (
      <div className={s.form} style={{ textAlign: "center", padding: "40px 24px" }}>
        <h2 className={s.h3} style={{ fontSize: 24, marginBottom: 8 }}>Thank you</h2>
        <p className={s.p}>Your request has been received. Our team will contact you within one business day.</p>
        <Link href="/" className={`${s.btn} ${s.btnDark}`} style={{ marginTop: 22 }}>Back to website</Link>
      </div>
    );
  }

  return (
    <form className={s.form} onSubmit={handleSubmit} aria-label="Book a CallPilot demo">
      <div className={s.formGrid}>
        <label>First name<input required placeholder="John" value={f.firstName} onChange={(e) => set("firstName", e.target.value)} /></label>
        <label>Last name<input required placeholder="Doe" value={f.lastName} onChange={(e) => set("lastName", e.target.value)} /></label>
        <label>Company name<input required placeholder="Acme Inc." value={f.companyName} onChange={(e) => set("companyName", e.target.value)} /></label>
        <label>Company website<input placeholder="https://acme.com" value={f.companyWebsite} onChange={(e) => set("companyWebsite", e.target.value)} /></label>
        <label className={s.full}>Work email<input type="email" required placeholder="john@company.com" value={f.email} onChange={(e) => set("email", e.target.value)} /></label>
        <div className={`${s.full} ${s.phoneRow}`}>
          <label>Phone number <small>(optional)</small>
            <select aria-label="Country code" value={f.countryIso} onChange={(e) => set("countryIso", e.target.value)}>
              {countries.map((c) => <option key={c.code} value={c.code}>{c.code} {c.dial_code}</option>)}
            </select>
          </label>
          <label><span aria-hidden>&nbsp;</span>
            <input type="tel" placeholder="(555) 123-4567" aria-label="Phone number" value={f.phoneNumber} onChange={(e) => set("phoneNumber", e.target.value)} />
          </label>
        </div>
        <label className={s.full}>Company type
          <select required value={f.companyType} onChange={(e) => set("companyType", e.target.value)}>
            <option value="">Select company type</option>
            {COMPANY_TYPES.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </label>
        <label>Your ATS
          <select value={f.ats} onChange={(e) => set("ats", e.target.value)}>
            <option value="">Select your ATS</option>
            {ATS_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </label>
        <label>Applicants per month <small>(approx.)</small>
          <select value={f.volume} onChange={(e) => set("volume", e.target.value)}>
            <option value="">Select volume</option>
            {VOLUME_OPTIONS.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>
        </label>
        <label className={s.full}>What do you need?
          <select value={f.need} onChange={(e) => set("need", e.target.value)}>
            {NEED_OPTIONS.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>
        </label>
        <button type="submit" className={`${s.btn} ${s.btnDark} ${s.full}`} disabled={status === "loading"}>
          {status === "loading" ? "Submitting..." : "Book Demo"}
        </button>
        {error && <p className={`${s.full} ${s.formError}`} role="alert">{error}</p>}
      </div>
      <p className={s.formSmall}>
        Recruiting? Skip the call: <Link href="/free-credits" className={s.inlineLink}>get {FREE_TRIAL_CALLS} free AI screening calls &rarr;</Link>
      </p>
      <p className={s.formSmall}>
        By submitting, you agree to our <Link href="/terms-conditions" target="_blank" className={s.inlineLink}>Terms</Link> and{" "}
        <Link href="/privacy-policy" target="_blank" className={s.inlineLink}>privacy</Link>.
      </p>
    </form>
  );
}
