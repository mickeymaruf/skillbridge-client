import React from "react";
import { ArrowUpRight } from "lucide-react";

const WhyUsBento = () => {
  return (
    <section className="bg-white py-24 px-6 md:px-20 font-sans">
      <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 auto-rows-[160px] gap-4">
        {/* TOP LEFT: Flexible Offers (Sage Green Large) */}
        <div className="lg:col-span-4 lg:row-span-1 bg-[#F0F4F1] rounded-[40px] p-8 relative overflow-hidden flex flex-col justify-center">
          <h3 className="font-serif text-3xl text-[#1a1d1f] mb-4">
            Flexible Offers
          </h3>
          <div className="bg-[#DDE5E0] w-fit px-4 py-2 rounded-2xl flex items-center gap-2 border border-white/40">
            <div className="w-6 h-6 rounded-full bg-slate-400" />
            <span className="text-xs font-bold text-[#1a1d1f]">
              $12,500 <span className="opacity-40 uppercase">usd</span>
            </span>
          </div>
          {/* Ghost Wave */}
          <div className="absolute -bottom-10 -right-10 opacity-5 text-slate-900 pointer-events-none">
            <svg
              width="200"
              height="200"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 17.08z" />
            </svg>
          </div>
        </div>

        {/* TOP CENTER: Secure Payments (Small Vertical) */}
        <div className="lg:col-span-2 lg:row-span-1 bg-white border border-[#F0F4F1] rounded-[40px] p-6 flex flex-col items-center justify-center text-center">
          <p className="text-[14px] font-bold leading-tight">
            Secure <span className="text-[#4ade80]">Payments</span> <br /> For
            All
          </p>
        </div>

        {/* TOP RIGHT: Over +290k Gigs */}
        <div className="lg:col-span-2 lg:row-span-1 bg-white border border-[#F0F4F1] rounded-[40px] p-6 flex flex-col items-center justify-center gap-3">
          <div className="w-12 h-12 bg-[#F0F4F1] rounded-full flex items-center justify-center text-[#4ade80]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 17.08z" />
            </svg>
          </div>
          <p className="text-[12px] font-bold">
            Over +290k <br />
            <span className="text-[#4ade80]">Gigs</span>
          </p>
        </div>

        {/* TOP FAR RIGHT: Professional & Verified (Avatar Stack) */}
        <div className="lg:col-span-4 lg:row-span-1 bg-white border border-[#F0F4F1] rounded-[40px] p-6 flex flex-col items-center justify-center gap-3">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-9 h-9 rounded-full border-2 border-white bg-slate-200"
              />
            ))}
          </div>
          <p className="text-[12px] font-bold text-center">
            Professional & Verified <br />
            <span className="text-[#4ade80]">All Mentors</span>
          </p>
        </div>

        {/* MIDDLE LEFT: Flexible Offers (The Blob Image) */}
        <div className="lg:col-span-3 lg:row-span-2 bg-white border border-[#F0F4F1] rounded-[40px] p-8 flex flex-col items-center gap-6">
          <div className="text-center">
            <h3 className="text-xl font-bold leading-tight">
              Flexible <br />
              <span className="text-[#4ade80]">Offers</span>
            </h3>
          </div>
          {/* Blob Mask Mask Image */}
          <div
            className="w-32 h-32 bg-[#F0F4F1] relative"
            style={{
              clipPath:
                'path("M20,50 C20,20 50,0 80,20 C110,40 110,70 80,90 C50,110 20,80 20,50")',
            }}
          >
            <div className="absolute inset-0 bg-slate-300" />{" "}
            {/* Replace with <img> */}
          </div>
          <div className="flex gap-2">
            <span className="text-[10px] font-bold px-3 py-1.5 bg-[#F0F4F1] rounded-full text-slate-500">
              Sleep-well
            </span>
            <span className="text-[10px] font-bold px-3 py-1.5 bg-[#F0F4F1] rounded-full text-slate-500">
              Medical Centers
            </span>
          </div>
        </div>

        {/* CENTERPIECE: Why Us (Large Main Sage) */}
        <div className="lg:col-span-5 lg:row-span-2 bg-[#F0F4F1] rounded-[60px] p-12 flex flex-col items-center justify-center text-center relative overflow-hidden">
          <div className="text-[#4ade80] mb-6 scale-150">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 17.08z" />
            </svg>
          </div>
          <h2 className="font-serif text-[72px] leading-none mb-4">Why us</h2>
          <p className="text-slate-500 text-sm max-w-[200px]">
            We will keep tracking your all payments.
          </p>
          {/* Large Ghost Wave */}
          <div className="absolute bottom-0 left-0 w-full h-1/2 opacity-5">
            <svg className="w-full h-full" viewBox="0 0 1440 320">
              <path
                fill="currentColor"
                d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </div>
        </div>

        {/* MIDDLE RIGHT: New Secure Payments (Large with Blob) */}
        <div className="lg:col-span-4 lg:row-span-2 bg-white border border-[#F0F4F1] rounded-[40px] p-10 flex flex-col justify-end relative overflow-hidden">
          <div
            className="absolute top-8 right-8 w-32 h-32 bg-[#F0F4F1]"
            style={{
              clipPath:
                'path("M20,50 C20,20 50,0 80,20 C110,40 110,70 80,90 C50,110 20,80 20,50")',
            }}
          >
            <div className="absolute inset-0 bg-slate-300" />
            <span className="absolute inset-0 flex items-center justify-center text-4xl font-black text-white/20">
              $12,500
            </span>
          </div>
          <h3 className="font-serif text-3xl leading-tight mb-4">
            Our New Secure <br />
            <span className="text-[#4ade80]">Payments For All</span>
          </h3>
          <p className="text-slate-500 text-sm mb-6">
            We will keep tracking your all payments.
          </p>
          <div className="flex gap-2">
            <span className="text-[10px] font-bold px-3 py-1.5 bg-[#F0F4F1] rounded-full text-slate-500">
              AI Apps
            </span>
            <span className="text-[10px] font-bold px-3 py-1.5 bg-[#F0F4F1] rounded-full text-slate-500">
              Marketing
            </span>
          </div>
        </div>

        {/* BOTTOM ROW: Black Payments Card */}
        <div className="lg:col-span-3 lg:row-span-1 bg-[#111111] rounded-[40px] p-8 flex flex-col justify-between relative overflow-hidden">
          <p className="text-white text-sm font-bold">
            Secure <span className="text-slate-500">Payments</span>
          </p>
          <div className="bg-white rounded-full p-1.5 flex items-center gap-3 w-fit pr-4">
            <div className="w-8 h-8 rounded-full bg-slate-300" />
            <div>
              <p className="text-[10px] font-bold text-black">
                Lena R. Thornton
              </p>
              <p className="text-[8px] text-slate-400">$67,547.00</p>
            </div>
          </div>
          <div className="absolute -bottom-10 -right-5 opacity-10 text-white">
            <svg
              width="120"
              height="120"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 17.08z" />
            </svg>
          </div>
        </div>

        {/* BOTTOM ROW: Tiny Info Cards */}
        <div className="lg:col-span-2 lg:row-span-1 bg-white border border-[#F0F4F1] rounded-[40px] p-6 flex flex-col items-center justify-center gap-2">
          <div className="w-10 h-10 bg-[#F0F4F1] rounded-full flex items-center justify-center text-xl font-bold">
            $
          </div>
          <p className="text-[10px] font-bold">
            Secure <span className="text-[#4ade80]">Payments</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyUsBento;
