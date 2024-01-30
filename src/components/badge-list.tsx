import getMe from "@/server/get-me";
import BadgeListItem from "./badge-list-item";

export default async function BadgeList() {
  const { badges } = await getMe();

  return (
    <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2">
      {badges.map((badge) => (
        <BadgeListItem key={badge.id} badge={badge} />
      ))}
    </ul>
  );
}
