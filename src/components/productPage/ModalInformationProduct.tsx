import { convertNumberToPersian } from "@/src/lib/utils";
import { Button } from "../ui";
import HeaderModals from "./HeaderModals";
import { useEffect } from "react";

const ModalInformationProduct = ({
  closeModal,
}: {
  closeModal: (value: boolean) => void;
}) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);
  
  return (
    <div
      className="animate-slideModalBottom absolute bottom-0 w-full bg-white rounded-t-md"
      onClick={(e) => e.stopPropagation()}
    >
      <HeaderModals
        name="بروزرسانی محصول"
        closeModal={closeModal}
        className="text-sm font-medium pt-3 pr-5 pl-5"
      />
      <hr />
      <h4 className="px-4 py-5 font-normal text-xs text-gray-500">
        این محصول {convertNumberToPersian(10)} دقیقه پیش بروزرسانی شده است.
      </h4>
      <div className="px-4 mb-4">
        <Button
          name="فهمیدم"
          className="w-full rounded-md h-[48px] text-background-200 bg-gray-100 text-xs font-bold"
          variant={"customStyle"}
          size={"customSize"}
          clickEvent={() => closeModal(false)}
        />
      </div>
    </div>
  );
};

export default ModalInformationProduct;
