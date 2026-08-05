import { client } from "../client";
import { Cast, CastResponse } from "../types";

export const getCastList =
  async (): Promise<CastResponse> => {
    return await client.get({
      endpoint: "cast",
    });
  };

  export const getCastDetail = async (
  contentId: string
): Promise<Cast> => {
  return await client.get({
    endpoint: "cast",
    contentId,
  });
};