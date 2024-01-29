import { Badge } from "@/hashnode/generated/graphql";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Card, CardFooter, CardHeader } from "./ui/card";

type Props = {
  badge: Badge;
};

export default function BadgeListItem({ badge }: Props) {
  return (
    <li className={cn("flex flex-col items-center")}>
      <Card className="transition-transform duration-300 ease-in-out hover:scale-[1.025]">
        <CardHeader>{badge.image && <Image width={200} height={150} alt={badge.image} src={badge.image} className="rounded-md" />}</CardHeader>
        <CardFooter className="flex flex-col gap-y-1">
          <div className="prose prose-neutral dark:prose-invert flex w-full justify-end text-xs">
            <span>{new Date(badge.dateAssigned!).toLocaleDateString()}</span>
            <span className="mx-1">•</span>
          </div>
          <div className="prose prose-neutral dark:prose-invert flex w-full justify-end gap-x-2"></div>
        </CardFooter>
      </Card>
    </li>
  );
}
