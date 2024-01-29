import { Badge } from "@/hashnode/generated/graphql";
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";

type Props = {
  badge: Badge;
};

export default function BadgeListItem({ badge }: Props) {
  return (
    <li>
      <Card className="transition-transform duration-300 ease-in-out hover:scale-[1.025]">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Image width={20} height={20} alt={badge.image} src={badge.image} className="rounded-md" />
            <span>{badge.name}</span>
          </div>
        </CardHeader>
        <CardContent>
          <p className="min-h-20">{badge.description}</p>
        </CardContent>
        <CardFooter className="flex flex-col gap-y-1">
          <div className="flex w-full justify-end text-xs">
            <span>{new Date(badge.dateAssigned!).toLocaleDateString()}</span>
          </div>
        </CardFooter>
      </Card>
    </li>
  );
}
