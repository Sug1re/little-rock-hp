import { client } from "./client";
import { PerformanceResponse } from "./types";

export const getPerformanceList =
  async (): Promise<PerformanceResponse> => {
    return await client.get({
      endpoint: "performance",
    });
  };