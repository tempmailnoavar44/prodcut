"use client";

import { ArrowLeftDescriptionProduct } from "@/src/icons";
import { QuickViewMeta, QuickViewMetaItem } from "@/src/types";
import { useState } from "react";
import Modal from "../Modal";
import ModalAllDetailsProduct from "./ModalAllDetailsProduct";

interface Props {
  detailsProduct: QuickViewMeta;
}

const DetailProduct = ({ detailsProduct }: Props) => {
  const details = Object.values(detailsProduct);
  const [isOpenDetail, setIsOpenDetail] = useState(false);

  return (
    <div className="pt-4">
      <div className="h-[127px] w-full flex flex-col gap-4 bg-white p-4 lg:p-0">
        <div className="flex justify-between items-center lg:pr-0">
          <h3 className="font-medium text-sm">مشخصات کتاب</h3>
          <div className="flex gap-2 items-center justify-center cursor-pointer text-domaint-500 text-xs">
            <h4 className="text-sm font-normal" onClick={() => setIsOpenDetail(!isOpenDetail)}>مشاهده جدول</h4>
            <span>
              <ArrowLeftDescriptionProduct />
            </span>
          </div>
        </div>
        <div className="flex h-[60px] overflow-x-auto overflow-y-hidden">
          {details.slice(0, 4).map((detail: QuickViewMetaItem, index) => (
            <div
              key={index}
              className={`flex flex-col h-[50px] gap-4 border-l px-3 text-center ${
                index === details.slice(0, 4).length - 1 && "border-l-0"
              }`}
            >
              <h4 className="text-xs font-normal text-gray-300">
                {detail.title}:
              </h4>
              <h5 className="text-background-200 font-medium text-xs w-[100px]">
                {detail.value}
              </h5>
            </div>
          ))}
        </div>
      </div>
      {isOpenDetail && (
        <Modal closeModal={setIsOpenDetail}>
          <ModalAllDetailsProduct
            detailsProduct={details}
            closeModal={setIsOpenDetail}
          />
        </Modal>
      )}
    </div>
  );
};

export default DetailProduct;
