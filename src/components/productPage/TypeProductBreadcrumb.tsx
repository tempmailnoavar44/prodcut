import { ArrowLeftCommentProduct } from "@/src/icons";
import type { Breadcrumb } from "@/src/types";

interface Props {
  listBreadcrumb: Breadcrumb[];
}

const TypeProductBreadcrumb = ({ listBreadcrumb }: Props) => {
  return (
    <div className="flex items-center overflow-x-auto gap-2">
      {listBreadcrumb.map((item, index) => (
        <div
          key={index}
          className="flex text-xs font-normal text-gray-200 gap-3 items-center"
        >
          <h4
            className={`text-nowrap ${
              index !== listBreadcrumb.length - 1
                ? "text-gray-200"
                : "text-background-200"
            }`}
          >
            {item.title}
          </h4>
          {index !== listBreadcrumb.length - 1 && <ArrowLeftCommentProduct />}
        </div>
      ))}
    </div>
  );
};

export default TypeProductBreadcrumb;
