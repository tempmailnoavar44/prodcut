"use client";

import {
  ArrowLeftDescriptionProduct,
  PurchasePointsProduct,
} from "@/src/icons";

import { Button } from "../ui";
import { useState } from "react";
import Modal from "../Modal";
import ModalPurchasePoints from "./ModalPurchasePoints";

const PurchasePoints = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <>
      <div className="ml-10">
        <Button
          clickEvent={() => setIsOpenModal(true)}
          name="امتیاز از این خرید"
          className="ml-4"
          icon={
            <div className="flex items-center justify-center rounded-[50%] size-[30px] bg-gray-100">
              <PurchasePointsProduct />
            </div>
          }
          secondIcon={<ArrowLeftDescriptionProduct isBlack={true} />}
          variant={"productOptions"}
          size={"smOptions"}
        />
        {isOpenModal && (
          <Modal closeModal={() => setIsOpenModal(false)}>
            <ModalPurchasePoints closeModal={() => setIsOpenModal(false)} />
          </Modal>
        )}
      </div>
    </>
  );
};

export default PurchasePoints;
