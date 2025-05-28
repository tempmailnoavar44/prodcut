"use client";

import {
  ArrowLeftDescriptionProduct,
  ShoppingMethodProduct,
} from "@/src/icons";

import { Button } from "../ui";
import { useState } from "react";

import ModalShoppingMethod from "./ModalShoppingMethod";
import Modal from "../Modal";

const ShoppingMethod = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <div>
        <Button
          name="روش های ارسال"
          icon={
            <div className="flex items-center justify-center rounded-[50%] size-[30px] bg-gray-100">
              <ShoppingMethodProduct />
            </div>
          }
          secondIcon={<ArrowLeftDescriptionProduct isBlack={true} />}
          variant={"productOptions"}
          size={"smOptions"}
        />
        {isOpenModal && (
          <Modal closeModal={() => setIsOpenModal(false)}>
            <ModalShoppingMethod />
          </Modal>
        )}
      </div>
    </>
  );
};

export default ShoppingMethod;
