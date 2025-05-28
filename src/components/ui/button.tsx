import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/src/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "flex font-medium justify-center rounded-md bg-domaint-500 text-white text-bold text-sm rounded-md",
        secondary:
          "w-full flex text-xs font-medium justify-center items-center text-domaint-500 border border-domaint-500",
        productOptions:
          "text-[11px] font-normal text-gray-400 border-gray-100  border",
        customStyle: "",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3 cursor-pointer",
        sm: "w-[165px] h-[48px] rounded-md ",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        smOptions:
          "w-auto h-[46px] rounded-md flex justify-center items-center gap-2 px-2",
        customSize: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  icon = null,
  name,
  clickEvent,
  secondIcon,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    icon?: React.ReactNode | null;
    name: string;
    clickEvent?: () => void;
    secondIcon?: React.ReactNode | null;
  }) {
  return (
    <button
      onClick={() => clickEvent && clickEvent()}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {icon && <>{icon}</>}
      {name}
      {secondIcon && <>{secondIcon}</>}
    </button>
  );
}

export { buttonVariants };
export default Button;
