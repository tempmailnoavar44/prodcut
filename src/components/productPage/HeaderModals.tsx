import { CloseButtonModalAllDetailsProduct } from "@/src/icons";
import React from "react";  
interface Props {
  name: string;
  closeModal: (value: boolean) => void;
  className?: string;
  classNameInnerHeading?: string;
}

const HeaderModals = ({
  closeModal,
  name,
  className,
  classNameInnerHeading,
}: Props) => {
  return (
    <div className={`mb-3 ${className}`}>
      <div className="flex w-full justify-between items-center">
        <h5
          className={`text-xs font-medium text-background-200 ${classNameInnerHeading}`}
        >
          {name}
        </h5>
        <button
          onClick={() => closeModal(false)}
          className="size-8 flex justify-center items-center"
        >
          <CloseButtonModalAllDetailsProduct />
        </button>
      </div>
    </div>
  );
};

export default HeaderModals;
