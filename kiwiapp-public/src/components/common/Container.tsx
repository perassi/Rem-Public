import { ReactNode } from "react";
import { cn } from "@/utils/commonUtils";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return <div className={cn("max-w-[1340px] mx-auto px-5", className)}>{children}</div>;
}
