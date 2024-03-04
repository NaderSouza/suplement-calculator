import { ComponentProps } from "react";
import { CheckCircle } from "lucide-react";
import { tv, VariantProps } from "tailwind-variants";

const button = tv({
  base: `rounded  text-sm font-medium text-zinc-900 bg-emerald-500 hover:bg-emerald-600`,
  variants: {
    layout: {
      default: "h-9 px-4",
      sm: "h-8 px-3",
      xs: "h-6 px-2 text-xs",
      alert:
        "px-4 h-9 text-sm rounded text-sm font-medium text-zinc-900 bg-yellow-500 hover:bg-yellow-600",
    },
    success: {
      true: "bg-emerald-500 hover:bg-emerald-600",
    },
  },
  defaultVariants: {
    layout: "default",
    success: false,
  },
});

export type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof button> & {
    success?: boolean;
  };

export default function Button({
  success,
  layout,
  className,
  ...props
}: ButtonProps) {
  return (
    <button className={button({ layout, success, className })} {...props}>
      {props.children}
      {success && <CheckCircle className="w-4 h-4 inline ml-1" />}
    </button>
  );
}
