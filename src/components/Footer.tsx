import Link from "next/link";
import logo from "@/assets/call_pilot_logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    integrations: [
      { label: "Ashby", href: "/integrations/ashby/" },
      { label: "RecruitCRM", href: "/integrations/recruit-crm/" },
      { label: "JobAdder", href: "/integrations/jobadder/" },
      { label: "Greenhouse (Waitlist)", href: "/integrations/greenhouse/" },
      { label: "iCIMS (Waitlist)", href: "/integrations/icims/" },
      { label: "All ATS Integrations", href: "/integrations/" },
    ],
    product: [
      { label: "Features", href: "/features" },
      { label: "Use Cases", href: "/use-cases" },
      { label: "Pricing", href: "/pricing" },
      { label: "100 Free Credits Trial", href: "/free-trial/" },
      { label: "News & Releases", href: "/news/" },
      { label: "Blog & Guides", href: "/blog/" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-conditions" },
      { label: "Cookie Policy", href: "/cookie-policy" },
      { label: "Policies & Compliance", href: "/policy-compliance" },
    ],
    company: [
      { label: "About Us", href: "/about-us" },
      { label: "Contact & Onboarding", href: "/get-started" },
      { label: "Setup & Help Guide", href: "/setup-help-guide" },
    ],
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-10">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/">
              <img
                src={logo.src}
                alt="CallPilot logo"
                className="h-12 md:h-16 w-auto mb-4 object-contain"
                width={logo.width}
                height={logo.height}
              />
            </Link>
            
            <p className="text-sm text-muted-text mb-4 leading-relaxed">
              AI voice screening calls that qualify applicants in under 2 minutes, collect ID documents via WhatsApp, and sync into your ATS.
            </p>

            <div className="flex items-center gap-3 mt-4">
              <a
                href="https://www.linkedin.com/company/callpilot-ai-call/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-gray-700 hover:text-black transition-colors underline"
              >
                Follow on LinkedIn →
              </a>
            </div>
          </div>

          {/* ATS Integrations */}
          <div>
            <h4 className="font-semibold text-headline mb-4">ATS Integrations</h4>
            <ul className="space-y-2.5">
              {footerLinks.integrations.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-body hover:text-headline transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product & Resources */}
          <div>
            <h4 className="font-semibold text-headline mb-4">Platform &amp; Hub</h4>
            <ul className="space-y-2.5">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-body hover:text-headline transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-headline mb-4">Legal &amp; Trust</h4>
            <ul className="space-y-2.5">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-body hover:text-headline transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Address */}
          <div>
            <h4 className="font-semibold text-headline mb-4">Company</h4>
            <div className="space-y-1 text-sm text-body">
              <p className="font-medium text-headline">Swiftwave FZ-LLC</p>
              <p>Compass Building,</p>
              <p>Al Shohada Road,</p>
              <p>AL Hamra Industrial Zone-FZ,</p>
              <p>Ras Al Khaimah, UAE</p>
              <p className="text-xs text-muted-text mt-2">Registration: FAMC1471</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-text">
            © {currentYear} CallPilot. Operated by Swiftwave FZ-LLC. All rights reserved.
          </p>
          <div className="text-xs text-muted-text">
            100% automated screening calls • No call, no charge.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
