import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { cn, convertFromNumberToPersian } from "@/src/lib/utils";
import { TickCheckbox } from "@/src/icons";

interface Props {
  rate: number;
  selected: string | null;
  setNewRate: (value: number | null) => void;
  className?: string;
}

function Checkbox({
  className,
  rate,
  selected,
  setNewRate,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root> & Props) {
  const handleToggle = () =>
    setNewRate(rate === Number(selected) ? null : rate);

  return (
    <label
      data-slot="checkbox"
      className={`flex items-center justify-start px-3 gap-2 w-[106px] h-[40px] rounded-sm cursor-pointer ${
        rate === Number(selected) ? "bg-domaint-200" : "bg-gray-100"
      }`}
    >
      <CheckboxPrimitive.Root
        checked={rate === Number(selected)}
        onCheckedChange={handleToggle}
        className={cn(
          "peer border-input flex data-[state=checked]:bg-domaint-500 data-[state=checked]:border-domaint-500 focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      >
        <CheckboxPrimitive.Indicator
          data-slot="checkbox-indicator"
          className="flex items-center justify-center text-current transition-none bg-domaint-500 size-full rounded-sm"
        >
          <TickCheckbox />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      <h6 className="text-xs ">{convertFromNumberToPersian(rate)}</h6>
    </label>
  );
}

export default Checkbox;
