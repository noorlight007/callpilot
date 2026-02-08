"use client";

import { useState } from "react";
import Link from "next/link";
import logo from "@/assets/call_pilot_logo.png";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const countryCodes = [
  { code: "+1", country: "United States" },
  { code: "+44", country: "United Kingdom" },
  { code: "+91", country: "India" },
  { code: "+61", country: "Australia" },
  { code: "+49", country: "Germany" },
  { code: "+33", country: "France" },
  { code: "+81", country: "Japan" },
  { code: "+86", country: "China" },
  { code: "+55", country: "Brazil" },
  { code: "+52", country: "Mexico" },
  { code: "+39", country: "Italy" },
  { code: "+34", country: "Spain" },
  { code: "+31", country: "Netherlands" },
  { code: "+46", country: "Sweden" },
  { code: "+47", country: "Norway" },
  { code: "+45", country: "Denmark" },
  { code: "+41", country: "Switzerland" },
  { code: "+48", country: "Poland" },
  { code: "+82", country: "South Korea" },
  { code: "+65", country: "Singapore" },
  { code: "+971", country: "UAE" },
  { code: "+966", country: "Saudi Arabia" },
  { code: "+27", country: "South Africa" },
  { code: "+64", country: "New Zealand" },
  { code: "+353", country: "Ireland" },
  { code: "+32", country: "Belgium" },
  { code: "+43", country: "Austria" },
  { code: "+351", country: "Portugal" },
  { code: "+420", country: "Czech Republic" },
  { code: "+36", country: "Hungary" },
];

const purposeOptions = [
  { value: "research", label: "Research" },
  { value: "personal", label: "Personal use" },
  { value: "industrial", label: "Industrial use" },
];

export default function GetStarted() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "",
    phoneNumber: "",
    purpose: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Center like login pages */}
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
            {/* LEFT: centered video card */}
            <div className="hidden lg:block order-2 lg:order-1">
              <div className="rounded-2xl border border-border bg-card/40 shadow-sm overflow-hidden">
                <div className="p-4 sm:p-5">
                  {/* 3:2 video window */}
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
                      Your browser does not support the video tag.
                    </video>

                    {/* subtle overlay */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background/25 via-transparent to-transparent" />
                    <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-border/30" />
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: form card */}
            <div className="order-1 lg:order-2">
              <div className="rounded-2xl  bg-card/40 shadow-sm ">
                {/* Logo row + sign in */}
                <div className="p-5 sm:p-6 border-b border-border">
                  <div className="flex items-center justify-between gap-4">
                    <Link href="/" className="inline-flex items-center">
                      <img src={logo.src} alt="Swiftwave" className="h-14 sm:h-16 lg:h-20 w-auto" />
                    </Link>

                    <Link
                      href="/login"
                      className="text-sm text-muted-foreground hover:text-headline transition-colors"
                    >
                      Sign in
                    </Link>
                  </div>

                  <h1 className="mt-5 text-2xl sm:text-3xl font-bold text-headline tracking-tight">
                    Get Started
                  </h1>
                  <p className="mt-2 text-sm sm:text-base text-body">
                    Fill out the form and our team will contact you shortly.
                  </p>
                </div>

                <div className="p-5 sm:px-6 sm:py-3">
                  <form onSubmit={handleSubmit} className="space-y-3">
                    {/* Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First name</Label>
                        <Input
                          id="firstName"
                          placeholder="John"
                          value={formData.firstName}
                          onChange={(e) =>
                            handleInputChange("firstName", e.target.value)
                          }
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last name</Label>
                        <Input
                          id="lastName"
                          placeholder="Doe"
                          value={formData.lastName}
                          onChange={(e) =>
                            handleInputChange("lastName", e.target.value)
                          }
                          required
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                      <Label htmlFor="phone">
                        Phone number{" "}
                        <span className="text-muted-foreground">(optional)</span>
                      </Label>
                      <div className="flex flex-col sm:flex-row gap-2">
                        <Select
                          value={formData.countryCode}
                          onValueChange={(value) =>
                            handleInputChange("countryCode", value)
                          }
                        >
                          <SelectTrigger className="sm:w-[190px]">
                            <SelectValue placeholder="Country code" />
                          </SelectTrigger>
                          <SelectContent>
                            {countryCodes.map((c) => (
                              <SelectItem key={c.code} value={c.code}>
                                {c.code} {c.country}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>

                        <Input
                          id="phone"
                          type="tel"
                          placeholder="123 456 7890"
                          value={formData.phoneNumber}
                          onChange={(e) =>
                            handleInputChange("phoneNumber", e.target.value)
                          }
                          className="flex-1"
                        />
                      </div>
                    </div>

                    {/* Purpose */}
                    <div className="space-y-2">
                      <Label htmlFor="purpose">Purpose of using AI phone call</Label>
                      <Select
                        value={formData.purpose}
                        onValueChange={(value) =>
                          handleInputChange("purpose", value)
                        }
                        required
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select your purpose" />
                        </SelectTrigger>
                        <SelectContent>
                          {purposeOptions.map((o) => (
                            <SelectItem key={o.value} value={o.value}>
                              {o.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <Button type="submit" variant="cta" size="lg" className="w-full">
                      Contact Sales
                    </Button>
                  </form>

                  <div className="mt-6 pt-5 border-t border-border text-center">
                    <p className="text-xs text-muted-foreground">
                      By submitting, you agree to our{" "}
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

          {/* mobile: add a little breathing room at bottom */}
          <div className="h-6" />
        </div>
      </div>
    </div>
  );
}
