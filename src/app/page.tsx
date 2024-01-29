import BadgeList from "@/components/badge-list";
import { Mdx } from "@/components/mdx";
import getMe from "@/server/get-me";

export default async function Home() {
  const me = await getMe();

  return (
    <main className="flex flex-col">
      {me.bio && <Mdx code={me.bio?.markdown} />}
      {me.badges && <BadgeList badges={me.badges} />}
    </main>
  );
}
