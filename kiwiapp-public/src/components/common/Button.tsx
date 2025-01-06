import clsx from "clsx";
import { ReactNode } from "react";

interface ButtonPropsInterface {
  children: ReactNode;
  className: string;
}

export const Button = ({ children, className }: ButtonPropsInterface) => {
  return (
    <button className={clsx("bg-remGreen-400 flex items-center justify-center text-[20px] rounded-[10px] px-[40px] py-[20px] cursor-pointer hover:bg-remGreen-500 transition-colors", className)}>
      {children}
    </button>
  )
}