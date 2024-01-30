import { Button } from "@/components/ui/button";
import { GitHubLogoIcon, VercelLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Balancer } from "react-wrap-balancer";

export default async function Page() {
  return (
    <main className="flex flex-col gap-4 pb-12 pt-4 text-center sm:items-center sm:gap-8 sm:py-20">
      <div className="flex flex-1 flex-col items-center gap-4 text-center sm:gap-8">
        <div className="gap-8 flex flex-col items-center">
          <div className="flex flex-col gap 2">
            <h1 className="text-4xl font-bold sm:text-6xl">hashnode-next</h1>
            <h2 className="text-lg font-light text-muted-foreground sm:text-xl">The fastest way to go headless with Hashnode</h2>
          </div>
          <h3 className="text-lg sm:text-xl">
            <Balancer>
              Beautifully simple Hashnode starter-kit powered by{" "}
              <Link className="underline underline-offset-2" href="https://nextjs.org/" target="_blank">
                Next.js 14
              </Link>
              &nbsp;and&nbsp;
              <Link className="underline underline-offset-2" href="https://ui.shadcn.com/" target="_blank">
                shadcn/ui
              </Link>
            </Balancer>
          </h3>
          <div className="flex items-center gap-8">
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
