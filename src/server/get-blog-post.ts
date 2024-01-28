import { GetPostBySlugDocument } from "@/hashnode/generated/graphql";
import request from "graphql-request";

type Props = {
  slug: string;
};

export default async function getBlogPost({ slug }: Props) {
  const { publication } = await request({
    url: process.env.HASHNODE_API_URL!,
    document: GetPostBySlugDocument,
    variables: {
      host: process.env.HASHNODE_HOST!,
      slug,
    },
  });

  return publication?.post;
}
