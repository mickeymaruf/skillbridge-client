"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion"; // For organic blob mask animation

const mentors = [
  "https://images.unsplash.com/photo-1543269664-76bc3997d9ea?q=80&w=200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1596753396567-2f16e88ff267?q=80&w=200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&auto=format&fit=crop",
];

export default function SafetyTrustBento() {
  return (
    <section className="bg-white py-24 px-8 md:px-20">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 auto-rows-[220px] gap-6">
        {/* CARD 1: 28k Verified Mentors (Top-Left) */}
        <div className="bg-[#f0f4f1] rounded-[32px] p-10 col-span-1 md:col-span-2 lg:col-span-2 relative overflow-hidden flex flex-col justify-start">
          <div className="relative z-10">
            <h2 className="text-6xl font-black text-[#1A1A1A] leading-none mb-1">
              28k
            </h2>
            <p className="text-[13px] text-slate-500 font-medium leading-relaxed max-w-[120px]">
              Verified <span className="text-[#2e7d32]">Mentors</span>
            </p>
          </div>
          {/* Scatter Avatar effect - Positioned exactly as in screenshot */}
          <Image
            src={mentors[0]}
            alt="avatar"
            width={48}
            height={48}
            className="absolute top-[15%] right-[20%] w-12 h-12 rounded-full border border-white"
          />
          <Image
            src={mentors[1]}
            alt="avatar"
            width={64}
            height={64}
            className="absolute bottom-[20%] right-[30%] w-16 h-16 rounded-full border border-white"
          />
          {/* Static Corner Arrow */}
          <div className="absolute bottom-10 left-10 w-8 h-8 rounded-full border border-white/40 flex items-center justify-center opacity-30 text-slate-900">
            <ArrowUpRight size={18} />
          </div>
        </div>

        {/* CARD 2: Customer Protection (Vertical Tall) */}
        <div className="bg-[#fdfdfd] border border-slate-200/50 rounded-[32px] p-10 col-span-1 md:col-span-1 lg:col-span-2 lg:row-span-2 relative overflow-hidden flex flex-col items-center justify-between text-center gap-10">
          {/* Float Checkmark icon in corner */}
          <div className="absolute top-8 left-8 w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center border border-emerald-200/50 text-emerald-600">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
          </div>

          {/* Organic Blob Mask Image - The tricky part */}
          <motion.div
            className="relative w-[220px] h-[220px] bg-[#f0f4f1]"
            style={{
              clipPath:
                'path("M32.5,-30C41.3,-18.8,47,0.7,46.1,17.2C45.3,33.8,37.8,47.3,24.1,51.1C10.5,54.8,-9.4,48.7,-25,38.1C-40.6,27.5,-51.9,12.5,-51,-2.9C-50,-18.2,-36.8,-33.9,-22,-43.3C-7.3,-52.8,9.2,-56.1,32.5,-30Z")',
            }}
          >
            <Image
              src={mentors[0]}
              alt="Customer"
              layout="fill"
              objectFit="cover"
              className="object-cover"
            />
          </motion.div>

          <h3 className="font-serif text-3xl text-slate-900 leading-snug">
            Customer <br /> Protection
          </h3>
        </div>

        {/* CARD 3: Safety & Trust (Header Text) */}
        <div className="bg-[#fdfdfd] border border-slate-200/50 rounded-[32px] p-12 col-span-1 md:col-span-1 lg:col-span-2 lg:row-span-1 flex flex-col justify-center text-left">
          <h1 className="font-serif text-5xl md:text-6xl text-slate-900 leading-[1.05] mb-6">
            Safety & Trust
          </h1>
          <p className="text-[13px] leading-relaxed text-slate-600 max-w-sm">
            Explore a diverse network of professionals eager to share their
            expertise, provide advice, and support you every step of the way.
          </p>
        </div>

        {/* CARD 4: Trust Signals (Black Static) */}
        <div className="bg-slate-950 rounded-[32px] p-12 col-span-1 md:col-span-1 lg:col-span-2 lg:row-span-2 relative overflow-hidden flex flex-col items-center justify-between text-center gap-10">
          {/* Static Corner Arrow */}
          <div className="absolute top-10 right-10 opacity-20 text-white">
            <ArrowUpRight size={18} />
          </div>

          <div className="text-green-500 mb-4 scale-125">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 17.08z" />
            </svg>
          </div>

          {/* Overlapping Pill UI */}
          <div className="inline-flex gap-3 bg-white p-3 rounded-full border border-white/20">
            {["LOGO", "Yoo!", "LOGO"].map((label, i) => (
              <span
                key={i}
                className={`text-[12px] font-black tracking-widest uppercase ${i === 1 ? "text-[#1a1a1a]" : "text-slate-200"}`}
              >
                {label}
              </span>
            ))}
          </div>

          <div className="relative z-10 text-center flex flex-col items-center">
            <h3 className="text-3xl font-bold text-white mb-2 leading-tight">
              Trust <br /> Signals
            </h3>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
              Over 10k Clients
            </p>
            {/* Slider dots detail */}
            <div className="flex gap-2 mt-6">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-700" />
              <div className="w-1.5 h-1.5 rounded-full bg-white" />
              <div className="w-1.5 h-1.5 rounded-full bg-slate-700" />
            </div>
          </div>

          {/* Ghost background wave detail in white */}
          <div className="absolute inset-x-[-20%] bottom-[-20%] w-[140%] h-[120%] text-white/5 rotate-[-5deg] -z-10">
            <svg
              width="full"
              height="full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <path d="M0 70 Q 25 30 50 70 T 100 70 Z" fill="currentColor" />
            </svg>
          </div>
        </div>

        {/* CARD 5: 4.9 All Ratings (Sage Green, Wide) */}
        <div className="bg-[#f0f4f1] rounded-[32px] p-8 col-span-1 md:col-span-2 lg:col-span-2 relative overflow-hidden flex items-end justify-between gap-6 shadow-sm">
          <div className="flex flex-col items-center justify-center relative z-10 p-4 rounded-3xl backdrop-blur-sm">
            <div className="text-green-500 mb-4 scale-125">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 17.08z" />
              </svg>
            </div>
            <h1 className="text-7xl font-black text-slate-900 leading-none tracking-tight">
              4.9
            </h1>
            <p className="text-[10px] text-slate-600 font-medium uppercase tracking-[0.1em] text-center">
              All Ratings
            </p>
          </div>

          {/* Right Side graphic accent - Static pattern detail */}
          <div className="absolute top-8 right-8 w-24 h-24 rounded-full bg-[#DDE5E0] border border-white/50 opacity-60 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full border-2 border-slate-600 text-slate-600 text-xs flex items-center justify-center font-bold">
              1
            </div>
          </div>
        </div>

        {/* CARD 6: 290k Gigs (Bottom Circle, Outside Grid context but positioned here) */}
        {/* We place it here in the source order so it stays logical on mobile */}
        <div className="w-64 h-64 bg-[#fdfdfd] border border-slate-200/50 rounded-full p-12 col-span-1 flex flex-col items-center justify-center text-center gap-3 shadow-inner md:absolute md:bottom-24 md:left-24 lg:left-32 -z-10">
          <h2 className="text-5xl font-black text-[#1A1A1A] leading-none mb-1">
            290k
          </h2>
          <p className="text-[12px] text-slate-900 font-medium leading-relaxed max-w-[120px]">
            Gigs Registered
          </p>
        </div>

        {/* CARD 7: Secure Payments List (Large Horizontal Bento) */}
        <div className="bg-[#fdfdfd] border border-slate-200/50 rounded-[40px] p-12 col-span-1 md:col-span-2 lg:col-span-4 lg:row-span-2 flex flex-col justify-between relative shadow-sm">
          <div className="flex flex-col gap-4 text-left">
            <h3 className="font-serif text-3xl text-slate-900 leading-tight max-w-sm mb-2">
              Secure <br />
              <span className="text-[#2e7d32]">Payments</span>
            </h3>
            <p className="text-[13px] text-slate-600 leading-relaxed max-w-sm mb-6">
              We will keep tracking your all payments to make it safe.
            </p>
            <button className="bg-[#4ade80] text-black px-6 py-2.5 rounded-full text-[10px] font-black tracking-widest uppercase transition-transform active:scale-95">
              SECURE PAYMENT
            </button>
          </div>

          {/* Scatter Contact/Logo items - Precise positioning */}
          <div className="absolute bottom-10 right-10 flex flex-wrap gap-3 items-center justify-end max-w-xl">
            {["Logo", "Logo", "Segment"].map((label, i) => (
              <div
                key={i}
                className="inline-flex gap-2 items-center text-[10px] font-medium text-slate-600 bg-[#f2f4f1] px-4 py-1.5 rounded-full border border-[#d6dfd8]"
              >
                <span className="opacity-20">{label}</span>
              </div>
            ))}
            {/* Active Pill detail with Avatar/Pricing */}
            <div className="inline-flex items-center gap-3 bg-slate-950 text-white rounded-full px-5 py-3 shadow-lg">
              <Image
                src={mentors[1]}
                alt="avatar"
                width={32}
                height={32}
                className="w-8 h-8 rounded-full border border-white/10 shadow-sm"
              />
              <div className="text-left">
                <p className="text-[11px] font-bold text-white">
                  James C. Williams
                </p>
                <p className="text-[10px] text-slate-400">$67,547.00</p>
              </div>
            </div>
            {["Google Play", "App Store"].map((label, i) => (
              <div
                key={i}
                className="bg-[#f2f4f1] p-2 rounded-xl border border-[#d6dfd8]"
              >
                <span className="opacity-10 text-[10px]">{label}</span>
              </div>
            ))}
            <div className="inline-flex gap-2 items-center text-[11px] font-medium text-slate-900 bg-[#f2f4f1] px-4 py-2.5 rounded-full border border-[#d6dfd8] shadow-sm">
              <Image
                src={mentors[0]}
                alt="avatar"
                width={24}
                height={24}
                className="w-6 h-6 rounded-full border border-white/10 shadow-sm"
              />
              <p>$89,547.00</p>
            </div>
            {mentors.slice(2, 4).map((url, i) => (
              <Image
                key={i}
                src={url}
                alt="professional"
                width={36}
                height={36}
                className="w-9 h-9 rounded-full border border-white object-cover"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
