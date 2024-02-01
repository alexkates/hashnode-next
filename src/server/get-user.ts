import { User, UserDocument } from "@/hashnode/generated/graphql";
import request from "graphql-request";
import getAuthorUsername from "./get-author-username";

export default async function getUser() {
  const username = await getAuthorUsername();

  const { user } = await request({
    url: process.env.HASHNODE_API_URL!,
    document: UserDocument,
    variables: {
      username: username!,
    },
  });

  return user as User;
}
