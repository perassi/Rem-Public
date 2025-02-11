import { cn } from "@/utils/common.utils";
import type { FC, ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export const Container: FC<ContainerProps> = ({ children, className }) => (
  <div className={cn("max-w-[1300px] mx-auto", className)}>{children}</div>
);
