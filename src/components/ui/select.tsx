import { ArrowLeftCommentProduct } from "@/src/icons";

interface SelectProps {
  options: string[];
  keys: string[];
  error: boolean;
}

const Select = ({ options, keys, error, ...props }: SelectProps) => {  
  return (
    <div className="relative w-full">
      <div className="relative">
        <select
          {...props}
          className={`w-full h-[40px] pl-2 pr-6 py-2 rounded-md border bg-gray-100 outline-none focus:ring-2 focus:ring-domaint-500 text-xs text-background-200 appearance-none ${
            error ? "border-red-500" : "border-gray-200"
          }`}
        >
          <option value="" disabled selected hidden>
            لطفا یک راه انتخاب کنید
          </option>
          {options.map((option, idx) => (
            <option key={idx} value={keys[idx]}>
              {option}
            </option>
          ))}
        </select>
        <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2">
          <ArrowLeftCommentProduct isBlack />
        </span>
      </div>
      {error && (
        <span className="text-red-500 text-xs mt-1">این فیلد الزامی است</span>
      )}
    </div>
  );
};

export default Select;
