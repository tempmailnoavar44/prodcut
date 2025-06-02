import { LikeRecommendProduct, StarCommentTotal } from "@/src/icons";
import {
  chooseProductTypeOptions,
  convertNumberToPersian,
} from "@/src/lib/utils";
import {
  BookRateQuality,
  CommentsSummary,
  TypeProduct,
  VideoRateQuality,
} from "@/src/types";

interface Props {
  commentsSummary: CommentsSummary;
  optionsSummary: number[];
  typeProduct: TypeProduct;
}

const BuyersExperiences = ({
  commentsSummary,
  optionsSummary,
  typeProduct,
}: Props) => {
  const chooseTypeProduct = chooseProductTypeOptions(typeProduct.slug);

  const convertOptionProduct = Object.values(
    chooseTypeProduct as BookRateQuality | VideoRateQuality
  );
  const removeKey = Object.values(optionsSummary);

  return (
    <div className="flex flex-col mt-4 pt-4 pb-6 bg-white gap-4 text-background-200">
      <h3 className="text-sm font-medium px-4">تجربه های خریداران</h3>
      <div className="flex items-center justify-center px-4">
        <div className="flex flex-col items-center gap gap-2">
          <div className=" flex justify-start items-center gap-2">
            <div>
              <StarCommentTotal isLarge />
            </div>
            <div className="flex justify-start items-center">
              <h3 className="font-bold text-[32px]">
                {convertNumberToPersian(commentsSummary.average_rate)}
              </h3>
              <div>
                &nbsp;
                <span className="text-sm">از</span>
                &nbsp;
                <span className="text-sm text-gray-500">
                  {convertNumberToPersian(commentsSummary.max_rate)}
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h5 className="font-normal text-xs text-gray-400 flex gap-1">
              <span>بر اساس رای</span>
              {convertNumberToPersian(commentsSummary.total_reviews)}
              <span>مخاطب</span>
            </h5>
          </div>
          <div className="flex items-center gap-2">
            <LikeRecommendProduct />
            <p className="text-gray-400 text-xs font-normal flex gap-1">
              <span>
                {convertNumberToPersian(commentsSummary.recommend_percentage)}%
              </span>
              <span>نفر</span>
              <span>
                ({convertNumberToPersian(commentsSummary.total_reviews)})
              </span>
              <span>از خریداران، این محصول را پیشنهاد کرده‌اند.</span>
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex flex-col items-center justify-center gap-3 mb-3  ">
        {removeKey.map((option, index) => {
          return (
            <div
              key={index}
              className="flex justify-center items-center gap-2 w-[90%] pl-4"
            >
              <h5 className="w-3/12 text-background-200 text-sm font-medium text-left">
                {convertOptionProduct[index]}
              </h5>

              <div className="w-7/12 h-1.5 bg-gray-100 rounded overflow-hidden rounded-[2px]">
                <div
                  className="bg-domaint-500 h-1.5"
                  style={{
                    width: `${option}%`,
                  }}
                ></div>
              </div>
              <h6 className="w-1/12 text-zinc-800 text-sm font-normal">
                %{convertNumberToPersian(option)}
              </h6>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BuyersExperiences;
