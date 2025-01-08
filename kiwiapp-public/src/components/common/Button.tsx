import { cn } from "@/utils/commonUtils";
import { ReactNode } from "react";

type ButtonType = "outline" | "fill" | "fill-invert"

interface ButtonPropsInterface {
  children: ReactNode;
  className?: string;
  type?: ButtonType;
}

export const Button = ({ children, className = "", type = "fill" }: ButtonPropsInterface) => {
  const baseStyles = "flex items-center justify-center w-fit text-xl leading-[1.25] rounded-lg px-10 py-5 cursor-pointer transition-colors";

  const typeStyles = {
    outline: "bg-transparent border-remGreen-400 border-[1px] hover:opacity-80 transition-opacity",
    "fill-invert": "bg-remGreen-400 border-remGreen-400 border-[1px] hover:bg-transparent",
    fill: "bg-remGreen-400 hover:opacity-80 transition-opacity"
  }

  return (
    <button className={cn(baseStyles, typeStyles[type], className)}>
      {children}
    </button>
  )
}