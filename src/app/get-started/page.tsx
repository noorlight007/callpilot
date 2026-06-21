"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { countries } from "@/lib/countries";
import { getCountryCode } from "@/actions/geo";
import { cn } from "@/lib/utils";

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

// Interactive Custom Dropdown Select Component
interface CustomSelectProps {
  id: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (val: string) => void;
  placeholder: string;
  iconClass: string;
}

function CustomSelect({ id, value, options, onChange, placeholder, iconClass }: CustomSelectProps) {
  const [open, setOpen] = useState(false);
  const selectedOption = options.find((o) => o.value === value);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div
          id={id}
          className={cn("select-trigger-wrap", open && "active")}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              setOpen(!open);
            }
          }}
          style={{ cursor: "pointer" }}
        >
          <i className={iconClass}></i>
          <span className="selected-value">
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <i className={cn("fa-solid fa-chevron-down chev-arrow", open && "rotate-180")}></i>
        </div>
      </PopoverTrigger>
      <PopoverContent className="p-0 border-0 bg-transparent shadow-none w-auto" align="start" style={{ zIndex: 1000 }} sideOffset={6}>
        <div className="select-options-dropdown-portal">
          {options.map((option) => (
            <div
              key={option.value}
              className={cn("select-option-item", value === option.value && "selected")}
              onClick={() => {
                onChange(option.value);
                setOpen(false);
              }}
            >
              <span className="option-label">{option.label}</span>
              {value === option.value && (
                <i className="fa-solid fa-check option-check"></i>
              )}
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}

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

  const [countryIso, setCountryIso] = useState("US");
  const [mobileCountryIso, setMobileCountryIso] = useState("US");
  const [openPhoneCombobox, setOpenPhoneCombobox] = useState(false);
  const [openMobileCombobox, setOpenMobileCombobox] = useState(false);

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showErrorDialog, setShowErrorDialog] = useState(false);

  const fetchCountry = async () => {
    const code = await getCountryCode();
    if (code) {
      const detectedCountry = countries.find(
        (c) => c.code === code.toUpperCase()
      );
      if (detectedCountry) {
        setCountryIso(detectedCountry.code);
        setMobileCountryIso(detectedCountry.code);
        setFormData((prev) => ({
          ...prev,
          countryCode: detectedCountry.dial_code,
          mobileCountryCode: detectedCountry.dial_code,
        }));
      }
    }
  };

  useEffect(() => {
    fetchCountry();
  }, []);

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

  const currentPhoneCountry = countries.find(c => c.code === countryIso) || { flag: "🇺🇸", dial_code: "+1" };
  const currentMobileCountry = countries.find(c => c.code === mobileCountryIso) || { flag: "🇬🇧", dial_code: "+44" };

  return (
    <div className="page-shell-wrapper">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" rel="stylesheet" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />

      <style dangerouslySetInnerHTML={{
        __html: `
        :root{
          --navy:#071842;
          --ink:#0a1b43;
          --muted:#62739e;
          --blue:#005bff;
          --blue2:#00b8ff;
          --line:#dce7f7;
          --green:#17d493;
          --panel-radius:26px;
        }

        .page-shell-wrapper {
          height: 100vh;
          margin: 0;
          font-family: "Inter", system-ui, -apple-system, Segoe UI, sans-serif;
          color: var(--ink);
          background:
            radial-gradient(circle at 100% 46%, rgba(219,230,255,.95) 0 10%, transparent 21%),
            radial-gradient(circle at 4% 11%, rgba(224,236,255,.9), transparent 22%),
            linear-gradient(132deg,#f8fbff 0%,#eef5ff 44%,#f7fbff 100%);
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .page-shell-wrapper::before,
        .page-shell-wrapper::after{
          content:"";
          position:fixed;
          pointer-events:none;
          z-index:0;
        }
        .page-shell-wrapper::before{
          width:170px;height:260px;right:22px;bottom:54px;
          background-image:radial-gradient(circle,rgba(0,91,255,.18) 1.5px,transparent 2px);
          background-size:18px 18px;
          animation:driftDots 9s ease-in-out infinite alternate;
        }
        .page-shell-wrapper::after{
          width:680px;height:680px;right:-290px;top:-155px;border-radius:50%;
          background:rgba(255,255,255,.62);
          box-shadow:-70px 130px 180px rgba(24,76,170,.1) inset;
        }

        .page-shell{
          position:relative;
          z-index:1;
          width:min(91.5vw,1390px);
          height:min(94vh,900px);
          margin:0 auto;
          display:grid;
          grid-template-columns: .71fr 1fr;
          filter:drop-shadow(0 26px 50px rgba(18,52,112,.12));
          animation:pageIn .75s cubic-bezier(.2,.8,.2,1) both;
          overflow: hidden;
        }

        .brand-side{
          position:relative;
          overflow:hidden;
          min-height:0;
          padding:clamp(28px,4.5vh,58px) clamp(30px,4vw,72px);
          color:#fff;
          border-radius:var(--panel-radius) 0 0 var(--panel-radius);
          background:
            radial-gradient(circle at 19% 11%,rgba(0,225,255,.55) 0 2px,transparent 5px),
            radial-gradient(circle at 75% 31%,rgba(55,237,255,.9) 0 4px,transparent 6px),
            radial-gradient(circle at 10% 36%,rgba(35,205,255,.9) 0 7px,transparent 9px),
            radial-gradient(circle at 93% 43%,rgba(66,234,255,.9) 0 3px,transparent 5px),
            linear-gradient(132deg,#06126d 0%,#063ac5 48%,#0099ff 100%);
        }
        .brand-side::before{
          content:"";position:absolute;inset:-6%;
          background:
            radial-gradient(circle at 10% 14%,rgba(255,255,255,.14),transparent 12%),
            radial-gradient(circle at 84% 12%,rgba(255,255,255,.08),transparent 20%),
            linear-gradient(120deg,transparent 0 27%,rgba(255,255,255,.06) 27.2% 35%,transparent 35.5% 100%);
          animation:slowShine 12s ease-in-out infinite alternate;
        }
        .brand-side::after{
          content:"";position:absolute;left:-130px;right:-70px;bottom:-130px;height:360px;
          background:
            repeating-radial-gradient(ellipse at 52% 100%,transparent 0 15px,rgba(45,216,255,.22) 16px 17px,transparent 18px 31px),
            radial-gradient(ellipse at 60% 100%,rgba(0,255,255,.3),transparent 52%);
          transform:rotate(-7deg);
        }

        .network{position:absolute;inset:0;opacity:.7;z-index:1;}
        .network i{position:absolute;width:7px;height:7px;background:#15ddff;border-radius:50%;box-shadow:0 0 20px #15ddff;animation:pulse 2.7s infinite ease-in-out;}
        .network i:nth-child(1){left:18%;top:10%}.network i:nth-child(2){left:30%;top:31%;animation-delay:.4s}.network i:nth-child(3){left:77%;top:34%;animation-delay:.8s}.network i:nth-child(4){left:86%;top:44%;animation-delay:1.2s}
        .network span{position:absolute;height:1px;background:linear-gradient(90deg,transparent,rgba(67,211,255,.62),transparent);transform-origin:left center;animation:lineGlow 4s infinite alternate;}
        .network span:nth-of-type(1){left:18%;top:17%;width:45%;transform:rotate(-13deg)}
        .network span:nth-of-type(2){left:16%;top:35%;width:37%;transform:rotate(29deg)}
        .network span:nth-of-type(3){left:40%;top:36%;width:42%;transform:rotate(-24deg)}

        .brand-content{position:relative;z-index:2;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;gap:clamp(17px,2.6vh,30px)}

        .hero-badge{
          width:clamp(250px,32vh,350px);
          height:auto;
          
          animation:none;
        }
        .hex{width:100%;height:100%;position:relative;display:grid;place-items:center;}
        .hex::before,.hex::after{content:"";position:absolute;inset:0;clip-path:polygon(25% 5%,75% 5%,100% 50%,75% 95%,25% 95%,0 50%)}
        .hex::before{background:#fff;}
        .hex::after{inset:10px;background:linear-gradient(145deg,#eef7ff,#fff 44%,#bfddff);box-shadow:inset 0 -16px 24px rgba(0,78,205,.16)}
        .hex-inner{position:relative;z-index:2;width:72%;height:72%;}
        .phone-icon{position:absolute;left:7%;bottom:12%;font-size:clamp(47px,7.2vh,76px);color:#0864ec;transform:rotate(-23deg);text-shadow:0 8px 10px rgba(0,70,180,.23)}
        .bars{position:absolute;right:5%;bottom:17%;display:flex;align-items:flex-end;gap:8px;height:70%;}
        .bars b{width:14px;border-radius:3px;background:linear-gradient(#43d6ff,#0566ee);box-shadow:0 5px 10px rgba(0,91,255,.25);animation:barBounce 1.7s ease-in-out infinite alternate;}
        .bars b:nth-child(1){height:36%;animation-delay:.1s}.bars b:nth-child(2){height:58%;animation-delay:.35s}.bars b:nth-child(3){height:78%;animation-delay:.6s}
        .mesh{position:absolute;left:37%;top:10%;width:47%;height:57%;}
        .mesh::before{content:"";position:absolute;inset:0;background:radial-gradient(circle,#0476ff 0 3px,transparent 4px);background-size:29px 24px;opacity:.8}
        .mesh::after{content:"";position:absolute;inset:3px;border:1px solid rgba(8,105,233,.4);clip-path:polygon(0 25%,40% 0,90% 20%,100% 65%,62% 100%,16% 78%)}

        .orbit-icon{position:absolute;z-index:2;width:58px;height:58px;border-radius:50%;display:grid;place-items:center;color:#fff;background:linear-gradient(145deg,rgba(96,183,255,.9),rgba(15,66,216,.82));box-shadow:inset 0 1px 0 rgba(255,255,255,.45),0 16px 35px rgba(0,31,134,.28);backdrop-filter:blur(7px);animation:floatSmall 4.5s ease-in-out infinite;}
        .orbit-icon.phone{left:8%;top:22%;}.orbit-icon.chart{right:12%;top:27%;animation-delay:1.1s}

        .wordmark{line-height:1;margin-top:.2vh;}
        .wordmark h1{margin:0;font-size:clamp(44px,7.2vh,82px);font-weight:900;letter-spacing:-.06em;text-shadow:0 12px 24px rgba(0,0,0,.14)}
        .wordmark h1 span{background:linear-gradient(90deg,#e8f5ff 0 36%,#28dbff 58%,#0f92ff 100%);-webkit-background-clip:text;background-clip:text;color:transparent;}
        .wordmark p{margin:12px 0 0;letter-spacing:.42em;font-size:clamp(11px,1.45vh,18px);font-weight:500;color:rgba(255,255,255,.9)}
        .wordmark p::before,.wordmark p::after{content:"";display:inline-block;width:34px;height:1px;background:rgba(255,255,255,.75);vertical-align:middle;margin:0 14px 4px 0}.wordmark p::after{margin:0 0 4px 14px}

        .tagline h2{font-size:clamp(24px,3.1vh,34px);font-weight:800;margin:0 0 10px}.tagline p{font-size:clamp(15px,1.9vh,21px);color:rgba(255,255,255,.82);margin:0}
        .feature-card{width:min(100%,420px);padding:clamp(15px,2.2vh,28px);border:1px solid rgba(255,255,255,.24);background:linear-gradient(145deg,rgba(255,255,255,.17),rgba(255,255,255,.07));border-radius:16px;backdrop-filter:blur(14px);box-shadow:0 22px 48px rgba(0,0,0,.11);text-align:left}
        .feature{display:flex;align-items:center;gap:18px;margin:0 0 clamp(12px,1.65vh,21px)}.feature:last-child{margin-bottom:0}
        .feature .bubble{flex:0 0 clamp(44px,5.4vh,58px);height:clamp(44px,5.4vh,58px);border-radius:50%;display:grid;place-items:center;font-size:clamp(18px,2.4vh,25px);box-shadow:inset 0 1px 0 rgba(255,255,255,.35),0 13px 25px rgba(0,0,0,.13)}
        .feature:nth-child(1) .bubble{background:linear-gradient(145deg,#38d8ff,#0d71ff)}.feature:nth-child(2) .bubble{background:linear-gradient(145deg,#8f5cff,#4932e6)}.feature:nth-child(3) .bubble{background:linear-gradient(145deg,#43e4b4,#18b681)}
        .feature h3{font-size:clamp(15px,1.75vh,20px);font-weight:800;margin:0 0 4px}.feature p{margin:0;color:rgba(255,255,255,.84);font-size:clamp(12px,1.35vh,15px)}

        .form-side{
          min-height:0;
          background:rgba(255,255,255,.92);
          border-radius:0 var(--panel-radius) var(--panel-radius) 0;
          padding:clamp(26px,3.6vh,42px) clamp(36px,4.3vw,58px);
          box-shadow:inset 0 1px 0 rgba(255,255,255,.9);
          backdrop-filter:blur(15px);
          display:flex;
          flex-direction:column;
          overflow: hidden;
        }
        .topbar{display:flex;align-items:center;justify-content:space-between;margin-bottom:clamp(15px,2vh,24px);}
        .mini-logo{display:flex;align-items:center;gap:12px;font-size:clamp(22px,2.5vh,31px);font-weight:800;letter-spacing:-.045em}.mini-logo span span{color:#0774ff}.logo-mark{width:42px;height:42px;border-radius:12px;background:linear-gradient(145deg,#e8f5ff,#70c7ff);border:4px solid #0667ef;box-shadow:inset 0 -7px 12px rgba(0,86,210,.18),0 9px 19px rgba(0,91,255,.13);position:relative;clip-path:polygon(25% 3%,75% 3%,100% 50%,75% 97%,25% 97%,0 50%)}.logo-mark::after{content:"";position:absolute;inset:10px;background:radial-gradient(circle,#005bff 1px,transparent 2px);background-size:7px 7px;opacity:.75}
        .signin{font-size:14px;color:#13264d}.signin a{text-decoration:none;color:#075cff;font-weight:700;margin-left:7px}.signin i{margin-left:8px;transition:.25s}.signin a:hover i{transform:translateX(5px)}
        .form-title h2{font-size:clamp(32px,4.2vh,46px);font-weight:900;line-height:.96;letter-spacing:-.065em;margin:0}.form-title h2 span{color:#075cff}
        .underline{width:170px;height:4px;border-radius:999px;background:linear-gradient(90deg,#095dff,#00b5ff);margin:8px 0 9px}.form-title p{margin:0;color:#5a6e9d;font-size:clamp(14px,1.6vh,16px)}.form-title b{color:#075cff}
        
        form{
          margin-top:clamp(15px,2.2vh,26px);
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:clamp(11px,1.45vh,17px) 26px;
          flex:1;
          align-content:start;
          overflow-y:auto;
          padding-right:12px;
          max-height: calc(100% - 110px);
        }

        form::-webkit-scrollbar {
          width: 6px;
        }
        form::-webkit-scrollbar-track {
          background: transparent;
        }
        form::-webkit-scrollbar-thumb {
          background: rgba(7, 92, 255, 0.2);
          border-radius: 999px;
        }
        form::-webkit-scrollbar-thumb:hover {
          background: rgba(7, 92, 255, 0.35);
        }

        .span-2{grid-column:1/-1}.field label{display:block;font-size:clamp(12px,1.33vh,15px);line-height:1.05;font-weight:750;color:#13264d;margin:0 0 8px}.field label small{font-size:1em;font-weight:600;color:#52648f}.input-wrap,.select-wrap,.phone-row .code{height:clamp(42px,5.1vh,54px);border:1px solid var(--line);border-radius:9px;background:#fff;box-shadow:0 7px 20px rgba(18,74,153,.045),inset 0 1px 0 rgba(255,255,255,.9);display:flex;align-items:center;transition:.25s ease;}.input-wrap:focus-within,.select-wrap:focus-within,.phone-row .code:hover{border-color:#7db6ff;box-shadow:0 0 0 4px rgba(0,102,255,.09),0 9px 20px rgba(18,74,153,.06);transform:translateY(-1px)}
        .input-wrap i,.select-wrap i,.code i:first-child{width:46px;text-align:center;color:#55709f;font-size:clamp(14px,1.55vh,17px)}
        input,select{border:0;outline:0;background:transparent;width:100%;height:100%;font:600 clamp(13px,1.48vh,16px)/1 "Inter",sans-serif;color:#576b99;padding:0 14px 0 0}input::placeholder{color:#536a99}.phone-row{display:grid;grid-template-columns:120px 1fr;gap:14px}
        .code{display:flex;flex-direction:row;align-items:center;justify-content:space-between;width:100%;gap:3px;padding:0 12px;white-space:nowrap;}
        .flag{font-size:23px;line-height:1;padding-bottom: 3px;}
        .code strong{font-size:15px;line-height:1}
        .code .fa-chevron-down{color:#57729d;font-size:12px;margin:0}.select-wrap select{appearance:none;color:#62739e;font-weight:600}.select-wrap .chev{margin-left:auto;margin-right:18px;color:#55709f}.submit-btn{height:clamp(48px,5.7vh,61px);border:0;border-radius:9px;color:#fff;font-weight:800;font-size:clamp(15px,1.75vh,18px);background:linear-gradient(90deg,#0057ff,#0b9dff);box-shadow:0 14px 25px rgba(0,91,255,.22);transition:.24s ease;position:relative;overflow:hidden}.submit-btn::before{content:"";position:absolute;inset:0;background:linear-gradient(100deg,transparent 0 38%,rgba(255,255,255,.34) 50%,transparent 62%);transform:translateX(-120%);transition:.65s}.submit-btn:hover{transform:translateY(-2px);box-shadow:0 20px 31px rgba(0,91,255,.28)}.submit-btn:hover::before{transform:translateX(120%)}.submit-btn i{margin-right:12px;font-size:20px;transform:rotate(-9deg)}
        .privacy{grid-column:1/-1;text-align:center;color:#65739a;font-size:clamp(11px,1.25vh,14px);margin-top:0}.privacy i{color:var(--green);margin-right:7px}.privacy a{font-weight:800;color:#075cff;text-decoration:none}

        /* Beautiful interactive custom dropdown select */
        .custom-select-container {
          position: relative;
          width: 100%;
        }
        .select-trigger-wrap {
          height: clamp(42px,5.1vh,54px);
          border: 1px solid var(--line);
          border-radius: 9px;
          background: #fff;
          box-shadow: 0 7px 20px rgba(18,74,153,.045), inset 0 1px 0 rgba(255,255,255,.9);
          display: flex;
          align-items: center;
          padding: 0 18px 0 0;
          cursor: pointer;
          transition: .25s ease;
        }
        .select-trigger-wrap:hover, .select-trigger-wrap.active {
          border-color: #7db6ff;
          box-shadow: 0 0 0 4px rgba(0,102,255,.09), 0 9px 20px rgba(18,74,153,.06);
          transform: translateY(-1px);
        }
        .select-trigger-wrap i:first-child {
          width: 46px;
          text-align: center;
          color: #55709f;
          font-size: clamp(14px, 1.55vh, 17px);
        }
        .selected-value {
          font: 600 clamp(13px, 1.48vh, 16px)/1 "Inter", sans-serif;
          color: #576b99;
          flex-grow: 1;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .chev-arrow {
          color: #55709f;
          font-size: 12px;
          transition: transform 0.25s ease;
        }
        .chev-arrow.rotate-180 {
          transform: rotate(180deg);
        }
        .select-backdrop {
          position: fixed;
          inset: 0;
          z-index: 99;
        }
        .select-options-dropdown-portal {
          background: #ffffff;
          border: 1px solid var(--line);
          border-radius: 12px;
          box-shadow: 0 15px 35px rgba(18,52,112,.15);
          max-height: 250px;
          overflow-y: auto;
          padding: 6px;
          width: var(--radix-popover-trigger-width);
          animation: dropdownIn 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .select-options-dropdown-portal::-webkit-scrollbar {
          width: 4px;
        }
        .select-options-dropdown-portal::-webkit-scrollbar-track {
          background: transparent;
        }
        .select-options-dropdown-portal::-webkit-scrollbar-thumb {
          background: rgba(0, 91, 255, 0.15);
          border-radius: 10px;
        }

        .select-option-item {
          padding: 10px 14px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          color: #576b99;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: all 0.15s ease;
          margin-bottom: 2px;
        }
        .select-option-item:last-child {
          margin-bottom: 0;
        }
        .select-option-item:hover {
          background: rgba(0, 91, 255, 0.06);
          color: #005bff;
        }
        .select-option-item.selected {
          background: linear-gradient(90deg, #0057ff, #0b9dff);
          color: #ffffff;
        }
        .option-check {
          font-size: 12px;
        }

        @keyframes dropdownIn {
          from {
            opacity: 0;
            transform: translateY(-8px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes pageIn{from{opacity:0;transform:translateY(18px) scale(.985)}to{opacity:1;transform:none}}
        @keyframes floatBadge{0%,100%{transform:translateY(0)}50%{transform:translateY(-13px)}}
        @keyframes floatSmall{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
        @keyframes pulse{0%,100%{opacity:.55;transform:scale(.86)}50%{opacity:1;transform:scale(1.25)}}
        @keyframes lineGlow{from{opacity:.32}to{opacity:.88}}
        @keyframes slowShine{from{transform:translateX(-1%) translateY(-1%)}to{transform:translateX(1.5%) translateY(1.5%)}}
        @keyframes barBounce{to{transform:scaleY(.82)}}
        @keyframes driftDots{to{transform:translateY(-25px)}}

        @media (max-width:1050px){
          .page-shell-wrapper{
            overflow-y:auto;
            height:auto;
            padding: 24px 0;
          }
          .page-shell{
            height:auto;
            min-height:94vh;
            grid-template-columns:1fr;
            margin:24px auto;
            overflow: visible;
          }
          .brand-side{
            display: none;
          }
          .form-side{
            border-radius: var(--panel-radius);
            overflow: visible;
          }
          form {
            max-height: none;
            overflow-y: visible;
            padding-right: 0;
          }
        }
        @media (max-width:720px){
          .page-shell{width:94vw;margin:16px auto}.brand-side{min-height:490px;padding:28px 20px}.form-side{padding:28px 20px}.topbar{align-items:flex-start;gap:10px}.signin{font-size:12px}form{grid-template-columns:1fr;gap:14px}.span-2{grid-column:auto}.phone-row{grid-template-columns:120px 1fr}.wordmark p{letter-spacing:.22em}.feature-card{display:none}
        }
        @media (max-width: 480px) {
          .page-shell {
            width: 96vw;
            margin: 12px auto;
          }
          .brand-side, .form-side {
            padding: 24px 16px;
          }
          .phone-row {
            grid-template-columns: 110px 1fr;
            gap: 8px;
          }
          .wordmark h1 {
            font-size: 38px;
          }
          .tagline h2 {
            font-size: 22px;
          }
        }
        @media (max-height:760px) and (min-width:1051px){
          .page-shell{height:96vh;margin:2vh auto}.brand-side{padding-top:24px;padding-bottom:24px}.form-side{padding-top:24px;padding-bottom:18px}.brand-content{gap:14px}.feature-card{padding:16px}.feature{gap:13px;margin-bottom:12px}.feature .bubble{flex-basis:44px;height:44px}.topbar{margin-bottom:15px}form{gap:9px 22px;margin-top:18px}.privacy{font-size:11px}.orbit-icon{width:48px;height:48px}.phone-row{grid-template-columns:158px 1fr}
        }
      ` }} />

      <main className="page-shell" aria-label="CallPilot sign up page">
        <section className="brand-side">
          <div className="network" aria-hidden="true"><i></i><i></i><i></i><i></i><span></span><span></span><span></span></div>
          <div className="orbit-icon phone"><i className="fa-solid fa-phone-volume"></i></div>
          <div className="orbit-icon chart"><i className="fa-solid fa-chart-simple"></i></div>

          <div className="brand-content">
            <div className="hero-badge" aria-hidden="true">
              <img
                src="/adjusted_callPilot_logo.png"
                alt="CallPilot Logo"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </div>

            <div className="wordmark">
              <h1>Call<span>Pilot</span></h1>
              <p>AI PHONE CALLS</p>
            </div>

            <div className="tagline">
              <h2>Let AI handle your calls.</h2>
              <p>Save time. Close more. Grow faster.</p>
            </div>

            <div className="feature-card">
              <div className="feature">
                <div className="bubble"><i className="fa-solid fa-wand-magic-sparkles"></i></div>
                <div><h3>AI-Powered Calls</h3><p>Smart conversations that convert.</p></div>
              </div>
              <div className="feature">
                <div className="bubble"><i className="fa-solid fa-chart-column"></i></div>
                <div><h3>Real-time Insights</h3><p>Track performance and stay ahead.</p></div>
              </div>
              <div className="feature">
                <div className="bubble"><i className="fa-solid fa-shield-halved"></i></div>
                <div><h3>Secure &amp; Reliable</h3><p>Your data is safe with us.</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="form-side">
          <div className="topbar">
            <div className="signin">
              <i className="fa-solid fa-arrow-left"></i> <Link href="/">Website</Link>
            </div>
            <div className="signin">
              Already have an account?{" "}
              <Link href="https://panel.callpilot.pro/login">
                Sign in <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>

          <div className="form-title">
            <h2>
              {isSubmitted ? "Thank You!" : <span>Get Started</span>}
            </h2>
            <div className="underline"></div>
            <p>
              {isSubmitted
                ? "Your request has been received. Our team will contact you shortly."
                : <>Fill out the form and <b>our team</b> will contact you shortly.</>}
            </p>
          </div>

          {isSubmitted ? (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", textAlign: "center", padding: "40px 0" }}>
              <div style={{ fontSize: "60px", color: "var(--green)", marginBottom: "20px" }}>
                <i className="fa-regular fa-circle-check"></i>
              </div>
              <h2 style={{ fontSize: "2rem", fontWeight: "800", marginBottom: "15px", color: "var(--navy)" }}>Submission Successful</h2>
              <p style={{ color: "var(--muted)", maxWidth: "360px", marginBottom: "30px", fontSize: "16px" }}>
                We've received your information and our team will contact you shortly.
              </p>
              <Link
                href="/"
                className="submit-btn span-2 text-center d-flex align-items-center justify-content-center"
                style={{ textDecoration: "none", width: "100%", maxWidth: "300px" }}
              >
                <i className="fa-solid fa-arrow-left"></i> Back to Website
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="firstName">First name</label>
                <div className="input-wrap">
                  <i className="fa-regular fa-user"></i>
                  <input
                    id="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    placeholder="John"
                    aria-label="First name"
                  />
                </div>
              </div>

              <div className="field">
                <label htmlFor="lastName">Last name</label>
                <div className="input-wrap">
                  <i className="fa-regular fa-user"></i>
                  <input
                    id="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    placeholder="Doe"
                    aria-label="Last name"
                  />
                </div>
              </div>

              <div className="field">
                <label htmlFor="companyName">Company name</label>
                <div className="input-wrap">
                  <i className="fa-regular fa-building"></i>
                  <input
                    id="companyName"
                    type="text"
                    value={formData.companyName}
                    onChange={(e) => handleInputChange("companyName", e.target.value)}
                    placeholder="Acme Inc."
                    aria-label="Company name"
                  />
                </div>
              </div>

              <div className="field">
                <label htmlFor="companyWebsite">Company website</label>
                <div className="input-wrap">
                  <i className="fa-solid fa-globe"></i>
                  <input
                    id="companyWebsite"
                    type="text"
                    value={formData.companyWebsite}
                    onChange={(e) => handleInputChange("companyWebsite", e.target.value)}
                    placeholder="https://acme.com"
                    aria-label="Company website"
                  />
                </div>
              </div>

              <div className="field span-2">
                <label htmlFor="email">Email</label>
                <div className="input-wrap">
                  <i className="fa-regular fa-envelope"></i>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="john@company.com"
                    aria-label="Email"
                  />
                </div>
              </div>

              <div className="field">
                <label htmlFor="phone">Phone number <small>(optional)</small></label>
                <div className="phone-row">
                  <Popover open={openPhoneCombobox} onOpenChange={setOpenPhoneCombobox}>
                    <PopoverTrigger asChild>
                      <div className="code" role="button" style={{ cursor: "pointer" }}>
                        <span className="flag">{currentPhoneCountry.flag}</span>
                        <strong>{currentPhoneCountry.dial_code}</strong>
                        <i className="fa-solid fa-chevron-down"></i>
                      </div>
                    </PopoverTrigger>
                    <PopoverContent className="w-[338px] sm:w-[252px] p-0">
                      <Command>
                        <CommandInput placeholder="Search country & country code..." />
                        <CommandList>
                          <CommandEmpty>No country found.</CommandEmpty>
                          <CommandGroup>
                            {countries.map((country) => (
                              <CommandItem
                                key={country.code}
                                value={`${country.name} ${country.dial_code} ${country.flag} ${country.code}`}
                                onSelect={() => {
                                  setCountryIso(country.code);
                                  handleInputChange("countryCode", country.dial_code);
                                  setOpenPhoneCombobox(false);
                                }}
                                className="group"
                              >
                                <div className="flex items-center gap-2 w-full">
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
                  <div className="input-wrap">
                    <i className="fa-solid fa-phone"></i>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phoneNumber}
                      onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                      placeholder="123 456 7890"
                      aria-label="Phone number"
                    />
                  </div>
                </div>
              </div>

              <div className="field">
                <label htmlFor="mobile">Mobile number <small>(optional)</small></label>
                <div className="phone-row">
                  <Popover open={openMobileCombobox} onOpenChange={setOpenMobileCombobox}>
                    <PopoverTrigger asChild>
                      <div className="code" role="button" style={{ cursor: "pointer" }}>
                        <span className="flag">{currentMobileCountry.flag}</span>
                        <strong>{currentMobileCountry.dial_code}</strong>
                        <i className="fa-solid fa-chevron-down"></i>
                      </div>
                    </PopoverTrigger>
                    <PopoverContent className="w-[338px] sm:w-[252px] p-0">
                      <Command>
                        <CommandInput placeholder="Search country & country code..." />
                        <CommandList>
                          <CommandEmpty>No country found.</CommandEmpty>
                          <CommandGroup>
                            {countries.map((country) => (
                              <CommandItem
                                key={country.code}
                                value={`${country.name} ${country.dial_code} ${country.flag} ${country.code}`}
                                onSelect={() => {
                                  setMobileCountryIso(country.code);
                                  handleInputChange("mobileCountryCode", country.dial_code);
                                  setOpenMobileCombobox(false);
                                }}
                                className="group"
                              >
                                <div className="flex items-center gap-2 w-full">
                                  <span className="text-nowrap">{country.name}</span>
                                  <span className="text-muted-foreground whitespace-nowrap text-center group-data-[selected=true]:text-white transition-colors ml-auto">{country.dial_code}</span>
                                </div>
                                <Check
                                  className={cn(
                                    "ml-auto h-4 w-4 hidden",
                                    mobileCountryIso === country.code ? "opacity-100" : "opacity-0"
                                  )}
                                />
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                  <div className="input-wrap">
                    <i className="fa-solid fa-phone"></i>
                    <input
                      id="mobile"
                      type="tel"
                      value={formData.mobileNumber}
                      onChange={(e) => handleInputChange("mobileNumber", e.target.value)}
                      placeholder="123 456 7890"
                      aria-label="Mobile number"
                    />
                  </div>
                </div>
              </div>

              <div className="field">
                <label htmlFor="numberOfStaff">Number of Staff</label>
                <CustomSelect
                  id="numberOfStaff"
                  value={formData.numberOfStaff}
                  options={staffOptions}
                  onChange={(val) => handleInputChange("numberOfStaff", val)}
                  placeholder="Select number of staff"
                  iconClass="fa-solid fa-people-group"
                />
              </div>

              <div className="field">
                <label htmlFor="dailyCallVolume">Estimated Daily Call Volume</label>
                <CustomSelect
                  id="dailyCallVolume"
                  value={formData.dailyCallVolume}
                  options={callVolumeOptions}
                  onChange={(val) => handleInputChange("dailyCallVolume", val)}
                  placeholder="Select daily call volume"
                  iconClass="fa-solid fa-chart-simple"
                />
              </div>

              <div className="field span-2">
                <label htmlFor="businessCategory">Which area of your business will AI CallPilot support?</label>
                <CustomSelect
                  id="businessCategory"
                  value={formData.businessCategory}
                  options={businessCategoryOptions}
                  onChange={(val) => handleInputChange("businessCategory", val)}
                  placeholder="Select business category"
                  iconClass="fa-solid fa-briefcase"
                />
              </div>

              <button className="submit-btn span-2" type="submit" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <i className="fa-solid fa-spinner fa-spin"></i> Submitting...
                  </>
                ) : (
                  <>
                    <i className="fa-solid fa-paper-plane"></i> Submit &amp; Get Started
                  </>
                )}
              </button>

              <div className="privacy">
                <i className="fa-regular fa-shield-check"></i> By submitting, you agree to our{" "}
                <Link href="/terms-conditions" target="_blank">
                  Terms
                </Link>
                {" "}
                and{" "}
                <Link href="/privacy-policy" target="_blank">
                  privacy
                </Link>
                .
              </div>
            </form>
          )}
        </section>
      </main>

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
