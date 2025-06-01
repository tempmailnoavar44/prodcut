"use client";

import {
  AddFavoriteProducts,
  ArrowLeftCommentProduct,
  BookPdfSample,
  LinkShareProduct,
  PlayVideoSampleBook,
  StarCommentTotal,
} from "@/src/icons";

import Image from "next/image";

import { convertNumberToPersian } from "@/src/lib/utils";
import { Button } from "../ui";
import { useState } from "react";
import Modal from "../Modal";
import ModalVideoPlayDemo from "./ModalVideoPlayDemo";
import { IntroductionVideo, ProductImages } from "@/src/types";
import ModalAllComments from "./ModalAllComments";

interface Props {
  title: string;
  image: ProductImages;
  author: string;
  rate_average: number;
  comments_count: number;
  videoDetail: IntroductionVideo[] | [];
}
const ProductView = ({
  title,
  image,
  author,
  rate_average,
  comments_count,
  videoDetail,
}: Props) => {
  const [isOpenModalVideoDemo, setIsOpenModalVideoDemo] = useState(false);
  const handleClickVideoButton = () => {
    setIsOpenModalVideoDemo(!isOpenModalVideoDemo);
  };
  const isExistVideo = videoDetail.length > 0 ? "exist" : "notExist";
  const [isOpenModalComments, setIsOpenModalComments] = useState(false);

  return (
    <div className="w-full">
      <div className="flex justify-between items-center p-4">
        <Image
          src={image.base_url + image.file}
          width={120}
          height={90}
          alt="Can't not upload the image"
        />
        <div className="text-[#9F9F9F]">
          <div className="flex flex-col gap-3 ">
            <h3 className="font-bold text-sm text-background-200">{title}</h3>
            <h4 className="font-normal text-xs text-gray-300">
              نویسنده : {author}
            </h4>
            <div className="flex gap-2">
              <button>
                <LinkShareProduct />
              </button>
              <button>
                <AddFavoriteProducts />
              </button>
            </div>
          </div>
          <div className="flex justify-end gap-3 items-end text-gray-300">
            <div className="flex gap-1 text-xs justify-center self-center">
              <h6>{convertNumberToPersian(rate_average)}</h6>
              <StarCommentTotal />
            </div>
            <div
              onClick={() => setIsOpenModalComments(true)}
              className="flex gap-1 h-7 bg-domaint-100  underline text-cyan-600 justify-center items-center rounded-[42px] text-xs cursor-pointer px-2"
            >
              <span>({convertNumberToPersian(comments_count)}) نظر</span>
              <ArrowLeftCommentProduct isGreen />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-center items-center gap-3 px-4">
          <Button
            name="نمونه پی‌دی‌اف"
            size={"sm"}
            variant={"secondary"}
            data-visible={isExistVideo}
            className="w-1/2 data-[visible=notExist]:w-full"
            icon={
              <div className="flex justify-center items-center bg-domaint-100 size-[30px] rounded-[100%]">
                <BookPdfSample />
              </div>
            }
          />
          <Button
            clickEvent={handleClickVideoButton}
            name="مشاهده دمو"
            data-visible={isExistVideo}
            size={"sm"}
            variant={"secondary"}
            className="w-1/2 data-[visible=notExist]:hidden"
            icon={
              <div className="flex justify-center items-center bg-domaint-100 size-[30px] rounded-[100%]">
                <PlayVideoSampleBook />
              </div>
            }
          />
        </div>
      </div>
      {isOpenModalVideoDemo && (
        <Modal
          closeModal={handleClickVideoButton}
          classNameInnerDiv={
            "w-full h-full flex justify-center items-center px-4"
          }
        >
          <ModalVideoPlayDemo
            closeModal={handleClickVideoButton}
            videoDetail={videoDetail}
          />
        </Modal>
      )}
      {isOpenModalComments && (
        <>
          <Modal closeModal={() => setIsOpenModalComments(false)}>
            <ModalAllComments
              closeModal={() => setIsOpenModalComments(false)}
            />
          </Modal>
        </>
      )}
    </div>
  );
};

export default ProductView;
