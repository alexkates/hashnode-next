import { GetAuthorUsernameDocument } from "@/hashnode/generated/graphql";
import request from "graphql-request";

export default async function getAuthorUsername() {
  const { publication } = await request({
    url: process.env.HASHNODE_API_URL!,
    document: GetAuthorUsernameDocument,
    variables: {
      host: process.env.HASHNODE_HOST!,
    },
  });

  return publication?.author?.username;
}
