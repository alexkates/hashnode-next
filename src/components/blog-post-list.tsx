import { Post } from "@/hashnode/generated/graphql";
import { SortTypes } from "@/types/sort-types";
import BlogPostListItem from "./blog-post-list-item";

type Props = {
  posts: Post[];
  query?: string;
  sort?: string;
  tags?: string;
};

function BlogPostList({ posts, query = "", sort = "", tags = "" }: Props) {
  const sortedPosts = posts.sort((a, b) => {
    if (sort === SortTypes.Date) {
      return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
    } else if (sort === SortTypes.Views) {
      return b.views - a.views;
    } else if (sort === SortTypes.Likes) {
      return b.reactionCount - a.reactionCount;
    }

    return 0;
  });

  const tagsArray = tags?.split(",").filter((t) => t !== "");

  return (
    <ul className="flex flex-col gap-6">
      {sortedPosts
        .filter((post) => {
          const isMatchingQuery = post.content.text?.toLowerCase().includes(query?.toLowerCase() ?? "");
          const isMatchingTags = tagsArray?.length === 0 || tagsArray?.some((tag) => post.tags?.map((t) => t.name.toLowerCase()).includes(tag));
          return isMatchingQuery && isMatchingTags;
        })
        .map((post) => (
          <BlogPostListItem key={post.id} post={post} />
        ))}
    </ul>
  );
}

export default BlogPostList;
