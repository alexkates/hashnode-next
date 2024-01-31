import BadgeList from "@/components/badge-list";
import Bio from "@/components/bio";
import CardListSkeleton from "@/components/card-list-skeleton";
import ParagraphSkeleton from "@/components/paragraph-skeleton";
import { cn, fadeIn } from "@/lib/utils";
import { Suspense } from "react";

export default async function Home() {
  return (
    <main className="flex flex-col gap-2">
      <section className={cn(fadeIn, "animation-delay-200")}>
        <Suspense fallback={<ParagraphSkeleton />}>
          <Bio />
        </Suspense>
      </section>
      <section className={cn(fadeIn, "animation-delay-400 flex flex-col gap-2")}>
        <Suspense fallback={<CardListSkeleton />}>
          <span>Here are some Hashnode badges that I&apos;ve earned</span>
          <BadgeList />
        </Suspense>
      </section>
    </main>
  );
}
