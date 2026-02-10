"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/call_pilot_logo.png";
import Link from "next/link";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Features", href: "/features" },
    { label: "Use Cases", href: "/use-cases" },
    { label: "Try It", href: "/try-it" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-26 lg:h-32">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img src={logo.src} alt="CallPilot.pro" className="h-24 md:h-32 lg:h-36 w-auto"/>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-body hover:text-headline transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="https://panel.callpilot.pro/login">
              <Button variant="ctaSecondary" size="default">
                Sign In
              </Button>
            </Link>
            
            
            <Link href="/get-started">
              <Button variant="cta" size="default">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-headline"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-body hover:text-headline transition-colors font-medium px-2 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-border">
                <Link href="/login">
                  <Button variant="ctaSecondary" size="lg" className="w-full">
                    Sign In
                  </Button>
                </Link>
                <Link href="/get-started" className="w-full">
                  <Button variant="cta" size="lg" className="w-full">
                    Get Started
                  </Button>
                </Link>
                
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
