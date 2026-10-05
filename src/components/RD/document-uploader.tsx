"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import {
    AlertCircle,
    CheckCircle2,
    FileText,
    LockKeyhole,
    Upload,
    X,
} from "lucide-react";

import { cn } from "@/lib/utils";

type EngagementType = "PAYE" | "CIS";
type UploadGroupId = "identification" | "positionDocuments";

type FormErrors = Partial<
    Record<
        | "fullName"
        | "mobileNumber"
        | "email"
        | "engagementType"
        | UploadGroupId,
        string
    >
>;

const MAX_FILE_SIZE = 10 * 1024 * 1024;
const ACCEPTED_FILE_TYPES = ".pdf,.jpg,.jpeg,.png,image/jpeg,image/png,application/pdf";
const VALID_FILE_TYPES = new Set(["application/pdf", "image/jpeg", "image/png"]);
const VALID_FILE_EXTENSIONS = [".pdf", ".jpg", ".jpeg", ".png"];

const normalizeEngagementType = (value: string | null): EngagementType | "" => {
    const normalized = value?.trim().toUpperCase();
    return normalized === "PAYE" || normalized === "CIS" ? normalized : "";
};

const firstSearchParam = (
    searchParams: { get: (key: string) => string | null } | null,
    keys: string[],
) => {
    if (!searchParams) return "";

    for (const key of keys) {
        const value = searchParams.get(key);
        if (value) return value;
    }

    return "";
};

const formatFileSize = (bytes: number) => {
    if (bytes < 1024 * 1024) {
        return `${Math.max(1, Math.round(bytes / 1024))} KB`;
    }

    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
};

const validateUploadFile = (file: File) => {
    const lowerName = file.name.toLowerCase();
    const hasValidExtension = VALID_FILE_EXTENSIONS.some((extension) =>
        lowerName.endsWith(extension),
    );
    const hasValidMimeType = file.type ? VALID_FILE_TYPES.has(file.type) : false;

    if (!hasValidExtension && !hasValidMimeType) {
        return "Only PDF, JPG or PNG files can be uploaded.";
    }

    if (file.size > MAX_FILE_SIZE) {
        return `${file.name} is larger than 10MB.`;
    }

    return "";
};

const uploadEndpoint = () => {
    const explicitUrl = process.env.NEXT_PUBLIC_RDUK_DOCUMENT_UPLOAD_URL?.trim();

    if (explicitUrl) {
        return explicitUrl;
    }

    const apiBaseUrl = (
        process.env.NEXT_PUBLIC_BASE_URL || "https://api.callpilot.pro/api/v1"
    ).replace(/\/+$/, "");

    return `${apiBaseUrl}/core/pre-application/rd-document-upload/`;
};

type FileDropzoneProps = {
    id: UploadGroupId;
    title: string;
    hint: string;
    error?: string;
    files: File[];
    inputRef: React.RefObject<HTMLInputElement>;
    activeDropzone: UploadGroupId | null;
    onAddFiles: (groupId: UploadGroupId, files: File[]) => void;
    onRemoveFile: (groupId: UploadGroupId, index: number) => void;
    onSetActiveDropzone: (groupId: UploadGroupId | null) => void;
};

