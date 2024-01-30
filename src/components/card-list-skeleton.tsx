import { Skeleton } from "./ui/skeleton";

function CardListSkeleton() {
  return (
    <ul className="xl:grd-cols-3 mt-4 grid grid-cols-1 gap-8 sm:grid-cols-2">
      {Array.from({ length: 6 }).map((_, i) => (
        <li key={i} className={"flex flex-col items-center gap-2"}>
          <Skeleton className="h-28 w-64 rounded-lg" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-40" />
            <Skeleton className="h-4 w-40" />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CardListSkeleton;
