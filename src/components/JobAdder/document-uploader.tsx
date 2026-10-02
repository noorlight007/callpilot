"use client";

import Image from "next/image";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { AlertCircle, CheckCircle2, FileText, Loader2, Lock, Upload, X } from "lucide-react";
import { useSearchParams } from "next/navigation";

import { cn } from "@/lib/utils";

const MAX_FILE_SIZE = 10 * 1024 * 1024;
const ALLOWED_FILE_TYPES = ["application/pdf", "image/jpeg", "image/png"];

const isFile = (file: unknown): file is File => {
    return typeof File !== "undefined" && file instanceof File;
};

const fileListSchema = z
    .array(z.any())
    .min(1, "Choose at least one file.")
    .superRefine((files, ctx) => {
        files.forEach((file, index) => {
            if (!isFile(file)) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: "Invalid file selected.",
                    path: [index],
                });
                return;
            }

            if (!ALLOWED_FILE_TYPES.includes(file.type)) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: "Only PDF, JPG or PNG files are allowed.",
                    path: [index],
                });
            }

            if (file.size > MAX_FILE_SIZE) {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: "Each file must be 10MB or less.",
                    path: [index],
                });
            }
        });
    });

const formSchema = z.object({
    fullName: z.string().trim().min(1, "Full name is required."),
    mobileNumber: z.string().trim().min(1, "Mobile number is required."),
    email: z.string().trim().min(1, "Email address is required.").email("Enter a valid email address."),
    engagementType: z.enum(["PAYE", "CIS"], {
        required_error: "Choose an engagement type.",
        invalid_type_error: "Choose an engagement type.",
    }),
    identification: fileListSchema,
    positionDocuments: fileListSchema,
});

type FormValues = z.infer<typeof formSchema>;
type EngagementType = FormValues["engagementType"];
type UploadFieldName = "identification" | "positionDocuments";

type SubmitState = {
    type: "success" | "error";
    message: string;
} | null;

const getApiBaseUrl = () => {
    return (process.env.NEXT_PUBLIC_BASE_URL || "https://api.callpilot.pro/api/v1").replace(/\/+$/, "");
};

const appendFiles = (formData: FormData, key: string, files: File[]) => {
    files.forEach((file) => {
        formData.append(key, file);
    });
};

const getFirstValue = (data: Record<string, any>, keys: string[]) => {
    for (const key of keys) {
        const value = data?.[key];
        if (typeof value === "string" && value.trim()) {
            return value.trim();
        }
    }

    return "";
};

const parseResponseBody = async (response: Response) => {
    const text = await response.text();

    if (!text) {
        return {};
    }

    try {
        return JSON.parse(text);
    } catch {
        return { message: text };
    }
};

const getPayloadMessage = (payload: any, fallback: string) => {
    if (typeof payload?.message === "string") return payload.message;
    if (typeof payload?.detail === "string") return payload.detail;
    if (typeof payload?.error === "string") return payload.error;
    if (Array.isArray(payload?.errors) && payload.errors.length > 0) return payload.errors.join(" ");
    return fallback;
};

const getErrorMessage = (error: unknown): string | undefined => {
    if (!error) {
        return undefined;
    }

    if (typeof error === "object" && "message" in error) {
        const message = (error as { message?: unknown }).message;
        if (typeof message === "string") {
            return message;
        }
    }

    if (Array.isArray(error)) {
        for (const item of error) {
            const message = getErrorMessage(item);
            if (message) {
                return message;
            }
        }
    }

    if (typeof error === "object") {
        for (const value of Object.values(error as Record<string, unknown>)) {
            const message = getErrorMessage(value);
            if (message) {
                return message;
            }
        }
    }

    return undefined;
};

const buildUploadEndpoint = (uid: string | null, interviewUid: string | null, platform: string | null) => {
    const baseUrl = getApiBaseUrl();
    const path =
        uid && interviewUid
            ? `/core/rd-document-upload/${encodeURIComponent(uid)}/${encodeURIComponent(interviewUid)}/`
            : "/core/rd-document-upload/";

    if (platform) {
        return `${baseUrl}${path}?${new URLSearchParams({ platform }).toString()}`;
    }

    return `${baseUrl}${path}`;
};

