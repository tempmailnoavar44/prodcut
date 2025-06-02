"use client";

import { useLazyGetCommentsListProductQuery } from "@/src/lib/services/getSpecialProduct";
import HeaderModals from "./HeaderModals";
import ItemBoxComment from "./ItemBoxComment";
import { TopComments, TypeProduct } from "@/src/types";
import { useEffect } from "react";

interface Props {
  closeModal: (value: boolean) => void;
  type: TypeProduct;
}

const ModalAllComments = ({ closeModal, type }: Props) => {
  const [trigger, { data, isSuccess }] = useLazyGetCommentsListProductQuery();
  
  useEffect(() => {
    trigger(1);
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [trigger]);

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="w-full h-full fixed top-0 left-0 bg-background-100 overflow-scroll animate-slideModalBottom"
    >
      <HeaderModals
        closeModal={closeModal}
        name="تجربه های خریداران"
        className="pt-4 text-sm font text-background-100 font-medium pr-5 pl-5"
      />
      <hr />
      {data && isSuccess && (
        <div className="w-full overflow-scroll p-4 flex flex-col gap-5">
          {Array.isArray(data?.data?.comments_data) &&
            data?.data?.comments_data.map((comment: TopComments) => (
              <ItemBoxComment
                key={comment.comment_ID}
                comment_ID={comment.comment_ID}
                comment_author={comment.comment_author}
                comment_date={comment.comment_date}
                comment_meta={comment.comment_meta}
                comment_content={comment.comment_content}
                comment_parent={comment.comment_parent}
                comment_jdate={comment.comment_jdate}
                className={"300px"}
                innerClassName="w-full leading-6"
                type={type}
              />
            ))}
        </div>
      )}
    </div>
  );
};

export default ModalAllComments;
