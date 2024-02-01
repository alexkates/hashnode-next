import CreateNextApp from "@/components/create-next-app";
import { Button } from "@/components/ui/button";
import { cn, fadeIn } from "@/lib/utils";
import { GitHubLogoIcon, VercelLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default async function Page() {
  return (
    <main className="flex flex-col gap-4 pb-12 pt-4 text-center items-center sm:gap-8 sm:py-20">
      <section className={cn(fadeIn, "animation-delay-200 flex flex-col gap 2")}>
        <h1 className="text-4xl font-bold sm:text-7xl">hashnode-next</h1>
        <h2 className="text-lg font-light text-muted-foreground sm:text-xl">The fastest way to go headless with Hashnode</h2>
      </section>
      <section className={cn(fadeIn, "animation-delay-400")}>
        <span className="text-lg sm:text-xl">
          <div>Beautifully simple Hashnode starter-kit</div>
          <div>
            powered by&nbsp;
            <Link className="underline underline-offset-2" href="https://nextjs.org/" target="_blank">
              Next.js
            </Link>
            &nbsp;and&nbsp;
            <Link className="underline underline-offset-2" href="https://ui.shadcn.com/" target="_blank">
              shadcn/ui
            </Link>
          </div>
        </span>
      </section>
      <section className={cn(fadeIn, "flex items-center gap-8 animation-delay-600")}>
        <Button asChild size="lg">
          <Link
            href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Falexkates%2Fhashnode-next&env=HASHNODE_HOST&envLink=https%3A%2F%2Fapidocs.hashnode.com&project-name=blog&repository-name=blog&demo-title=hashnode-next&demo-description=The%20fastest%20way%20to%20go%20headless%20with%20Hashnode&demo-url=https%3A%2F%2Fhashnode-next.dev%2Fblog&demo-image=https%3A%2F%2Fhashnode-next.dev%2Fdemo.png"
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
      </section>
      <section className={cn(fadeIn, "animation-delay-800")}>
        <CreateNextApp />
      </section>
    </main>
  );
}
