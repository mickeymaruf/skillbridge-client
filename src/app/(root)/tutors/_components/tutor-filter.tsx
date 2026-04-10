"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

type CategoriesType = {
  name: string;
  slug: string;
};

export function TutorFilter({ categories }: { categories: CategoriesType[] }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const currentCategory = searchParams.get("category") ?? "all";
  const isFeatured = searchParams.get("isFeatured") === "true";
  const nameQuery = searchParams.get("name") ?? "";

  const navigateToPage = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (!value || value === "all") {
        params.delete(name);
      } else {
        params.set(name, value);
      }
      router.push(pathname + "?" + params.toString());
    },
    [searchParams, router, pathname],
  );

  return (
    <div className="w-full mb-16 space-y-10">
      {/* TOP ROW: Editorial Header & Category Nav */}
      <div className="flex flex-col lg:flex-row justify-between items-baseline border-b border-black/5 pb-8 gap-8">
        <h1 className="font-serif text-6xl md:text-7xl text-[#1A1A1A] tracking-tight">
          Mentors
        </h1>

        <nav className="flex flex-wrap items-center gap-y-4">
          {/* "All" Category */}
          <button
            onClick={() => navigateToPage("category", "all")}
            className={`text-[11px] font-black uppercase tracking-[0.2em] transition-colors ${
              currentCategory === "all"
                ? "text-black"
                : "text-black/30 hover:text-black/60"
            }`}
          >
            All
          </button>

          {/* Dynamic Categories with thin separators (—) */}
          {categories.map((cat) => (
            <div key={cat.slug} className="flex items-center">
              <div className="w-8 h-[1px] bg-black/10 mx-6" />
              <button
                onClick={() => navigateToPage("category", cat.slug)}
                className={`text-[11px] font-black uppercase tracking-[0.2em] transition-colors ${
                  currentCategory === cat.slug
                    ? "text-black"
                    : "text-black/30 hover:text-black/60"
                }`}
              >
                {cat.name}
              </button>
            </div>
          ))}
        </nav>
      </div>

      {/* BOTTOM ROW: Advanced Filters & Search */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-white/50 backdrop-blur-sm p-6 rounded-[32px] border border-black/[0.03]">
        {/* Search Input - Minimalist style */}
        <div className="relative flex-1 max-w-md w-full group">
          <Search
            className="absolute left-0 top-1/2 -translate-y-1/2 text-black/20 group-focus-within:text-[#2E7D32] transition-colors"
            size={16}
          />
          <input
            type="text"
            defaultValue={nameQuery}
            placeholder="SEARCH BY NAME..."
            onBlur={(e) => navigateToPage("name", e.target.value)}
            className="w-full bg-transparent border-b border-black/5 py-2 pl-7 text-[10px] font-black uppercase tracking-widest outline-none focus:border-[#2E7D32] transition-all"
          />
        </div>

        {/* Pricing & Toggles */}
        <div className="flex flex-wrap items-center gap-8">
          {/* Price Range */}
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-black text-black/30 uppercase tracking-widest">
              Price:
            </span>
            <input
              type="number"
              placeholder="MIN"
              className="w-14 bg-transparent border-b border-black/5 py-1 text-[10px] font-bold text-center outline-none focus:border-[#2E7D32]"
              onChange={(e) => navigateToPage("min", e.target.value)}
            />
            <span className="text-black/10">—</span>
            <input
              type="number"
              placeholder="MAX"
              className="w-14 bg-transparent border-b border-black/5 py-1 text-[10px] font-bold text-center outline-none focus:border-[#2E7D32]"
              onChange={(e) => navigateToPage("max", e.target.value)}
            />
          </div>

          {/* Featured Switch */}
          <div className="flex items-center gap-3 border-l border-black/5 pl-8">
            <Switch
              checked={isFeatured}
              onCheckedChange={(checked) =>
                navigateToPage("isFeatured", `${checked}`)
              }
              className="data-[state=checked]:bg-[#2E7D32]"
            />
            <Label className="text-[10px] font-black uppercase tracking-widest text-black/60">
              Featured Only
            </Label>
          </div>

          {/* Reset Action */}
          <Button
            variant="ghost"
            onClick={() => router.push(pathname)}
            className="h-auto p-0 text-[10px] font-black uppercase tracking-[0.2em] text-red-400 hover:text-red-600 hover:bg-transparent"
          >
            Reset (×)
          </Button>
        </div>
      </div>
    </div>
  );
}
