import getAllBlogPosts from "@/server/get-all-blog-posts";
import BlogPostList from "./blog-post-list";

type Props = {
  query?: string;
  sort?: string;
  tags?: string;
};

async function AllBlogPostsList({ query, sort, tags }: Props) {
  const posts = await getAllBlogPosts();

  return <BlogPostList posts={posts} query={query} sort={sort} tags={tags} />;
}

export default AllBlogPostsList;
