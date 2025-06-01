import {
  calculateDiscountPercent,
  convertNumberToPersian,
} from "@/src/lib/utils";
import { Button } from "@/src/components/ui";

interface Props {
  price: number;
  offSale: number;
}

const AddToShoppingCard = ({ price, offSale }: Props) => {
  
  return (
    <div className="w-full h-[100px] bg-background-100 fixed bottom-0 left-0 flex justify-between items-center p-4">
      <div>
        <Button
          className="h-[48px] w-[178px] text-white"
          name="افزودن به سبد خرید"
          size={"sm"}
          variant={"default"}
        />
      </div>
      <div>
        <div className="flex flex-col items-end">
          <div className="flex items-center gap-5">
            <h6 className="h-[17px] flex items-center justify-center text-white w-[29px] bg-[#FF253F] rounded-3xl text-[10px]">
              %{convertNumberToPersian(calculateDiscountPercent(price, offSale))}
            </h6>
            <span className="text-[#9F9F9F] text-xs">
              <s className="ml-1"> {convertNumberToPersian(price.toLocaleString('en-US'))} </s>
              تومان
            </span>
          </div>
          <h4 className="font-bold text-lg">
            <span className="ml-1">{convertNumberToPersian(offSale.toLocaleString('en-US'))}</span>
            تومان
          </h4>
        </div>
      </div>
    </div>
  );
};

export default AddToShoppingCard;
