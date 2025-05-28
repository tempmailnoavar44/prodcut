import { StarCommentTotal } from "@/src/icons";
import { convertNumberToPersian } from "@/src/lib/utils";
import { TopComments } from "@/src/types";
import Badge from "./Badge";

const ItemBoxComment = ({
  comment_ID,
  comment_author,
  comment_meta,
  comment_content,
  comment_jdate,
  className,
  innerClassName,
}: TopComments & { className: string; innerClassName: string }) => {
  return (
    <div key={comment_ID} className={`${className} rounded-md bg-white py-4`}>
      <div
        className={`mb-4 w-[310px] ${innerClassName}  px-4 flex gap-1 flex-col`}
      >
        <div className="flex justify-between">
          <div>
            <h5 className="text-sm font-medium text-background-200">
              {comment_author}
            </h5>
          </div>
          <div>
            <span className="text-gray-300 text-xs font-normal">
              {comment_jdate}
            </span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-1 flex-wrap">
            <Badge name={comment_meta.degree} />
            <Badge name={comment_meta.university} />
          </div>
          <div className="flex gap-1 text-gray-300 items-center text-xs">
            {convertNumberToPersian(Number(comment_meta.rating))}
            <StarCommentTotal />
          </div>
        </div>
      </div>
      <hr />
      <div className="pt-5 px-4">
        <p className={`text-xs text-gray-500 font-normal leading-4 ${innerClassName}`}>
          {comment_content}
        </p>
      </div>
    </div>
  );
};

export default ItemBoxComment;
