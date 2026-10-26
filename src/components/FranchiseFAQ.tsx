"use strict";
"use client";

import React, { useState } from "react";
import { FAQS } from "@/data/siteData";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";

export default function FranchiseFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-24 bg-cream-50 relative overflow-hidden" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-saffron font-bold">
            <HelpCircle className="w-4 h-4 text-saffron" />
            <span>COMMON INQUIRIES</span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-extrabold text-espresso">
            FREQUENTLY ASKED QUESTIONS.
          </h2>

          <p className="text-base text-espresso/80 font-light leading-relaxed">
            Everything you need to know about our cafe concept, customer experiences, and franchise opportunities.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-espresso/10 overflow-hidden shadow-sm transition-all duration-200"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none hover:bg-cream-50/50 transition-colors"
                >
                  <span className="font-editorial text-lg sm:text-xl font-bold text-espresso">
                    {faq.question}
                  </span>
                  <div className={`p-2 rounded-full bg-saffron/10 text-saffron shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 bg-saffron text-white" : ""}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-espresso/80 font-light leading-relaxed border-t border-espresso/5 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
