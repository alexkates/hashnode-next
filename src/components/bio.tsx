import getMe from "@/server/get-me";
import { Mdx } from "./mdx";

export default async function bio() {
  const { bio } = await getMe();

  return <Mdx code={bio?.markdown as string} />;
}
