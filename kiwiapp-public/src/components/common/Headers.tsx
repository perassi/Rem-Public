import clsx from "clsx";
import { ReactNode } from "react";

interface HeadersPropsInterface {
  children: ReactNode;
  className: string;
}

export const H1 = ({ children, className }: HeadersPropsInterface) => {
  return (
    <h1 className={clsx(className, "text-[45px] lg:text-[60px] font-header")}>
      {children}
    </h1>
  )
}

export const H2 = ({ children, className }: HeadersPropsInterface) => {
  return (
    <h2 className={clsx(className, "font-header text-[45px] lg:text-[55px]")}>
      {children}
    </h2>
  )
}

export const H3 = ({ children, className }: HeadersPropsInterface) => {
  return (
    <h3 className={clsx(className, "font-header text-[30px] lg:text-[40px] text-center font-normal")}>
      {children}
    </h3>
  )
}

export const H4 = ({ children, className }: HeadersPropsInterface) => {
  return (
    <h4 className={clsx(className, "font-header text-[24px] lg:text-[33px] text-center font-normal")}>
      {children}
    </h4>
  )
}

export const H5 = ({ children, className }: HeadersPropsInterface) => {
  return (
    <h5 className={clsx(className, "font-header text-[20px] lg:text-[30px] text-center font-normal")}>
      {children}
    </h5>
  )
}

export const H6 = ({ children, className }: HeadersPropsInterface) => {
  return (
    <h6 className={clsx(className, "font-header text-[30px] lg:text-[40px] text-center font-normal")}>
      {children}
    </h6>
  )
}