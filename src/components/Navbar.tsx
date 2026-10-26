"use strict";
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { 
  Phone, 
  MapPin, 
  Coffee, 
  Menu as MenuIcon, 
  X, 
  ChevronRight, 
  Instagram, 
  Facebook, 
  MessageCircle, 
  Sparkles,
  ArrowUpRight
} from "lucide-react";
import { SITE_CONFIG } from "@/data/siteData";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Our Story", href: "/about" },
    { name: "Menu", href: "/menu" },
    { name: "Locations", href: "/locations" },
    { name: "Gallery", href: "/gallery" },
    { name: "Franchise", href: "/franchise", highlight: true },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Notification / Utility Bar */}
      <div className={`w-full bg-espresso text-cream-200 text-xs py-2 px-4 transition-all duration-300 border-b border-white/5 ${isScrolled ? "hidden md:hidden" : "block"}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="flex items-center text-saffron font-medium">
              <Sparkles className="w-3.5 h-3.5 mr-1.5 animate-pulse" />
              Celebrating 9Tea's Week — Every Month-End Special!
            </span>
            <span className="hidden lg:inline-block text-cream-400">|</span>
            <span className="hidden lg:inline-block text-cream-300">
              8+ Outlets Across Maharashtra & UP
            </span>
          </div>

          <div className="flex items-center space-x-6">
            <a 
              href={`tel:${SITE_CONFIG.headOffice.phone}`}
              className="flex items-center hover:text-saffron transition-colors"
            >
              <Phone className="w-3.5 h-3.5 mr-1.5 text-saffron" />
              <span>{SITE_CONFIG.headOffice.phone}</span>
            </a>
            <div className="hidden sm:flex items-center space-x-3 text-cream-300">
              <a 
                href={SITE_CONFIG.socialLinks.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-saffron transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a 
                href={SITE_CONFIG.socialLinks.facebook} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-saffron transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a 
                href={SITE_CONFIG.socialLinks.whatsapp} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-saffron transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav 
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? "bg-espresso/95 backdrop-blur-md shadow-2xl py-3 border-b border-cream/10" 
            : "bg-espresso/90 backdrop-blur-sm py-4 border-b border-cream/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-saffron shadow-md bg-white p-0.5 group-hover:scale-105 transition-transform duration-300">
              <Image 
                src="/images/9teascafe-logo.jpg" 
                alt="9Teas Cafe Logo" 
                fill
                className="object-cover rounded-full"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-editorial text-xl sm:text-2xl font-bold tracking-wider text-cream-50 group-hover:text-saffron transition-colors">
                9Tea's Cafe
              </span>
              <span className="text-[10px] tracking-[0.25em] uppercase text-saffron font-medium">
                Back To The 90s
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-3.5 py-2 text-sm font-medium tracking-wide transition-all duration-200 rounded-lg ${
                    isActive 
                      ? "text-saffron font-semibold bg-white/5" 
                      : "text-cream-200 hover:text-white hover:bg-white/5"
                  } ${link.highlight ? "text-saffron-light" : ""}`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-saffron rounded-full animate-fadeIn" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop Action CTAs */}
          <div className="hidden md:flex items-center space-x-3">
            <Link
              href="/locations"
              className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-cream-200 hover:text-white border border-cream/20 hover:border-cream/50 px-4 py-2.5 rounded-full transition-all duration-200 hover:bg-white/5"
            >
              <MapPin className="w-3.5 h-3.5 mr-1.5 text-saffron" />
              Find a Cafe
            </Link>

            <Link
              href="/franchise"
              className="btn-primary-glow inline-flex items-center text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-saffron to-saffron-light text-white px-5 py-2.5 rounded-full shadow-lg hover:shadow-saffron/30 transition-all duration-200 group"
            >
              <span>Get Franchise</span>
              <ArrowUpRight className="w-4 h-4 ml-1.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden space-x-2">
            <Link
              href="/franchise"
              className="text-[11px] font-bold uppercase tracking-wider bg-saffron text-white px-3 py-1.5 rounded-full"
            >
              Franchise
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-cream-200 hover:text-white hover:bg-white/10 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-saffron" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[60px] bg-espresso/98 backdrop-blur-xl z-40 md:hidden flex flex-col justify-between p-6 overflow-y-auto animate-fadeIn border-t border-white/10">
          <div className="space-y-3 pt-2">
            <div className="text-xs uppercase tracking-[0.2em] text-saffron font-bold mb-3 px-3">
              Navigation
            </div>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-medium transition-all ${
                    isActive
                      ? "bg-saffron/20 text-saffron border border-saffron/30"
                      : "text-cream-200 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <span className="flex items-center">
                    {link.name === "Menu" && <Coffee className="w-4 h-4 mr-3 text-saffron" />}
                    {link.name === "Locations" && <MapPin className="w-4 h-4 mr-3 text-saffron" />}
                    {link.name}
                  </span>
                  <ChevronRight className="w-4 h-4 text-cream-400" />
                </Link>
              );
            })}
          </div>

          <div className="pt-6 border-t border-white/10 space-y-3">
            <Link
              href="/franchise"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center py-3.5 rounded-xl bg-gradient-to-r from-saffron to-saffron-light text-white font-bold text-sm tracking-wider uppercase shadow-xl"
            >
              <span>Explore Franchise Opportunity</span>
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </Link>

            <Link
              href="/locations"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center py-3.5 rounded-xl border border-cream/20 text-cream-100 font-semibold text-sm tracking-wider uppercase hover:bg-white/5"
            >
              <MapPin className="w-4 h-4 mr-2 text-saffron" />
              Locate Nearby Outlet
            </Link>

            <div className="flex justify-center space-x-6 pt-4 text-cream-300">
              <a href={SITE_CONFIG.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:text-saffron">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={SITE_CONFIG.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:text-saffron">
                <Facebook className="w-5 h-5" />
              </a>
              <a href={SITE_CONFIG.socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:text-saffron">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href={`tel:${SITE_CONFIG.headOffice.phone}`} className="p-2 bg-white/5 rounded-full hover:text-saffron">
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
