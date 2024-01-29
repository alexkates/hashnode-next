import { Button } from "@/components/ui/button";
import { GitHubLogoIcon, VercelLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default async function Page() {
  return (
    <main className="flex flex-col gap-4 pb-12 pt-4 text-center lg:items-center lg:gap-8 lg:py-20">
      <div className="flex flex-1 flex-col items-center gap-4 text-center lg:gap-8">
        <div className="gap-4 flex flex-col items-center">
          <h1 className="text-4xl font-bold lg:text-6xl">hashnode-next</h1>
          <h2 className="text-lg font-light text-muted-foreground lg:text-xl">The fastest way to go headless with Hashnode</h2>
          <h3 className="text-lg lg:text-xl">
            Beautiful and minimalist Hashnode starter-kit powered by Next.js 14, shadcn/ui, and React Server Components
          </h3>
          <div className="grid gap-10 grid-cols-2 max-w-md">
            <Button asChild size="lg">
              <Link
                href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Falexkates%2Fhashnode-next&env=HASHNODE_API_KEY,HASHNODE_API_URL,HASHNODE_HOST&envDescription=Hashnode%20docs&envLink=https%3A%2F%2Fapidocs.hashnode.com%2F&project-name=blog&repository-name=blog"
                target="_blank"
              >
                <VercelLogoIcon className="mr-2 h-4 w-4" /> Deploy
              </Link>
            </Button>

            <Button asChild size="lg" variant="secondary">
              <Link href="https://github.com/alexkates/hashnode-next" target="_blank">
                <GitHubLogoIcon className="mr-2 h-4 w-4" /> GitHub
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
