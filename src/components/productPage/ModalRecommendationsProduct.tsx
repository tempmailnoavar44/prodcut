import { useEffect } from "react";
import HeaderModals from "./HeaderModals";

interface ModalRecommendationsProductProps {
  closeModal: () => void;
  expert: string;
}

const ModalRecommendationsProduct = ({
  closeModal,
  expert,
}: ModalRecommendationsProductProps) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="absolute bottom-0 left-0 w-full rounded-t-md flex flex-col justify-center items-center bg-white py-3 animate-slideModalBottom"
    >
      <HeaderModals
        closeModal={closeModal}
        name="توصیه های آزمون نظام مهندسی"
        className="w-full pr-5 pl-5"
      />

      <hr className="w-full" />
      <p className="font-normal text-xs px-4 leading-6 text-gray-600 pt-4">
        {expert}
      </p>
    </div>
  );
};

export default ModalRecommendationsProduct;
