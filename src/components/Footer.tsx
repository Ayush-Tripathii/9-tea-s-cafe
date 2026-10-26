"use strict";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Instagram, 
  Facebook, 
  MessageCircle, 
  ArrowUpRight, 
  Coffee, 
  Download,
  Sparkles
} from "lucide-react";
import { SITE_CONFIG } from "@/data/siteData";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream-200 border-t border-cream/10 relative overflow-hidden">
      {/* Subtle background radial glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-saffron/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-olive/15 rounded-full blur-3xl pointer-events-none" />

      {/* Top Banner inside footer */}
      <div className="border-b border-white/5 py-10 px-4 sm:px-6 lg:px-8 bg-espresso/60">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-saffron/20 rounded-2xl border border-saffron/30 text-saffron">
              <Sparkles className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h4 className="font-editorial text-xl sm:text-2xl text-white font-bold">
                Join the 9Teas Chai Revolution
              </h4>
              <p className="text-cream-300 text-sm">
                Franchise slots now open across high-footfall metro & suburban corridors.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={SITE_CONFIG.brochureUrl}
              download="9Teas-Cafe-Franchise-Brochure.pdf"
              className="inline-flex items-center text-xs font-bold uppercase tracking-wider bg-white/10 hover:bg-white/15 text-cream-100 border border-white/20 px-5 py-3 rounded-full transition-all duration-200"
            >
              <Download className="w-4 h-4 mr-2 text-saffron" />
              Download Brochure
            </a>
            <Link
              href="/franchise"
              className="btn-primary-glow inline-flex items-center text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-saffron to-saffron-light text-white px-6 py-3 rounded-full shadow-lg transition-all duration-200 group"
            >
              <span>Apply for Franchise</span>
              <ArrowUpRight className="w-4 h-4 ml-1.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-saffron shadow-lg bg-white p-0.5 group-hover:scale-105 transition-transform duration-300">
                <Image 
                  src="/images/9teascafe-logo.jpg" 
                  alt="9Teas Cafe Logo" 
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <div>
                <span className="font-editorial text-2xl font-bold text-white block">
                  9Tea's Cafe
                </span>
                <span className="text-xs tracking-[0.25em] uppercase text-saffron font-semibold">
                  Back To The 90s
                </span>
              </div>
            </Link>

            <p className="text-cream-300 text-sm leading-relaxed font-light">
              Crafting authentic Indian tea memories since 2019. Serving thousands of hand-brewed cups of Kulhad Chai, artisan pizzas, and 90s nostalgia across our multi-city franchise network.
            </p>

            <div className="pt-2">
              <span className="inline-block px-3 py-1 bg-saffron/15 text-saffron-light border border-saffron/30 rounded-full text-xs font-semibold tracking-wider uppercase">
                {SITE_CONFIG.slogan}
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-3 pt-2">
              <a 
                href={SITE_CONFIG.socialLinks.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-cream-300 hover:text-saffron hover:bg-white/10 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href={SITE_CONFIG.socialLinks.facebook} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-cream-300 hover:text-saffron hover:bg-white/10 transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href={SITE_CONFIG.socialLinks.whatsapp} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-cream-300 hover:text-saffron hover:bg-white/10 transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a 
                href={`tel:${SITE_CONFIG.headOffice.phone}`}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-cream-300 hover:text-saffron hover:bg-white/10 transition-all"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-[0.15em] text-saffron">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="text-cream-300 hover:text-white transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-cream-300 hover:text-white transition-colors">
                  Menu & Food
                </Link>
              </li>
              <li>
                <Link href="/locations" className="text-cream-300 hover:text-white transition-colors">
                  Find Outlets (8+)
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-cream-300 hover:text-white transition-colors">
                  Cafe Gallery
                </Link>
              </li>
              <li>
                <Link href="/franchise" className="text-cream-300 hover:text-saffron transition-colors font-medium">
                  Franchise Model
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-cream-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Outlets & Presence (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-[0.15em] text-saffron">
              Our Presence
            </h4>
            <ul className="space-y-2 text-sm text-cream-300">
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 text-saffron shrink-0 mt-0.5" />
                <span>Bhayander East (Flagship & HO)</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 text-saffron shrink-0 mt-0.5" />
                <span>Nallasopara East</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 text-saffron shrink-0 mt-0.5" />
                <span>Virar West</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 text-saffron shrink-0 mt-0.5" />
                <span>Vasai East & Vasai West</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 text-saffron shrink-0 mt-0.5" />
                <span>Prayagraj (Tagore Town & Anand Bhavan)</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Head Office Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-[0.15em] text-saffron">
              Head Office
            </h4>
            <div className="space-y-3 text-sm text-cream-300 font-light">
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 text-saffron shrink-0 mt-1" />
                <span>{SITE_CONFIG.headOffice.address}</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-saffron shrink-0" />
                <a href={`tel:${SITE_CONFIG.headOffice.phone}`} className="hover:text-white transition-colors">
                  {SITE_CONFIG.headOffice.phone}
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-saffron shrink-0" />
                <a href={`mailto:${SITE_CONFIG.headOffice.email}`} className="hover:text-white transition-colors">
                  {SITE_CONFIG.headOffice.email}
                </a>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2 text-saffron shrink-0" />
                <span>{SITE_CONFIG.headOffice.hours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-xs text-cream-400 gap-4">
          <p>© {new Date().getFullYear()} {SITE_CONFIG.legalName}. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <span>{SITE_CONFIG.hashtag}</span>
            <span>•</span>
            <span>Authentic 90s Indian Cafe Culture</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
