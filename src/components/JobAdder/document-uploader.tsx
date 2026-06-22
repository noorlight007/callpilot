"use client";

import React, { useState, useEffect, use } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
    Upload,
    Calendar as CalendarIcon,
    CheckCircle2,
    AlertCircle,
    ArrowRight,
    X,
    FileUp
} from "lucide-react";
import { format } from "date-fns";
import { useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { cn } from "@/lib/utils";
import logo from "@/assets/call_pilot_logo.png";

const documentLabels = [
    "qualification_card_front", "qualification_card_back", "certificate_1", "certificate_2",
    "passport", "visa", "birth_certificate", "p45_if_not_working",
    "drivers_license_front", "drivers_license_back", "driver_digi_card_front",
    "driver_digi_card_back", "driver_cpc_card_front", "driver_cpc_card_back", "disclosure"
];

const documentTypes = [
    { id: "qualification_card_front", label: "Qualification Card (Front)", hasExpiry: true },
    { id: "qualification_card_back", label: "Qualification Card (Back)", hasExpiry: true },
    { id: "certificate_1", label: "Certificate 1", hasExpiry: true },
    { id: "certificate_2", label: "Certificate 2", hasExpiry: true },
    { id: "passport", label: "Passport", hasExpiry: true },
    { id: "visa", label: "Visa", hasExpiry: true },
    { id: "birth_certificate", label: "Birth Certificate", hasExpiry: true },
    { id: "p45_if_not_working", label: "P45 (if not working)", hasExpiry: true },
    { id: "drivers_license_front", label: "Drivers Licence (Front)", hasExpiry: true },
    { id: "drivers_license_back", label: "Drivers Licence (Back)", hasExpiry: true },
    { id: "driver_digi_card_front", label: "Driver Digi-Card (Front)", hasExpiry: true },
    { id: "driver_digi_card_back", label: "Driver Digi-Card (Back)", hasExpiry: true },
    { id: "driver_cpc_card_front", label: "Driver CPC Card (Front)", hasExpiry: true },
    { id: "driver_cpc_card_back", label: "Driver CPC Card (Back)", hasExpiry: true },
    { id: "disclosure", label: "Disclosure", hasExpiry: true, labelEx: "Disclosure Issue Date" },
];

const formSchema = z.object({
    firstName: z.string().trim().min(1, "First Name is required"),
    lastName: z.string().trim().min(1, "Last Name is required"),
    email: z.string().trim().min(1, "Email is required").email("Invalid email address"),
    availableFromDate: z.date().optional(),

    qualification_card_front: z.array(z.any()).optional(),
    qualification_card_front_date: z.date().optional(),

    qualification_card_back: z.array(z.any()).optional(),
    qualification_card_back_date: z.date().optional(),

    certificate_1: z.array(z.any()).optional(),
    certificate_1_date: z.date().optional(),

    certificate_2: z.array(z.any()).optional(),
    certificate_2_date: z.date().optional(),

    passport: z.array(z.any()).optional(),
    passport_date: z.date().optional(),

    visa: z.array(z.any()).optional(),
    visa_date: z.date().optional(),

    birth_certificate: z.array(z.any()).optional(),
    birth_certificate_date: z.date().optional(),

    p45_if_not_working: z.array(z.any()).optional(),
    p45_if_not_working_date: z.date().optional(),

    drivers_license_front: z.array(z.any()).optional(),
    drivers_license_front_date: z.date().optional(),

    drivers_license_back: z.array(z.any()).optional(),
    drivers_license_back_date: z.date().optional(),

    driver_digi_card_front: z.array(z.any()).optional(),
    driver_digi_card_front_date: z.date().optional(),

    driver_digi_card_back: z.array(z.any()).optional(),
    driver_digi_card_back_date: z.date().optional(),

    driver_cpc_card_front: z.array(z.any()).optional(),
    driver_cpc_card_front_date: z.date().optional(),

    driver_cpc_card_back: z.array(z.any()).optional(),
    driver_cpc_card_back_date: z.date().optional(),

    disclosure: z.array(z.any()).optional(),
    disclosure_date: z.date().optional(),

    skills: z.array(z.string()).optional(),
    uid: z.string().optional(),
    interview_uid: z.string().optional(),
}).superRefine((data, ctx) => {
    // Check if at least one document has a file uploaded
    const hasAtLeastOneDoc = documentLabels.some((docId) => {
        const fileValue = data[docId as keyof typeof data];
        return fileValue && Array.isArray(fileValue) && fileValue.length > 0;
    });

    if (!hasAtLeastOneDoc) {
        documentLabels.forEach((docId) => {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "At least one document must be uploaded.",
                path: [docId],
            });
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Date Required",
                path: [`${docId}_date`],
            });
        });
    } else {
        // If at least one document is present, validate all fields pair-wise:
        // if file is provided, date is required. if date is provided, file is required.
        documentLabels.forEach((docId) => {
            const fileValue = data[docId as keyof typeof data];
            const dateValue = data[`${docId}_date` as keyof typeof data];

            const hasFile = fileValue && Array.isArray(fileValue) && fileValue.length > 0;
            const hasDate = !!dateValue;

            if (hasFile && !hasDate) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: "Expiration Date is required when a document is provided",
                    path: [docId],
                });
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: "Expiration Date is required when a document is provided",
                    path: [`${docId}_date`],
                });
            } else if (!hasFile && hasDate) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: "Document file is required when a date is provided",
                    path: [docId],
                });
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: "Document file is required when a date is provided",
                    path: [`${docId}_date`],
                });
            }
        });
    }
});

