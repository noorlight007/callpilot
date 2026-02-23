"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, Calendar, ArrowRight, CheckCircle, Clock, Loader2, XCircle, ChevronDown, Check } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import axios from "axios";
import { countries } from "@/lib/countries";
import { getCountryCode } from "@/actions/geo";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const CTASection = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companySize, setCompanySize] = useState("");
  const [callFlow, setCallFlow] = useState("Business Booking Asking");
  const [agreed, setAgreed] = useState(false);

  const [isScheduleMode, setIsScheduleMode] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [countryIso, setCountryIso] = useState("US");
  const [openCombobox, setOpenCombobox] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({});

  // Segmented Time Inputs
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [period, setPeriod] = useState<"AM" | "PM">("AM");

  const [phoneSubmitted, setPhoneSubmitted] = useState(false);
  const [demoSubmitted, setDemoSubmitted] = useState(false);

  // Focus management refs
  const hourRef = useRef<HTMLInputElement>(null);
  const minuteRef = useRef<HTMLInputElement>(null);
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const companyNameRef = useRef<HTMLInputElement>(null);
  const companySizeRef = useRef<HTMLButtonElement>(null);
  const termsRef = useRef<HTMLDivElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);
  const dateTriggerRef = useRef<HTMLButtonElement>(null);
  const timeContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (phoneSubmitted || demoSubmitted || errorMessage) {
      resultRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [phoneSubmitted, demoSubmitted, errorMessage]);


  // ... existing imports ...

  // Inside component:
  const fetchCountry = async () => {
    const code = await getCountryCode();
    if (code) {
      const detectedCountry = countries.find(
        (c) => c.code === code.toUpperCase()
      );
      if (detectedCountry) {
        setCountryIso(detectedCountry.code);
      }
    }
  };

  useEffect(() => {
    fetchCountry();

    const handleSync = () => {
      fetchCountry();
    };

    window.addEventListener("trigger-country-sync", handleSync);
    return () => window.removeEventListener("trigger-country-sync", handleSync);
  }, []);

  const handleHourChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, "");
    if (val === "") {
      setHour("");
      return;
    }
    if (val.length > 2) val = val.slice(0, 2);

    if (parseInt(val, 10) > 12) val = "12";

    setHour(val);

    // Auto-advance
    // if (val.length === 2 && minuteRef.current) {
    //   minuteRef.current.focus();
    // }
  };

  const handleHourBlur = () => {
    if (hour === "") return;
    let val = hour;
    const num = parseInt(val, 12);
    if (num >= 0 && num <= 9) {
      val = val.padStart(2, "0");
    }
    setHour(val);
  };

  const handleMinuteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, "");
    if (val === "") {
      setMinute("");
      return;
    }
    if (val.length > 2) val = val.slice(0, 2);

    if (parseInt(val, 10) > 59) val = "59";

    setMinute(val);
  };

  const handleMinuteBlur = () => {
    if (minute === "") return;
    let val = minute;
    const num = parseInt(val, 10);
    if (num >= 0 && num <= 9) {
      val = val.padStart(2, "0");
    }
    setMinute(val);
  };

  const getFormattedTime = () => {
    if (!hour || !minute) return "";
    return `${hour}:${minute} ${period}`;
  };

  const getCountryDialCode = (iso: string) => {
    return countries.find((c) => c.code === iso)?.dial_code || "+1";
  };

  const handleCallNow = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setFieldErrors({});

    const newFieldErrors: Record<string, string[]> = {};
    let hasError = false;

    if (!firstName && !lastName) {
      newFieldErrors.name = ["This field is required"];
      hasError = true;
    }
    // If only one name field is missing, we might want to flag it too, but the API error structure for "name" is unified.
    // For specific field highlighting, if we attach error to "name", both inputs get red.
    // Let's refine: verify individual if needed, but existing logic shares "fieldErrors.name".

    if (!firstName) {
      if (!newFieldErrors.name) newFieldErrors.name = ["This field is required"];
      hasError = true;
    }
    if (!lastName) {
      if (!newFieldErrors.name) newFieldErrors.name = ["This field is required"];
      hasError = true;
    }

    if (!email) {
      newFieldErrors.email = ["This field is required"];
      hasError = true;
    }

    if (!phone) {
      newFieldErrors.phone = ["This field is required"];
      hasError = true;
    }
    if (!companyName) {
      newFieldErrors.company_name = ["This field is required"];
      hasError = true;
    }
    if (!companySize) {
      newFieldErrors.company_size = ["This field is required"];
      hasError = true;
    }
    if (!agreed) {
      newFieldErrors.agreed = ["This field is required"];
      hasError = true;
    }

    if (hasError) {
      setFieldErrors(newFieldErrors);

      // Scroll to first error
      if (newFieldErrors.name) {
        firstNameRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      } else if (newFieldErrors.email) {
        emailRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      } else if (newFieldErrors.phone) {
        phoneRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      } else if (newFieldErrors.company_name) {
        companyNameRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      } else if (newFieldErrors.company_size) {
        companySizeRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      } else if (newFieldErrors.agreed) {
        termsRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }

    // if (firstName && lastName && phone && companyName && companySize && agreed) {
    setIsLoading(true);
    const dialCode = getCountryDialCode(countryIso);
    const fullPhone = `${dialCode}${phone}`;
    try {
      const endpoint = callFlow === "Steve’s American Diner"
        ? `${BASE_URL}/interview/client/call/diner`
        : `${BASE_URL}/interview/client/call/`;
      const response = await axios.post(endpoint, {
        name: `${firstName} ${lastName}`,
        phone: fullPhone,
        email: email,
        company_name: companyName,
        company_size: companySize,
        call_type: "NOW",
      });
      if (response.status === 200 || response.status === 201) {
        setPhoneSubmitted(true);
      }
    } catch (error: any) {
      console.error("Error making call", error);
      if (error.response?.data) {
        setFieldErrors(error.response.data);
        if (error.response.data.detail) {
          setErrorMessage(error.response.data.detail);
        }

        // Scroll to first error
        if (error.response.data.name) {
          firstNameRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
          // If name error, maybe both? prioritize first name
        } else if (error.response.data.email) {
          emailRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
        } else if (error.response.data.phone) {
          phoneRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
        } else if (error.response.data.company_name) {
          companyNameRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
        } else if (error.response.data.company_size) {
          companySizeRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
        } else if (error.response.data.agreed) {
          termsRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }
    } finally {
      setIsLoading(false);
    }
    // }
  };

  const handleScheduleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setFieldErrors({});

    // Client-side validation
    let hasError = false;
    const newFieldErrors: Record<string, string[]> = {};

    if (!firstName) {
      if (!newFieldErrors.name) newFieldErrors.name = ["This field is required"];
      hasError = true;
    }
    if (!lastName) {
      if (!newFieldErrors.name) newFieldErrors.name = ["This field is required"];
      hasError = true;
    }
    if (!email) {
      newFieldErrors.email = ["This field is required"];
      hasError = true;
    }
    if (!phone) {
      newFieldErrors.phone = ["This field is required"];
      hasError = true;
    }
    if (!companyName) {
      newFieldErrors.company_name = ["This field is required"];
      hasError = true;
    }
    if (!companySize) {
      newFieldErrors.company_size = ["This field is required"];
      hasError = true;
    }
    if (!agreed) {
      newFieldErrors.agreed = ["This field is required"];
      hasError = true;
    }

    let scheduledDate: Date | null = null;
    if (selectedDate) {
      scheduledDate = new Date(selectedDate);
      let hours = parseInt(hour, 10);
      if (period === "PM" && hours < 12) hours += 12;
      if (period === "AM" && hours === 12) hours = 0;
      if (!isNaN(hours) && minute !== "") {
        scheduledDate.setHours(hours, parseInt(minute, 10), 0, 0);
      } else {
        // Time missing error
        hasError = true;
        newFieldErrors.scheduled_at = ["Time is required."];
      }
    } else {
      // Date missing error
      hasError = true;
      newFieldErrors.scheduled_at = ["Date is required."];
    }

    if (hasError) {
      setFieldErrors(newFieldErrors);
      // Scroll logic for local validation
      if (newFieldErrors.name) {
        firstNameRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      } else if (newFieldErrors.email) {
        emailRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      } else if (newFieldErrors.phone) {
        phoneRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      } else if (newFieldErrors.company_name) {
        companyNameRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      } else if (newFieldErrors.company_size) {
        companySizeRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      } else if (newFieldErrors.scheduled_at) {
        if (!selectedDate) {
          dateTriggerRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
        } else {
          timeContainerRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      } else if (newFieldErrors.agreed) {
        termsRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }

    // if (firstName && lastName && phone && companyName && companySize && agreed && selectedDate && hour && minute) {
    setIsLoading(true);
    const dialCode = getCountryDialCode(countryIso);
    const fullPhone = `${dialCode}${phone}`;


    try {
      const endpoint = callFlow === "Steve’s American Diner"
        ? `${BASE_URL}/interview/client/call/diner`
        : `${BASE_URL}/interview/client/call/`;
      const response = await axios.post(endpoint, {
        name: `${firstName} ${lastName}`,
        phone: fullPhone,
        email: email,
        company_name: companyName,
        company_size: companySize,
        scheduled_at: scheduledDate ? scheduledDate.toISOString() : null,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        call_type: "SCHEDULE",
      });
      if (response.status === 200 || response.status === 201) {
        setDemoSubmitted(true);
      }
    } catch (error: any) {
      console.error("Error scheduling demo", error);
      if (error.response?.data) {
        setFieldErrors(error.response.data);
        if (error.response.data.detail) {
          setErrorMessage(error.response.data.detail);
        }

        // Scroll to first error
        if (error.response.data.name) {
          firstNameRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
        } else if (error.response.data.email) {
          emailRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
        } else if (error.response.data.phone) {
          phoneRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
        } else if (error.response.data.company_name) {
          companyNameRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
        } else if (error.response.data.company_size) {
          companySizeRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
        } else if (error.response.data.scheduled_at) {
          if (!selectedDate) {
            dateTriggerRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
          } else {
            timeContainerRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
          }
        } else if (error.response.data.agreed) {
          termsRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }
    } finally {
      setIsLoading(false);
    }
    // }
  };

  const handleBack = () => {
    // if (phoneSubmitted || demoSubmitted) {
    setFirstName("");
    setLastName("");
    setPhone("");
    setEmail("");
    setCompanyName("");
    setCompanySize("");
    setAgreed(false);
    setSelectedDate(undefined);
    setHour("");
    setMinute("");
    setPeriod("AM");
    setCountryIso("US");
    setFieldErrors({});
    // }
    setPhoneSubmitted(false);
    setDemoSubmitted(false);
    setErrorMessage(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="cta" className="py-16 lg:py-24 bg-alt">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl font-semibold text-headline mb-4">
            Experience CallPilot.pro Today
          </h2>
          <p className="text-lg text-body">
            Try our AI voice technology yourself or schedule a personalized demo.
          </p>
        </div>

        {/* Single Column Layout */}
        <div className="max-w-3xl mx-auto">
          <div ref={resultRef} className="bg-card rounded-2xl p-8 lg:p-10 border border-border-card shadow-lg transition-all duration-300">

            {/* Success State - Call Now */}
            {phoneSubmitted ? (
              <div className="text-center py-8 animate-fade-in">
                <div className="w-16 h-16 rounded-full accent-tint-bg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 accent-text" />
                </div>
                <h4 className="text-lg font-semibold text-headline mb-2">Call Incoming{firstName ? `, ${firstName}` : ""}!</h4>
                <p className="text-body mb-6">
                  Our AI will call you at <span className="font-medium">{getCountryDialCode(countryIso)}{phone}</span> within 60 seconds.
                </p>
                <Button onClick={handleBack} variant="outline" className="min-w-[100px]">
                  Back
                </Button>
              </div>
            ) : demoSubmitted ? (
              /* Success State - Demo Scheduled */
              <div className="text-center py-8 animate-fade-in">
                <div className="w-16 h-16 rounded-full accent-tint-bg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 accent-text" />
                </div>
                <h4 className="text-lg font-semibold text-headline mb-2">Demo Scheduled!</h4>
                <p className="text-body mb-6">
                  We'll see you on{" "}
                  <span className="font-medium">
                    {selectedDate && new Date(selectedDate).toLocaleDateString("en-US", {
                      weekday: "long",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>{" "}
                  at <span className="font-medium">{getFormattedTime()}</span>.
                </p>
                <Button onClick={handleBack} variant="outline" className="min-w-[100px]">
                  Back
                </Button>
              </div>
            ) : errorMessage ? (
              /* Error State */
              <div className="text-center py-8 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center mx-auto mb-4">
                  <XCircle className="w-8 h-8 text-red-600 dark:text-red-400" />
                </div>
                <h4 className="text-lg font-semibold text-headline mb-2">Error</h4>
                <p className="text-body mb-6">
                  {errorMessage}
                </p>
                <Button onClick={handleBack} variant="outline" className="min-w-[100px]">
                  Back
                </Button>
              </div>
            ) : (
              /* Main Form */
              <form onSubmit={isScheduleMode ? handleScheduleSubmit : handleCallNow} className="space-y-6">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* First Name */}
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-headline">
                      First Name
                    </label>
                    <Input
                      id="firstName"
                      ref={firstNameRef}
                      placeholder="Steven"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className={cn(
                        "h-12 border-input focus:border-accent focus:ring-accent/20 transition-all font-medium",
                        fieldErrors.name && "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                      )}
                    //required
                    />
                    {fieldErrors.name && (
                      <p className="text-sm text-red-500 mt-1">{fieldErrors.name[0]}</p>
                    )}
                  </div>

                  {/* Last Name */}
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-headline">
                      Last Name
                    </label>
                    <Input
                      id="lastName"
                      ref={lastNameRef}
                      placeholder="Smith"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className={cn(
                        "h-12 border-input focus:border-accent focus:ring-accent/20 transition-all font-medium",
                        fieldErrors.name && "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                      )}
                    //required
                    />
                    {fieldErrors.name && (
                      <p className="text-sm text-red-500 mt-1">{fieldErrors.name[0]}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-2 col-span-1 md:col-span-2">
                    <label htmlFor="email" className="text-sm font-medium text-headline">
                      Email
                    </label>
                    <Input
                      id="email"
                      ref={emailRef}
                      type="email"
                      placeholder="steven@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={cn(
                        "h-12 border-input focus:border-accent focus:ring-accent/20 transition-all font-medium",
                        fieldErrors.email && "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                      )}
                    //required
                    />
                    {fieldErrors.email && (
                      <p className="text-sm text-red-500 mt-1">{fieldErrors.email[0]}</p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-2 col-span-1 md:col-span-2">
                    <div className="flex flex-col sm:flex-row gap-6">
                      <div className="flex flex-col space-y-2">
                        <label className="text-sm font-medium text-headline">Country Code</label>
                        <Popover open={openCombobox} onOpenChange={setOpenCombobox}>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              role="combobox"
                              aria-expanded={openCombobox}
                              className="w-full sm:w-[300px] h-12 justify-between border-input focus:ring-accent/20 focus:border-accent font-medium px-3"
                            >
                              <span className="flex items-center gap-2">
                                {/* <span className="text-lg mb-1">{getCountryDialCode(countryIso) === "+1" && countryIso !== "US" && countryIso !== "CA" ? countries.find(c => c.code === countryIso)?.flag : countries.find(c => c.code === countryIso)?.flag}</span> */}
                                <span className="">{countries.find(c => c.code === countryIso)?.name}</span>
                                <span className="text-muted-foreground">{getCountryDialCode(countryIso)}</span>
                              </span>
                              <ChevronDown className="ml-2 h-4 w-4 opacity-50 shrink-0" />
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-[300px] p-0">
                            <Command>
                              <CommandInput placeholder="Search country & country code..." />
                              <CommandList>
                                <CommandEmpty>No country found.</CommandEmpty>
                                <CommandGroup>
                                  {countries.map((country) => (
                                    <CommandItem
                                      key={country.code}
                                      value={`${country.name} ${country.dial_code} ${country.flag} ${country.code}`}
                                      onSelect={(currentValue) => {
                                        setCountryIso(country.code);
                                        setOpenCombobox(false);
                                      }}
                                      className="group"
                                    >
                                      <div className="flex items-center gap-2 w-full">
                                        {/* <span className="text-lg w-4 text-center mb-1 shrink-0">{country.flag}</span> */}
                                        <span className="text-nowrap">{country.name}</span>
                                        <span className="text-muted-foreground whitespace-nowrap text-center group-data-[selected=true]:text-white transition-colors ml-auto">{country.dial_code}</span>
                                      </div>
                                      <Check
                                        className={cn(
                                          "ml-auto h-4 w-4 hidden",
                                          countryIso === country.code ? "opacity-100" : "opacity-0"
                                        )}
                                      />
                                    </CommandItem>
                                  ))}
                                </CommandGroup>
                              </CommandList>
                            </Command>
                          </PopoverContent>
                        </Popover>
                      </div>
                      <div className="flex flex-col space-y-2 w-full sm:w-auto sm:flex-1">
                        <label htmlFor="phone" className="text-sm font-medium text-headline">Phone Number</label>
                        <Input
                          id="phone"
                          ref={phoneRef}
                          type="tel"
                          placeholder="(555) 000-0000"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className={cn(
                            "h-12 border-input focus:border-accent focus:ring-accent/20 transition-all font-medium w-full",
                            fieldErrors.phone && "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                          )}
                        //required
                        />
                        {fieldErrors.phone && (
                          <p className="text-sm text-red-500 mt-1">{fieldErrors.phone[0]}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Company Name */}
                  <div className="space-y-2">
                    <label htmlFor="companyName" className="text-sm font-medium text-headline">
                      Company Name
                    </label>
                    <Input
                      id="companyName"
                      ref={companyNameRef}
                      placeholder="Acme Inc."
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className={cn(
                        "h-12 border-input focus:border-accent focus:ring-accent/20 transition-all font-medium",
                        fieldErrors.company_name && "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                      )}
                    //required
                    />
                    {fieldErrors.company_name && (
                      <p className="text-sm text-red-500 mt-1">{fieldErrors.company_name[0]}</p>
                    )}
                  </div>

                  {/* Company Size */}
                  <div className="space-y-2">
                    <label htmlFor="companySize" className="text-sm font-medium text-headline">
                      Company Size
                    </label>
                    <Select value={companySize} onValueChange={setCompanySize}
                    //required
                    >
                      <SelectTrigger
                        ref={companySizeRef}
                        className={cn(
                          "h-12 border-input focus:ring-accent/20 focus:border-accent font-medium",
                          fieldErrors.company_size && "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                        )}>
                        <SelectValue placeholder="Select size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-5">0-5 employees</SelectItem>
                        <SelectItem value="5-9">5-9 employees</SelectItem>
                        <SelectItem value="11-50">11-50 employees</SelectItem>
                        <SelectItem value="20-50">20-50 employees</SelectItem>
                        <SelectItem value="51-99">51-99 employees</SelectItem>
                        <SelectItem value="100+">100+ employees</SelectItem>
                      </SelectContent>
                    </Select>
                    {fieldErrors.company_size && (
                      <p className="text-sm text-red-500 mt-1">{fieldErrors.company_size[0]}</p>
                    )}
                  </div>
                </div>

                {/* Call Flow Selection */}
                <div className="space-y-2 hidden">
                  <label htmlFor="callFlow" className="text-sm font-medium text-headline">
                    Choose Demo call sample
                  </label>
                  <Select value={callFlow} onValueChange={setCallFlow}>
                    <SelectTrigger className="h-12 border-input focus:ring-accent/20 focus:border-accent font-medium">
                      <SelectValue placeholder="Select call flow" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Business Booking Asking">CallPilot Enquiry Call</SelectItem>
                      <SelectItem value="Steve’s American Diner">Steve's American Diner</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Consent Checkbox */}
                {/* Consent Checkbox */}
                <div className="flex flex-col space-y-2" ref={termsRef}>
                  <div className="flex items-start space-x-3 p-1">
                    <Checkbox
                      id="terms"
                      checked={agreed}
                      onCheckedChange={(checked) => setAgreed(checked as boolean)}
                      //required
                      className="mt-0.5 data-[state=checked]:bg-accent data-[state=checked]:border-accent"
                    />
                    <label
                      htmlFor="terms"
                      className="text-sm text-muted-text leading-tight peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer select-none"
                    >
                      I have agreed to receive calls & sms from CallPilot
                    </label>
                  </div>
                  {fieldErrors.agreed && (
                    <p className="text-sm text-red-500 pl-1">{fieldErrors.agreed[0]}</p>
                  )}
                </div>

                {/* Action Buttons Toggle */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <Button
                    type={isScheduleMode ? "button" : "submit"}
                    variant={!isScheduleMode ? "cta" : "outline"}
                    className={cn(
                      "h-14 text-base font-semibold w-full transition-all duration-300 relative overflow-hidden",
                      !isScheduleMode
                        ? "shadow-lg shadow-accent/25 scale-[1.02] border-accent"
                        : "border-border hover:bg-muted/50 text-muted-text hover:text-headline"
                    )}
                    onClick={() => setIsScheduleMode(false)}
                    disabled={isLoading}
                  >
                    {!isScheduleMode && isLoading ? (
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    ) : !isScheduleMode ? (
                      <Phone className="mr-2 h-5 w-5 animate-pulse" />
                    ) : null}
                    Call Now
                  </Button>

                  <Button
                    type="button"
                    variant={isScheduleMode ? "cta" : "outline"}
                    className={cn(
                      "h-14 text-base font-semibold w-full transition-all duration-300",
                      isScheduleMode
                        ? "shadow-lg shadow-accent/25 scale-[1.02] border-accent"
                        : "border-border hover:bg-muted/50 text-muted-text hover:text-headline"
                    )}
                    onClick={() => setIsScheduleMode(true)}
                    disabled={isLoading}
                  >
                    {isScheduleMode && isLoading ? (
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    ) : isScheduleMode ? (
                      <Calendar className="mr-2 h-5 w-5" />
                    ) : null}
                    Schedule Call
                  </Button>
                </div>

                {/* Schedule Fields - Animated Reveal */}
                <div className={cn(
                  "grid grid-cols-1 md:grid-cols-2 gap-6 overflow-hidden transition-all duration-500 ease-in-out",
                  isScheduleMode ? "max-h-[300px] opacity-100 pt-6 border-t border-border mt-6" : "max-h-0 opacity-0 pt-0 mt-0"
                )}>
                  {/* Date Picker */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-headline flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-accent" />
                      Select Date
                    </label>
                    <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          ref={dateTriggerRef}
                          className={cn(
                            "w-full h-12 justify-start text-left font-normal border-input hover:border-accent hover:bg-accent/5 transition-all text-muted-foreground",
                            selectedDate && "text-headline border-accent bg-accent/5",
                            fieldErrors.scheduled_at && !selectedDate && "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                          )}
                        >
                          <Calendar className={cn("mr-2 h-4 w-4", selectedDate ? "text-accent" : "opacity-50")} />
                          {selectedDate ? format(selectedDate, "PPP") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <CalendarComponent
                          mode="single"
                          selected={selectedDate}
                          onSelect={(date) => {
                            setSelectedDate(date);
                            setIsCalendarOpen(false);
                          }}
                          initialFocus
                          disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                          className="p-3 pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                    {fieldErrors.scheduled_at && !selectedDate && (
                      <p className="text-sm text-red-500 mt-1">Date is required.</p>
                    )}
                  </div>

                  {/* Segmented Unique Time Input */}
                  <div className="space-y-2 mr-1">
                    <label className="text-sm font-medium text-headline flex items-center gap-2">
                      <Clock className="w-4 h-4 text-accent" />
                      Select Time
                    </label>
                    <div
                      ref={timeContainerRef}
                      className={cn(
                        "flex items-center h-12 w-full rounded-md border border-input bg-background ring-offset-background focus-within:ring-2 focus-within:ring-accent focus-within:ring-offset-2 focus-within:border-accent transition-all overflow-hidden group hover:border-accent/50 cursor-text",
                        fieldErrors.scheduled_at && selectedDate && "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                      )}>
                      {/* Hour */}
                      <input
                        ref={hourRef}
                        type="text"
                        inputMode="numeric"
                        placeholder="HH"
                        value={hour}
                        onChange={handleHourChange}
                        onBlur={handleHourBlur}
                        onFocus={(e) => e.target.select()}
                        className="w-full text-center bg-transparent border-none focus:outline-none text-headline font-semibold p-0 text-lg placeholder:text-muted-foreground/50 h-full"
                      />
                      <span className="text-muted-foreground font-semibold pb-1">:</span>
                      {/* Minute */}
                      <input
                        ref={minuteRef}
                        type="text"
                        inputMode="numeric"
                        placeholder="MM"
                        value={minute}
                        onChange={handleMinuteChange}
                        onBlur={handleMinuteBlur}
                        onFocus={(e) => e.target.select()}
                        className="w-full text-center bg-transparent border-none focus:outline-none text-headline font-semibold p-0 text-lg placeholder:text-muted-foreground/50 h-full"
                      />
                      {/* Period Toggle */}
                      <button
                        type="button"
                        onClick={(e) => { e.stopPropagation(); setPeriod(prev => prev === "AM" ? "PM" : "AM"); }}
                        className="h-full px-4 text-xl font-semibold text-accent border-l border-border transition-colors w-16"
                      >
                        {period}
                      </button>
                    </div>
                    {fieldErrors.scheduled_at && selectedDate && (
                      <p className="text-sm text-red-500 mt-1">Time is required.</p>
                    )}
                  </div>

                  {/* Submit Button for Schedule */}
                  <div className="md:col-span-2 pt-2">
                    <Button type="submit" variant="cta" size="lg" className="w-full h-14 text-lg group" disabled={isLoading}>
                      {isLoading ? (
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      ) : (
                        <>
                          Confirm Schedule
                          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </Button>
                  </div>
                </div>

              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
