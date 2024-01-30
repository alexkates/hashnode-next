"use client";

import { CopyIcon } from "@radix-ui/react-icons";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { useToast } from "./ui/use-toast";

const githubUrl = "https://github.com/alexkates/hashnode-next";

export default function CreateNextApp() {
  return (
    <div className="prose prose-neutral dark:prose-invert hidden md:block">
      <pre className="flex items-center gap-2 p-8">
        npx create-next-app -e {githubUrl}
        <PackageManagerCommands />
      </pre>
    </div>
  );
}

const commands = [
  { name: "npm", command: `npm create-next-app -e ${githubUrl}` },
  { name: "yarn", command: `yarn create next-app -e ${githubUrl}` },
  { name: "pnpm", command: `pnpm create next-app -e ${githubUrl}` },
  { name: "bun", command: `bunx create-next-app -e ${githubUrl}` },
];

function PackageManagerCommands() {
  const { toast } = useToast();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <CopyIcon className="h-4 w-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {commands.map(({ name, command }) => (
          <DropdownMenuItem
            key={name}
            onClick={async () => {
              await handleCopyClick({ command });
              toast({ description: `Copied ${name} command to clipboard.` });
            }}
          >
            {name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

async function handleCopyClick({ command }: { command: string }) {
  await navigator?.clipboard?.writeText(command);
}
