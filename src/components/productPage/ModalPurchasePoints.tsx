import { useEffect } from "react";
import { Button } from "../ui";
import HeaderModals from "./HeaderModals";

interface Props {
  closeModal: (value: boolean) => void;
}

const ModalPurchasePoints = ({ closeModal }: Props) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="py-4 absolute bottom-0 left-0 bg-white w-full rounded-t-md animate-slideModalBottom"
    >
      <HeaderModals
        closeModal={closeModal}
        name="امتیاز های شما از خرید"
        className="pr-5 pl-5"
      />
      <div className="px-4">
        <hr />
        <p className="py-3 font-normal text-xs text-gray-500 leading-6">
          به میزان 2% از مبلغ پرداختی شما بابت خرید این محصول تبدیل به امتیاز در
          باشگاه مشتریان خواهد شد میتوانید با تبدیل امتیاز به کد تخفیف از آن در
          خریدهای بعدی خود استفاده نمایید
        </p>

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

export default ModalPurchasePoints;
