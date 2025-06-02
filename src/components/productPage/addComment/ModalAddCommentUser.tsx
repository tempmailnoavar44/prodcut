import { useEffect } from "react";
import { bookRateQuality, videoRateQuality } from "@/src/constants";
import ModalAddCommentRateQuality from "./ModalAddCommentRateQuality";
import { TypeProduct } from "@/src/types";

interface Props {
  closeModal: (value: boolean) => void;
  type: TypeProduct;
}

const ModalAddCommentUser = ({ closeModal, type }: Props) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="w-full rounded-t-md fixed bottom-0 left-0 animate-slideModalBottom bg-white py-4"
    >
      <>
        {type.slug === "book" && (
          <ModalAddCommentRateQuality
            closeModal={() => closeModal(false)}
            classOptions={bookRateQuality}
          />
        )}
        {type.slug === "video" && (
          <ModalAddCommentRateQuality
            closeModal={() => closeModal(false)}
            classOptions={videoRateQuality}
          />
        )}
      </>
    </div>
  );
};

export default ModalAddCommentUser;
