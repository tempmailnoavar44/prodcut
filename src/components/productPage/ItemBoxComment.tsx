import { CommentProfilePerson, StarCommentTotal } from "@/src/icons";
import {
  chooseProductTypeOptions,
  convertNumberToPersian,
} from "@/src/lib/utils";
import { TopComments, TypeProduct } from "@/src/types";
import Badge from "./Badge";

const ItemBoxComment = ({
  comment_ID,
  comment_author,
  comment_meta,
  comment_content,
  comment_jdate,
  className,
  innerClassName,
  type,
}: TopComments & {
  className: string;
  innerClassName: string;
  type: TypeProduct;
}) => {
  const chooseTypeProduct: boolean | string[] =
    Object.keys(comment_meta).includes("opinion") &&
    Object.values(chooseProductTypeOptions(type.slug) || {});
  return (
    <div key={comment_ID} className={`${className} rounded-md bg-white py-4`}>
      <div
        className={`mb-4 w-[310px] ${innerClassName}  px-4 flex gap-3 flex-col`}
      >
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-start">
            <div className="flex items-center justify-between gap-2">
              <div className="w-11 h-11 relative bg-gray-100 rounded-[100px] overflow-hidden flex justify-center items-center">
                <CommentProfilePerson />
              </div>
              <div className="flex flex-col gap-1">
                <h5 className="text-sm font-medium text-background-200">
                  {comment_author}
                </h5>
                <div className="flex gap-1 text-gray-300 items-center text-xs">
                  {convertNumberToPersian(Number(comment_meta.rating))}
                  <StarCommentTotal />
                </div>
              </div>
            </div>
            <div>
              <span className="text-gray-300 text-xs font-normal">
                {comment_jdate}
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-1 flex-wrap">
            <Badge name={comment_meta.degree} />
            <Badge name={comment_meta.university} />

            {Object.keys(comment_meta).includes("opinion") &&
              Array.isArray(chooseTypeProduct) &&
              Object.keys(comment_meta.opinion).map((item, index) => {
                return <Badge name={chooseTypeProduct[index]} key={index} />;
              })}
          </div>
        </div>
      </div>
      <hr />
      <div className="pt-5 px-4">
        <p
          className={`text-sm  text-gray-500 font-normal leading-4 ${innerClassName}`}
        >
          {comment_content}
        </p>
      </div>
    </div>
  );
};

export default ItemBoxComment;
