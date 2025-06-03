import { QuickViewMetaItem } from "@/src/types";
import HeaderModals from "./HeaderModals";
import { useEffect } from "react";

interface Props {
  detailsProduct: QuickViewMetaItem[];
  closeModal: (value: boolean) => void;
}

const ModalAllDetailsProduct = ({ detailsProduct, closeModal }: Props) => {
  // const calcHeightDetailsProduct = detailsProduct.length * 60 + "px";
  // h-[${calcHeightDetailsProduct}]

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={`w-full rounded-t-md absolute h-[500px] bottom-0 left-0  bg-white py-4 animate-slideModalBottom overflow-y-auto`}
    >
      <HeaderModals
        closeModal={closeModal}
        name={"بررسی کالا"}
        className="pr-5 pl-5"
      />
      <hr />
      {detailsProduct.map((item, index) => (
        <div key={index} className="flex justify-between items-center py-6 odd:bg-gray-100 even:bg-white">
          <h5 className="text-sm font-medium text-gray-300 pr-8">
            {item.title} :
          </h5>
          <p className="text-sm font-normal text-background-200 pl-8">
            {item.value}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ModalAllDetailsProduct;
