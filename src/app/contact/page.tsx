"use strict";
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SITE_CONFIG, OUTLETS } from "@/data/siteData";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  MessageSquare, 
  Building,
  Navigation
} from "lucide-react";
import FinalCTA from "@/components/FinalCTA";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    first_name: "",
    phone_No: "",
    email_id: "",
    subject: "",
    msg: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.first_name || !formData.phone_No || !formData.email_id || !formData.subject || !formData.msg) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    setStatus("idle");
    setErrorMessage("");

    try {
      await fetch(SITE_CONFIG.contactGoogleScriptUrl, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        mode: "no-cors",
      });

      setStatus("success");
      setFormData({
        first_name: "",
        phone_No: "",
        email_id: "",
        subject: "",
        msg: "",
      });
    } catch (err: any) {
      console.error("Submission Error:", err);
      setStatus("error");
      setErrorMessage("Something went wrong while sending your message. Please contact us directly via phone.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      {/* Contact Hero Banner */}
      <section className="relative py-20 sm:py-28 bg-espresso text-cream-100 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src="/images/welcome.jpg"
            alt="Contact 9Teas Cafe"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-espresso/85" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/10 border border-saffron/40 backdrop-blur-md">
            <MessageSquare className="w-4 h-4 text-saffron" />
            <span className="text-xs uppercase tracking-[0.25em] text-saffron-light font-bold">
              GET IN TOUCH
            </span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-6xl font-extrabold text-white leading-[1.1]">
            CONTACT US.
          </h1>

          <p className="text-base sm:text-xl text-cream-200 font-light max-w-2xl mx-auto">
            Are you hungry? Come dine with us, plan an event, or talk to our corporate team. We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-24 bg-cream-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Direct Info & Head Office (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-[0.25em] text-saffron font-bold">
                  DIRECT CONTACT
                </span>
                <h2 className="font-editorial text-3xl sm:text-4xl font-extrabold text-espresso">
                  We&apos;re Always Brewing Conversations.
                </h2>
                <p className="text-sm text-espresso/80 font-light leading-relaxed">
                  Reach out for party bookings, feedback, brand collaborations, or general questions.
                </p>
              </div>

              {/* Direct Info Cards */}
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-2xl border border-espresso/10 shadow-sm flex items-start space-x-4">
                  <div className="p-3 rounded-xl bg-saffron/10 text-saffron shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-bold text-saffron mb-1">
                      Phone Number
                    </h4>
                    <a href={`tel:${SITE_CONFIG.headOffice.phone}`} className="font-editorial text-lg font-bold text-espresso hover:text-saffron transition-colors block">
                      {SITE_CONFIG.headOffice.phone}
                    </a>
                    <span className="text-xs text-espresso/60">Mon – Sun, 9:30 AM – 10:30 PM</span>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-espresso/10 shadow-sm flex items-start space-x-4">
                  <div className="p-3 rounded-xl bg-saffron/10 text-saffron shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-bold text-saffron mb-1">
                      Email Address
                    </h4>
                    <a href={`mailto:${SITE_CONFIG.headOffice.email}`} className="font-editorial text-lg font-bold text-espresso hover:text-saffron transition-colors block">
                      {SITE_CONFIG.headOffice.email}
                    </a>
                    <span className="text-xs text-espresso/60">Quick response within 24 hours</span>
                  </div>
                </div>

                <div className="bg-espresso text-cream-100 p-6 rounded-2xl border border-saffron/30 shadow-xl space-y-2">
                  <div className="flex items-center space-x-2 text-saffron font-bold text-xs uppercase tracking-wider">
                    <Building className="w-4 h-4" />
                    <span>Corporate Head Office</span>
                  </div>
                  <p className="text-xs sm:text-sm text-cream-200 font-light leading-relaxed">
                    {SITE_CONFIG.headOffice.address}
                  </p>
                  <div className="pt-2 text-xs text-saffron font-semibold flex items-center">
                    <Clock className="w-3.5 h-3.5 mr-1.5" />
                    <span>{SITE_CONFIG.headOffice.hours}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Message Form (7 cols) */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-espresso/10 shadow-xl">
              <div className="border-b border-espresso/10 pb-4 mb-6">
                <h3 className="font-editorial text-2xl font-bold text-espresso">
                  Leave a Message
                </h3>
                <p className="text-xs text-espresso/70 font-light mt-1">
                  How may we help you today?
                </p>
              </div>

              {status === "success" ? (
                <div className="p-8 text-center space-y-4 bg-cream-50 rounded-2xl border border-saffron/30">
                  <div className="w-12 h-12 bg-saffron/20 text-saffron rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-editorial text-2xl font-bold text-espresso">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-sm text-espresso/70 max-w-sm mx-auto">
                    Thank you for reaching out. The 9Teas team will respond to your query shortly.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="text-xs font-bold uppercase tracking-wider text-saffron hover:underline pt-2 block mx-auto"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs flex items-center">
                      <AlertCircle className="w-4 h-4 mr-2 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-espresso/80 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="first_name"
                        value={formData.first_name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="w-full bg-cream-50 border border-espresso/15 focus:border-saffron focus:ring-1 focus:ring-saffron rounded-xl px-4 py-3 text-sm text-espresso outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-espresso/80 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone_No"
                        value={formData.phone_No}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        required
                        className="w-full bg-cream-50 border border-espresso/15 focus:border-saffron focus:ring-1 focus:ring-saffron rounded-xl px-4 py-3 text-sm text-espresso outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-espresso/80 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email_id"
                        value={formData.email_id}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="w-full bg-cream-50 border border-espresso/15 focus:border-saffron focus:ring-1 focus:ring-saffron rounded-xl px-4 py-3 text-sm text-espresso outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-espresso/80 mb-1.5">
                        Subject *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Event Booking / General Enquiry"
                        required
                        className="w-full bg-cream-50 border border-espresso/15 focus:border-saffron focus:ring-1 focus:ring-saffron rounded-xl px-4 py-3 text-sm text-espresso outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-espresso/80 mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      name="msg"
                      value={formData.msg}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Write your message here..."
                      required
                      className="w-full bg-cream-50 border border-espresso/15 focus:border-saffron focus:ring-1 focus:ring-saffron rounded-xl px-4 py-3 text-sm text-espresso outline-none transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary-glow w-full inline-flex items-center justify-center text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-saffron to-saffron-light text-white py-4 rounded-xl shadow-lg disabled:opacity-50 transition-all"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    <span>{loading ? "Sending Message..." : "SEND MESSAGE"}</span>
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Embedded Official Map Section */}
      <section className="w-full h-96 relative bg-espresso/10 border-t border-espresso/10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.2585208022717!2d72.8620705!3d19.3065568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b12108a6b17f%3A0x7e7c1735a0dd7127!2s9%20Tea's%20Cafe!5e0!3m2!1sen!2sin!4v1720612345678!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="9Teas Cafe Head Office Location Map"
        />
      </section>

      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
}
