"use client";

import React, { useState } from "react";
import { ArrowUpRight, ArrowRight, ArrowUp } from "lucide-react";

const faqData = [
  { id: 1, question: "How To Start And Create A Gig Now?" },
  { id: 2, question: "How To Start And Create A Gig Now?" },
  {
    id: 3,
    question: "How To Start And Create A Gig Now?",
    answer:
      "Our Services Are Internalized, Ensuring High Expertise At Each Stage Of The Project. With Us, No Salespeople Or Project Managers. You Work Directly With Partners, Guarantors Of The Quality Of Our Production. Our Team Is Composed Of Copywriters, Strategists, Graphic Designers, Motion And Web Designers, Etc. All Focused On The Excellence And Consistency Of Your Brand.",
  },
  { id: 4, question: "How To Start And Create A Gig Now?" },
  {
    id: 5,
    question:
      "Reading These Lines, Good Branding Also Serves To Intrigue, Right?",
  },
];

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(3); // Set 3 as default open to match screenshot

  return (
    <section className="bg-[#0D0F0D] text-white py-24 px-8 md:px-16 lg:px-24 rounded-[40px] m-4 overflow-hidden">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16">
        {/* Left Column: Title & CTA */}
        <div className="flex flex-col items-start gap-8">
          <div>
            <h2 className="font-serif text-6xl mb-8">FAQs</h2>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs opacity-80">
              Methodical Approach, Listening, Transparency, Clear Pricing,
              Deadlines Respected... We Will Reconcile You With The Agencies.
            </p>
          </div>

          <div className="flex flex-col gap-4 mt-12">
            <button className="px-8 py-3 rounded-full border border-white/10 text-[10px] font-black tracking-widest uppercase hover:bg-white/5 transition-colors text-slate-300">
              View Last Courses
            </button>
            <button className="px-8 py-3 rounded-full bg-[#2E7D32] text-white text-[10px] font-black tracking-widest uppercase flex items-center justify-between group">
              View All Mentors
              <div className="bg-white/20 p-1 rounded-full ml-4">
                <ArrowUpRight size={14} />
              </div>
            </button>
          </div>
        </div>

        {/* Right Column: Accordion List */}
        <div className="flex flex-col gap-3">
          {faqData.map((item) => (
            <div
              key={item.id}
              onClick={() => setOpenId(openId === item.id ? null : item.id)}
              className={`cursor-pointer transition-all duration-500 rounded-full group ${
                openId === item.id
                  ? "bg-[#151815] rounded-[32px] p-8 border border-white/5"
                  : "bg-transparent border border-white/10 py-4 px-8 hover:bg-white/5"
              } relative overflow-hidden`}
            >
              {/* Content Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-slate-500 text-xs font-medium">
                    {item.id}.
                  </span>
                  <h3
                    className={`text-sm font-medium tracking-tight ${openId === item.id ? "text-white" : "text-slate-300"}`}
                  >
                    {item.question}
                  </h3>
                </div>

                <div
                  className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-transform duration-300 ${
                    openId === item.id
                      ? "bg-white text-black"
                      : "text-slate-500"
                  }`}
                >
                  {openId === item.id ? (
                    <ArrowUp size={16} />
                  ) : (
                    <ArrowRight size={16} />
                  )}
                </div>
              </div>

              {/* Expandable Answer */}
              {openId === item.id && item.answer && (
                <div className="mt-8 relative z-10">
                  <p className="text-slate-400 text-xs leading-[1.8] max-w-2xl font-medium uppercase tracking-tight">
                    {item.answer}
                  </p>

                  {/* Subtle Glow Effect seen in screenshot */}
                  <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-[#2E7D32]/20 blur-[60px] pointer-events-none rounded-full" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
