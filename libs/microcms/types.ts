import {
  MicroCMSImage,
} from "microcms-js-sdk";

export type Stage = {
  id: string;
  title: string;
  thumbnail: MicroCMSImage;
  date: string;
  venue: string;
    playwright: string;
  director: string;
  story: string;
  cast: string;
};

export type StageResponse = {
  contents: Stage[];
  totalCount: number;
  offset: number;
  limit: number;
};