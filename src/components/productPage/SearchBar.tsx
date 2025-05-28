import { SearchProduct } from "@/src/icons";
import {Input} from "../ui";

const SearchBar = () => {
  return (
    <div>
      <Input
        icon={<SearchProduct />}
        className="rounded-lg h-[42px] w-full px-4 font-yakan font-normal text-[10px]"
        placeholder="جستجو کنید..."
      />
    </div>
  );
};

export default SearchBar;
