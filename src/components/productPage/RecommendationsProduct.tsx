"use client";

import { ArrowLeftDescriptionProduct } from "@/src/icons";
import { useState } from "react";
import Modal from "../Modal";
import ModalRecommendationsProduct from "./ModalRecommendationsProduct";

const RecommendationsProduct = ({ expert }: { expert: string }) => {
  const [isOpenModalRecommend, setIsOpenModalRecommend] = useState(false);

  return (
    <div className="mt-4 px-4 w-full h-[224px] bg-white">
      <h4 className="pt-4 pb-2 font-medium text-sm">توصیه ها</h4>
      <hr />
      <p className="pt-4 font-normal text-xs text-gray-400 leading-6 line-clamp-4">
        {expert}
      </p>
      <div className="flex justify-end items-center py-4 cursor-pointer">
        <div className="flex justify-between items-center lg:pr-0">
          <div className="flex gap-2 items-center justify-center cursor-pointer text-domaint-500 text-xs">
            <h4 onClick={() => setIsOpenModalRecommend(true)}>مشاهده همه</h4>
            <span>
              <ArrowLeftDescriptionProduct />
            </span>
          </div>
        </div>
      </div>
      {isOpenModalRecommend && (
        <Modal closeModal={() => setIsOpenModalRecommend(false)}>
          <ModalRecommendationsProduct
            closeModal={() => setIsOpenModalRecommend(false)}
            expert={expert}
          />
        </Modal>
      )}
    </div>
  );
};

export default RecommendationsProduct;
