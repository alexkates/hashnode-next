import getMe from "@/server/get-me";
import { Mdx } from "@/components/mdx";
import BadgeList from "@/components/badge-list";

export default async function Home() {
  const me = await getMe();

  return (
    <main className="flex flex-col">
      {me.bio && <Mdx code={me.bio?.markdown} />}
      {me.badges && <BadgeList badges={me.badges} />}
    </main>
  );
}
