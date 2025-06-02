import { bookRateQuality, videoRateQuality } from "@/src/constants";
import { BookRateQuality, VideoRateQuality } from "@/src/types";

const chooseProductTypeOptions = (
  typeProduct: string
): VideoRateQuality | BookRateQuality | undefined => {
  switch (typeProduct) {
    case "book":
      return bookRateQuality;
    case "video":
      return videoRateQuality;
  }
};

export default chooseProductTypeOptions;
