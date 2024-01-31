"use client";

import { VercelLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Button } from "./ui/button";

export default function VercelDeployButton() {
  return (
    <Button asChild size="lg">
      <Link
        href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Falexkates%2Fhashnode-next&env=HASHNODE_API_KEY,HASHNODE_API_URL,HASHNODE_HOST&envDescription=Hashnode%20docs&envLink=https%3A%2F%2Fapidocs.hashnode.com%2F&project-name=blog&repository-name=blog"
        target="_blank"
      >
        <VercelLogoIcon className="mr-2 h-4 w-4" /> Deploy
      </Link>
    </Button>
  );
}
