import { Tag } from "@/hashnode/generated/graphql";
import getAllBlogPosts from "./get-all-blog-posts";

export default async function getAllBlogTags() {
  const posts = await getAllBlogPosts();
  const allTags: Pick<Tag, "postsCount" | "name">[] = posts
    .flatMap((p) => p.tags)
    .reduce((acc: Pick<Tag, "postsCount" | "name">[], tag) => {
      const name = tag?.name.toLocaleLowerCase();
      if (!name) return acc;

      if (!acc.find((t) => t.name === name)) {
        acc.push({
          name,
          postsCount: posts.filter((p) => p.tags?.find((t) => t.name.toLocaleLowerCase() === name)).length,
        });
      }

      return acc;
    }, []);

  return allTags;
}
