"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
    Upload,
    Calendar as CalendarIcon,
    CheckCircle2,
    AlertCircle,
    FileText,
    User,
    Mail,
    ArrowRight
} from "lucide-react";
import { format } from "date-fns";

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
import { cn } from "@/lib/utils";
import logo from "@/assets/call_pilot_logo.png";

const formSchema = z.object({
    firstName: z.string().min(2, "First name is required"),
    lastName: z.string().min(2, "Last name is required"),
    email: z.string().email("Invalid email address"),
    availableFromDate: z.date({
        required_error: "Available from date is required",
    }),
    // Document uploads
    qualificationCardFront: z.any().optional(),
    qualificationCardFrontExpiry: z.date().optional(),
    qualificationCardBack: z.any().optional(),
    qualificationCardBackExpiry: z.date().optional(),
    certificate1: z.any().optional(),
    certificate1Expiry: z.date().optional(),
    certificate2: z.any().optional(),
    certificate2Expiry: z.date().optional(),
    passport: z.any().optional(),
    passportExpiry: z.date().optional(),
    drivingLicenceFront: z.any().optional(),
    drivingLicenceFrontExpiry: z.date().optional(),
    drivingLicenceBack: z.any().optional(),
    drivingLicenceBackExpiry: z.date().optional(),
    driverDigiCardFront: z.any().optional(),
    driverDigiCardFrontExpiry: z.date().optional(),
    driverDigiCardBack: z.any().optional(),
    driverDigiCardBackExpiry: z.date().optional(),
    driverCPCCardFront: z.any().optional(),
    driverCPCCardFrontExpiry: z.date().optional(),
    driverCPCCardBack: z.any().optional(),
    driverCPCCardBackExpiry: z.date().optional(),
    birthCertificate: z.any().optional(),
    birthCertificateExpiry: z.date().optional(),
    disclosure: z.any().optional(),
    disclosureIssueDate: z.date().optional(),
    skills: z.array(z.string()).optional(),
});

type FormValues = z.infer<typeof formSchema>;

