import getUser from "@/server/get-user";
import BadgeListItem from "./badge-list-item";

export default async function BadgeList() {
  const { badges } = await getUser();

  return (
    <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2">
      {badges.map((badge) => (
        <BadgeListItem key={badge.id} badge={badge} />
      ))}
    </ul>
  );
}
