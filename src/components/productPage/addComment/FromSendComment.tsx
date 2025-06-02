import { Rating } from "react-simple-star-rating";
import HeaderModals from "../HeaderModals";
import { useState } from "react";
import { typeUniversity, userDegree } from "@/src/constants";
import { FormInputsAddComment } from "@/src/types";
import { useForm } from "react-hook-form";
import { Button, Select } from "../../ui";
import { useAppSelector } from "@/src/lib/store/hooks";
import { toast } from "react-toastify";

interface Props {
  closeModal: (value: boolean) => void;
  resultRate: Record<string, number | null>;
  closeParentModal: (value: boolean) => void;
}

const FromSendComment = ({
  closeModal,
  resultRate,
  closeParentModal,
}: Props) => {
  const [rateLevelMassage, setRateLevelMassage] = useState("متوسط");
  const [rating, setRating] = useState(3);
  const idProduct = useAppSelector((state) => state.favorite);

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

    if (data.university && data.degree) {
      toast.success("نظر شما ثبت شد ، بعد از تایید منتشر خواهد شد", {
        position: "bottom-center",
      });
      const formData = {
        action: "save_comment",
        rating: rating,
        opinions: { resultRate },
        university: data.university,
        degree: data.degree,
        comment: data.comment,
        comment_post_ID: idProduct,
        comment_parent: 0,
        _wp_unfiltered_html_comment: "9007d77b92",
      };
      closeParentModal(false);
      closeModal(false);
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

  return (
    <div className="z-10 w-full rounded-md fixed bottom-0 left-0 pb-4 animate-slideModalBottom bg-white pt-4">
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
          </div>
        </div>
        <div className="mx-4">
          <Button
            name="ثبت نظر"
            className="w-full rounded-md h-[48px] border border-gray-100 font-bold bg-domaint-500 text-[18px] text-white"
            variant={"customStyle"}
            size={"customSize"}
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default FromSendComment;