const SelectedFileList = ({ files, onRemove }: { files: File[]; onRemove: (index: number) => void }) => {
    if (files.length === 0) {
        return null;
    }

    return (
        <div className="mt-4 flex flex-col gap-2">
            {files.map((file, index) => (
                <div
                    key={`${file.name}-${file.lastModified}-${index}`}
                    className="flex min-h-9 items-center justify-between gap-3 rounded-md border border-slate-200 bg-white px-3 py-2 text-left text-sm text-slate-700"
                >
                    <span className="min-w-0 flex-1 truncate">{file.name}</span>
                    <button
                        type="button"
                        onClick={() => onRemove(index)}
                        className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-red-600"
                        aria-label={`Remove ${file.name}`}
                    >
                        <X className="h-4 w-4" />
                    </button>
                </div>
            ))}
        </div>
    );
};

const UploadBox = ({
    id,
    files,
    error,
    onFilesChange,
}: {
    id: UploadFieldName;
    files: File[];
    error?: string;
    onFilesChange: (files: File[]) => void;
}) => {
    const [dragActive, setDragActive] = useState(false);

    const addFiles = (incomingFiles: FileList | File[]) => {
        const selectedFiles = Array.from(incomingFiles);
        onFilesChange([...files, ...selectedFiles]);
    };

    const removeFile = (index: number) => {
        onFilesChange(files.filter((_, fileIndex) => fileIndex !== index));
    };

    const handleDrag = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        event.stopPropagation();
        setDragActive(event.type === "dragenter" || event.type === "dragover");
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        event.stopPropagation();
        setDragActive(false);

        if (event.dataTransfer.files.length > 0) {
            addFiles(event.dataTransfer.files);
        }
    };

    return (
        <div>
            <div
                className={cn(
                    "rounded-lg border border-dashed px-3 py-5 transition",
                    dragActive ? "border-slate-700 bg-slate-50" : "border-slate-300 bg-white",
                    error && "border-red-400 bg-red-50/40"
                )}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
            >
                <div className="flex flex-col items-center gap-4">
                    <FileText className="h-10 w-10 text-slate-900" strokeWidth={1.9} />
                    <label
                        htmlFor={id}
                        className="inline-flex min-h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-[10px] border-2 border-black bg-slate-50 px-4 py-3 text-center text-base font-bold text-slate-950 shadow-[inset_0_0_0_2px_#fff,0_2px_4px_rgba(15,23,42,0.18)] outline outline-1 outline-offset-[3px] outline-black transition hover:bg-white"
                    >
                        <Upload className="h-4 w-4" />
                        <span>Choose Files or Photos</span>
                    </label>
                    <input
                        id={id}
                        type="file"
                        multiple
                        accept=".pdf,.jpg,.jpeg,.png,application/pdf,image/jpeg,image/png"
                        className="sr-only"
                        onChange={(event) => {
                            if (event.target.files) {
                                addFiles(event.target.files);
                                event.target.value = "";
                            }
                        }}
                    />
                    <p className="text-center text-sm text-slate-500">PDF, JPG or PNG (max 10MB each)</p>
                </div>
                <SelectedFileList files={files} onRemove={removeFile} />
            </div>
            {error && <p className="mt-2 text-sm font-medium text-red-600">{error}</p>}
        </div>
    );
};

