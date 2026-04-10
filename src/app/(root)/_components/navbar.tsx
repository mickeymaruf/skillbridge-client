"use client";

import React, { useEffect, useState } from "react";
import {
  Users,
  Grid,
  Zap,
  Search,
  ArrowUpRight,
  LineSquiggle,
  Moon,
  Sun,
  Menu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { useTheme } from "next-themes";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const { scrollY } = useScroll();

  // Simple state toggle for scroll to avoid jittery transform math
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  useEffect(() => {
    setMounted(true);
    (async () => {
      const { data } = await authClient.getSession();
      if (data?.session) setIsAuthenticated(true);
    })();
  }, []);

  if (!mounted) return null;

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center pointer-events-none">
      <motion.div
        initial={false}
        animate={{
          width: isScrolled ? "min(1200px, 90vw)" : "100%",
          marginTop: isScrolled ? "16px" : "0px",
          paddingLeft: isScrolled ? "20px" : "40px",
          paddingRight: isScrolled ? "20px" : "40px",
          borderRadius: isScrolled ? "100px" : "0px",
          backgroundColor: isScrolled
            ? theme === "dark"
              ? "rgba(9, 9, 11, 0.4)"
              : "rgba(255, 255, 255, 0.4)"
            : "transparent",
          backdropFilter: isScrolled ? "blur(24px) saturate(1.8)" : "blur(0px)",
        }}
        transition={{ type: "spring", stiffness: 200, damping: 30 }}
        className={cn(
          "pointer-events-auto flex items-center justify-between h-[72px]",
        )}
      >
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <LineSquiggle size={32} className="text-[#4ade80]" />
          <span className="font-bold text-xl tracking-tighter text-slate-900 dark:text-zinc-50">
            Mentorable
          </span>
        </Link>

        {/* CENTER NAV - SLEEK PILL */}
        <nav className="hidden lg:flex items-center gap-1 bg-zinc-500/5 dark:bg-white/5 p-1 rounded-full border border-black/5 dark:border-white/5">
          {[
            { name: "Mentors", icon: <Users size={14} />, href: "/tutors" },
            { name: "Categories", icon: <Grid size={14} />, href: "#" },
            { name: "Gigs", icon: <Zap size={14} />, href: "#" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="px-5 py-2 rounded-full text-[11px] font-bold tracking-widest uppercase text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-100 transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <button className="p-2 hover:bg-white dark:hover:bg-zinc-800 rounded-full transition-all">
            <Search size={14} className="text-slate-400" />
          </button>
        </nav>

        {/* ACTIONS */}
        <div className="flex items-center gap-3 shrink-0">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full w-10 h-10 hover:bg-white/20"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </Button>

          <div className="hidden sm:block">
            <AuthButton isAuthenticated={isAuthenticated} />
          </div>

          {/* MOBILE TOGGLE */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden rounded-full"
              >
                <Menu size={22} />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="border-none bg-white/80 dark:bg-zinc-950/80 backdrop-blur-3xl"
            >
              <div className="flex flex-col gap-6 mt-12">
                {/* Mobile Links here... */}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </motion.div>
    </header>
  );
}

function AuthButton({ isAuthenticated }: { isAuthenticated: boolean }) {
  return (
    <Button
      asChild
      className="relative overflow-hidden bg-zinc-900 dark:bg-[#4ade80] hover:bg-zinc-800 dark:hover:bg-[#3ecb73] text-white dark:text-zinc-950 rounded-full h-11 pl-6 pr-1.5 transition-all group border-none"
    >
      <Link
        href={isAuthenticated ? "/dashboard" : "/login"}
        className="flex items-center gap-4"
      >
        <span className="text-[11px] font-black tracking-[0.2em]">
          {isAuthenticated ? "DASHBOARD" : "GET STARTED"}
        </span>
        <div className="bg-white/10 dark:bg-black/10 rounded-full w-8 h-8 flex items-center justify-center group-hover:bg-white/20 transition-colors">
          <ArrowUpRight size={16} strokeWidth={2.5} />
        </div>
      </Link>
    </Button>
  );
}
