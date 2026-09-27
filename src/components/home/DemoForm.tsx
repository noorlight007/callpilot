"use client";

import { useState, useEffect, useRef } from "react";
import axios from "axios";
import s from "./landing.module.css";
import { Phone, Calendar, Check } from "./icons";
import { getCountryCode } from "@/actions/geo";
import { countries } from "@/lib/countries";

const BASE_URL_CALLPILOT = "https://api.callpilot.pro/api/v1";

export default function DemoForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [company, setCompany] = useState("");
  const [website, setWebsite] = useState("");
  const [phone, setPhone] = useState("");
  const [defaultDialCode, setDefaultDialCode] = useState("+44");
  const [companySize, setCompanySize] = useState("");
  const [demoSample, setDemoSample] = useState("applicant-screening");
  const [consent, setConsent] = useState(false);

  const [mode, setMode] = useState<"now" | "schedule">("now");
  const [scheduledDate, setScheduledDate] = useState("");
  const [scheduledTime, setScheduledTime] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [submittedStatus, setSubmittedStatus] = useState<"none" | "call_sent" | "scheduled">("none");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function detect() {
      try {
        const code = await getCountryCode();
        if (code) {
          const match = countries.find((c) => c.code === code.toUpperCase());
          if (match?.dial_code) {
            setDefaultDialCode(match.dial_code);
          }
        }
      } catch {
        // fallback
      }
    }
    detect();
  }, []);

  const handleSubmit = async (submitMode: "now" | "schedule") => {
    setErrorMessage(null);

    if (!firstName || !lastName || !email || !company || !phone || !consent) {
      setErrorMessage("Please complete all required fields and accept the consent checkbox.");
      return;
    }

    if (submitMode === "schedule" && (!scheduledDate || !scheduledTime)) {
      setErrorMessage("Please choose a date and time for your scheduled call.");
      return;
    }

    setIsLoading(true);

    let cleanPhone = phone.trim();
    if (!cleanPhone.startsWith("+")) {
      const numericPhone = cleanPhone.replace(/^0+/, "");
      cleanPhone = `${defaultDialCode}${numericPhone}`;
    }

    let scheduledAtIso: string | null = null;
    if (submitMode === "schedule" && scheduledDate && scheduledTime) {
      try {
        const dateObj = new Date(`${scheduledDate}T${scheduledTime}`);
        scheduledAtIso = dateObj.toISOString();
      } catch {
        scheduledAtIso = null;
      }
    }

    try {
      const payload = {
        name: `${firstName} ${lastName}`.trim(),
        phone: cleanPhone,
        email: email.trim(),
        company_name: company.trim(),
        company_size: companySize || "1–10",
        job_title: jobTitle.trim() || null,
        company_website: website.trim() || null,
        scheduled_at: scheduledAtIso,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        call_type: submitMode === "now" ? "NOW" : "SCHEDULE",
      };

      const response = await axios.post(`${BASE_URL_CALLPILOT}/core/client-test-call/`, payload);
      if (response.status === 200 || response.status === 201) {
        setSubmittedStatus(submitMode === "now" ? "call_sent" : "scheduled");
      } else {
        setErrorMessage("Unable to initiate demo call. Please check your details and try again.");
      }
    } catch (err: any) {
      const msg = err.response?.data?.detail || err.response?.data?.message || "Unable to place call at this moment. Please try again.";
      setErrorMessage(msg);
    } finally {
      setIsLoading(false);
      resultRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const handleReset = () => {
    setSubmittedStatus("none");
    setErrorMessage(null);
    setFirstName("");
    setLastName("");
    setEmail("");
    setJobTitle("");
    setCompany("");
    setWebsite("");
    setPhone("");
    setConsent(false);
    setMode("now");
  };

  if (submittedStatus === "call_sent") {
    return (
      <div ref={resultRef} className={s.form} style={{ textAlign: "center", padding: "40px 20px" }}>
        <div style={{ width: 56, height: 56, borderRadius: "50%", background: "#dcf5e5", color: "#16a34a", display: "grid", placeItems: "center", margin: "0 auto 16px" }}>
          <Check style={{ width: 28, height: 28 }} />
        </div>
        <h3 className={s.h3} style={{ marginBottom: 8 }}>Call Incoming{firstName ? `, ${firstName}` : ""}!</h3>
        <p className={s.p} style={{ maxWidth: 380, margin: "0 auto 20px" }}>
          Our AI is calling <strong>{phone.startsWith("+") ? phone : `${defaultDialCode} ${phone}`}</strong> now. You should receive the call within 60 seconds.
        </p>
        <button type="button" onClick={handleReset} className={`${s.btn} ${s.btnGhost}`} style={{ width: "100%" }}>
          Test Another Number
        </button>
      </div>
    );
  }

  if (submittedStatus === "scheduled") {
    return (
      <div ref={resultRef} className={s.form} style={{ textAlign: "center", padding: "40px 20px" }}>
        <div style={{ width: 56, height: 56, borderRadius: "50%", background: "#dcf5e5", color: "#16a34a", display: "grid", placeItems: "center", margin: "0 auto 16px" }}>
          <Check style={{ width: 28, height: 28 }} />
        </div>
        <h3 className={s.h3} style={{ marginBottom: 8 }}>Demo Scheduled!</h3>
        <p className={s.p} style={{ maxWidth: 380, margin: "0 auto 20px" }}>
          Your AI screening demo has been scheduled for <strong>{scheduledDate} at {scheduledTime}</strong>.
        </p>
        <button type="button" onClick={handleReset} className={`${s.btn} ${s.btnGhost}`} style={{ width: "100%" }}>
          Done
        </button>
      </div>
    );
  }

  return (
    <form
      className={s.form}
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(mode);
      }}
    >
      {errorMessage && (
        <div style={{ padding: "10px 14px", marginBottom: "14px", borderRadius: "10px", background: "#fef2f2", color: "#991b1b", fontSize: "13.5px", border: "1px solid #fee2e2" }}>
          {errorMessage}
        </div>
      )}

      <div className={s.formGrid}>
        <label>
          First name
          <input
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            autoComplete="given-name"
            required
          />
        </label>

        <label>
          Last name
          <input
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            autoComplete="family-name"
            required
          />
        </label>

        <label>
          Work email
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            required
          />
        </label>

        <label>
          Job title
          <input
            name="jobTitle"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            autoComplete="organization-title"
          />
        </label>

        <label>
          Company name
          <input
            name="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            autoComplete="organization"
            required
          />
        </label>

        <label>
          Company website
          <input
            type="url"
            name="website"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            autoComplete="url"
            placeholder="https://"
          />
        </label>

        <label>
          Phone number
          <input
            type="tel"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            autoComplete="tel"
            placeholder="+44..."
            required
          />
        </label>

        <label>
          Company size
          <select
            name="companySize"
            value={companySize}
            onChange={(e) => setCompanySize(e.target.value)}
          >
            <option value="">Select</option>
            <option value="1–10">1–10</option>
            <option value="11–50">11–50</option>
            <option value="51–200">51–200</option>
            <option value="201–1,000">201–1,000</option>
            <option value="1,000+">1,000+</option>
          </select>
        </label>

        <label className={s.full}>
          Demo call sample
          <select
            name="demoSample"
            value={demoSample}
            onChange={(e) => setDemoSample(e.target.value)}
          >
            <option value="applicant-screening">AI Applicant Screening Call</option>
          </select>
        </label>

        {mode === "schedule" && (
          <>
            <label>
              Date
              <input
                type="date"
                min={new Date().toISOString().split("T")[0]}
                value={scheduledDate}
                onChange={(e) => setScheduledDate(e.target.value)}
                required
              />
            </label>
            <label>
              Time
              <input
                type="time"
                value={scheduledTime}
                onChange={(e) => setScheduledTime(e.target.value)}
                required
              />
            </label>
          </>
        )}
      </div>

      <label className={s.consent}>
        <input
          type="checkbox"
          name="consent"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          required
        />
        <span>I agree to receive calls and SMS from CallPilot.</span>
      </label>

      <div className={s.formBtns}>
        <button
          type="button"
          onClick={() => {
            setMode("now");
            handleSubmit("now");
          }}
          disabled={isLoading}
          className={`${s.btn} ${s.btnDark}`}
        >
          <Phone className={s.btnIcon} />
          {isLoading && mode === "now" ? "Calling..." : "Call Now"}
        </button>
        <button
          type="button"
          onClick={() => {
            if (mode !== "schedule") {
              setMode("schedule");
            } else {
              handleSubmit("schedule");
            }
          }}
          disabled={isLoading}
          className={`${s.btn} ${s.btnGhost}`}
        >
          <Calendar className={s.btnIcon} />
          {mode === "schedule" ? (isLoading ? "Scheduling..." : "Confirm Schedule") : "Schedule Call"}
        </button>
      </div>
    </form>
  );
}