const EngagementOption = ({
    value,
    selectedValue,
    onChange,
}: {
    value: EngagementType;
    selectedValue?: EngagementType;
    onChange: (value: EngagementType) => void;
}) => {
    const selected = selectedValue === value;

    return (
        <label
            className={cn(
                "flex min-h-[58px] cursor-pointer items-center gap-3 rounded-[10px] border-2 border-black bg-slate-50 px-5 text-base font-bold text-slate-950 shadow-[inset_0_0_0_2px_#fff,0_2px_4px_rgba(15,23,42,0.18)] outline outline-1 outline-offset-[3px] outline-black transition hover:bg-white",
                selected && "bg-white"
            )}
        >
            <input
                type="radio"
                value={value}
                checked={selected}
                onChange={() => onChange(value)}
                className="sr-only"
            />
            <span
                className={cn(
                    "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-slate-950 bg-white",
                    selected && "border-blue-700"
                )}
                aria-hidden="true"
            >
                {selected && <span className="h-3 w-3 rounded-full bg-blue-700" />}
            </span>
            <span>{value}</span>
        </label>
    );
};

const DocumentUploader = () => {
    const searchParams = useSearchParams();
    const uid = searchParams.get("uid");
    const interviewUid = searchParams.get("interview_uid");
    const platform = searchParams.get("platform");

    const queryDefaults = useMemo(
        () => ({
            fullName:
                searchParams.get("full_name") ||
                searchParams.get("fullName") ||
                searchParams.get("name") ||
                "",
            mobileNumber:
                searchParams.get("mobile_number") ||
                searchParams.get("mobileNumber") ||
                searchParams.get("mobile") ||
                searchParams.get("phone") ||
                "",
            email: searchParams.get("email") || "",
        }),
        [searchParams]
    );

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        reset,
        getValues,
        formState: { errors },
    } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: queryDefaults.fullName,
            mobileNumber: queryDefaults.mobileNumber,
            email: queryDefaults.email,
            engagementType: undefined as any,
            identification: [],
            positionDocuments: [],
        },
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitState, setSubmitState] = useState<SubmitState>(null);

    const identificationFiles = watch("identification") || [];
    const positionDocumentFiles = watch("positionDocuments") || [];
    const engagementType = watch("engagementType");

    const uploadEndpoint = useMemo(
        () => buildUploadEndpoint(uid, interviewUid, platform),
        [uid, interviewUid, platform]
    );

    const setFiles = useCallback(
        (fieldName: UploadFieldName, files: File[]) => {
            setValue(fieldName, files, {
                shouldDirty: true,
                shouldTouch: true,
                shouldValidate: true,
            });
        },
        [setValue]
    );

    useEffect(() => {
        let cancelled = false;

        const loadPrefillData = async () => {
            if (!uid || !interviewUid) {
                return;
            }

            try {
                const response = await fetch(uploadEndpoint, {
                    method: "GET",
                });

                if (!response.ok) {
                    return;
                }

                const payload = await parseResponseBody(response);
                const data = payload?.data || payload?.candidate || payload?.applicant || payload;

                if (cancelled || !data || typeof data !== "object") {
                    return;
                }

                const fullName =
                    getFirstValue(data, ["full_name", "fullName", "name"]) ||
                    [data.first_name, data.last_name, data.firstName, data.lastName]
                        .filter((value) => typeof value === "string" && value.trim())
                        .join(" ")
                        .trim();
                const mobileNumber = getFirstValue(data, [
                    "mobile_number",
                    "mobileNumber",
                    "mobile",
                    "phone",
                    "telephone",
                ]);
                const email = getFirstValue(data, ["email", "email_address", "emailAddress"]);
                const dataEngagementType = getFirstValue(data, [
                    "engagement_type",
                    "engagementType",
                    "employment_type",
                ]).toUpperCase();

                if (fullName && !getValues("fullName")) setValue("fullName", fullName);
                if (mobileNumber && !getValues("mobileNumber")) setValue("mobileNumber", mobileNumber);
                if (email && !getValues("email")) setValue("email", email);
                if ((dataEngagementType === "PAYE" || dataEngagementType === "CIS") && !getValues("engagementType")) {
                    setValue("engagementType", dataEngagementType);
                }
            } catch {
                // Prefill is opportunistic; submission still works if this request is unavailable.
            }
        };

        loadPrefillData();

        return () => {
            cancelled = true;
        };
    }, [getValues, interviewUid, setValue, uid, uploadEndpoint]);

    const onSubmit = async (values: FormValues) => {
        setSubmitState(null);

        if (!uid || !interviewUid) {
            setSubmitState({
                type: "error",
                message: "This upload link is missing required candidate details.",
            });
            return;
        }

        setIsSubmitting(true);

        try {
            const formData = new FormData();
            formData.append("uid", uid);
            formData.append("interview_uid", interviewUid);
            formData.append("full_name", values.fullName);
            formData.append("mobile_number", values.mobileNumber);
            formData.append("email", values.email);
            formData.append("engagement_type", values.engagementType);
            appendFiles(formData, "identification", values.identification);
            appendFiles(formData, "documents_relevant_to_position", values.positionDocuments);

            const response = await fetch(uploadEndpoint, {
                method: "POST",
                body: formData,
            });
            const payload = await parseResponseBody(response);

            if (!response.ok || payload?.success === false) {
                throw new Error(getPayloadMessage(payload, "We could not submit your documents. Please try again."));
            }

            setSubmitState({
                type: "success",
                message: getPayloadMessage(payload, "Your documents have been submitted successfully."),
            });
            reset({
                ...values,
                identification: [],
                positionDocuments: [],
            });
        } catch (error) {
            setSubmitState({
                type: "error",
                message: error instanceof Error ? error.message : "A network error occurred.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-white px-4 py-6 text-slate-950 sm:py-8">
            <div className="mx-auto w-full max-w-[460px]">
                <header className="flex flex-col items-center">
                    <Image
                        src="/rd-logo.png"
                        alt="Recruitment Direct"
                        width={116}
                        height={116}
                        priority
                        className="h-[116px] w-[116px] object-contain"
                    />
                    <div className="mt-5 h-px w-full bg-slate-950" />
                </header>

                <main className="pt-6">
                    <h1 className="text-[32px] font-extrabold leading-tight tracking-normal text-slate-950">
                        Document Upload
                    </h1>

                    {submitState && (
                        <div
                            className={cn(
                                "mt-5 flex items-start gap-3 rounded-lg border px-4 py-3 text-sm font-medium",
                                submitState.type === "success"
                                    ? "border-green-200 bg-green-50 text-green-800"
                                    : "border-red-200 bg-red-50 text-red-700"
                            )}
                            role="status"
                        >
                            {submitState.type === "success" ? (
                                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
                            ) : (
                                <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
                            )}
                            <p className="text-inherit">{submitState.message}</p>
                        </div>
                    )}

                    <form onSubmit={handleSubmit(onSubmit)} className="mt-5 space-y-5">
                        <div className="space-y-2">
                            <label htmlFor="fullName" className="block text-sm font-bold text-slate-950">
                                Full Name *
                            </label>
                            <input
                                id="fullName"
                                type="text"
                                placeholder="John Smith"
                                {...register("fullName")}
                                className={cn(
                                    "h-[47px] w-full rounded-lg border border-slate-300 bg-white px-4 text-base text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-slate-700 focus:ring-2 focus:ring-slate-200",
                                    errors.fullName && "border-red-500 focus:border-red-500 focus:ring-red-100"
                                )}
                            />
                            {errors.fullName && (
                                <p className="text-sm font-medium text-red-600">{errors.fullName.message}</p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="mobileNumber" className="block text-sm font-bold text-slate-950">
                                Mobile Number *
                            </label>
                            <input
                                id="mobileNumber"
                                type="tel"
                                placeholder="07700 900123"
                                {...register("mobileNumber")}
                                className={cn(
                                    "h-[47px] w-full rounded-lg border border-slate-300 bg-white px-4 text-base text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-slate-700 focus:ring-2 focus:ring-slate-200",
                                    errors.mobileNumber && "border-red-500 focus:border-red-500 focus:ring-red-100"
                                )}
                            />
                            {errors.mobileNumber && (
                                <p className="text-sm font-medium text-red-600">{errors.mobileNumber.message}</p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm font-bold text-slate-950">
                                Email Address *
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="john.smith@example.com"
                                {...register("email")}
                                className={cn(
                                    "h-[47px] w-full rounded-lg border border-slate-300 bg-white px-4 text-base text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-slate-700 focus:ring-2 focus:ring-slate-200",
                                    errors.email && "border-red-500 focus:border-red-500 focus:ring-red-100"
                                )}
                            />
                            {errors.email && <p className="text-sm font-medium text-red-600">{errors.email.message}</p>}
                        </div>

                        <fieldset className="space-y-3">
                            <legend className="text-sm font-bold text-slate-950">Engagement Type *</legend>
                            <EngagementOption
                                value="PAYE"
                                selectedValue={engagementType}
                                onChange={(value) =>
                                    setValue("engagementType", value, {
                                        shouldDirty: true,
                                        shouldTouch: true,
                                        shouldValidate: true,
                                    })
                                }
                            />
                            <EngagementOption
                                value="CIS"
                                selectedValue={engagementType}
                                onChange={(value) =>
                                    setValue("engagementType", value, {
                                        shouldDirty: true,
                                        shouldTouch: true,
                                        shouldValidate: true,
                                    })
                                }
                            />
                            {errors.engagementType && (
                                <p className="text-sm font-medium text-red-600">{errors.engagementType.message}</p>
                            )}
                        </fieldset>

                        <section className="space-y-2 pt-1">
                            <div>
                                <h2 className="text-base font-bold leading-tight text-slate-950">Identification *</h2>
                                <p className="text-sm leading-tight text-slate-500">
                                    Passport or other identification document.
                                </p>
                            </div>
                            <UploadBox
                                id="identification"
                                files={identificationFiles}
                                error={getErrorMessage(errors.identification)}
                                onFilesChange={(files) => setFiles("identification", files)}
                            />
                        </section>

                        <section className="space-y-2 pt-1">
                            <div>
                                <h2 className="text-base font-bold leading-tight text-slate-950">
                                    Documents Relevant to the Position *
                                </h2>
                                <p className="text-sm leading-tight text-slate-500">
                                    Example: Driving Licence <span aria-hidden="true">{"\u2022"}</span> Qualifications{" "}
                                    <span aria-hidden="true">{"\u2022"}</span> Cards (CPCS, Gold){" "}
                                    <span aria-hidden="true">{"\u2022"}</span> DBS
                                </p>
                            </div>
                            <UploadBox
                                id="positionDocuments"
                                files={positionDocumentFiles}
                                error={getErrorMessage(errors.positionDocuments)}
                                onFilesChange={(files) => setFiles("positionDocuments", files)}
                            />
                        </section>

                        <div className="space-y-3 pt-1">
                            <div className="flex min-h-[50px] items-center gap-4 rounded-lg bg-slate-100 px-5">
                                <Lock className="h-6 w-6 shrink-0 text-slate-950" />
                                <p className="text-sm font-bold text-slate-950">Your information is secure.</p>
                            </div>
                            <p className="text-sm leading-snug text-slate-500">
                                We use your information to find you work, as explained in our{" "}
                                <a href="/privacy-policy" className="text-slate-950 underline underline-offset-2">
                                    Privacy Notice.
                                </a>
                            </p>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="inline-flex min-h-[56px] w-full items-center justify-center rounded-[10px] border-2 border-black bg-[#2765dd] px-5 text-center text-lg font-extrabold text-white shadow-[inset_0_0_0_2px_#4283ff,0_10px_22px_rgba(37,99,235,0.28)] outline outline-1 outline-offset-[4px] outline-black transition hover:bg-[#1f58c9] disabled:cursor-not-allowed disabled:bg-slate-400 disabled:shadow-none"
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                    Submitting...
                                </>
                            ) : (
                                "Submit Documents"
                            )}
                        </button>
                    </form>
                </main>

                <footer className="mt-6 border-t border-slate-950 pt-4 text-center text-sm font-bold leading-snug text-slate-950">
                    <p>Recruitment Direct UK Ltd</p>
                    <p>Linlithgow, EH49 7SF</p>
                    <p>www.rd1.co.uk</p>
                </footer>
            </div>
        </div>
    );
};

export default DocumentUploader;
