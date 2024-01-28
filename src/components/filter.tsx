"use client";

import { Tag } from "@/hashnode/generated/graphql";
import { TagIcon } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ScrollArea } from "./ui/scroll-area";

type Props = {
  tags: Pick<Tag, "postsCount" | "name">[];
};

function Filter({ tags }: Props) {
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function onCheckedChanged(checked: boolean, tag: string) {
    const params = new URLSearchParams(searchParams);

    if (checked) {
      const existingTags = params.get("tags") || "";
      const tagsArray = existingTags.split(",");
      if (tagsArray[0] === "") {
        tagsArray.shift();
      }
      tagsArray.push(tag);
      params.set("tags", tagsArray.join(","));
    } else {
      const existingTags = params.get("tags");
      if (existingTags) {
        const tagsArray = existingTags.split(",");
        const updatedTagsArray = tagsArray.filter((t) => t !== tag);
        if (updatedTagsArray.length === 0) {
          params.delete("tags");
        } else {
          params.set("tags", updatedTagsArray.join(","));
        }
      }
    }

    replace(`${pathname}?${params.toString()}`);
  }

  function clear() {
    const params = new URLSearchParams(searchParams);
    params.delete("tags");
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"outline"} size={"icon"}>
          <TagIcon className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <ScrollArea className="h-72">
          <DropdownMenuLabel className="flex items-center justify-between">
            <span>Tags</span>
            <Button variant={"link"} size={"sm"} className="underline" onClick={clear}>
              Clear
            </Button>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          {tags
            .sort((a, b) => b.postsCount - a.postsCount)
            .map(({ name, postsCount }) => (
              <DropdownMenuCheckboxItem
                key={name}
                checked={searchParams.get("tags")?.includes(name)}
                onCheckedChange={(checked) => onCheckedChanged(checked, name)}
                onSelect={(e) => e.preventDefault()}
              >
                {name} ({postsCount})
              </DropdownMenuCheckboxItem>
            ))}
        </ScrollArea>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default Filter;