type FormValues = z.infer<typeof formSchema>;

const candidatePromises = new Map<string, Promise<any>>();

function getCandidatePromise(interview_uid: string, uid: string | null) {
    const cacheKey = `${interview_uid}_${uid || ""}`;
    if (!candidatePromises.has(cacheKey)) {
        const API_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://api.callpilot.pro/api/v1";
        const promise = fetch(`${API_BASE_URL}/core/live/interviews/${interview_uid}/candidate/${uid}`)
            .then(async (res) => {
                if (res.ok) {
                    const resData = await res.json();
                    return resData?.candidate || resData?.data || resData || {};
                }
                return {};
            })
            .catch(() => ({}));
        candidatePromises.set(cacheKey, promise);
    }
    return candidatePromises.get(cacheKey)!;
}

const Dropzone = React.forwardRef<HTMLInputElement, { label: string; id: string; value: any; onChange: (files: File[]) => void; onBlur?: () => void; name?: string; hasError?: boolean }>(
    ({ label, id, value, onChange, onBlur, name, hasError }, ref) => {
        const [dragActive, setDragActive] = useState(false);
        const files = (value as File[]) || [];

        const handleDrag = (e: React.DragEvent) => {
            e.preventDefault(); e.stopPropagation();
            if (e.type === "dragenter" || e.type === "dragover") setDragActive(true);
            else if (e.type === "dragleave") setDragActive(false);
        };

        const handleDrop = (e: React.DragEvent) => {
            e.preventDefault(); e.stopPropagation();
            setDragActive(false);
            if (e.dataTransfer.files) {
                const newFiles = Array.from(e.dataTransfer.files);
                onChange([...files, ...newFiles]);
            }
        };

        return (
            <div className="space-y-3" id={id}>
                <div
                    className={cn(
                        "relative border-2 border-dashed rounded-lg p-6 transition-all duration-200 flex flex-col items-center justify-center gap-2",
                        dragActive ? "border-black bg-gray-50 scale-[1.01]" : "border-gray-200 hover:border-gray-400 bg-white",
                        files.length > 0 ? "border-green-500 bg-green-50/10" : "",
                        hasError ? "border-red-500 bg-red-50/10" : ""
                    )}
                    onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}
                >
                    <Upload className={cn("w-8 h-8", files.length > 0 ? "text-green-600" : (hasError ? "text-red-500" : "text-gray-400"))} />
                    <p className={cn("text-sm font-medium", hasError ? "text-red-600" : "text-black")}>
                        {files.length > 0 ? `${files.length} file(s) selected` : "Drag & drop files here or click to upload"}
                    </p>
                    <input
                        type="file" multiple ref={ref} name={name} onBlur={onBlur}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        onChange={(e) => {
                            if (e.target.files) {
                                const newFiles = Array.from(e.target.files);
                                onChange([...files, ...newFiles]);
                                // Reset value to allow selecting the same file again
                                e.target.value = "";
                            }
                        }}
                    />
                </div>
                {files.length > 0 && (
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-wrap gap-2">
                            {files.map((file, idx) => (
                                <Badge key={idx} variant="outline" className="flex items-center gap-2 py-1 px-2 border-gray-200 bg-white text-gray-700">
                                    <FileUp className="w-3 h-3 text-gray-400" />
                                    <span className="max-w-[150px] truncate">{file.name}</span>
                                    <X className="w-3 h-3 cursor-pointer hover:text-red-500" onClick={() => {
                                        const updated = [...files]; updated.splice(idx, 1); onChange(updated);
                                    }} />
                                </Badge>
                            ))}
                        </div>
                        <Button type="button" variant="ghost" size="sm" onClick={() => onChange([])} className="text-red-500 hover:text-red-700 hover:bg-red-50 w-fit h-7 px-2 text-xs font-semibold">
                            <X className="w-3 h-3 mr-1" /> Clear All Files
                        </Button>
                    </div>
                )}
            </div>
        );
    }
);
Dropzone.displayName = "Dropzone";

