"use strict";
"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, ArrowRight, ArrowLeft, Download, Sparkles, Building, Phone, Mail, User, MapPin } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteData";

export default function FranchiseForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    first_name: "",
    contactNo: "",
    email_id: "",
    city_Name: "",
    state_Name: "Maharashtra",
    inve: "7",
    franchise_subject: "Franchise Partnership Application",
    franchise_msg: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => {
    if (currentStep === 1) {
      if (!formData.first_name.trim() || !formData.contactNo.trim() || !formData.email_id.trim()) {
        setErrorMessage("Please complete all personal details before proceeding.");
        return;
      }
    } else if (currentStep === 2) {
      if (!formData.city_Name.trim() || !formData.state_Name || !formData.inve) {
        setErrorMessage("Please specify your target city, state, and investment tier.");
        return;
      }
    }
    setErrorMessage("");
    setCurrentStep((prev) => Math.min(prev + 1, 3));
  };

  const prevStep = () => {
    setErrorMessage("");
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.franchise_msg.trim()) {
      setErrorMessage("Please write a short message or location preference.");
      return;
    }

    setLoading(true);
    setStatus("idle");
    setErrorMessage("");

    try {
      // Submit to official 9Teas Cafe Google Sheet Webhook endpoint
      await fetch(SITE_CONFIG.franchiseGoogleScriptUrl, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        mode: "no-cors",
      });

      setStatus("success");
    } catch (err: any) {
      console.error("Submission Error:", err);
      // Since no-cors mode returns opaque responses, fetch generally resolves; if a network failure happens:
      setStatus("error");
      setErrorMessage("Something went wrong while submitting. Please try calling our head office directly.");
    } finally {
      setLoading(false);
    }
  };

  if (status === "success") {
    return (
      <div className="bg-espresso text-cream-100 p-8 sm:p-12 rounded-3xl border border-saffron/40 shadow-2xl text-center space-y-6 animate-fadeIn">
        <div className="w-16 h-16 bg-saffron/20 border-2 border-saffron rounded-full flex items-center justify-center mx-auto text-saffron">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs uppercase tracking-[0.25em] text-saffron font-bold">
            APPLICATION RECEIVED
          </span>
          <h3 className="font-editorial text-3xl font-extrabold text-white">
            Thank You, {formData.first_name}!
          </h3>
          <p className="text-sm text-cream-300 max-w-md mx-auto leading-relaxed">
            Your franchise enquiry for <strong>{formData.city_Name} ({formData.state_Name})</strong> has been successfully submitted to the 9Teas Cafe corporate expansion team.
          </p>
        </div>

        <div className="p-4 bg-white/5 rounded-2xl border border-white/10 max-w-md mx-auto text-xs text-cream-300 space-y-1">
          <p>📞 Our representative will reach out at <strong>{formData.contactNo}</strong></p>
          <p>📧 Confirmation copy sent to <strong>{formData.email_id}</strong></p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href={SITE_CONFIG.brochureUrl}
            download="9Teas-Cafe-Franchise-Brochure.pdf"
            className="btn-primary-glow inline-flex items-center justify-center text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-saffron to-saffron-light text-white px-6 py-3.5 rounded-full shadow-lg"
          >
            <Download className="w-4 h-4 mr-2" />
            <span>Download Official Brochure</span>
          </a>

          <button
            onClick={() => {
              setStatus("idle");
              setCurrentStep(1);
              setFormData({
                first_name: "",
                contactNo: "",
                email_id: "",
                city_Name: "",
                state_Name: "Maharashtra",
                inve: "7",
                franchise_subject: "Franchise Partnership Application",
                franchise_msg: "",
              });
            }}
            className="text-xs uppercase font-bold text-cream-300 hover:text-white px-6 py-3.5 rounded-full border border-white/20"
          >
            Submit Another Application
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-espresso text-cream-100 p-8 sm:p-10 rounded-3xl border border-saffron/30 shadow-2xl relative overflow-hidden" id="franchise-form">
      {/* Step Progress Bar */}
      <div className="mb-8 space-y-3">
        <div className="flex items-center justify-between text-xs uppercase tracking-wider text-cream-300 font-semibold">
          <span className={currentStep >= 1 ? "text-saffron font-bold" : ""}>
            01. Personal Info
          </span>
          <span className={currentStep >= 2 ? "text-saffron font-bold" : ""}>
            02. Territory & Budget
          </span>
          <span className={currentStep >= 3 ? "text-saffron font-bold" : ""}>
            03. Vision & Submit
          </span>
        </div>

        <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-saffron to-saffron-light transition-all duration-300"
            style={{ width: `${(currentStep / 3) * 100}%` }}
          />
        </div>
      </div>

      {errorMessage && (
        <div className="mb-6 p-3 bg-red-900/40 border border-red-500/50 rounded-xl text-red-200 text-xs flex items-center">
          <AlertCircle className="w-4 h-4 mr-2 shrink-0 text-red-400" />
          <span>{errorMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* STEP 1 */}
        {currentStep === 1 && (
          <div className="space-y-4 animate-fadeIn">
            <div className="border-b border-white/10 pb-3 mb-4">
              <h4 className="font-editorial text-2xl font-bold text-white">
                Step 01: Tell Us About Yourself
              </h4>
              <p className="text-xs text-cream-300 font-light">
                Please provide your primary contact information for verification.
              </p>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-cream-200 mb-1.5">
                Full Name *
              </label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-saffron" />
                <input
                  type="text"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  placeholder="e.g. Rahul Sharma"
                  required
                  className="w-full bg-white/5 border border-white/15 focus:border-saffron focus:ring-1 focus:ring-saffron rounded-xl px-10 py-3 text-sm text-white placeholder-cream-400/50 outline-none transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-cream-200 mb-1.5">
                  Contact Number *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-saffron" />
                  <input
                    type="tel"
                    name="contactNo"
                    value={formData.contactNo}
                    onChange={handleChange}
                    placeholder="e.g. +91 98765 43210"
                    required
                    className="w-full bg-white/5 border border-white/15 focus:border-saffron focus:ring-1 focus:ring-saffron rounded-xl px-10 py-3 text-sm text-white placeholder-cream-400/50 outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-cream-200 mb-1.5">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-saffron" />
                  <input
                    type="email"
                    name="email_id"
                    value={formData.email_id}
                    onChange={handleChange}
                    placeholder="e.g. rahul@example.com"
                    required
                    className="w-full bg-white/5 border border-white/15 focus:border-saffron focus:ring-1 focus:ring-saffron rounded-xl px-10 py-3 text-sm text-white placeholder-cream-400/50 outline-none transition-all"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* STEP 2 */}
        {currentStep === 2 && (
          <div className="space-y-4 animate-fadeIn">
            <div className="border-b border-white/10 pb-3 mb-4">
              <h4 className="font-editorial text-2xl font-bold text-white">
                Step 02: Where Do You Plan To Open?
              </h4>
              <p className="text-xs text-cream-300 font-light">
                Specify your planned outlet location and investment budget tier.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-cream-200 mb-1.5">
                  Proposed City *
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-saffron" />
                  <input
                    type="text"
                    name="city_Name"
                    value={formData.city_Name}
                    onChange={handleChange}
                    placeholder="e.g. Mumbai, Pune, Thane, Lucknow"
                    required
                    className="w-full bg-white/5 border border-white/15 focus:border-saffron focus:ring-1 focus:ring-saffron rounded-xl px-10 py-3 text-sm text-white placeholder-cream-400/50 outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-cream-200 mb-1.5">
                  State *
                </label>
                <select
                  name="state_Name"
                  value={formData.state_Name}
                  onChange={handleChange}
                  className="w-full bg-espresso border border-white/15 focus:border-saffron focus:ring-1 focus:ring-saffron rounded-xl px-4 py-3 text-sm text-white outline-none transition-all"
                >
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="UP">Uttar Pradesh</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Delhi">Delhi / NCR</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Other">Other State</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-cream-200 mb-1.5">
                Planned Investment Tier *
              </label>
              <div className="grid grid-cols-2 gap-4">
                <label className={`flex flex-col p-4 rounded-2xl border cursor-pointer transition-all ${formData.inve === "7" ? "bg-saffron/20 border-saffron" : "bg-white/5 border-white/10"}`}>
                  <input
                    type="radio"
                    name="inve"
                    value="7"
                    checked={formData.inve === "7"}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  <span className="font-editorial text-xl font-bold text-white">₹7 Lakhs</span>
                  <span className="text-[11px] text-cream-300 font-light mt-1">Kiosk / Compact Format</span>
                </label>

                <label className={`flex flex-col p-4 rounded-2xl border cursor-pointer transition-all ${formData.inve === "12" ? "bg-saffron/20 border-saffron" : "bg-white/5 border-white/10"}`}>
                  <input
                    type="radio"
                    name="inve"
                    value="12"
                    checked={formData.inve === "12"}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  <span className="font-editorial text-xl font-bold text-white">₹12 Lakhs</span>
                  <span className="text-[11px] text-cream-300 font-light mt-1">Full Dine-In Cafe Model</span>
                </label>
              </div>
            </div>
          </div>
        )}

        {/* STEP 3 */}
        {currentStep === 3 && (
          <div className="space-y-4 animate-fadeIn">
            <div className="border-b border-white/10 pb-3 mb-4">
              <h4 className="font-editorial text-2xl font-bold text-white">
                Step 03: Your Experience & Message
              </h4>
              <p className="text-xs text-cream-300 font-light">
                Tell us about your background, property ownership or timing plans.
              </p>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-cream-200 mb-1.5">
                Subject *
              </label>
              <input
                type="text"
                name="franchise_subject"
                value={formData.franchise_subject}
                onChange={handleChange}
                placeholder="e.g. Franchise Enquiry for Shop in Powai"
                required
                className="w-full bg-white/5 border border-white/15 focus:border-saffron focus:ring-1 focus:ring-saffron rounded-xl px-4 py-3 text-sm text-white placeholder-cream-400/50 outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-cream-200 mb-1.5">
                Detailed Message / Space Dimensions *
              </label>
              <textarea
                name="franchise_msg"
                value={formData.franchise_msg}
                onChange={handleChange}
                rows={4}
                placeholder="Describe your property location, carpet area, commercial experience, and target opening timeframe..."
                required
                className="w-full bg-white/5 border border-white/15 focus:border-saffron focus:ring-1 focus:ring-saffron rounded-xl px-4 py-3 text-sm text-white placeholder-cream-400/50 outline-none transition-all resize-none"
              />
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          {currentStep > 1 ? (
            <button
              type="button"
              onClick={prevStep}
              className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-cream-300 hover:text-white px-5 py-3 rounded-full border border-white/20 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              <span>Back</span>
            </button>
          ) : (
            <div />
          )}

          {currentStep < 3 ? (
            <button
              type="button"
              onClick={nextStep}
              className="btn-primary-glow inline-flex items-center text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-saffron to-saffron-light text-white px-7 py-3.5 rounded-full shadow-lg"
            >
              <span>Continue</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={loading}
              className="btn-primary-glow inline-flex items-center text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-saffron to-saffron-light text-white px-8 py-4 rounded-full shadow-2xl disabled:opacity-50"
            >
              <Send className="w-4 h-4 mr-2" />
              <span>{loading ? "Submitting Application..." : "START YOUR 9TEAS JOURNEY"}</span>
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
