import AllBlogPostsList from "@/components/all-blog-posts-list";
import BlogPostListSkeleton from "@/components/blog-post-list-skeleton";
import BlogTagsFilter from "@/components/blog-tags-filter";
import Search from "@/components/search";
import Sort from "@/components/sort";
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
      <section className="flex gap-x-2">
        <Search placeholder="Search blog posts..." />
        <Sort />
        <BlogTagsFilter />
      </section>
      <section>
        <Suspense fallback={<BlogPostListSkeleton />}>
          <AllBlogPostsList query={query} sort={sort} tags={tags} />
        </Suspense>
      </section>
    </main>
  );
}
