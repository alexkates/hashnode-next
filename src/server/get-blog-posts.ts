import { GetPostsDocument } from "@/hashnode/generated/graphql";
import request from "graphql-request";

type Props = {
  first?: number;
  after?: string;
};

export default async function getBlogPosts({ first = 20, after = undefined }: Props) {
  const { publication } = await request({
    url: process.env.HASHNODE_API_URL!,
    document: GetPostsDocument,
    variables: {
      host: process.env.HASHNODE_HOST!,
      first,
      after,
    },
  });

  return publication?.posts;
}
