import { cn } from "@/utils/commonUtils";
import { ReactNode } from "react";

type ButtonType = "outline" | "fill" | "fill-invert"

interface ButtonPropsInterface {
  children: ReactNode;
  className?: string;
  type?: ButtonType;
}

export const Button = ({ children, className = "", type = "fill" }: ButtonPropsInterface) => {
  const baseStyles = "flex items-center justify-center w-fit text-[20px] leading-[1.25] rounded-[10px] px-[40px] py-[20px] cursor-pointer transition-colors";

  const typeStyles = {
    outline: "bg-transparent border-remGreen-400 border-[1px] hover:bg-remGreen-500 hover:text-evergreen-800",
    "fill-invert": "bg-remGreen-400 border-remGreen-400 border-[1px] hover:bg-transparent",
    fill: "bg-remGreen-400 hover:bg-remGreen-500"
  }

  return (
    <button className={cn(baseStyles, typeStyles[type], className)}>
      {children}
    </button>
  )
}