import { memo, type FC } from "react";
import Image, { type StaticImageData } from "next/image";
import { cn } from "@/utils/common.utils";

interface CardPropsProps {
  image: StaticImageData;
  label: string;
  classNameWrapper?: string;
  classNameContainer?: string;
  isActive: boolean;
  onClick: () => void;
}

const Card: FC<CardPropsProps> = ({
  label,
  image,
  classNameWrapper = "",
  classNameContainer = "",
  isActive,
  onClick,
}) => {
  const baseContainerStyles =
    "flex flex-col max-w-[190px] md:min-w-[310px] relative cursor-pointer";

  const baseWrapperStyles = `relative w-full h-[190px] md:h-[220px] flex flex-col rounded-2xl items-center border-2 ${
    isActive ? "border-rem-green-400" : "border-gray-200"
  }`;

  return (
    <div
      className={cn(baseContainerStyles, classNameContainer)}
      onClick={onClick}
    >
      <div className={cn(baseWrapperStyles, classNameWrapper)}>
        <Image src={image} alt={label} />
      </div>
      <div className="px-0 md:px-5 bg-white mt-5 md:mt-7 flex items-center justify-center">
        <span className="md:text-xl leading-tight font-medium  text-center">
          {label}
        </span>
        {isActive ? (
          <div className="w-7 h-7 absolute -top-3 left-[calc(50%-7px)] bg-rem-green-400 rounded-full flex items-center justify-center">
            <svg
              width="16"
              height="12"
              viewBox="0 0 16 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.72686 12C5.4067 12 5.10255 11.8661 4.87844 11.6317L0.348174 6.89362C-0.116058 6.40809 -0.116058 5.60446 0.348174 5.11894C0.812406 4.63341 1.58079 4.63341 2.04502 5.11894L5.72686 8.96966L13.955 0.364144C14.4192 -0.121381 15.1876 -0.121381 15.6518 0.364144C16.1161 0.849669 16.1161 1.6533 15.6518 2.13882L6.57529 11.6317C6.35118 11.8661 6.04702 12 5.72686 12Z"
                fill="#172A25"
              />
            </svg>
          </div>
        ) : (
          <div className="w-7 h-7 absolute -top-3 left-[calc(50%-7px)] bg-rem-green-400 rounded-full flex items-center justify-center">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="15" cy="15" r="15" fill="#DCE1E0" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(Card);
