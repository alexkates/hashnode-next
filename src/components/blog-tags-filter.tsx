import Filter from "./filter";
import getAllBlogTags from "@/server/get-all-blog-tags";

async function BlogTagsFilter() {
  const allTags = await getAllBlogTags();

  return <Filter tags={allTags} />;
}

export default BlogTagsFilter;
