"use client";

import React, { useState, useEffect } from "react";
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

const formSchema = z.object({
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    email: z.string().optional(),
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
}).superRefine((data, ctx) => {
    const documentTypes = [
        "qualification_card_front", "qualification_card_back", "certificate_1", "certificate_2",
        "passport", "visa", "birth_certificate", "p45_if_not_working",
        "drivers_license_front", "drivers_license_back", "driver_digi_card_front",
        "driver_digi_card_back", "driver_cpc_card_front", "driver_cpc_card_back", "disclosure"
    ];

    documentTypes.forEach((docId) => {
        const fileValue = data[docId as keyof typeof data];
        const dateValue = data[`${docId}_date` as keyof typeof data];

        if (dateValue && (!fileValue || (Array.isArray(fileValue) && fileValue.length === 0))) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Document file is required when a date is provided",
                path: [docId],
            });
        }
    });
});

type FormValues = z.infer<typeof formSchema>;

const DocumentUploader = () => {
    const searchParams = useSearchParams();
    const uid = searchParams.get("uid");
    
    const [skillInput, setSkillInput] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    
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
            firstName: "",
            lastName: "",
            email: "",
            skills: [],
            uid: uid || "",
        },
    });

    useEffect(() => {
        if (uid) {
            form.setValue("uid", uid);
        }
    }, [uid, form]);

    const documentLabels = [
        "qualification_card_front", "qualification_card_back", "certificate_1", "certificate_2",
        "passport", "visa", "birth_certificate", "p45_if_not_working",
        "drivers_license_front", "drivers_license_back", "driver_digi_card_front",
        "driver_digi_card_back", "driver_cpc_card_front", "driver_cpc_card_back", "disclosure"
    ];

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
            
            if (values.skills && values.skills.length > 0) {
                values.skills.forEach(skill => formData.append("skills", skill));
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
            const response = await fetch(`${API_BASE_URL}/core/pre-application/${uid}/`, {
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
                    firstName: "",
                    lastName: "",
                    email: "",
                    skills: [],
                    availableFromDate: undefined,
                    uid: uid || "",
                });
                documentLabels.forEach(label => {
                    form.setValue(label as any, []);
                    form.setValue(`${label}_date` as any, undefined);
                });
            } else {
                // Field-specific validation from errors array
                if (result.errors && Array.isArray(result.errors)) {
                    result.errors.forEach((err: string) => {
                        const lower = err.toLowerCase();
                        if (lower.includes("firstname")) form.setError("firstName", { message: err });
                        if (lower.includes("lastname")) form.setError("lastName", { message: err });
                        if (lower.includes("email")) form.setError("email", { message: err });
                    });
                    
                    const firstMsg = result.errors[0].toLowerCase();
                    if (firstMsg.includes("firstname")) form.setFocus("firstName");
                    else if (firstMsg.includes("lastname")) form.setFocus("lastName");
                    else if (firstMsg.includes("email")) form.setFocus("email");
                }

                // Global document error
                if (result.error === "At least one document must be uploaded.") {
                    documentLabels.forEach(label => {
                        form.setError(label as any, { message: result.error });
                        form.setError(`${label}_date` as any, { message: "Date Required" });
                    });
                    form.setFocus("qualification_card_front" as any);
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

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, currentSkills: string[], onChange: (value: string[]) => void) => {
        if (e.key === "," || e.key === "Enter") {
            e.preventDefault();
            const trimmedValue = skillInput.trim();
            if (trimmedValue && !currentSkills.includes(trimmedValue)) {
                onChange([...currentSkills, trimmedValue]);
                setSkillInput("");
            }
        } else if (e.key === "Backspace" && skillInput === "" && currentSkills.length > 0) {
            onChange(currentSkills.slice(0, -1));
        }
    };

    const removeSkill = (skillToRemove: string, currentSkills: string[], onChange: (value: string[]) => void) => {
        onChange(currentSkills.filter((skill) => skill !== skillToRemove));
    };

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

    return (
        <div className="bg-white min-h-screen text-black font-['Inter'] py-12">
            <div className="container mx-auto px-4 py-12 max-w-4xl border border-gray-200 rounded-2xl shadow-sm bg-white">
                <div className="flex items-center justify-between mb-10">
                    <h1 className="text-3xl font-bold text-black border-none">Documents Upload</h1>
                    {logo && <img src={logo.src} alt="Logo" className="h-16 w-auto" />}
                </div>

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
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12">
                        <section>
                            <h2 className="text-xl font-bold mb-6 pb-2 border-b border-gray-100 italic">Personal Information</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <FormField control={form.control} name="firstName" render={({ field, fieldState }) => (
                                    <FormItem>
                                        <FormLabel className="text-black font-semibold">First Name <span className="text-red-500">*</span></FormLabel>
                                        <FormControl>
                                            <Input placeholder="Your first name" {...field} className={cn("bg-white border-gray-200 text-black h-12", fieldState.error && "border-red-500")} />
                                        </FormControl>
                                        <FormMessage className="text-red-500 font-medium" />
                                    </FormItem>
                                )} />
                                <FormField control={form.control} name="lastName" render={({ field, fieldState }) => (
                                    <FormItem>
                                        <FormLabel className="text-black font-semibold">Last Name <span className="text-red-500">*</span></FormLabel>
                                        <FormControl>
                                            <Input placeholder="Your last name" {...field} className={cn("bg-white border-gray-200 text-black h-12", fieldState.error && "border-red-500")} />
                                        </FormControl>
                                        <FormMessage className="text-red-500 font-medium" />
                                    </FormItem>
                                )} />
                                <div className="md:col-span-2">
                                    <FormField control={form.control} name="email" render={({ field, fieldState }) => (
                                        <FormItem>
                                            <FormLabel className="text-black font-semibold">Email <span className="text-red-500">*</span></FormLabel>
                                            <FormControl>
                                                <Input placeholder="your@example.com" {...field} className={cn("bg-white border-gray-200 text-black h-12", fieldState.error && "border-red-500")} />
                                            </FormControl>
                                            <FormMessage className="text-red-500 font-medium" />
                                        </FormItem>
                                    )} />
                                </div>
                                <div className="md:col-span-2">
                                    <FormField control={form.control} name="availableFromDate" render={({ field, fieldState }) => (
                                        <FormItem className="flex flex-col">
                                            <FormLabel className="text-black font-semibold mb-1">Available from Date</FormLabel>
                                                    <div className="relative">
                                                        <Popover>
                                                            <PopoverTrigger asChild>
                                                                <FormControl>
                                                                    <Button variant={"outline"} className={cn("w-full h-12 pl-3 text-left font-normal bg-white border-gray-200 text-black pr-20", !field.value && "text-gray-400", fieldState.error && "border-red-500")}>
                                                                        {field.value ? format(field.value, "PPP") : <span>mm/dd/yyyy</span>}
                                                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                                    </Button>
                                                                </FormControl>
                                                            </PopoverTrigger>
                                                            <PopoverContent className="w-auto p-0" align="start">
                                                                <Calendar mode="single" selected={field.value} onSelect={field.onChange} initialFocus />
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
                                                <FormItem className="flex flex-col">
                                                    <FormLabel className="text-gray-600 text-xs font-semibold uppercase tracking-wider">{doc.labelEx || "Expiration Date"}</FormLabel>
                                                    <div className="relative">
                                                        <Popover>
                                                            <PopoverTrigger asChild>
                                                                <FormControl>
                                                                    <Button variant={"outline"} className={cn("w-full h-12 pl-3 text-left font-normal bg-white border-gray-200 text-black uppercase pr-20", !field.value && "text-gray-400", fieldState.error && "border-red-500")}>
                                                                        {field.value ? format(field.value as Date, "PPP") : <span>mm/dd/yyyy</span>}
                                                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                                    </Button>
                                                                </FormControl>
                                                            </PopoverTrigger>
                                                            <PopoverContent className="w-auto p-0" align="start">
                                                                <Calendar mode="single" selected={field.value as any} onSelect={field.onChange} initialFocus />
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

                        <section>
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-xl font-bold text-black border-none">Skills</h2>
                            </div>
                            <div className="space-y-2">
                                <FormLabel className="text-black font-semibold block">Skills / Notes</FormLabel>
                                <FormField control={form.control} name="skills" render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <div className="flex flex-wrap items-center gap-2 p-2 min-h-14 bg-white border border-gray-200 rounded-sm focus-within:ring-1 focus-within:ring-black">
                                                {field.value?.map((skill: string) => (
                                                    <Badge key={skill} variant="secondary" className="bg-gray-100 text-black flex items-center gap-1 px-2 py-1">
                                                        {skill}
                                                        <X className="w-3 h-3 cursor-pointer hover:text-red-500" onClick={() => removeSkill(skill, field.value || [], field.onChange)} />
                                                    </Badge>
                                                ))}
                                                <input className="flex-1 bg-transparent border-none outline-none text-black placeholder:text-gray-500 min-w-[120px] h-9" placeholder="Select one or more skills" value={skillInput} onChange={(e) => setSkillInput(e.target.value)} onKeyDown={(e) => handleKeyDown(e, field.value || [], field.onChange)} />
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )} />
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
