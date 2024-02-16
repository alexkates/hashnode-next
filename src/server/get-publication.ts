import url from "@/hashnode/api-url";
import { GetPublicationDocument, Publication } from "@/hashnode/generated/graphql";
import request from "graphql-request";

export default async function getPublication() {
  const { publication } = await request({
    url,
    document: GetPublicationDocument,
    variables: {
      host: process.env.HASHNODE_HOST!,
    },
  });

  return publication as Publication;
}
