import { StarCommentTotal } from "@/src/icons";
import { convertNumberToPersian } from "@/src/lib/utils";
import { CommentsSummary } from "@/src/types";
import { Rating } from "react-simple-star-rating";

interface Props {
  commentsSummary: CommentsSummary;
}

const BuyersExperiences = ({ commentsSummary }: Props) => {
  return (
    <div className="flex flex-col mt-4 pt-4 pb-6 px-4 bg-white gap-4 text-background-200">
      <h3 className="text-sm font-medium">تجربه های خریداران</h3>
      <div className="flex justify-between">
        <div className="flex flex-col gap-5 ">
          <div className=" flex justify-start items-center">
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
          <div className="flex flex-col gap-2">
            <h5 className="font-normal text-xs text-gray-400">
              {convertNumberToPersian(commentsSummary.recommend_percentage)}
              تجربه ثبت شده است
            </h5>

            <Rating
              SVGstyle={{ display: "inline-block" }}
              readonly={true}
              emptyClassName="flex"
              initialValue={commentsSummary.average_rate}
              className="flex"
              size={20}
              rtl={true}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 justify-baseline items-center">
          <div className="flex">
            <div className="flex justify-center items-center gap-2">
              <div className="flex items-center">
                <span className="text-gray-300 text-xs font-normal">۵</span>

                <StarCommentTotal isSilver />
              </div>
              <div className="w-[200px] h-1 bg-gray-100 rounded overflow-hidden ">
                <div
                  className="bg-background-200 h-full"
                  style={{
                    width: `${commentsSummary.every_star_abundance[5]}%`,
                  }}
                ></div>
              </div>
            </div>

            <div className="w-5 text-left">
              <span className="text-gray-300 text-xs font-normal">
                {convertNumberToPersian(
                  commentsSummary.every_star_abundance[5]
                )}
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="flex justify-center items-center gap-2">
              <div className="flex">
                <span className="text-gray-300 text-xs font-normal">۴</span>

                <StarCommentTotal isSilver />
              </div>
              <div className="w-[200px] h-1 bg-gray-100 rounded overflow-hidden">
                <div
                  className="bg-background-200 h-full"
                  style={{
                    width: `${commentsSummary.every_star_abundance[4]}%`,
                  }}
                ></div>
              </div>
            </div>

            <div className="w-5 text-left">
              <span className="text-gray-300 text-xs font-normal">
                {convertNumberToPersian(
                  commentsSummary.every_star_abundance[4]
                )}
              </span>
            </div>
          </div>
          <div className="flex">
            <div className="flex justify-center items-center gap-2">
              <div className="flex">
                <span className="text-gray-300 text-xs font-normal">۳</span>

                <StarCommentTotal isSilver />
              </div>
              <div className="w-[200px] h-1 bg-gray-100 rounded overflow-hidden">
                <div
                  className="bg-background-200 h-full"
                  style={{
                    width: `${commentsSummary.every_star_abundance[3]}%`,
                  }}
                ></div>
              </div>
            </div>

            <div className="w-5 text-left">
              <span className="text-gray-300 text-xs font-normal">
                {convertNumberToPersian(
                  commentsSummary.every_star_abundance[3]
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyersExperiences;
