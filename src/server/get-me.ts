import { MeDocument } from "@/hashnode/generated/graphql";
import request from "graphql-request";

export default async function getBlogPost() {
  const { me } = await request({
    url: process.env.HASHNODE_API_URL!,
    document: MeDocument,
    requestHeaders: {
      Authorization: `Bearer ${process.env.HASHNODE_API_KEY}`,
    },
  });

  return me;
}
