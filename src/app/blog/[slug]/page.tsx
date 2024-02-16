import Analytics from "@/components/analytics";
import { Mdx } from "@/components/mdx";
import createPostJsonLd from "@/lib/create-post-json-ld";
import { cn, fadeIn } from "@/lib/utils";
import getBlogPost from "@/server/get-blog-post";
import getPublication from "@/server/get-publication";
import { Metadata } from "next/types";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props) {
  const post = await getBlogPost(params);

  const title = post?.seo?.title || post?.title;
  const description = post?.seo?.description || post?.subtitle || post?.title;
  const images = post?.coverImage?.url;

  const metadata: Metadata = {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      siteName: "Alex Kates | Blog",
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images,
      creator: "@thealexkates",
    },
  };

  return metadata;
}

export default async function Page({ params }: Props) {
  const post = await getBlogPost(params);
  const publication = await getPublication();

  if (!post) {
    return null;
  }

  const jsonLd = createPostJsonLd(publication, post);

  const {
    publishedAt,
    readTimeInMinutes,
    title,
    views,
    id,
    content: { markdown },
  } = post;

  return (
    <>
      <section className={cn(fadeIn, "animation-delay-200 mb-8 flex flex-col gap-1")}>
        <h1 className="text-3xl font-bold">{title}</h1>
        <h3 className="text-xs font-light">
          {new Date(publishedAt).toLocaleDateString()} • {views} views • {readTimeInMinutes} min read
        </h3>
      </section>
      <article className={cn(fadeIn, "animation-delay-400")}>
        <Mdx code={markdown} />
      </article>
      <Analytics postId={id} publicationId={publication?.id!} />
      <script id="jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
