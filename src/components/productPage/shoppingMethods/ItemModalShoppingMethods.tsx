import { ArrowLeftCommentProduct } from "@/src/icons";
import { ShoppingMethodNode } from "@/src/types";

interface Props {
  method: ShoppingMethodNode;
  handleMethod: (value: ShoppingMethodNode) => void;
}

const ItemModalShoppingMethods = ({ method, handleMethod }: Props) => {
  console.log(method);

  return (
    <div
      className={`${method.children ? "px-4" : "last:pb-5 pt-3 px-6"}`}
      onClick={() => method.children && handleMethod(method)}
    >
      <div
        className={`flex items-center justify-between ${
          method.children ? "py-4" : ""
        } `}
      >
        <h5 className="text-xs font-normal text-gray-500">{method.text}</h5>
        {method.children && <ArrowLeftCommentProduct />}
      </div>
      {method.children && <hr />}
    </div>
  );
};

export default ItemModalShoppingMethods;