const DocumentUploader = () => {
    const searchParams = useSearchParams();
    const uid = searchParams.get("uid");
    const interview_uid = searchParams.get("interview_uid");
    const platform = searchParams.get("platform");

    // Fetch candidate using React 19's use() hook to integrate with Suspense
    let candidate: any = null;
    if (interview_uid) {
        candidate = use(getCandidatePromise(interview_uid, uid));
    }

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isAvailableDateOpen, setIsAvailableDateOpen] = useState(false);
    const [openPopovers, setOpenPopovers] = useState<Record<string, boolean>>({});

    const [alertConfig, setAlertConfig] = useState<{
        open: boolean;
        title: string;
        description: React.ReactNode;
        type: "success" | "error" | "warning";
        warnings?: string[];
    }>({
        open: false,
        title: "",
        description: "",
        type: "success",
    });

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: candidate?.firstName || "",
            lastName: candidate?.lastName || "",
            email: candidate?.email || "",
            skills: [],
            uid: uid || "",
            interview_uid: interview_uid || "",
            // Initialize document fields to empty arrays
            ...Object.fromEntries(documentLabels.map(id => [id, []])),
            // Initialize date fields to undefined
            ...Object.fromEntries(documentLabels.map(id => [`${id}_date`, undefined])),
        },
    });

    useEffect(() => {
        if (uid) {
            form.setValue("uid", uid);
        }
        if (interview_uid) {
            form.setValue("interview_uid", interview_uid);
            if (candidate) {
                form.setValue("firstName", candidate.firstName || "");
                form.setValue("lastName", candidate.lastName || "");
                form.setValue("email", candidate.email || "");
            }
        }
    }, [uid, interview_uid, candidate, form]);

    const allErrors = Array.from(new Set(Object.values(form.formState.errors).map(err => err?.message as string).filter(Boolean)));

    const scrollToField = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    };

    const onSubmit = async (values: FormValues) => {
        setIsSubmitting(true);
        try {
            const formData = new FormData();
            formData.append("firstName", values.firstName || "");
            formData.append("lastName", values.lastName || "");
            formData.append("email", values.email || "");

            if (values.availableFromDate) {
                formData.append("availableFrom", format(values.availableFromDate, "yyyy-MM-dd"));
            }

            documentLabels.forEach(label => {
                const files = values[label as keyof FormValues] as File[];
                if (files && files.length > 0) {
                    files.forEach(file => {
                        formData.append(`file-${label}`, file);
                    });
                }

                const dateKey = `${label}_date` as keyof FormValues;
                const docDate = values[dateKey] as Date;
                if (docDate) {
                    formData.append(`date-${label}`, format(docDate, "yyyy-MM-dd"));
                }
            });

            const API_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://api.callpilot.pro/api/v1";
            const queryParams = new URLSearchParams();
            if (platform) {
                queryParams.set("platform", platform);
            }
            const queryString = queryParams.toString();
            const fetchUrl = `${API_BASE_URL}/core/pre-application/${uid}/${interview_uid}/${queryString ? `?${queryString}` : ""}`;
            const response = await fetch(fetchUrl, {
                method: "POST",
                body: formData,
            });

            const result = await response.json();

            if (response.ok && result.success) {
                setAlertConfig({
                    open: true,
                    title: "Application Submitted!",
                    description: "Your application has been successfully submitted.",
                    type: "success",
                    warnings: result.upload_warnings || [],
                });

                form.reset({
                    firstName: candidate?.firstName || "",
                    lastName: candidate?.lastName || "",
                    email: candidate?.email || "",
                    skills: [],
                    availableFromDate: undefined,
                    uid: uid || "",
                    interview_uid: interview_uid || "",
                    ...Object.fromEntries(documentLabels.map(id => [id, []])),
                    ...Object.fromEntries(documentLabels.map(id => [`${id}_date`, undefined])),
                });
            } else {
                if (result.error === "Organization platform not found.") {
                    setAlertConfig({
                        open: true,
                        title: "Error",
                        description: "Organization platform not found.",
                        type: "error",
                    });
                }

                if (result.errors && Array.isArray(result.errors)) {
                    result.errors.forEach((err: string) => {
                        const lower = err.toLowerCase();
                        if (lower.includes("firstname")) form.setError("firstName", { message: err });
                        if (lower.includes("lastname")) form.setError("lastName", { message: err });
                        if (lower.includes("email")) form.setError("email", { message: err });
                    });

                    const firstMsg = result.errors[0].toLowerCase();
                    if (firstMsg.includes("firstname")) scrollToField("firstName");
                    else if (firstMsg.includes("lastname")) scrollToField("lastName");
                    else if (firstMsg.includes("email")) scrollToField("email");
                }

                if (result.error === "At least one document must be uploaded.") {
                    documentLabels.forEach(label => {
                        form.setError(label as any, { message: result.error });
                        form.setError(`${label}_date` as any, { message: "Date Required" });
                    });
                    scrollToField("qualification_card_front");
                }
            }
        } catch (error) {
            setAlertConfig({
                open: true,
                title: "Error",
                description: "A network error occurred.",
                type: "error",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const onInvalidSubmit = (errors: any) => {
        const errorKeys = Object.keys(errors);
        if (errorKeys.length > 0) {
            const elements = errorKeys
                .map(key => document.getElementById(key))
                .filter(Boolean) as HTMLElement[];
            
            if (elements.length > 0) {
                elements.sort((a, b) => {
                    const rectA = a.getBoundingClientRect();
                    const rectB = b.getBoundingClientRect();
                    return (rectA.top + window.scrollY) - (rectB.top + window.scrollY);
                });
                elements[0].scrollIntoView({ behavior: "smooth", block: "center" });
            } else {
                scrollToField(errorKeys[0]);
            }
        }
    };

    return (
        <div className="bg-white min-h-screen text-black font-['Inter'] py-12">
            <div className="container mx-auto px-4 py-12 max-w-8xl border border-gray-200 rounded-2xl shadow-sm bg-white">
                <div className="flex items-center justify-between mb-10">
                    <h1 className="text-3xl font-bold text-black border-none">Documents Upload</h1>
                    {/* {logo && <img src={logo.src} alt="Logo" className="h-16 w-auto" />} */}
                </div>

                {allErrors.length > 0 && (
                    <div className="mb-10 p-4 bg-red-50 border border-red-200 rounded-xl space-y-2 animate-in fade-in slide-in-from-top-2 duration-300">
                        {allErrors.map((err, idx) => (
                            <div key={idx} className="flex items-center gap-3 text-red-600 font-semibold">
                                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                                <p className="text-lg">{err}</p>
                            </div>
                        ))}
                    </div>
                )}

                <div className="bg-[#f0f9f1] border border-[#d1e9d2] rounded-xl p-6 mb-10">
                    <h2 className="text-sm font-bold text-black uppercase tracking-wider mb-4 flex items-center gap-2">Important reminders</h2>
                    <ul className="space-y-3">
                        {["ID Renewal / ID Check", "Right to work check status", "Disclosure (if applicable)"].map((item, idx) => (
                            <li key={idx} className="flex items-center gap-3 text-black font-medium">
                                <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit, onInvalidSubmit)} className="space-y-12">
                        <section>
                            <h2 className="text-xl font-bold mb-6 pb-2 border-b border-gray-100 italic">Personal Information</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <FormField control={form.control} name="firstName" render={({ field, fieldState }) => (
                                    <FormItem>
                                        <FormLabel className="text-black font-semibold">First Name <span className="text-red-500">*</span></FormLabel>
                                        <FormControl>
                                            <Input id="firstName" placeholder="Your first name" {...field} disabled className={cn("bg-white border-gray-200 text-black h-12 disabled:text-black disabled:opacity-100", fieldState.error && "border-red-500")} />
                                        </FormControl>
                                        <FormMessage className="text-red-500 font-medium" />
                                    </FormItem>
                                )} />
                                <FormField control={form.control} name="lastName" render={({ field, fieldState }) => (
                                    <FormItem>
                                        <FormLabel className="text-black font-semibold">Last Name <span className="text-red-500">*</span></FormLabel>
                                        <FormControl>
                                            <Input id="lastName" placeholder="Your last name" {...field} disabled className={cn("bg-white border-gray-200 text-black h-12 disabled:text-black disabled:opacity-100", fieldState.error && "border-red-500")} />
                                        </FormControl>
                                        <FormMessage className="text-red-500 font-medium" />
                                    </FormItem>
                                )} />
                                <div className="md:col-span-2">
                                    <FormField control={form.control} name="email" render={({ field, fieldState }) => (
                                        <FormItem>
                                            <FormLabel className="text-black font-semibold">Email <span className="text-red-500">*</span></FormLabel>
                                            <FormControl>
                                                <Input id="email" placeholder="your@example.com" {...field} disabled className={cn("bg-white border-gray-200 text-black h-12 disabled:text-black disabled:opacity-100", fieldState.error && "border-red-500")} />
                                            </FormControl>
                                            <FormMessage className="text-red-500 font-medium" />
                                        </FormItem>
                                    )} />
                                </div>
                                <div className="md:col-span-2">
                                    <FormField control={form.control} name="availableFromDate" render={({ field, fieldState }) => (
                                        <FormItem className="flex flex-col" id="availableFromDate">
                                            <FormLabel className="text-black font-semibold mb-1">Available from Date</FormLabel>
                                            <div className="relative">
                                                <Popover open={isAvailableDateOpen} onOpenChange={setIsAvailableDateOpen}>
                                                    <PopoverTrigger asChild>
                                                        <FormControl>
                                                            <Button variant={"outline"} className={cn("w-full h-12 pl-3 text-left font-normal bg-white border-gray-200 text-black pr-20", !field.value && "text-gray-400", fieldState.error && "border-red-500")}>
                                                                {field.value ? format(field.value, "PPP") : <span>mm/dd/yyyy</span>}
                                                                {!field.value && <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />}
                                                            </Button>
                                                        </FormControl>
                                                    </PopoverTrigger>
                                                    <PopoverContent className="w-auto p-0" align="start">
                                                        <Calendar
                                                            mode="single"
                                                            selected={field.value}
                                                            onSelect={(date) => {
                                                                field.onChange(date);
                                                                setIsAvailableDateOpen(false);
                                                            }}
                                                            initialFocus
                                                        />
                                                    </PopoverContent>
                                                </Popover>
                                                {field.value && (
                                                    <button
                                                        type="button"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            field.onChange(undefined);
                                                        }}
                                                        className="absolute right-12 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500 transition-colors p-2 z-10"
                                                    >
                                                        <X className="w-4 h-4" />
                                                    </button>
                                                )}
                                            </div>
                                            <FormMessage className="text-red-500 font-medium" />
                                        </FormItem>
                                    )} />
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold mb-8 pb-2 border-b border-gray-100 italic">Quick Document Upload</h2>
                            <div className="space-y-10">
                                {documentTypes.map((doc) => (
                                    <div key={doc.id} className="space-y-4">
                                        <FormLabel className="text-black font-semibold block mb-2">{doc.label}</FormLabel>
                                        <FormField control={form.control} name={doc.id as any} render={({ field, fieldState }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Dropzone {...field} label={doc.label} id={doc.id} hasError={!!fieldState.error} />
                                                </FormControl>
                                                <FormMessage className="text-red-500 font-medium" />
                                            </FormItem>
                                        )} />
                                        {doc.hasExpiry && (
                                            <FormField control={form.control} name={`${doc.id}_date` as any} render={({ field, fieldState }) => (
                                                <FormItem className="flex flex-col" id={`${doc.id}_date`}>
                                                    <FormLabel className="text-gray-600 text-xs font-semibold uppercase tracking-wider">{doc.labelEx || "Expiration Date"}</FormLabel>
                                                    <div className="relative">
                                                        <Popover
                                                            open={openPopovers[doc.id] || false}
                                                            onOpenChange={(open) => setOpenPopovers(prev => ({ ...prev, [doc.id]: open }))}
                                                        >
                                                            <PopoverTrigger asChild>
                                                                <FormControl>
                                                                    <Button variant={"outline"} className={cn("w-full h-12 pl-3 text-left font-normal bg-white border-gray-200 text-black uppercase pr-20", !field.value && "text-gray-400", fieldState.error && "border-red-500")}>
                                                                        {field.value ? format(field.value as Date, "PPP") : <span>mm/dd/yyyy</span>}
                                                                        {!field.value && <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />}
                                                                    </Button>
                                                                </FormControl>
                                                            </PopoverTrigger>
                                                            <PopoverContent className="w-auto p-0" align="start">
                                                                <Calendar
                                                                    mode="single"
                                                                    selected={field.value as any}
                                                                    onSelect={(date) => {
                                                                        field.onChange(date);
                                                                        setOpenPopovers(prev => ({ ...prev, [doc.id]: false }));
                                                                    }}
                                                                    initialFocus
                                                                />
                                                            </PopoverContent>
                                                        </Popover>
                                                        {field.value && (
                                                            <button
                                                                type="button"
                                                                onClick={(e) => {
                                                                    e.preventDefault();
                                                                    field.onChange(undefined);
                                                                }}
                                                                className="absolute right-12 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500 transition-colors p-2 z-10"
                                                            >
                                                                <X className="w-4 h-4" />
                                                            </button>
                                                        )}
                                                    </div>
                                                    <FormMessage className="text-red-500 font-medium" />
                                                </FormItem>
                                            )} />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>

                        <div className="pt-2">
                            <Button type="submit" disabled={isSubmitting} className="w-[50%] md:w-[40%] lg:w-[30%] h-12 bg-black text-white hover:bg-gray-800 transition-all font-bold rounded-lg group disabled:bg-gray-400">
                                {isSubmitting ? "Submitting..." : "Submit My Application"}
                                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </div>
                    </form>
                </Form>

                <AlertDialog open={alertConfig.open} onOpenChange={(open) => setAlertConfig(prev => ({ ...prev, open }))}>
                    <AlertDialogContent className="bg-white max-w-md">
                        <AlertDialogHeader>
                            <AlertDialogTitle className={cn("text-xl font-bold flex items-center gap-2", alertConfig.type === "success" ? "text-black" : "text-red-600")}>
                                {alertConfig.type === "success" ? <CheckCircle2 className="text-green-600 w-6 h-6" /> : <AlertCircle className="text-red-600 w-6 h-6" />}
                                {alertConfig.title}
                            </AlertDialogTitle>
                            <AlertDialogDescription className="text-gray-600 text-base">{alertConfig.description}</AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogAction className="bg-black text-white hover:bg-gray-800" onClick={() => setAlertConfig(prev => ({ ...prev, open: false }))}>
                                {alertConfig.type === "success" ? "Continue" : "Close"}
                            </AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </div>
        </div>
    );
};

export default DocumentUploader;
