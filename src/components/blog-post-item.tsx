import { Post } from "@/hashnode/generated/graphql";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { Card, CardFooter, CardHeader } from "./ui/card";

type Props = {
  post: Post;
};

export default function BlogPostItem({ post }: Props) {
  const fadeIn = "animate-in fade-in duration-1000 fill-mode-both";
  return (
    <li className={cn("flex flex-col items-center", fadeIn)}>
      <Link href={`/blog/${post.slug}`}>
        <Card className="transition-transform duration-300 ease-in-out hover:scale-[1.025]">
          <CardHeader>
            {post.coverImage?.url && <Image width={500} height={150} alt={post.title} src={post.coverImage?.url} className="rounded-md" />}
          </CardHeader>
          <CardFooter className="flex flex-col gap-y-1">
            <div className="prose prose-neutral dark:prose-invert flex w-full justify-end text-xs">
              <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
              <span className="mx-1">•</span>
              <span>{post.views.toLocaleString()} views</span>
              <span className="mx-1">•</span>
              <span>{post.readTimeInMinutes} min read</span>
            </div>
            <div className="prose prose-neutral dark:prose-invert flex w-full justify-end gap-x-2">
              {post.tags?.map((tag) => (
                <Badge key={tag.name} variant="outline" className="text-[8px]">
                  {tag.name.toLocaleLowerCase()}
                </Badge>
              ))}
            </div>
          </CardFooter>
        </Card>
      </Link>
    </li>
  );
}
