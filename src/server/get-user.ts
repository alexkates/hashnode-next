import url from "@/hashnode/api-url";
import { User, UserDocument } from "@/hashnode/generated/graphql";
import request from "graphql-request";
import getAuthorUsername from "./get-author-username";

export default async function getUser() {
  const username = await getAuthorUsername();

  const { user } = await request({
    url,
    document: UserDocument,
    variables: {
      username: username!,
    },
  });

  return user as User;
}
