"use client";

import type { TopComments as TopCommentsType, TypeProduct } from "@/src/types";
import {
  ArrowLeftShowMoreComments,
  MassageNotFoundTopComment,
} from "@/src/icons";
import { Button } from "../ui";
import { useState } from "react";
import Modal from "../Modal";
import ModalAllComments from "./ModalAllComments";
import ItemBoxComment from "./ItemBoxComment";
import ModalAddCommentUser from "./ModalAddCommentUser";

interface Props {
  topComments: TopCommentsType[];
  type: TypeProduct;
}

const TopComments = ({ topComments, type }: Props) => {
  const [isOpenModalComments, setIsOpenModalComments] = useState(false);
  const [isOpenModalAddComment, setIsOpenModalAddComment] = useState(false);

  return (
    <div className="py-4 flex flex-col gap-3 bg-background-100">
      <div className="mr-4">
        {topComments.length > 0 && (
          <>
            <div className="flex gap-2 overflow-x-auto overflow-y-hidden w-full items-center ">
              {topComments.map((comment) => (
                <ItemBoxComment
                  key={comment.comment_ID}
                  comment_ID={comment.comment_ID}
                  comment_author={comment.comment_author}
                  comment_date={comment.comment_date}
                  comment_meta={comment.comment_meta}
                  comment_content={comment.comment_content}
                  comment_parent={comment.comment_parent}
                  comment_jdate={comment.comment_jdate}
                  className="h-[200px]"
                  innerClassName=""
                />
              ))}
              <div
                onClick={() => setIsOpenModalComments(true)}
                className="size-[42px] flex items-center justify-center border border-gray-200 cursor-pointer rounded-[50%] mx-3 px-2"
              >
                <ArrowLeftShowMoreComments />
              </div>
            </div>
          </>
        )}
      </div>
      {topComments.length == 0 && (
        <div className="full h-[163px] rounded-sm flex flex-col justify-center items-center gap-2 bg-white mx-4">
          <span>
            <MassageNotFoundTopComment />
          </span>
          <h5 className="font-medium text-gray-300 text-sm">
            هیچ دیدگاهی ثبت نشده است
          </h5>
        </div>
      )}
      <div className=" mx-4">
        <Button
          clickEvent={() => setIsOpenModalAddComment(true)}
          name="ثبت دیدگاه"
          className="w-full rounded-md h-[48px] text-background-200 border border-gray-100 text-sm bg-white flex-row-reverse font-medium"
          variant={"customStyle"}
          size={"customSize"}
          icon={
            <>
              <ArrowLeftShowMoreComments />
            </>
          }
        />
      </div>
      {isOpenModalComments && (
        <>
          <Modal closeModal={() => setIsOpenModalComments(false)}>
            <ModalAllComments
              closeModal={() => setIsOpenModalComments(false)}
            />
          </Modal>
        </>
      )}
      {isOpenModalAddComment && (
        <>
          <Modal closeModal={() => setIsOpenModalAddComment(false)}>
            <ModalAddCommentUser
              closeModal={() => setIsOpenModalAddComment(false)}
              type={type}
            />
          </Modal>
        </>
      )}
    </div>
  );
};

export default TopComments;
