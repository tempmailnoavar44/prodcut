import {
  BookRateQuality,
  FormInputsAddComment,
  VideoRateQuality,
} from "@/src/types";
import HeaderModals from "./HeaderModals";
import ItemAddCommentRateQuality from "./ItemAddCommentRateQuality";
import { useEffect, useState } from "react";
import { answersArrayToObject } from "@/src/lib/utils";
import { Button } from "../ui";
import { useAppSelector } from "@/src/lib/store/hooks";
import { toast } from "react-toastify";

interface Props {
  closeModal: (value: boolean) => void;
  classOptions: BookRateQuality | VideoRateQuality;
  formInfo: FormInputsAddComment | null;
  rate: number;
  closeParentModal: (value: boolean) => void;
}

const ModalAddCommentRateQuality = ({
  closeModal,
  classOptions,
  rate,
  formInfo,
  closeParentModal,
}: Props) => {
  const [answers, setAnswers] = useState<(number | null)[]>(() =>
    Array(Object.values(classOptions).length).fill(null)
  );

  const handleSetAnswer = (questionIndex: number, value: number | null) => {
    setAnswers((prev) =>
      prev.map((ans, idx) => (idx === questionIndex ? value : ans))
    );
  };

  const idProduct = useAppSelector((state) => state.favorite);

  const result = answersArrayToObject(classOptions, answers);

  const handleSendUserComment = () => {
    closeParentModal(false);
    closeModal(false);

    // toast(<SuccessSendComment />, {
    //   autoClose: false,
    //   position: "bottom-center",
    //   className: "p-0 m-0",
    // });

    toast.success("نظر شما ثبت شد ، بعد از تایید منتشر خواهد شد", {
      position: "bottom-center",
    });

    const formData = {
      action: "save_comment",
      rating: rate,
      opinions: { result },
      formInfo,
      comment_post_ID: idProduct,
      comment_parent: 0,
      _wp_unfiltered_html_comment: "9007d77b92",
    };
    console.log(formData);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="z-10 w-full rounded-md fixed bottom-0 left-0 pb-4 animate-slideModalBottom bg-white">
      <HeaderModals
        name="نظر ارزشمند شما"
        closeModal={closeModal}
        className="pt-4 pr-5 pl-5"
      />
      <hr />
      <p className="text-sm pt-4 pr-4">
        آدم‌ها متفاوتن. بعضیا می‌گن اینا خوبن، بعضیا نه. شما چه فکری میکنین ؟
      </p>
      {Object.values(classOptions).map((item, index) => (
        <ItemAddCommentRateQuality
          key={index}
          index={index}
          type={item}
          productRateQuality={Object.values(classOptions).length}
          selected={answers[index]}
          setSelected={(value) => handleSetAnswer(index, value)}
        />
      ))}
      <div className="mx-4">
        <Button
          name="ثبت"
          className="w-full rounded-md h-[48px] border border-gray-100 font-bold bg-domaint-500 text-[18px] text-white"
          variant={"customStyle"}
          size={"customSize"}
          clickEvent={() => handleSendUserComment()}
        />
      </div>
    </div>
  );
};

export default ModalAddCommentRateQuality;
