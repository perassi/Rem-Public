import { cn } from "@/utils/commonUtils";
import { ReactNode } from "react";

type ButtonType = "outline" | "fill" | "fill-invert";

interface ButtonPropsInterface {
  children: ReactNode;
  className?: string;
  type?: ButtonType;
  onClick?: () => void;
}

export const Button = ({
  children,
  className = "",
  type = "fill",
  onClick,
}: ButtonPropsInterface) => {
  const baseStyles =
    "flex items-center justify-center w-fit text-xl leading-[1.25] font-medium rounded-[40px] px-10 py-5 cursor-pointer transition-colors";

  const typeStyles = {
    outline:
      "bg-transparent border-rem-[#DCE1E0] border-[1px] hover:opacity-80 transition-opacity",
    "fill-invert":
      "bg-rem-green-400 border-rem-green-400 border-[1px] hover:bg-transparent",
    fill: "bg-rem-green-400 hover:opacity-80 transition-opacity",
  };

  return (
    <button
      className={cn(baseStyles, typeStyles[type], className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
