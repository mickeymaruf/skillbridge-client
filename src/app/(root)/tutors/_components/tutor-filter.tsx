"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState, useEffect } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Search,
  Sparkles,
  Loader2,
  Star,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

type CategoriesType = {
  name: string;
  slug: string;
};

export function TutorFilter({ categories }: { categories: CategoriesType[] }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // Local state for inputs
  const [query, setQuery] = useState(searchParams.get("name") ?? "");
  const [minPrice, setMinPrice] = useState(searchParams.get("min") ?? "");
  const [maxPrice, setMaxPrice] = useState(searchParams.get("max") ?? "");
  const [rating, setRating] = useState(searchParams.get("rating") ?? "");
  const [isLoading, setIsLoading] = useState(false);

  // State for category expansion
  const [showAllCategories, setShowAllCategories] = useState(false);
  const CATEGORY_LIMIT = 4; // Number of categories to show by default

  const currentCategory = searchParams.get("category") ?? "all";
  const isFeatured = searchParams.get("isFeatured") === "true";

  // Sync local state if URL changes
  useEffect(() => {
    setQuery(searchParams.get("name") ?? "");
    setMinPrice(searchParams.get("min") ?? "");
    setMaxPrice(searchParams.get("max") ?? "");
    setRating(searchParams.get("rating") ?? "");
  }, [searchParams]);

  const updateUrl = useCallback(
    (updates: Record<string, string>) => {
      const params = new URLSearchParams(searchParams.toString());
      Object.entries(updates).forEach(([name, value]) => {
        if (!value || value === "all" || value === "0") {
          params.delete(name);
        } else {
          params.set(name, value);
        }
      });
      router.push(pathname + "?" + params.toString(), { scroll: false });
    },
    [searchParams, router, pathname],
  );

  // Debounced update for manual inputs
  useEffect(() => {
    const timer = setTimeout(() => {
      if (
        minPrice !== (searchParams.get("min") ?? "") ||
        maxPrice !== (searchParams.get("max") ?? "") ||
        rating !== (searchParams.get("rating") ?? "")
      ) {
        updateUrl({ min: minPrice, max: maxPrice, rating: rating });
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [minPrice, maxPrice, rating, updateUrl, searchParams]);

  const handleSearchTrigger = async () => {
    if (!query.trim()) return;
    if (query.trim().split(" ").length <= 1) {
      updateUrl({ name: query.trim() });
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/tutors/ai-search`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ prompt: query }),
        },
      );
      const result = await res.json();
      if (result.success) {
        const params = new URLSearchParams();
        Object.entries(result.data).forEach(([key, value]) => {
          if (
            value !== undefined &&
            value !== null &&
            value !== "" &&
            value !== 0 &&
            value !== false
          ) {
            params.set(key, String(value));
          }
        });
        router.push(pathname + "?" + params.toString());
      }
    } catch (error) {
      updateUrl({ name: query });
    } finally {
      setIsLoading(false);
    }
  };

  // Logic to determine which categories to display
  const displayedCategories = showAllCategories
    ? categories
    : categories.slice(0, CATEGORY_LIMIT);

  return (
    <div className="w-full mb-16 space-y-10">
      {/* HEADER & CATEGORIES */}
      <div className="flex flex-col lg:flex-row justify-between items-baseline border-b border-black/5 pb-8 gap-8">
        <h1 className="font-serif text-6xl md:text-7xl text-[#1A1A1A] tracking-tight">
          Mentors
        </h1>

        <nav className="flex flex-wrap items-center gap-y-4">
          <button
            onClick={() => updateUrl({ category: "all" })}
            className={`text-[11px] font-black uppercase tracking-[0.2em] transition-colors ${currentCategory === "all" ? "text-black" : "text-black/30 hover:text-black/60"}`}
          >
            All
          </button>

          {displayedCategories.map((cat) => (
            <div key={cat.slug} className="flex items-center">
              <div className="w-8 h-[1px] bg-black/10 mx-6" />
              <button
                onClick={() => updateUrl({ category: cat.slug })}
                className={`text-[11px] font-black uppercase tracking-[0.2em] transition-colors ${currentCategory === cat.slug ? "text-black" : "text-black/30 hover:text-black/60"}`}
              >
                {cat.name}
              </button>
            </div>
          ))}

          {/* SHOW ALL TOGGLE */}
          {categories.length > CATEGORY_LIMIT && (
            <button
              onClick={() => setShowAllCategories(!showAllCategories)}
              className="flex items-center ml-6 text-[10px] font-black uppercase tracking-[0.2em] text-[#2E7D32] hover:opacity-70 transition-all"
            >
              <div className="w-4 h-[1px] bg-[#2E7D32]/20 mr-4" />
              {showAllCategories
                ? "Show Less"
                : `+${categories.length - CATEGORY_LIMIT} More`}
              {showAllCategories ? (
                <ChevronUp size={12} className="ml-1" />
              ) : (
                <ChevronDown size={12} className="ml-1" />
              )}
            </button>
          )}
        </nav>
      </div>

      {/* SEARCH BAR & FILTERS */}
      <div className="flex flex-col xl:flex-row items-center justify-between gap-8 bg-white/50 backdrop-blur-sm p-6 rounded-[32px] border border-black/[0.03] shadow-sm">
        <div className="relative flex-1 max-w-2xl w-full flex items-center gap-2">
          <div className="relative flex-1">
            {isLoading ? (
              <Loader2
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#2E7D32] animate-spin"
                size={14}
              />
            ) : (
              <Sparkles
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#2E7D32]/40"
                size={14}
              />
            )}
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearchTrigger()}
              placeholder="ASK AI (E.G. 'CREATIVE DESIGNER UNDER $50')..."
              className="w-full bg-black/[0.02] border border-black/5 rounded-full py-3 pl-10 pr-4 text-[10px] font-bold uppercase tracking-widest outline-none focus:border-[#2E7D32] transition-all"
            />
          </div>
          <Button
            onClick={handleSearchTrigger}
            disabled={isLoading}
            className="rounded-full bg-[#1A1A1A] hover:bg-[#2E7D32] text-white px-6 h-11 transition-all"
          >
            {isLoading ? (
              <Loader2 size={14} className="animate-spin" />
            ) : (
              <Search size={14} />
            )}
          </Button>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-black text-black/30 uppercase tracking-widest">
              Price:
            </span>
            <input
              type="number"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              placeholder="MIN"
              className="w-12 bg-transparent border-b border-black/5 py-1 text-[10px] font-bold text-center outline-none focus:border-[#2E7D32]"
            />
            <span className="text-black/10">—</span>
            <input
              type="number"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              placeholder="MAX"
              className="w-12 bg-transparent border-b border-black/5 py-1 text-[10px] font-bold text-center outline-none focus:border-[#2E7D32]"
            />
          </div>

          <div className="flex items-center gap-2 border-l border-black/5 pl-6">
            <Star size={12} className="text-yellow-500 fill-yellow-500" />
            <input
              type="number"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              placeholder="0"
              className="w-8 bg-transparent border-b border-black/5 py-1 text-[10px] font-bold text-center outline-none focus:border-[#2E7D32]"
            />
            <span className="text-[10px] font-black text-black/30 uppercase tracking-widest">
              + STARS
            </span>
          </div>

          <div className="flex items-center gap-3 border-l border-black/5 pl-6">
            <Switch
              checked={isFeatured}
              onCheckedChange={(checked) =>
                updateUrl({ isFeatured: String(checked) })
              }
              className="data-[state=checked]:bg-[#2E7D32]"
            />
            <Label className="text-[10px] font-black uppercase tracking-widest text-black/60">
              Featured
            </Label>
          </div>

          <Button
            variant="ghost"
            onClick={() => {
              setQuery("");
              router.push(pathname);
            }}
            className="text-[10px] font-black uppercase tracking-[0.2em] text-red-400"
          >
            Reset (×)
          </Button>
        </div>
      </div>
    </div>
  );
}
