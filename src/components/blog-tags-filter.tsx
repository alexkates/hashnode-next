import getAllBlogTags from "@/server/get-all-blog-tags";
import Filter from "./filter";

async function BlogTagsFilter() {
  const allTags = await getAllBlogTags();

  return <Filter tags={allTags} />;
}

export default BlogTagsFilter;
