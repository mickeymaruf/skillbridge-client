import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { categoryService } from "@/services/category.service";
import Link from "next/link";

export async function Hero7() {
  const { data: categories } = await categoryService.getCategories();

  return (
    <section className="flex min-h-[70vh] mt-10 flex-col items-center justify-center px-4 text-center">
      {/* Top badge */}
      <Badge
        variant="secondary"
        className="mb-6 rounded-full px-4 py-1 text-sm font-medium"
      >
        Learn from verified expert tutors
      </Badge>

      {/* Heading */}
      <h1 className="mb-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
        Connect with Expert Tutors. Learn Anything, Anytime.
      </h1>

      {/* Subtitle */}
      <p className="mb-10 max-w-2xl text-base text-muted-foreground sm:text-lg">
        Browse top-rated tutors, book sessions instantly, and level up your
        skills with personalized one-on-one learning.
      </p>

      {/* Search bar */}
      <div className="relative w-full max-w-2xl">
        <Input
          placeholder="Search for anything..."
          className="h-14 rounded-full pl-12 pr-28 text-base shadow-sm"
        />

        {/* Search icon */}
        <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m21 21-4.35-4.35M17 11a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z"
            />
          </svg>
        </div>

        {/* Search button */}
        <Button className="absolute right-2 top-1/2 h-10 -translate-y-1/2 rounded-full px-6">
          Search
        </Button>
      </div>

      {/* Filter pills */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
        <Button size="sm" className="rounded-full">
          <Link href={`/tutors`}>All</Link>
        </Button>
        {categories.data
          .slice(0, 4)
          .map((c: { slug: string; name: string }) => (
            <Button
              key={c.slug}
              size="sm"
              variant="outline"
              className="rounded-full"
              asChild
            >
              <Link href={`/tutors?category=${c.slug}`}>{c.name}</Link>
            </Button>
          ))}
      </div>
    </section>
  );
}
