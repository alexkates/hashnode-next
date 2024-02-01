import url from "@/hashnode/api-url";
import { GetAuthorUsernameDocument } from "@/hashnode/generated/graphql";
import request from "graphql-request";

export default async function getAuthorUsername() {
  const { publication } = await request({
    url,
    document: GetAuthorUsernameDocument,
    variables: {
      host: process.env.HASHNODE_HOST!,
    },
  });

  return publication?.author?.username;
}
