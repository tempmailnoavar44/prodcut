export interface QuickViewMetaItem {
  title: string;
  value: string;
}

export interface QuickViewMeta {
  [key: number]: QuickViewMetaItem;
}

export interface IntroductionVideo {
  big_poster: string;
  description: string;
  duration: string;
  frame: string;
  small_poster: string;
  title: string;
}

export interface ProductImages {
  base_url: string;
  file: string;
  filesize: number;
  height: number;
  width: number;
}

export interface CommentsSummary {
  average_rate: number;
  every_star_abundance: { [key: number]: number };
  every_star_count: { [key: number]: number };
  max_rate: number;
  recommend_percentage: number;
  total_recommends: number;
  total_reviews: number;
  total_stars: number;
}

export interface TopComments {
  comment_ID: string;
  comment_author: string;
  comment_content: string;
  comment_date: string;
  comment_meta: {
    rating: string;
    degree: string;
    university: string;
    opinion: {
      "good-printing": string;
      "good-writing": string;
      "scientific-quality": string;
      practicality: string;
    };
  };
  comment_parent: string;
  comment_jdate: string;
}

export interface Breadcrumb {
  title: string;
  url: string;
}

type TypeProducts = "book" | "video" | "package" | "ebook" | "audio";

export interface TypeProduct {
  id: string;
  name: string;
  slug: TypeProducts;
}
