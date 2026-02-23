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
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { CheckCircle2 } from "lucide-react";

const countryCodes = [
  { code: "+1", country: "United States" },
  { code: "+44", country: "United Kingdom" },
  { code: "+91", country: "India" },
  { code: "+880", country: "Bangladesh" },
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

const staffOptions = [
  { value: "1_5", label: "1-5" },
  { value: "6_20", label: "6-20" },
  { value: "21_100", label: "21-100" },
  { value: "100+", label: "100+" },
  { value: "Multi_location", label: "Multi-location" },
];

const callVolumeOptions = [
  { value: "0_250", label: "0-250" },
  { value: "251_500", label: "251-500" },
  { value: "501_1000", label: "501-1000" },
  { value: "1001+", label: "1001+" },
];

const businessCategoryOptions = [
  { value: "Appointment_and_Booking_Automation", label: "Appointment and Booking Automation" },
  { value: "Lead_and_Applicant_5_Qualification", label: "Lead and Applicant Qualification" },
  { value: "Customer_Service_Automation", label: "Customer Service Automation" },
  { value: "Compliance_and_Document_Collection", label: "Compliance and Document Collection" },
  { value: "Contact_Centre_Automation", label: "Contact Centre Automation" },
  { value: "Local_Authority_Public_Sector", label: "Local Authority/Public Sector" },
  { value: "Others", label: "Others" },
];

export default function GetStarted() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "",
    phoneNumber: "",
    mobileCountryCode: "",
    mobileNumber: "",
    companyName: "",
    companyWebsite: "",
    numberOfStaff: "",
    dailyCallVolume: "",
    businessCategory: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showErrorDialog, setShowErrorDialog] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.callpilot.pro/api/v1';

    const payload = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      phone: `${formData.countryCode}${formData.phoneNumber}`,
      mobile: formData.mobileCountryCode && formData.mobileNumber ? `${formData.mobileCountryCode}${formData.mobileNumber}` : null,
      company_name: formData.companyName || null,
      company_website: formData.companyWebsite || null,
      number_of_staff: formData.numberOfStaff || null,
      daily_call_volume: formData.dailyCallVolume || null,
      business_category: formData.businessCategory || null,
      //status: "pending", // Default status as per typical requirements if not provided
    };

    try {
      const response = await fetch(`${API_BASE_URL}/core/demo/requests`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        // Handle field-specific errors or generic errors
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
                      href="https://panel.callpilot.pro/login"
                      className="text-sm text-muted-foreground hover:text-headline transition-colors"
                    >
                      Sign in
                    </Link>
                  </div>

                  <h1 className="mt-5 text-xl font-bold tracking-tight">
                    {isSubmitted ? "Thank You!" : "Get Started"}
                  </h1>
                  <p className="mt-2 text-sm sm:text-base text-muted-foreground">
                    {isSubmitted
                      ? "Your request has been received. Our team will contact you shortly."
                      : "Fill out the form and our team will contact you shortly."}
                  </p>
                </div>

                <div className="p-5 sm:px-6 sm:py-3">
                  {isSubmitted ? (
                    <div className="flex flex-col items-center justify-center py-10 text-center animate-in fade-in zoom-in duration-500">
                      <div className="rounded-full bg-primary/10 p-4 mb-6">
                        <CheckCircle2 className="h-12 w-12 text-primary" />
                      </div>
                      <h2 className="text-xl font-semibold mb-2">Submission Successful</h2>
                      <p className="text-muted-foreground mb-8 max-w-xs mx-auto">
                        We've received your information and will be in touch with you very soon.
                      </p>
                      <Button asChild variant="default" size="lg" className="w-full">
                        <Link href="/">Back to Website</Link>
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-2">
                      {/* Name */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First name</Label>
                          <Input
                            id="firstName"
                            placeholder="John"
                            value={formData.firstName}
                            onChange={(e) => handleInputChange("firstName", e.target.value)}
                            //required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last name</Label>
                          <Input
                            id="lastName"
                            placeholder="Doe"
                            value={formData.lastName}
                            onChange={(e) => handleInputChange("lastName", e.target.value)}
                            //required
                          />
                        </div>
                      </div>

                      {/* Company Name & Website */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="companyName">Company name</Label>
                          <Input
                            id="companyName"
                            placeholder="Acme Inc."
                            value={formData.companyName}
                            onChange={(e) => handleInputChange("companyName", e.target.value)}
                            //required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="companyWebsite">Company website</Label>
                          <Input
                            id="companyWebsite"
                            placeholder="https://acme.com"
                            value={formData.companyWebsite}
                            onChange={(e) => handleInputChange("companyWebsite", e.target.value)}
                            //required
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
                          //required
                        />
                      </div>

                      {/* Phone */}
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone number</Label>
                        <div className="flex flex-col sm:flex-row gap-2">
                          <Select
                            value={formData.countryCode}
                            onValueChange={(value) => handleInputChange("countryCode", value)}
                            //required
                          >
                            <SelectTrigger className="sm:w-[190px]">
                              <SelectValue placeholder="+XX" />
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
                            onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                            className="flex-1"
                            //required
                          />
                        </div>
                      </div>

                      {/* Mobile Number */}
                      <div className="space-y-2">
                        <Label htmlFor="mobile">Mobile number</Label>
                        <div className="flex flex-col sm:flex-row gap-2">
                          <Select
                            value={formData.mobileCountryCode}
                            onValueChange={(value) => handleInputChange("mobileCountryCode", value)}
                            //required
                          >
                            <SelectTrigger className="sm:w-[190px]">
                              <SelectValue placeholder="+XX" />
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
                            id="mobile"
                            type="tel"
                            placeholder="123 456 7890"
                            value={formData.mobileNumber}
                            onChange={(e) => handleInputChange("mobileNumber", e.target.value)}
                            className="flex-1"
                            //required
                          />
                        </div>
                      </div>

                      {/* Business specific fields */}
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="numberOfStaff">Number of Staff</Label>
                          <Select
                            value={formData.numberOfStaff}
                            onValueChange={(value) => handleInputChange("numberOfStaff", value)}
                            //required
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select number of staff" />
                            </SelectTrigger>
                            <SelectContent>
                              {staffOptions.map((o) => (
                                <SelectItem key={o.value} value={o.value}>
                                  {o.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="dailyCallVolume">Estimated Daily Call Volume</Label>
                          <Select
                            value={formData.dailyCallVolume}
                            onValueChange={(value) => handleInputChange("dailyCallVolume", value)}
                            //required
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select daily call volume" />
                            </SelectTrigger>
                            <SelectContent>
                              {callVolumeOptions.map((o) => (
                                <SelectItem key={o.value} value={o.value}>
                                  {o.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="businessCategory">Which area of your business will AI CallPilot support?</Label>
                          <Select
                            value={formData.businessCategory}
                            onValueChange={(value) => handleInputChange("businessCategory", value)}
                            //required
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select business area" />
                            </SelectTrigger>
                            <SelectContent>
                              {businessCategoryOptions.map((o) => (
                                <SelectItem key={o.value} value={o.value}>
                                  {o.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <Button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-md font-semibold"
                      >
                        {isLoading ? "Submitting..." : "Contact Sales"}
                      </Button>
                    </form>
                  )}

                  <div className="mt-6 pt-5 border-t border-border text-center">
                    <p className="text-xs text-muted-foreground">
                      By submitting, you agree to our{" "}
                      <Link
                        href="/terms-conditions"
                        target="_blank"
                        className="underline underline-offset-4 hover:text-headline transition-colors"
                      >
                        Terms
                      </Link>{" "}
                      and{" "}
                      <Link
                        href="/privacy-policy"
                        target="_blank"
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

      {/* Error Dialog */}
      <AlertDialog open={showErrorDialog} onOpenChange={setShowErrorDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-destructive">Submission Error</AlertDialogTitle>
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
