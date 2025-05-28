import { Rating } from "react-simple-star-rating";
import HeaderModals from "./HeaderModals";
import { useEffect, useState } from "react";
import {
  bookRateQuality,
  typeUniversity,
  userDegree,
  videoRateQuality,
} from "@/src/constants";
import Select from "../ui/select";
import { Button } from "../ui";
import ModalAddCommentRateQuality from "./ModalAddCommentRateQuality";
import { FormInputsAddComment, TypeProduct } from "@/src/types";
import { useForm } from "react-hook-form";

interface Props {
  closeModal: (value: boolean) => void;
  type: TypeProduct;
}

const ModalAddCommentUser = ({ closeModal, type }: Props) => {
  const [rating, setRating] = useState(3);
  const [rateLevelMassage, setRateLevelMassage] = useState("متوسط");
  const [isOpenModalRateQuality, setIsOpenModalRateQuality] = useState(false);
  const [formInfo, setFormInfo] = useState<FormInputsAddComment | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormInputsAddComment>({
    defaultValues: {
      university: null,
      degree: null,
      comment: null,
    },
  });

  const handleAddCommentSubmit = (data: FormInputsAddComment) => {
    if (!data.university) {
      setError("university", {
        message: "این فیلد الزامی است",
      });
    }

    if (!data.degree) {
      setError("degree", {
        message: "این فیلد الزامی است",
      });
    }

    if (!data.comment) {
      setError("comment", {
        message: "این فیلد الزامی است",
      });
    }

    if (data.university && data.degree && data.comment) {
      setIsOpenModalRateQuality(true);
      setFormInfo({
        university: data.university,
        degree: data.degree,
        comment: data.comment,
      });
    }
  };

  const handleRating = (rate: number) => {
    setRating(rate);
    switch (rate) {
      case 1:
        setRateLevelMassage("خیلی بد");
        return;
      case 2:
        setRateLevelMassage("بد");
        return;
      case 3:
        setRateLevelMassage("متوسط");
        return;
      case 4:
        setRateLevelMassage("خوب");
        return;
      case 5:
        setRateLevelMassage("عالی");
        return;
    }
  };

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
      <HeaderModals
        classNameInnerHeading={"text-sm font-medium "}
        closeModal={closeModal}
        name="دیدگاه خود را بنویسید"
        className="pr-5 pl-5"
      />
      <hr />
      <form onSubmit={handleSubmit(handleAddCommentSubmit)}>
        <div className="px-5 flex flex-col gap-4 pt-4 pb-7 ">
          <div className="flex justify-between items-center">
            <h4 className="text-xs font-normal">
              به این محصول امتیاز بدید :)
              <span className="text-accent-500">*</span>
            </h4>
            <div className="flex gap-2 items-center">
              <h4 className="text-gray-500 text-sm">{rateLevelMassage}</h4>
              <Rating
                onClick={handleRating}
                SVGstyle={{ display: "inline-block" }}
                size={20}
                rtl={false}
                initialValue={rating}
              />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-xs">
              دانشگاه
              <span className="text-accent-500">*</span>
            </h4>
            <Select
              options={Object.values(typeUniversity)}
              keys={Object.keys(typeUniversity)}
              error={errors.university ? true : false}
              {...register("university")}
            />
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-xs">
              مقطع شما
              <span className="text-accent-500">*</span>
            </h4>
            <Select
              options={Object.values(userDegree)}
              keys={Object.keys(userDegree)}
              error={errors.degree ? true : false}
              {...register("degree")}
            />
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-xs">
              دیدگاه شما
              <span className="text-accent-500">*</span>
            </h4>
            <textarea
              className={`bg-gray-100 rounded-md text-xs py-[10px] px-4 ${
                errors.comment
                  ? "border border-red-500"
                  : "border border-gray-200"
              }`}
              placeholder="لطفا نظر خود را وارد کنید"
              rows={7}
              cols={10}
              {...register("comment")}
            />
            {errors.comment && (
              <span className="text-red-500 text-xs">
                {errors.comment.message || "این فیلد الزامی است"}
              </span>
            )}
          </div>
        </div>
        <div className="mx-4">
          <Button
            name="ادامه"
            className="w-full rounded-md h-[48px] border border-gray-100 font-bold bg-domaint-500 text-[18px] text-white"
            variant={"customStyle"}
            size={"customSize"}
            type="submit"
          />
        </div>
      </form>

      {isOpenModalRateQuality && (
        <>
          {type.slug === "book" && (
            <ModalAddCommentRateQuality
              closeModal={() => setIsOpenModalRateQuality(false)}
              closeParentModal={closeModal}
              classOptions={bookRateQuality}
              formInfo={formInfo}
              rate={rating}
            />
          )}
          {type.slug === "video" && (
            <ModalAddCommentRateQuality
              closeModal={() => setIsOpenModalRateQuality(false)}
              closeParentModal={() => closeModal}
              classOptions={videoRateQuality}
              formInfo={formInfo}
              rate={rating}
            />
          )}
        </>
      )}
    </div>
  );
};

export default ModalAddCommentUser;
