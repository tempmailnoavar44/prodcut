"use client";

import {
  ArrowLeftDescriptionProduct,
  ShoppingMethodProduct,
} from "@/src/icons";

import { Button } from "../../ui";
import { useEffect, useState } from "react";

import ModalShoppingMethod from "./ModalShoppingMethodInnerOne";
import Modal from "../../Modal";
import { useLazyGetAllShoppingMethodQuery } from "@/src/lib/services/getSpecialProduct";

const ShoppingMethod = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [trigger, { data, isSuccess }] = useLazyGetAllShoppingMethodQuery();

  useEffect(() => {
    trigger();
  }, [trigger]);

  return (
    <>
      <div>
        <Button
          name={"روش‌های ارسال سفارش"}
          icon={
            <div className="flex items-center justify-center rounded-[50%] size-[30px] bg-gray-100">
              <ShoppingMethodProduct />
            </div>
          }
          clickEvent={() => setIsOpenModal(true)}
          secondIcon={<ArrowLeftDescriptionProduct isBlack={true} />}
          variant={"productOptions"}
          size={"smOptions"}
        />
        {isOpenModal && isSuccess && (
          <Modal closeModal={() => setIsOpenModal(false)} className="bg-transparent">
            <ModalShoppingMethod
              methods={data.data}
              closeModal={() => setIsOpenModal(false)}
            />
          </Modal>
        )}
      </div>
    </>
  );
};

export default ShoppingMethod;
