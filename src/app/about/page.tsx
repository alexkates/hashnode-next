import BadgeList from "@/components/badge-list";
import { Mdx } from "@/components/mdx";
import { cn, fadeIn } from "@/lib/utils";
import getMe from "@/server/get-me";

export default async function Home() {
  const me = await getMe();

  return (
    <main className="flex flex-col gap-2">
      <section className={cn(fadeIn, "animation-delay-200")}>{me.bio && <Mdx code={me.bio?.markdown} />}</section>
      <section className={cn(fadeIn, "animation-delay-400 flex flex-col gap-2")}>
        <span className="text-2xl font-bold">Badges</span>
        {me.badges && <BadgeList badges={me.badges} />}
      </section>
    </main>
  );
}
