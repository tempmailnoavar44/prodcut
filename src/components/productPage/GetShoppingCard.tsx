import { ArrowRightProduct, NoavarLogo, ShoppingCard } from "@/src/icons";
import React from "react";

const GetShoppingCard = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-3">
        <div className="size-[40px] flex justify-center items-center bg-white rounded-lg cursor-pointer">
          <ArrowRightProduct />
        </div>
        <div className="flex justify-center items-center">
          <NoavarLogo />
        </div>
      </div>
      <div className="size-[40px] flex justify-center items-center bg-white rounded-lg cursor-pointer">
        <ShoppingCard />
      </div>
    </div>
  );
};

export default GetShoppingCard;