const FileDropzone = ({
    id,
    title,
    hint,
    error,
    files,
    inputRef,
    activeDropzone,
    onAddFiles,
    onRemoveFile,
    onSetActiveDropzone,
}: FileDropzoneProps) => {
    const isActive = activeDropzone === id;

    const handleDrag = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        event.stopPropagation();

        if (event.type === "dragenter" || event.type === "dragover") {
            onSetActiveDropzone(id);
        }

        if (event.type === "dragleave") {
            onSetActiveDropzone(null);
        }
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        event.stopPropagation();
        onSetActiveDropzone(null);

        if (event.dataTransfer.files?.length) {
            onAddFiles(id, Array.from(event.dataTransfer.files));
        }
    };

    return (
        <section className="mt-[22px]" id={id}>
            <div className="text-[15px] font-semibold leading-tight text-[#0b0f17]">
                {title} <span aria-hidden="true">*</span>
            </div>
            <p className="mb-2 mt-1 text-sm leading-snug text-[#5b6474]">{hint}</p>

            <div
                className={cn(
                    "rounded-2xl border border-dashed border-[#c5cdd9] bg-[#fafbfd] px-4 py-5 text-center transition-colors",
                    isActive && "border-[#0f2140] bg-[#f4f6f9]",
                    error && "border-[#b42318] bg-red-50/40",
                )}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
            >
                <FileText
                    className="mx-auto h-9 w-9 text-[#0b6bff]"
                    strokeWidth={2.4}
                    aria-hidden="true"
                />

                <div className="my-3 grid gap-3">
                    <button
                        type="button"
                        className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#e8f0fe] px-4 text-base font-semibold text-[#0b6bff] transition hover:bg-[#dbe8fd] active:scale-[.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0b6bff]"
                        onClick={() => inputRef.current?.click()}
                    >
                        <Upload className="h-[18px] w-[18px]" aria-hidden="true" />
                        Choose Files or Photos
                    </button>
                </div>

                <input
                    ref={inputRef}
                    type="file"
                    className="sr-only"
                    accept={ACCEPTED_FILE_TYPES}
                    multiple
                    onChange={(event) => {
                        if (event.target.files?.length) {
                            onAddFiles(id, Array.from(event.target.files));
                            event.target.value = "";
                        }
                    }}
                />

                <p className="text-[13px] leading-snug text-[#5b6474]">
                    PDF, JPG or PNG (max 10MB each)
                </p>

                {files.length > 0 && (
                    <ul className="mt-4 grid gap-2 text-left">
                        {files.map((file, index) => (
                            <li
                                key={`${file.name}-${file.lastModified}-${index}`}
                                className="flex min-w-0 items-center gap-3 rounded-lg border border-[#d7dce4] bg-white px-2.5 py-2"
                            >
                                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[#f4f6f9] text-[11px] font-bold uppercase text-[#5b6474]">
                                    {file.name.split(".").pop()?.slice(0, 4) || "file"}
                                </span>
                                <span className="min-w-0 flex-1">
                                    <span className="block truncate text-sm text-[#0b0f17]">
                                        {file.name}
                                    </span>
                                    <span className="block text-xs text-[#5b6474]">
                                        {formatFileSize(file.size)}
                                    </span>
                                </span>
                                <button
                                    type="button"
                                    className="rounded p-2 text-[#b42318] transition hover:bg-red-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f5fe0]"
                                    onClick={() => onRemoveFile(id, index)}
                                    aria-label={`Remove ${file.name}`}
                                >
                                    <X className="h-4 w-4" aria-hidden="true" />
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {error && (
                <p className="mt-2 text-sm font-semibold text-[#b42318]" role="alert">
                    {error}
                </p>
            )}
        </section>
    );
};

const RDUKDocumentUploader = () => {
    const searchParams = useSearchParams();
    const identificationInputRef = useRef<HTMLInputElement>(null);
    const positionDocumentsInputRef = useRef<HTMLInputElement>(null);

    const [fullName, setFullName] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [email, setEmail] = useState("");
    const [engagementType, setEngagementType] = useState<EngagementType | "">("");
    const [identification, setIdentification] = useState<File[]>([]);
    const [positionDocuments, setPositionDocuments] = useState<File[]>([]);
    const [errors, setErrors] = useState<FormErrors>({});
    const [formError, setFormError] = useState("");
    const [warnings, setWarnings] = useState<string[]>([]);
    const [activeDropzone, setActiveDropzone] = useState<UploadGroupId | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        setFullName(
            firstSearchParam(searchParams, [
                "fullName",
                "full_name",
                "name",
                "candidateName",
                "candidate_name",
            ]),
        );
        setMobileNumber(
            firstSearchParam(searchParams, [
                "mobileNumber",
                "mobile_number",
                "mobile",
                "phone",
                "candidatePhone",
                "candidate_phone",
            ]),
        );
        setEmail(
            firstSearchParam(searchParams, [
                "email",
                "emailAddress",
                "candidateEmail",
                "candidate_email",
            ]),
        );
        setEngagementType(
            normalizeEngagementType(
                firstSearchParam(searchParams, [
                    "engagementType",
                    "engagement_type",
                    "paymentType",
                    "payment_type",
                ]),
            ),
        );
    }, [searchParams]);

    const updateFiles = (
        groupId: UploadGroupId,
        updater: (currentFiles: File[]) => File[],
    ) => {
        if (groupId === "identification") {
            setIdentification((currentFiles) => updater(currentFiles));
            return;
        }

        setPositionDocuments((currentFiles) => updater(currentFiles));
    };

    const addFiles = (groupId: UploadGroupId, selectedFiles: File[]) => {
        const nextFiles: File[] = [];
        const rejectedMessages: string[] = [];

        selectedFiles.forEach((file) => {
            const validationMessage = validateUploadFile(file);

            if (validationMessage) {
                rejectedMessages.push(validationMessage);
                return;
            }

            nextFiles.push(file);
        });

        if (nextFiles.length > 0) {
            updateFiles(groupId, (currentFiles) => [...currentFiles, ...nextFiles]);
        }

        setErrors((currentErrors) => ({
            ...currentErrors,
            [groupId]: rejectedMessages[0] || undefined,
        }));
        setFormError("");
    };

    const removeFile = (groupId: UploadGroupId, index: number) => {
        updateFiles(groupId, (currentFiles) =>
            currentFiles.filter((_, fileIndex) => fileIndex !== index),
        );
        setErrors((currentErrors) => ({ ...currentErrors, [groupId]: undefined }));
    };

    const validateForm = () => {
        const nextErrors: FormErrors = {};
        const trimmedEmail = email.trim();

        if (!fullName.trim()) {
            nextErrors.fullName = "Full name is required.";
        }

        if (!mobileNumber.trim()) {
            nextErrors.mobileNumber = "Mobile number is required.";
        }

        if (!trimmedEmail) {
            nextErrors.email = "Email address is required.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
            nextErrors.email = "Enter a valid email address.";
        }

        if (!engagementType) {
            nextErrors.engagementType = "Choose PAYE or CIS.";
        }

        if (identification.length === 0) {
            nextErrors.identification = "Upload at least one identification document.";
        }

        if (positionDocuments.length === 0) {
            nextErrors.positionDocuments =
                "Upload at least one document relevant to the position.";
        }

        setErrors(nextErrors);

        return nextErrors;
    };

    const scrollToFirstError = (nextErrors: FormErrors) => {
        const firstErrorKey = Object.keys(nextErrors)[0];
        const firstErrorElement = firstErrorKey
            ? document.getElementById(firstErrorKey)
            : null;

        firstErrorElement?.scrollIntoView({ behavior: "smooth", block: "center" });
    };

    const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setFormError("");
        setWarnings([]);

        const nextErrors = validateForm();

        if (Object.keys(nextErrors).length > 0) {
            scrollToFirstError(nextErrors);
            return;
        }

        const formData = new FormData();
        formData.append("fullName", fullName.trim());
        formData.append("mobileNumber", mobileNumber.trim());
        formData.append("email", email.trim());
        formData.append("engagementType", engagementType);

        identification.forEach((file) => {
            formData.append("identification", file);
        });
        positionDocuments.forEach((file) => {
            formData.append("positionDocuments", file);
        });

        setIsSubmitting(true);

        try {
            const response = await fetch(uploadEndpoint(), {
                method: "POST",
                body: formData,
            });
            const result = await response.json().catch(() => null);

            if (!response.ok || !result?.success) {
                const backendErrors = Array.isArray(result?.errors)
                    ? result.errors
                    : [result?.error || "Your documents could not be submitted."];

                setFormError(backendErrors.filter(Boolean).join(" "));
                return;
            }

            setWarnings(Array.isArray(result.upload_warnings) ? result.upload_warnings : []);
            setIsSubmitted(true);
        } catch {
            setFormError("A network error occurred. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSubmitted) {
        return (
            <main className="mx-auto min-h-screen w-full max-w-[480px] bg-white px-5 pb-7 pt-5 text-[#0b0f17]">
                <div className="border-b border-[#e5e8ee] pb-4 text-center">
                    <Image
                        src="/images/rd-logo.png"
                        alt="Recruitment Direct"
                        width={96}
                        height={96}
                        priority
                        className="mx-auto h-24 w-24 object-contain"
                    />
                </div>

                <section className="py-8 text-center" aria-live="polite">
                    <div className="mx-auto mb-6 flex h-[120px] w-[120px] items-center justify-center rounded-full bg-[#e3f4ea]">
                        <CheckCircle2 className="h-16 w-16 text-[#15803d]" strokeWidth={2.6} />
                    </div>
                    <h1 className="text-[30px] font-extrabold leading-tight text-[#0b0f17]">
                        Documents Submitted
                    </h1>
                    <p className="mx-auto mt-3 max-w-[420px] text-base leading-relaxed text-[#0b0f17]">
                        Thank you. Your documents have been successfully uploaded. We will
                        email you shortly.
                    </p>

                    {warnings.length > 0 && (
                        <div className="mt-5 rounded-lg border border-amber-200 bg-amber-50 p-3 text-left text-sm text-amber-900">
                            {warnings.map((warning) => (
                                <p key={warning} className="text-amber-900">
                                    {warning}
                                </p>
                            ))}
                        </div>
                    )}

                    <a
                        href="https://www.rd1.co.uk"
                        className="mt-6 flex h-[52px] w-full items-center justify-center rounded-xl bg-[#15803d] px-4 text-base font-semibold text-white no-underline shadow-sm transition hover:bg-[#116c33] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0b6bff]"
                    >
                        Return to rd1.co.uk
                    </a>
                </section>

                <FormFooter />
            </main>
        );
    }

    return (
        <main className="mx-auto min-h-screen w-full max-w-[480px] bg-white px-5 pb-7 pt-5 text-[#0b0f17]">
            <div className="border-b border-[#e5e8ee] pb-4 text-center">
                <Image
                    src="/images/rd-logo.png"
                    alt="Recruitment Direct"
                    width={96}
                    height={96}
                    priority
                    className="mx-auto h-24 w-24 object-contain"
                />
            </div>

            <form noValidate onSubmit={submitForm}>
                <h1 className="mb-4 mt-5 text-[26px] font-bold leading-tight tracking-tight text-[#0b0f17]">
                    Document Upload
                </h1>

                <div className="grid gap-5">
                    <TextField
                        id="fullName"
                        label="Full Name"
                        value={fullName}
                        error={errors.fullName}
                        autoComplete="name"
                        placeholder="Enter your full name"
                        onChange={(value) => {
                            setFullName(value);
                            setErrors((currentErrors) => ({
                                ...currentErrors,
                                fullName: undefined,
                            }));
                        }}
                    />
                    <TextField
                        id="mobileNumber"
                        label="Mobile Number"
                        type="tel"
                        value={mobileNumber}
                        error={errors.mobileNumber}
                        autoComplete="tel"
                        inputMode="tel"
                        placeholder="Enter your mobile number"
                        onChange={(value) => {
                            setMobileNumber(value);
                            setErrors((currentErrors) => ({
                                ...currentErrors,
                                mobileNumber: undefined,
                            }));
                        }}
                    />
                    <TextField
                        id="email"
                        label="Email Address"
                        type="email"
                        value={email}
                        error={errors.email}
                        autoComplete="email"
                        inputMode="email"
                        placeholder="Enter your email address"
                        onChange={(value) => {
                            setEmail(value);
                            setErrors((currentErrors) => ({
                                ...currentErrors,
                                email: undefined,
                            }));
                        }}
                    />
                </div>

                <fieldset className="mt-[22px] border-0 p-0" id="engagementType">
                    <legend className="mb-2 text-[15px] font-semibold text-[#0b0f17]">
                        Engagement Type <span aria-hidden="true">*</span>
                    </legend>
                    <div className="grid gap-3">
                        {(["PAYE", "CIS"] as const).map((option) => {
                            const isSelected = engagementType === option;

                            return (
                                <button
                                    key={option}
                                    type="button"
                                    role="radio"
                                    aria-checked={isSelected}
                                    className={cn(
                                        "flex h-[52px] w-full items-center gap-3 rounded-xl border border-[#d7dce4] bg-white px-4 text-left text-base font-semibold text-[#0b0f17] transition hover:border-[#9db8e8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0b6bff]",
                                        isSelected && "border-[#0b6bff] bg-[#eef5ff] ring-1 ring-[#0b6bff]",
                                        errors.engagementType && "border-[#b42318]",
                                    )}
                                    onClick={() => {
                                        setEngagementType(option);
                                        setErrors((currentErrors) => ({
                                            ...currentErrors,
                                            engagementType: undefined,
                                        }));
                                    }}
                                >
                                    <span
                                        className={cn(
                                            "h-5 w-5 rounded-full border-2 border-[#9aa4b2] bg-white",
                                            isSelected && "border-[#0b6bff] bg-[radial-gradient(circle,#0b6bff_0_45%,#fff_50%)]",
                                        )}
                                        aria-hidden="true"
                                    />
                                    {option}
                                </button>
                            );
                        })}
                    </div>
                    {errors.engagementType && (
                        <p className="mt-2 text-sm font-semibold text-[#b42318]" role="alert">
                            {errors.engagementType}
                        </p>
                    )}
                </fieldset>

                <FileDropzone
                    id="identification"
                    title="Identification"
                    hint="Passport or other identification document."
                    files={identification}
                    error={errors.identification}
                    inputRef={identificationInputRef}
                    activeDropzone={activeDropzone}
                    onAddFiles={addFiles}
                    onRemoveFile={removeFile}
                    onSetActiveDropzone={setActiveDropzone}
                />

                <FileDropzone
                    id="positionDocuments"
                    title="Documents Relevant to the Position"
                    hint="Example: Driving Licence, Qualifications, Cards (CPCS, Gold), DBS"
                    files={positionDocuments}
                    error={errors.positionDocuments}
                    inputRef={positionDocumentsInputRef}
                    activeDropzone={activeDropzone}
                    onAddFiles={addFiles}
                    onRemoveFile={removeFile}
                    onSetActiveDropzone={setActiveDropzone}
                />

                <div className="mt-[22px] flex items-center gap-3.5 rounded-xl bg-[#f4f6f9] px-4 py-3 text-sm font-medium text-[#0b0f17]">
                    <LockKeyhole className="h-[26px] w-[26px] shrink-0" aria-hidden="true" />
                    Your information is secure.
                </div>
                <p className="mx-0.5 mt-2.5 text-[13px] leading-snug text-[#5b6474]">
                    We use your information to find you work, as explained in our{" "}
                    <a
                        href="https://www.rd1.co.uk/privacy-policy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#0b0f17] underline underline-offset-2"
                    >
                        Privacy Notice
                    </a>
                    .
                </p>

                {formError && (
                    <div
                        className="mt-4 flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 p-3 text-sm font-semibold text-[#b42318]"
                        role="alert"
                    >
                        <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                        <p className="text-[#b42318]">{formError}</p>
                    </div>
                )}

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-5 flex h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-[#0b6bff] px-4 text-base font-semibold text-white shadow-sm transition hover:bg-[#075ad6] active:scale-[.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0b6bff] disabled:cursor-progress disabled:opacity-80"
                >
                    {isSubmitting && (
                        <span className="h-[18px] w-[18px] animate-spin rounded-full border-[2.5px] border-white/40 border-t-white" />
                    )}
                    {isSubmitting ? "Submitting..." : "Submit Documents"}
                </button>
            </form>

            <FormFooter />
        </main>
    );
};

type TextFieldProps = {
    id: "fullName" | "mobileNumber" | "email";
    label: string;
    value: string;
    error?: string;
    placeholder: string;
    type?: React.HTMLInputTypeAttribute;
    autoComplete?: string;
    inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
    onChange: (value: string) => void;
};

const TextField = ({
    id,
    label,
    value,
    error,
    placeholder,
    type = "text",
    autoComplete,
    inputMode,
    onChange,
}: TextFieldProps) => (
    <div className="grid gap-1.5" id={id}>
        <label htmlFor={`${id}-input`} className="text-[15px] font-semibold text-[#0b0f17]">
            {label} <span aria-hidden="true">*</span>
        </label>
        <input
            id={`${id}-input`}
            type={type}
            value={value}
            autoComplete={autoComplete}
            inputMode={inputMode}
            placeholder={placeholder}
            className={cn(
                "h-12 w-full rounded-xl border border-[#d7dce4] bg-white px-3.5 text-base text-[#0b0f17] outline-none transition placeholder:text-[#8b93a1] focus:border-[#0b6bff] focus:outline focus:outline-2 focus:outline-offset-1 focus:outline-[#0b6bff]/30",
                error && "border-[#b42318]",
            )}
            onChange={(event) => onChange(event.target.value)}
            aria-invalid={!!error}
            aria-describedby={error ? `${id}-error` : undefined}
        />
        {error && (
            <p id={`${id}-error`} className="text-sm font-semibold text-[#b42318]" role="alert">
                {error}
            </p>
        )}
    </div>
);

const FormFooter = () => (
    <footer className="mt-8 border-t border-[#e5e8ee] pt-4 text-center text-[13px] font-semibold leading-snug text-[#0b0f17]">
        <span className="block">Recruitment Direct UK Ltd</span>
        <span className="block">Linlithgow, EH49 7SF</span>
        <span className="block">www.rd1.co.uk</span>
    </footer>
);

export default RDUKDocumentUploader;
