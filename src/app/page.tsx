import BadgeList from "@/components/badge-list";
import { Mdx } from "@/components/mdx";
import { cn, fadeIn } from "@/lib/utils";
import getMe from "@/server/get-me";

export default async function Home() {
  const me = await getMe();

  return (
    <main className="flex flex-col">
      <section className={cn(fadeIn, "animation-delay-200")}>{me.bio && <Mdx code={me.bio?.markdown} />}</section>
      <section className={cn(fadeIn, "animation-delay-400")}>{me.badges && <BadgeList badges={me.badges} />}</section>
    </main>
  );
}
