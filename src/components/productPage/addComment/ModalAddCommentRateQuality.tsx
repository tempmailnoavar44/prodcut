import {
  BookRateQuality,
  FormInputsAddComment,
  VideoRateQuality,
} from "@/src/types";
import HeaderModals from "../HeaderModals";
import ItemAddCommentRateQuality from "./ItemAddCommentRateQuality";
import { useEffect, useState } from "react";
import { answersArrayToObject } from "@/src/lib/utils";
import { Button } from "../../ui";
import { useAppSelector } from "@/src/lib/store/hooks";
import { toast } from "react-toastify";
import Modal from "../../Modal";
import FromSendComment from "./FromSendComment";

interface Props {
  classOptions: BookRateQuality | VideoRateQuality;
  closeModal: (value: boolean) => void;
}

const ModalAddCommentRateQuality = ({ classOptions, closeModal }: Props) => {
  const [isOpenFormSendComment, setIsOpenFormSendComment] = useState(false);
  const [answers, setAnswers] = useState<(number | null)[]>(() =>
    Array(Object.values(classOptions).length).fill(null)
  );
  const handleSetAnswer = (questionIndex: number, value: number | null) => {
    setAnswers((prev) =>
      prev.map((ans, idx) => (idx === questionIndex ? value : ans))
    );
  };
  const result = answersArrayToObject(classOptions, answers);
  const handleSendUserComment = () => {
    setIsOpenFormSendComment(true);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="w-full rounded-md fixed bottom-0 left-0 pb-4 animate-slideModalBottom bg-white">
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
          name="مرحله بعد"
          className="w-full rounded-md h-[48px] border border-gray-100 font-bold bg-domaint-500 text-[18px] text-white"
          variant={"customStyle"}
          size={"customSize"}
          clickEvent={() => handleSendUserComment()}
        />
      </div>

      {isOpenFormSendComment && (
        <Modal closeModal={() => closeModal}>
          <FromSendComment
            closeModal={() => setIsOpenFormSendComment(false)}
            resultRate={result}
            closeParentModal={closeModal}
          />
        </Modal>
      )}
    </div>
  );
};

export default ModalAddCommentRateQuality;
