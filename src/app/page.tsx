import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Balancer from "react-wrap-balancer";

export default async function Page() {
  return (
    <main className="flex flex-col gap-4 pb-12 pt-4 text-center lg:items-center lg:gap-8 lg:py-20">
      <div className="flex flex-1 flex-col items-center gap-4 text-center lg:gap-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold lg:text-6xl">hashnode-next</h1>
          <h2 className="text-lg font-light text-muted-foreground lg:text-xl">
            <Balancer>Beautiful and minimalist Hashnode starter-kit powered by Next.js 14, shadcn/ui, and React Server Components</Balancer>
          </h2>
        </div>
      </div>
    </main>
  );
}
