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

export type Cast = {
  id: string;
  romanizedName: string;
  name: string;
  dateOfBirth: string;
  hometown: string;
  comment: string;
  bloodType: string;
  introduction: string;
  hobbies: string;
  skills: string;
  qualifications: string;
  performanceHistory: string;
  twitter: string;
  instagram: string;
  tiktok: string;
  note: string;
  facebook: string;
  height: number;
  profilePhoto: MicroCMSImage;
};

export type CastResponse = {
  contents: Cast[];
  totalCount: number;
  offset: number;
  limit: number;
};