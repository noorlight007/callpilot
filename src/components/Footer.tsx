import logo from "@/assets/call_pilot_logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { label: "Features", href: "/features" },
      { label: "Use Cases", href: "/use-cases" },
      { label: "Pricing", href: "#pricing" },
    ],
    company: [
      { label: "About Us", href: "/about-us" },
      { label: "Contact", href: "/get-started" },
    ],
    resources: [
      { label: "Documentation", href: "#" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-conditions" },
      { label: "Cookie Policy", href: "/cookie-policy" },
      { label: "Policies & Compliance", href: "#"}
    ],
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-1">
            <img src={logo.src} alt="CallPilot.pro" className="h-12 w-auto mb-4" />
            <p className="text-sm text-muted-text mb-4">
              AI-powered voice technology for modern businesses.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-headline mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-body hover:text-headline transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-headline mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-body hover:text-headline transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-headline mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-body hover:text-headline transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Address */}
          <div>
            <h4 className="font-semibold text-headline mb-4">Address</h4>
            <div className="space-y-1 text-sm text-body">
              <p className="font-medium text-headline">Swiftwave FZ-LLC</p>
              <p>RAKEZ Business Zone,</p>
              <p>Al Nakheel Area,</p>
              <p>P.O. Box No. 10055,</p>
              <p>Ras Al Khaimah,</p>
              <p>United Arab Emirates</p>
            </div>
          </div>


        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-text">
            © 2026 CallPilot. Operated by Swiftwave FZ-LLC. All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