const DocumentUploader = () => {
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            skills: [],
        },
    });

    const onSubmit = (values: FormValues) => {
        console.log("Form submitted:", values);
        alert("Application submitted successfully!");
    };

    const documentTypes = [
        { id: "qualificationCardFront", label: "Qualification Card (Front)", hasExpiry: true },
        { id: "qualificationCardBack", label: "Qualification Card (Back)", hasExpiry: true },
        { id: "certificate1", label: "Certificate 1", hasExpiry: true },
        { id: "certificate2", label: "Certificate 2", hasExpiry: true },
        { id: "passport", label: "Passport", hasExpiry: true },
        { id: "drivingLicenceFront", label: "Driving Licence (Front)", hasExpiry: true },
        { id: "drivingLicenceBack", label: "Driving Licence (Back)", hasExpiry: true },
        { id: "driverDigiCardFront", label: "Driver Digi-Card (Front)", hasExpiry: true },
        { id: "driverDigiCardBack", label: "Driver Digi-Card (Back)", hasExpiry: true },
        { id: "driverCPCCardFront", label: "Driver CPC Card (Front)", hasExpiry: true },
        { id: "driverCPCCardBack", label: "Driver CPC Card (Back)", hasExpiry: true },
        { id: "birthCertificate", label: "Birth Certificate", hasExpiry: true },
        { id: "disclosure", label: "Disclosure", hasExpiry: false },
        { id: "disclosureIssueDate", label: "Disclosure Issue Date", isOnlyDate: true },
    ];

    const Dropzone = ({ label, id, onFileSelect }: { label: string; id: string; onFileSelect?: (file: File) => void }) => {
        const [dragActive, setDragActive] = useState(false);
        const [fileName, setFileName] = useState<string | null>(null);

        const handleDrag = (e: React.DragEvent) => {
            e.preventDefault();
            e.stopPropagation();
            if (e.type === "dragenter" || e.type === "dragover") {
                setDragActive(true);
            } else if (e.type === "dragleave") {
                setDragActive(false);
            }
        };

        const handleDrop = (e: React.DragEvent) => {
            e.preventDefault();
            e.stopPropagation();
            setDragActive(false);
            if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                setFileName(e.dataTransfer.files[0].name);
            }
        };

        return (
            <div
                className={cn(
                    "relative border-2 border-dashed rounded-lg p-6 transition-all duration-200 flex flex-col items-center justify-center gap-2",
                    dragActive ? "border-black bg-gray-50 scale-[1.01]" : "border-gray-200 hover:border-gray-400 bg-white",
                    fileName ? "border-green-500 bg-green-50/10" : ""
                )}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
            >
                <Upload className={cn("w-8 h-8", fileName ? "text-green-600" : "text-gray-400")} />
                <p className="text-sm font-medium text-black">
                    {fileName ? fileName : "Drag & drop file here or click to upload"}
                </p>
                <input
                    type="file"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    onChange={(e) => {
                        if (e.target.files?.[0]) {
                            setFileName(e.target.files[0].name);
                        }
                    }}
                />
            </div>
        );
    };

    return (
        <div className="bg-white min-h-screen text-black font-['Inter'] py-12">
            <div className="container mx-auto px-4 py-12 max-w-4xl border border-gray-200 rounded-2xl shadow-sm bg-white">
                {/* Header */}
                <div className="flex items-center justify-between mb-10">
                    <h1 className="text-3xl font-bold text-black border-none">Documents Upload</h1>
                    {logo && (
                        <img
                            src={logo.src}
                            alt="Logo"
                            className="h-16 w-auto"
                        />
                    )}
                </div>

                {/* Important Reminders */}
                <div className="bg-[#f0f9f1] border border-[#d1e9d2] rounded-xl p-6 mb-10">
                    <h2 className="text-sm font-bold text-black uppercase tracking-wider mb-4 flex items-center gap-2">
                        Important reminders
                    </h2>
                    <ul className="space-y-3">
                        {[
                            "ID Renewal / ID Check",
                            "Right to work check status",
                            "Disclosure (if applicable)"
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-center gap-3 text-black font-medium">
                                <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                                {item}
                                <span className="w-4 h-4 bg-green-600 rounded-sm inline-flex items-center justify-center">
                                    <CheckCircle2 className="w-3 h-3 text-white" />
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12">

                        {/* Personal Information */}
                        <section>
                            <h2 className="text-xl font-bold mb-6 pb-2 border-b border-gray-100 italic">Personal Information</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <FormField
                                    control={form.control}
                                    name="firstName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-black font-semibold">First Name <span className="text-red-500">*</span></FormLabel>
                                            <FormControl>
                                                <Input placeholder="Your first name" {...field} className="bg-white border-gray-200 text-black h-12 focus:ring-black placeholder:text-gray-400" />
                                            </FormControl>
                                            <FormMessage className="text-red-600" />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="lastName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-black font-semibold">Last Name <span className="text-red-500">*</span></FormLabel>
                                            <FormControl>
                                                <Input placeholder="Your last name" {...field} className="bg-white border-gray-200 text-black h-12 focus:ring-black placeholder:text-gray-400" />
                                            </FormControl>
                                            <FormMessage className="text-red-600" />
                                        </FormItem>
                                    )}
                                />
                                <div className="md:col-span-2">
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-black font-semibold">Email <span className="text-red-500">*</span></FormLabel>
                                                <FormControl>
                                                    <Input placeholder="your@example.com" {...field} className="bg-white border-gray-200 text-black h-12 focus:ring-black placeholder:text-gray-400" />
                                                </FormControl>
                                                <FormMessage className="text-red-600" />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <FormField
                                        control={form.control}
                                        name="availableFromDate"
                                        render={({ field }) => (
                                            <FormItem className="flex flex-col">
                                                <FormLabel className="text-black font-semibold mb-1">Available from Date</FormLabel>
                                                <Popover>
                                                    <PopoverTrigger asChild>
                                                        <FormControl>
                                                            <Button
                                                                variant={"outline"}
                                                                className={cn(
                                                                    "w-full h-12 pl-3 text-left font-normal bg-white border-gray-200 text-black hover:bg-gray-50 focus:ring-black",
                                                                    !field.value && "text-gray-400"
                                                                )}
                                                            >
                                                                {field.value ? (
                                                                    format(field.value, "PPP")
                                                                ) : (
                                                                    <span>mm/dd/yyyy</span>
                                                                )}
                                                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                            </Button>
                                                        </FormControl>
                                                    </PopoverTrigger>
                                                    <PopoverContent className="w-auto p-0" align="start">
                                                        <Calendar
                                                            mode="single"
                                                            selected={field.value}
                                                            onSelect={field.onChange}
                                                            disabled={(date) =>
                                                                date < new Date() || date < new Date("1900-01-01")
                                                            }
                                                            initialFocus
                                                        />
                                                    </PopoverContent>
                                                </Popover>
                                                <FormMessage className="text-red-600" />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </div>
                        </section>

                        {/* Quick Document Upload */}
                        <section>
                            <h2 className="text-xl font-bold mb-8 pb-2 border-b border-gray-100 italic">Quick Document Upload</h2>

                            <div className="space-y-10">
                                {documentTypes.map((doc) => (
                                    <div key={doc.id} className="space-y-4">
                                        {doc.isOnlyDate ? (
                                            <FormField
                                                control={form.control}
                                                name={doc.id as any}
                                                render={({ field }) => (
                                                    <FormItem className="flex flex-col">
                                                        <FormLabel className="text-black font-semibold mb-2">{doc.label}</FormLabel>
                                                        <Popover>
                                                            <PopoverTrigger asChild>
                                                                <FormControl>
                                                                    <Button
                                                                        variant={"outline"}
                                                                        className={cn(
                                                                            "w-full h-12 pl-3 text-left font-normal bg-white border-gray-200 text-black hover:bg-gray-50 uppercase shadow-none",
                                                                            !field.value && "text-gray-400"
                                                                        )}
                                                                    >
                                                                        {field.value ? (
                                                                            format(field.value, "PPP")
                                                                        ) : (
                                                                            <span>mm/dd/yyyy</span>
                                                                        )}
                                                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                                    </Button>
                                                                </FormControl>
                                                            </PopoverTrigger>
                                                            <PopoverContent className="w-auto p-0" align="start">
                                                                <Calendar
                                                                    mode="single"
                                                                    selected={field.value as any}
                                                                    onSelect={field.onChange}
                                                                    initialFocus
                                                                />
                                                            </PopoverContent>
                                                        </Popover>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        ) : (
                                            <div className="space-y-4">
                                                <FormLabel className="text-black font-semibold block mb-2">{doc.label}</FormLabel>
                                                <Dropzone label={doc.label} id={doc.id} />

                                                {doc.hasExpiry && (
                                                    <FormField
                                                        control={form.control}
                                                        name={`${doc.id}Expiry` as any}
                                                        render={({ field }) => (
                                                            <FormItem className="flex flex-col">
                                                                <FormLabel className="text-gray-600 text-xs font-semibold uppercase tracking-wider">Expiration Date</FormLabel>
                                                                <Popover>
                                                                    <PopoverTrigger asChild>
                                                                        <FormControl>
                                                                            <Button
                                                                                variant={"outline"}
                                                                                className={cn(
                                                                                    "w-full h-12 pl-3 text-left font-normal bg-white border-gray-200 text-black hover:bg-gray-50 shadow-none uppercase",
                                                                                    !field.value && "text-gray-400"
                                                                                )}
                                                                            >
                                                                                {field.value ? (
                                                                                    format(field.value, "PPP")
                                                                                ) : (
                                                                                    <span>mm/dd/yyyy</span>
                                                                                )}
                                                                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                                            </Button>
                                                                        </FormControl>
                                                                    </PopoverTrigger>
                                                                    <PopoverContent className="w-auto p-0" align="start">
                                                                        <Calendar
                                                                            mode="single"
                                                                            selected={field.value as any}
                                                                            onSelect={field.onChange}
                                                                            initialFocus
                                                                        />
                                                                    </PopoverContent>
                                                                </Popover>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />
                                                )}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Skills */}
                        <section>
                            <h2 className="text-xl font-bold mb-4 text-black border-none">Skills</h2>
                            <div className="space-y-2">
                                <FormLabel className="text-black font-semibold block">Skills / Notes</FormLabel>
                                <FormField
                                    control={form.control}
                                    name="skills"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <div className="relative">
                                                    <Input
                                                        placeholder="Select one or more skills"
                                                        readOnly
                                                        className="bg-white border-gray-200 text-gray-500 h-14 focus:ring-0 focus-visible:ring-0 border rounded-sm placeholder:text-gray-500 cursor-pointer"
                                                    />
                                                </div>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </section>

                        {/* Submit Button */}
                        <div className="pt-2">
                            <Button
                                type="submit"
                                className="w-[50%] md:w-[40%] lg:w-[30%] h-12 bg-black text-white hover:bg-gray-800 transition-all text-sm md:text-sm lg:text-lg font-bold rounded-lg group"
                            >
                                Submit My Application
                                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </div>

                    </form>
                </Form>

                {/* Footer info or disclaimer if needed */}
                {/* <p className="mt-12 text-center text-gray-400 text-sm italic">
                    Designed for excellence and ease of use.
                </p> */}
            </div>
        </div>
    );
};

export default DocumentUploader;
