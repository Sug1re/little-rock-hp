import { client } from "./client";
import { Stage, StageResponse } from "./types";

export const getStageList =
  async (): Promise<StageResponse> => {
    return await client.get({
      endpoint: "stage",
    });
  };

  export const getStageDetail = async (
  contentId: string
): Promise<Stage> => {
  return await client.get({
    endpoint: "stage",
    contentId,
  });
};