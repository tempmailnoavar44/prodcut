import { TopComments } from "./productRequest";

export interface AllComments {
  data: comments_data;
  success: boolean;
}

interface comments_data {
  id: string;
  comments_data: TopComments;
}

export interface UniversityList {
  "top-state": string;
  "other-state": string;
  azad: string;
  other: string;
}

export interface DegreeList {
  phd: string;
  master: string;
  bachelor: string;
}

export interface Lists {
  university_list: UniversityList;
  degree_list: DegreeList;
}

export interface PaginationResponse {
  page: string;
  total_pages: number;
  comments_per_page: number;
  lists: Lists;
}
