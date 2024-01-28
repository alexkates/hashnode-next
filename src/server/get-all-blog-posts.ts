import { Post } from "@/hashnode/generated/graphql";
import getBlogPosts from "./get-blog-posts";

export default async function getAllBlogPosts() {
  const posts: Post[] = [];
  let hasNextPage = true;
  let after = "";

  while (hasNextPage) {
    const page = await getBlogPosts({ after });

    const nodes = page?.edges?.flatMap((edge) => edge?.node) as Post[];
    posts.push(...nodes);

    hasNextPage = !!page?.pageInfo.hasNextPage;
    after = page?.pageInfo.endCursor as string;
  }

  return posts;
}
