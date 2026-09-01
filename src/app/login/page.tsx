"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import logo from "@/assets/call_pilot_logo.png";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

// Cookie Helpers
const setCookie = (name: string, value: string, days: number) => {
  const d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = "expires=" + d.toUTCString();
  // Using path=/ to make sure it's available everywhere. 
  // domain is intentionally left out to default to current domain/subdomain unless specified.
  document.cookie = `${name}=${value};${expires};path=/`;
};

const getCookie = (name: string) => {
  const nameEq = name + "=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEq) === 0) return c.substring(nameEq.length, c.length);
  }
  return null;
};

export default function SignInPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showErrorDialog, setShowErrorDialog] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [step, setStep] = useState<"login" | "otp">("login");

  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "https://api.callpilot.pro/api/v1";

  // Check for existing session on mount
  useEffect(() => {
    const accessToken = getCookie("access");
    const refreshTokenStr = getCookie("refresh");
    if (accessToken && refreshTokenStr) {
      verifyAndRedirect(accessToken, refreshTokenStr);
    }
  }, []);

  const handleInputChange = (field: "email" | "password", value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const verifyAndRedirect = async (accessToken: string, refreshTokenStr: string) => {
    try {
      // 1. Verify Access Token
      const verifyRes = await fetch(`${API_BASE_URL}/token/verify`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: accessToken }),
      });

      if (verifyRes.ok) {
        window.location.href = "https://panel.callpilot.pro/";
        return;
      }

      const verifyData = await verifyRes.json();
      if (verifyData.code === "token_not_valid") {
        // 2. If invalid, try Refresh
        const refreshRes = await fetch(`${API_BASE_URL}/token/refresh`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ refresh: refreshTokenStr }),
        });

        if (refreshRes.ok) {
          const refreshData = await refreshRes.json();
          // Save new tokens
          setCookie("access", refreshData.access, 7);
          setCookie("refresh", refreshData.refresh, 7);
          window.location.href = "https://panel.callpilot.pro/";
        } else {
          // 3. Fallback to login if refresh fails
          setStep("login");
          // Clear cookies on failure
          setCookie("access", "", -1);
          setCookie("refresh", "", -1);
        }
      }
    } catch (err) {
      console.error("Session verification failed", err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_BASE_URL}/token`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setShowSuccessDialog(true);
      } else {
        let errorMsg = "Something went wrong. Please try again.";
        if (typeof data === "object") {
          errorMsg = Object.entries(data)
            .map(([key, value]) => `${key}: ${Array.isArray(value) ? value.join(", ") : value}`)
            .join("\n");
        }
        setError(errorMsg);
        setShowErrorDialog(true);
      }
    } catch (err) {
      setError("Failed to connect to the server. Please check your internet connection.");
      setShowErrorDialog(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_BASE_URL}/token/verify-otp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ otp_code: otp }),
      });

      const data = await response.json();

      if (response.ok) {
        // Save tokens to browser cookie
        setCookie("access", data.access, 7);
        setCookie("refresh", data.refresh, 7);

        // Verify and redirect
        await verifyAndRedirect(data.access, data.refresh);
      } else {
        let errorMsg = "OTP verification failed.";
        if (data.otp_code) {
          errorMsg = Array.isArray(data.otp_code) ? data.otp_code.join(", ") : data.otp_code;
        } else if (data.detail) {
          errorMsg = data.detail;
        }
        setError(errorMsg);
        setShowErrorDialog(true);
      }
    } catch (err) {
      setError("Failed to verify OTP. Please try again.");
      setShowErrorDialog(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Center like login pages */}
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
            {/* LEFT: centered video card (hidden on mobile) */}
            <div className="hidden lg:block order-2 lg:order-1">
              <div className="rounded-2xl border border-border bg-card/40 shadow-sm overflow-hidden">
                <div className="p-4 sm:p-5">
                  {/* Same video window as Get Started */}
                  <div className="relative w-full overflow-hidden rounded-xl bg-muted aspect-[4/4]">
                    <video
                      className="absolute inset-0 h-full w-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      poster="/video-poster.jpg"
                    >
                      <source src="videos/call_pilot_v.mp4" type="video/mp4" />
                      <track kind="captions" src="/captions.vtt" srcLang="en" label="English" default />
                      Your browser does not support the video tag.
                    </video>

                    {/* subtle overlay */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background/25 via-transparent to-transparent" />
                    <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-border/30" />
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: sign-in card */}
            <div className="order-1 lg:order-2">
              <div className="rounded-2xl bg-card/40 shadow-sm">
                {/* Logo row + "Get Started" CTA */}
                <div className="p-5 sm:p-6 border-b border-border">
                  <div className="flex items-center justify-between gap-4">
                    <Link href="/" className="inline-flex items-center">
                      <img
                        src={logo.src}
                        alt="CallPilot logo"
                        className="h-20 sm:h-18 lg:h-20 w-auto"
                        width={logo.width}
                        height={logo.height}
                      />
                    </Link>

                    {step === "login" && (
                      <p className="text-sm text-muted-foreground">
                        No account registered?{" "}
                        <Link
                          href="/get-started"
                          className="font-medium text-headline hover:underline underline-offset-4 transition-colors"
                        >
                          Get Started
                        </Link>
                      </p>
                    )}
                  </div>

                  <h1 className="mt-5 text-2xl sm:text-3xl font-bold text-headline tracking-tight">
                    {step === "login" ? "Sign in" : "Enter OTP"}
                  </h1>
                  <p className="mt-2 text-sm sm:text-base text-body">
                    {step === "login"
                      ? "Welcome back. Enter your credentials to continue."
                      : "Please enter the OTP sent to your email to verify your identity."}
                  </p>
                </div>

                <div className="p-5 sm:px-6 sm:py-4">
                  {step === "login" ? (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* Email */}
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="you@company.com"
                          value={formData.email}
                          onChange={(e) =>
                            handleInputChange("email", e.target.value)
                          }
                          required
                          autoComplete="email"
                          disabled={isLoading}
                        />
                      </div>

                      {/* Password */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between gap-3">
                          <Label htmlFor="password">Password</Label>
                          <Link
                            href="/forgot-password"
                            className="text-sm text-muted-foreground hover:text-headline transition-colors"
                          >
                            Forgot password?
                          </Link>
                        </div>

                        <Input
                          id="password"
                          type="password"
                          placeholder="••••••••"
                          value={formData.password}
                          onChange={(e) =>
                            handleInputChange("password", e.target.value)
                          }
                          required
                          autoComplete="current-password"
                          disabled={isLoading}
                        />
                      </div>

                      <Button
                        type="submit"
                        variant="cta"
                        size="lg"
                        className="w-full"
                        disabled={isLoading}
                      >
                        {isLoading ? "Signing in..." : "Sign in"}
                      </Button>
                    </form>
                  ) : (
                    <form onSubmit={handleOtpSubmit} className="space-y-4">
                      {/* OTP */}
                      <div className="space-y-2">
                        <Label htmlFor="otp">OTP Number</Label>
                        <Input
                          id="otp"
                          type="text"
                          placeholder="Enter OTP"
                          value={otp}
                          onChange={(e) => setOtp(e.target.value)}
                          required
                          autoComplete="one-time-code"
                          disabled={isLoading}
                        />
                      </div>

                      <Button
                        type="submit"
                        variant="cta"
                        size="lg"
                        className="w-full"
                        disabled={isLoading}
                      >
                        {isLoading ? "Verifying..." : "Verify"}
                      </Button>
                    </form>
                  )}

                  <div className="mt-6 pt-5 border-t border-border text-center">
                    <p className="text-xs text-muted-foreground">
                      By signing in, you agree to our{" "}
                      <Link
                        href="/terms-conditions"
                        className="underline underline-offset-4 hover:text-headline transition-colors"
                      >
                        Terms
                      </Link>{" "}
                      and{" "}
                      <Link
                        href="/privacy-policy"
                        className="underline underline-offset-4 hover:text-headline transition-colors"
                      >
                        Privacy Policy
                      </Link>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* mobile: breathing room */}
          <div className="h-6" />
        </div>
      </div>

      {/* Success Dialog */}
      <AlertDialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-primary">Success</AlertDialogTitle>
            <AlertDialogDescription>
              Sign in successful. Please enter the OTP to continue.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => {
              setShowSuccessDialog(false);
              setStep("otp");
            }}>
              OK
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Error Dialog */}
      <AlertDialog open={showErrorDialog} onOpenChange={setShowErrorDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-destructive">Authentication Error</AlertDialogTitle>
            <AlertDialogDescription className="whitespace-pre-wrap">
              {error}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setShowErrorDialog(false)}>
              Try Again
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
