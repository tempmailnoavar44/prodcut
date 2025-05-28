"use client";

import React, { useState } from "react";

import { Button } from "../ui";
import { ArrowLeftDescriptionProduct, InfoCircleProduct } from "@/src/icons";

import Modal from "../Modal";
import ModalInformationProduct from "./ModalInformationProduct";

const InformationProduct = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <div>
        <Button
          clickEvent={() => setIsOpenModal(true)}
          name="اخرین به روزسانی"
          icon={
            <div className="flex items-center justify-center rounded-[50%] size-[30px] bg-gray-100">
              <InfoCircleProduct />
            </div>
          }
          secondIcon={
            <span>
              <ArrowLeftDescriptionProduct isBlack={true} />
            </span>
          }
          variant={"productOptions"}
          size={"smOptions"}
        />
        {isOpenModal && (
          <Modal closeModal={() => setIsOpenModal(false)}>
            <ModalInformationProduct closeModal={() => setIsOpenModal(false)} />
          </Modal>
        )}
      </div>
    </>
  );
};

export default InformationProduct;
