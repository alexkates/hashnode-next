import url from "@/hashnode/api-url";
import { GetPostBySlugDocument, Post } from "@/hashnode/generated/graphql";
import request from "graphql-request";

type Props = {
  slug: string;
};

export default async function getBlogPost({ slug }: Props) {
  const { publication } = await request({
    url,
    document: GetPostBySlugDocument,
    variables: {
      host: process.env.HASHNODE_HOST!,
      slug,
    },
  });

  return publication?.post as Post;
}
