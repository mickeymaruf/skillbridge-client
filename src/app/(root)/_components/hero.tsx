import { Search, ArrowUpRight, LineSquiggle } from "lucide-react";
import Link from "next/link";
import { categoryService } from "@/services/category.service";

export async function Hero() {
  // Fetch your dynamic categories
  const { data: categories } = await categoryService.getCategories();

  const avatars = [
    "https://i.pravatar.cc/150?u=1",
    "https://i.pravatar.cc/150?u=2",
    "https://i.pravatar.cc/150?u=3",
    "https://i.pravatar.cc/150?u=4",
  ];

  return (
    <main className="relative min-h-screen flex flex-col items-center pt-12 md:pt-32 overflow-hidden bg-[#f8f9fa] dark:bg-zinc-950 transition-colors duration-300">
      <div className="text-center max-w-5xl px-6 z-10">
        <h1 className="text-[40px] sm:text-[56px] md:text-[84px] font-serif text-[#2d2d2d] dark:text-zinc-100 leading-[1.1] md:leading-[1.05] tracking-tight">
          Connect with <br />
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mt-2">
            <span>expert</span>
            <div className="inline-flex items-center bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-full px-3 md:px-5 py-2 md:py-3 shadow-sm mx-1 md:mx-2">
              <Search
                size={16}
                className="text-slate-300 dark:text-zinc-600 mr-2 md:mr-3"
              />
              <input
                type="text"
                placeholder="SEARCH FOR MENTORS"
                className="text-[8px] md:text-[10px] tracking-[0.2em] font-black outline-none w-24 md:w-40 placeholder:text-slate-300 dark:placeholder:text-zinc-600 bg-transparent dark:text-white"
              />
            </div>
            <div className="w-10 h-10 md:w-14 md:h-14 rounded-full overflow-hidden border-[3px] border-white dark:border-zinc-800 shadow-lg">
              <img
                src="https://i.pravatar.cc/150?u=9"
                alt="Mentor"
                className="w-full h-full object-cover"
              />
            </div>
            <span>mentors</span>
          </div>
          for your next project
        </h1>

        <div className="flex justify-center my-6 md:my-10 text-[#4ade80]">
          <LineSquiggle size={30} className="w-6 h-6 md:w-8 md:h-8" />
        </div>

        <p className="text-lg md:text-xl text-slate-600 dark:text-zinc-400 font-medium tracking-tight max-w-2xl mx-auto">
          Learn From Industry Professionals Offering Their Services
        </p>

        {/* DYNAMIC CATEGORY SECTION */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:gap-6 text-[10px] md:text-[11px] font-bold tracking-widest text-slate-400 dark:text-zinc-500 uppercase">
          {/* Static "All" link */}
          <Link
            href="/tutors"
            className="hover:text-black dark:hover:text-white transition-colors"
          >
            All
          </Link>

          {categories.data
            .slice(0, 4)
            .map((c: { slug: string; name: string }, index: number) => (
              <div key={c.slug} className="flex items-center gap-4 md:gap-6">
                {/* Reference style separator dash */}
                <div className="hidden sm:block w-4 md:w-8 h-[1px] bg-slate-300 dark:bg-zinc-800" />

                <Link
                  href={`/tutors?category=${c.slug}`}
                  className="hover:text-black dark:hover:text-white transition-all cursor-pointer hover:border-b-2 hover:border-black dark:hover:border-white pb-1"
                >
                  {c.name}
                </Link>
              </div>
            ))}
        </div>

        <div className="mt-10 md:mt-14 inline-flex flex-col sm:flex-row items-center bg-[#ecedef] dark:bg-zinc-900 p-1.5 rounded-2xl sm:rounded-full border border-slate-200 dark:border-zinc-800 shadow-sm gap-2 sm:gap-0">
          <div className="flex items-center gap-2 px-5 text-[9px] md:text-[10px] font-black text-slate-500 dark:text-zinc-400 uppercase tracking-tighter">
            <span className="text-base md:text-lg">📦</span> OVER 2900 GIGS
          </div>
          <div className="bg-[#1a1a1a] dark:bg-zinc-800 text-white px-6 md:px-8 py-3 md:py-3.5 rounded-full text-[9px] md:text-[10px] font-black tracking-[0.2em] whitespace-nowrap">
            FROM $499.99 / MO
          </div>
          <button className="bg-[#4ade80] text-white py-3 md:py-3.5 px-6 md:px-8 rounded-full hover:bg-[#3ecb73] transition-colors flex items-center gap-2 text-[9px] md:text-[10px] font-black tracking-[0.2em] sm:ml-1 w-full sm:w-auto justify-center">
            DISCOVER <ArrowUpRight size={16} />
          </button>
        </div>
      </div>

      {/* Bottom Arch & Avatars */}
      <div className="flex flex-col items-center py-12 md:py-16">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 scale-75 opacity-80 dark:invert">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white">
              ▲
            </div>
            <span className="font-black text-xl tracking-tighter">ADCO</span>
          </div>
          <p className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-zinc-500 flex items-center gap-2">
            Work with{" "}
            <span className="text-slate-900 dark:text-zinc-200">— 5k —</span>{" "}
            Mentors
          </p>
          <div className="flex items-center mt-2">
            {avatars.map((url, i) => (
              <div
                key={i}
                className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white dark:border-zinc-950 overflow-hidden -ml-2 md:-ml-3 first:ml-0 shadow-sm"
              >
                <img
                  src={url}
                  alt="User"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
