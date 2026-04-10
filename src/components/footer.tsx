import Link from "next/link";
import { Twitter, Github, Youtube, Globe } from "lucide-react";

export default function Footer() {
  // Updated links to match the new pages
  const links = {
    useful: [
      { name: "Find Mentors", href: "/tutors" },
      { name: "Categories", href: "/categories" },
      { name: "Mentors Community", href: "/community" },
      { name: "Blog / Journal", href: "/blog" },
    ],
    contact: [
      { name: "About Us", href: "/about" },
      { name: "Contact Us", href: "/contact" },
      { name: "Help / Support", href: "/support" },
    ],
    rules: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookies Policy", href: "/cookies" },
    ],
  };

  return (
    <footer className="w-full bg-transparent">
      <div className="relative z-20 bg-[#111111] pt-32 pb-12 px-8 md:px-20">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-24">
            {/* Column 1: Brand */}
            <div className="col-span-2 md:col-span-1">
              <Link
                href="/"
                className="flex items-center gap-2 font-bold text-white text-2xl tracking-tighter mb-6"
              >
                <div className="text-[#4ade80]">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 17.08z" />
                  </svg>
                </div>
                Mentorable
              </Link>
              <p className="text-slate-500 text-[13px] leading-relaxed max-w-[200px]">
                A place to find yourself among mentors and gigs.
              </p>
            </div>

            {/* Column 2: Useful Links */}
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-8">
                Useful Links
              </h4>
              <ul className="space-y-4">
                {links.useful.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-[13px] font-bold text-slate-300 hover:text-[#4ade80] transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact */}
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-8">
                Company
              </h4>
              <ul className="space-y-4">
                {links.contact.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-[13px] font-bold text-slate-300 hover:text-[#4ade80] transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Rules */}
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-8">
                Legal
              </h4>
              <ul className="space-y-4">
                {links.rules.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-[13px] font-bold text-slate-300 hover:text-[#4ade80] transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 5: Address & Apps */}
            <div className="col-span-2 md:col-span-1 flex flex-col items-start md:items-end gap-8">
              <p className="text-slate-500 text-[13px] text-left md:text-right leading-relaxed max-w-[220px]">
                20 McCoy Caney Road, Phelps.ky, 41553 United States
              </p>
              <Link
                href="tel:+19495553245"
                className="text-slate-300 font-bold hover:text-white"
              >
                +1 949-555-3245
              </Link>

              <div className="flex gap-3">
                <div className="bg-[#1a1a1a] border border-white/5 p-2 rounded-xl cursor-pointer hover:bg-[#222] transition-colors">
                  <img
                    src="/google-play-badge.png"
                    alt="Google Play"
                    className="h-6"
                  />
                </div>
                <div className="bg-[#1a1a1a] border border-white/5 p-2 rounded-xl cursor-pointer hover:bg-[#222] transition-colors">
                  <img
                    src="/app-store-badge.png"
                    alt="App Store"
                    className="h-6"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM UTILITY BAR */}
          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
              © All Rights Reserved for Mentorable 2026
            </span>

            <div className="flex items-center gap-3">
              <button className="bg-white text-black text-[10px] font-black px-5 py-2.5 rounded-full tracking-widest uppercase hover:bg-[#4ade80] transition-colors">
                USA DOLLAR ($)
              </button>
              <button className="bg-[#1a1a1a] text-white text-[10px] font-black px-5 py-2.5 rounded-full tracking-widest uppercase border border-white/10 flex items-center gap-2 hover:border-white/40 transition-colors">
                <Globe size={14} /> ENGLISH
              </button>
            </div>

            <div className="flex items-center gap-6 text-slate-400">
              <Twitter
                size={18}
                className="hover:text-white cursor-pointer transition-colors"
              />
              <Github
                size={18}
                className="hover:text-white cursor-pointer transition-colors"
              />
              <Youtube
                size={18}
                className="hover:text-white cursor-pointer transition-colors"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
