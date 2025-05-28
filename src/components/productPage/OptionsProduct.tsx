import InformationProduct from "./InformationProduct";
import ShoppingMethod from "./ShoppingMethod";
import PurchasePoints from "./PurchasePoints";

interface Props {
  id: string;
  name: string;
  slug: string;
}

const OptionsProduct = ({ slug }: Props) => {
  return (
    <div className="my-4 py-4 w-full pr-4 bg-white overflow-y-hidden overflow-x-auto relative">
      <div className="flex gap-2 pl-6">
        <InformationProduct />
        {slug == "book" && <ShoppingMethod />}
        <PurchasePoints />
      </div>
    </div>
  );
};

export default OptionsProduct;
