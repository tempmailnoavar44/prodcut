import {useState } from "react";
import HeaderModals from "../HeaderModals";
import ItemModalShoppingMethods from "./ItemModalShoppingMethods";
import Modal from "../../Modal";
import { ArrowLeftShowMoreComments } from "@/src/icons";
import { ShoppingMethodNode } from "@/src/types";

interface Props {
  closeModal: (value: boolean) => void;
  method: ShoppingMethodNode;
}

const ModalShoppingMethodInnerTwo = ({ method, closeModal }: Props) => {
  const [chooseMethod, setChooseMethod] = useState<ShoppingMethodNode | null>(
    null
  );

  const handleMethod = (methodChoose: ShoppingMethodNode) => {
    setChooseMethod(methodChoose);
  };

  return (
    <div
      className="fixed bottom-0 rounded-t-md left-0 bg-white w-full animate-slideModalBottom border-t"
      onClick={(e) => e.stopPropagation()}
    >
      <HeaderModals
        name={method.text}
        closeModal={closeModal}
        className="pt-5 pb-1 px-4 font-medium text-sm"
        icon={
          <>
            <ArrowLeftShowMoreComments isSmall />
          </>
        }
      />
      <hr />
      {method?.children?.map((method, index) => (
        <ItemModalShoppingMethods
          key={index}
          method={method}
          handleMethod={handleMethod}
        />
      ))}

      {chooseMethod && (
        <Modal
          closeModal={() => setChooseMethod(null)}
          className="bg-stone-500/50"
        >
          <ModalShoppingMethodInnerTwo
            method={chooseMethod}
            closeModal={() => setChooseMethod(null)}
          />
        </Modal>
      )}
    </div>
  );
};

export default ModalShoppingMethodInnerTwo;
