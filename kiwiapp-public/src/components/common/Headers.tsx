import { cn } from "@/utils/commonUtils";
import { ReactNode } from "react";

interface HeadersPropsInterface {
  children: ReactNode;
  className: string;
}

export const H1 = ({ children, className }: HeadersPropsInterface) => {
  return (
    <h1 className={cn("text-[45px] md:text-[60px] font-header font-normal !leading-[1]", className)}>
      {children}
    </h1>
  )
}

export const H2 = ({ children, className }: HeadersPropsInterface) => {
  return (
    <h2 className={cn("font-header text-[55px] font-normal !leading-[1]", className)}>
      {children}
    </h2>
  )
}

export const H3 = ({ children, className }: HeadersPropsInterface) => {
  return (
    <h3 className={cn("font-header text-[40px] text-center font-normal !leading-[1]", className)}>
      {children}
    </h3>
  )
}

export const H4 = ({ children, className }: HeadersPropsInterface) => {
  return (
    <h4 className={cn("font-header text-[33px] text-center font-normal !leading-[1]", className)}>
      {children}
    </h4>
  )
}

export const H5 = ({ children, className }: HeadersPropsInterface) => {
  return (
    <h5 className={cn("font-header text-[30px] text-center font-normal !leading-[1]", className)}>
      {children}
    </h5>
  )
}

export const H6 = ({ children, className }: HeadersPropsInterface) => {
  return (
    <h6 className={cn("font-header text-[40px] text-center font-normal !leading-[1]", className)}>
      {children}
    </h6>
  )
}