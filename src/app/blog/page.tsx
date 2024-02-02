import AllBlogPostsList from "@/components/all-blog-posts-list";
import BlogTagsFilter from "@/components/blog-tags-filter";
import ParagraphSkeleton from "@/components/paragraph-skeleton";
import Search from "@/components/search";
import Sort from "@/components/sort";
import { cn, fadeIn } from "@/lib/utils";
import { Suspense } from "react";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    sort?: string;
    tags?: string;
  };
}) {
  const query = searchParams?.query || "";
  const sort = searchParams?.sort || "date";
  const tags = searchParams?.tags || "";

  return (
    <main className="mb-8 flex flex-col gap-y-4">
      <section className={cn(fadeIn, "animation-delay-200 flex gap-x-2")}>
        <Search placeholder="Search blog posts..." />
        <Sort />
        <Suspense fallback={null}>
          <BlogTagsFilter />
        </Suspense>
      </section>
      <section className={cn(fadeIn, "animation-delay-400")}>
        <Suspense fallback={<ParagraphSkeleton />}>
          <AllBlogPostsList query={query} sort={sort} tags={tags} />
        </Suspense>
      </section>
    </main>
  );
}
