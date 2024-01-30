"use client";

import { CopyIcon } from "@radix-ui/react-icons";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";

const githubUrl = "https://github.com/alexkates/hashnode-next";

export default function CreateNextApp() {
  return (
    <div className="prose prose-neutral dark:prose-invert">
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
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <CopyIcon className="h-4 w-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {commands.map((cmd) => (
          <DropdownMenuItem key={cmd.name} onClick={async () => await handleCopyClick(cmd.command)}>
            {cmd.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

async function handleCopyClick(text: string) {
  navigator?.clipboard?.writeText(text);
}
