import {
  MicroCMSImage,
  MicroCMSListResponse,
} from "microcms-js-sdk";

export type Performance = {
  id: string;
  title: string;
  thumbnail: MicroCMSImage;
  date: string;
};

export type PerformanceResponse =
  MicroCMSListResponse<Performance>;