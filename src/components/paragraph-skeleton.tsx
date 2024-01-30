import { Skeleton } from "./ui/skeleton";

function ParagraphSkeleton() {
  return (
    <div className="flex flex-col gap-2 mt-4">
      <Skeleton className="h-4 w-64" />
      <Skeleton className="h-4 w-64" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
    </div>
  );
}

export default ParagraphSkeleton;
