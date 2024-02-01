import getUser from "@/server/get-user";
import { Mdx } from "./mdx";

export default async function bio() {
  const { bio } = await getUser();

  return <Mdx code={bio?.markdown as string} />;
}
