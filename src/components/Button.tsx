import type { ComponentProps } from "react";
import { classMerge } from "../utils/classMerge";
import { Loading } from "./Loading";

type Props = ComponentProps<"button"> & {
  isLoading?: boolean;
  variant?: "base" | "icon" | "iconSmall";
};

const variants = {
  button: {
    base: " h-12",
    icon: "h-12 w-12",
    iconSmall: "h-8 w-8",
  },
};

export function Button({
  children,
  isLoading,
  className,
  type = "button",
  variant = "base",
  disabled,
  ...props
}: Props) {
  const isDisabled = disabled || isLoading;

  return (
    <button
      type={type}
      disabled={isDisabled}
      aria-busy={isLoading || undefined}
      className={classMerge([
        "flex items-center justify-center bg-green-100 rounded-lg text-white cursor-pointer hover:bg-green-200 transition ease-linear disabled:opacity-50",
        variants.button[variant],
        isLoading && "disabled:cursor-progress",
        className,
      ])}
      {...props}
    >
      {isLoading ? <Loading size="sm" /> : children}
    </button>
  );
}
