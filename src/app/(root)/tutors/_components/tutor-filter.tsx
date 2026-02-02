"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

type CategoriesType = {
  name: string;
  slug: string;
};

export function TutorFilter({ categories }: { categories: CategoriesType[] }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const name = searchParams.get("name") ?? "";
  const category = searchParams.get("category") ?? "all";
  const max = searchParams.get("max") ?? "";
  const min = searchParams.get("min") ?? "";
  const rating = searchParams.get("rating") ?? "0";

  const isFeatured = searchParams.get("isFeatured") === "true";

  const navigateToPage = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());

      params.set(name, value);

      router.push(pathname + "?" + params.toString());
    },
    [searchParams],
  );

  return (
    <div className="flex flex-col gap-4 rounded-lg border bg-background p-4 md:flex-row md:items-end">
      {/* Name Search */}
      <div className="flex-1">
        <Label>Name</Label>
        <Input
          defaultValue={name}
          placeholder="Search tutor..."
          onBlur={(e) => navigateToPage("name", e.target.value)}
        />
      </div>

      {/* Category */}
      <div className="w-full md:w-40">
        <Label>Category</Label>
        <Select
          value={category}
          onValueChange={(value) =>
            navigateToPage("category", value === "all" ? "" : value)
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="All" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            {categories.map((c) => (
              <SelectItem key={c.slug} value={c.slug}>
                {c.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Max Price */}
      <div className="w-full md:w-32">
        <Label>Max Price</Label>
        <Input
          type="number"
          placeholder="$"
          defaultValue={max}
          onChange={(e) => navigateToPage("max", e.target.value)}
        />
      </div>

      {/* Min Price */}
      <div className="w-full md:w-32">
        <Label>Min Price</Label>
        <Input
          type="number"
          placeholder="$"
          defaultValue={min}
          onChange={(e) => navigateToPage("min", e.target.value)}
        />
      </div>

      {/* Rating */}
      <div className="w-full md:w-32">
        <Label>Rating</Label>
        <Select
          value={rating}
          onValueChange={(value) => navigateToPage("rating", value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Any" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="0">Any</SelectItem>
            <SelectItem value="5">5+</SelectItem>
            <SelectItem value="4">4+</SelectItem>
            <SelectItem value="3">3+</SelectItem>
            <SelectItem value="2">2+</SelectItem>
            <SelectItem value="1">1+</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Featured */}
      <div className="flex items-center gap-2">
        <Switch
          checked={isFeatured}
          onCheckedChange={(checked) =>
            navigateToPage("isFeatured", `${checked}`)
          }
        />
        <Label>Featured</Label>
      </div>

      {/* Reset */}
      <Button variant="outline" onClick={() => router.push(pathname)}>
        Reset
      </Button>
    </div>
  );
}
