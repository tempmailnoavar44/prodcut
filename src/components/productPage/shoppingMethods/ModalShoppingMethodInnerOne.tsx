import { useEffect, useState } from "react";
import HeaderModals from "../HeaderModals";
import ItemModalShoppingMethods from "./ItemModalShoppingMethods";
import Modal from "../../Modal";
import ModalShoppingMethodInnerTwo from "./ModalShoppingMethodInnerTwo";
import { ShoppingMethodNode } from "@/src/types";

interface Props {
  methods: ShoppingMethodNode;
  closeModal: (value: boolean) => void;
}

const ModalShoppingMethod = ({ methods, closeModal }: Props) => {
  const [chooseMethod, setChooseMethod] = useState<ShoppingMethodNode | null>(
    null
  );

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleMethod = (methodChoose: ShoppingMethodNode) => {
    setChooseMethod(methodChoose);
  };

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="fixed bottom-0 rounded-t-md left-0 bg-white w-full animate-slideModalBottom"
    >
      <HeaderModals
        name="روش های ارسال"
        closeModal={closeModal}
        className="pt-5 pb-1 px-4 font-medium text-sm"
      />
      <hr />
      {methods?.children?.map((method, index) => (
        <ItemModalShoppingMethods
          key={index}
          method={method}
          handleMethod={handleMethod}
        />
      ))}

      {chooseMethod && (
        <Modal closeModal={() => setChooseMethod(null)}>
          <ModalShoppingMethodInnerTwo
            method={chooseMethod}
            closeModal={() => setChooseMethod(null)}
          />
        </Modal>
      )}
    </div>
  );
};

export default ModalShoppingMethod;
