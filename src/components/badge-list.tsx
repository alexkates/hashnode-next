import { Badge } from "@/hashnode/generated/graphql";
import BadgeListItem from "./badge-list-item";

type Props = {
  badges: Badge[];
};

export default function BadgeList({ badges }: Props) {
  return (
    <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
      {badges.map((badge) => (
        <BadgeListItem key={badge.id} badge={badge} />
      ))}
    </ul>
  );
}
