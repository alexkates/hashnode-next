import url from "@/hashnode/api-url";
import { Draft, GetDraftByIdDocument } from "@/hashnode/generated/graphql";
import request from "graphql-request";

type Props = {
  id: string;
};

export default async function getBlogPostDraft({ id }: Props) {
  const { draft } = await request({
    url,
    document: GetDraftByIdDocument,
    variables: {
      id,
    },
  });

  return draft as Draft;
}
