import { useState } from "react";

import CloseIcon from "public/assets/icons/close-icon.svg";
import LargeCloseIcon from "public/assets/icons/large-close-icon.svg";
import OtherImage1 from "public/assets/images/step5/direction1.png";
import OtherImage2 from "public/assets/images/step5/direction2.png";
import OtherImage3 from "public/assets/images/step5/direction3.png";
import OtherImage4 from "public/assets/images/step5/direction4.png";
import Image from "next/image";
import { H2 } from "./Headers";
import { Button } from "./Button";
import { handleNextStep } from "@/utils/stepUtils";
import { IStep } from "@/types/stepType";

const options = [
  { id: 1, label: "Massage", image: OtherImage1 },
  { id: 2, label: "Acupuncture", image: OtherImage2 },
  { id: 3, label: "Mental Health", image: OtherImage3 },
  { id: 4, label: "Pet Care", image: OtherImage4 },
];

interface ModalProps extends IStep {
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({
  onClose,
  activeStep,
  setActiveStep,
}) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleSelectOption = (index: number) => {
    setSelectedOption(index);
  };

  return (
    <div
      id="Modal"
      className="w-full py-[20px] px-[20px] inset-0 flex items-center justify-center"
    >
      <div className="overflow-auto w-full max-w-[1220px] max-h-[90vh] sm:max-h-[calc(100vh-40px)] bg-white rounded-[20px] py-[20px] sm:py-[60px] relative shadow-lg">
        <button
          className="absolute w-[40px] h-[40px] sm:h-[60px] sm:w-[60px] top-[20px] sm:top-[55px] bg-[#DCE1E0] rounded-full right-[20px] sm:right-[40px]"
          onClick={onClose}
        >
          <div className="sm:hidden">
            <Image src={CloseIcon} alt="close" />
          </div>
          <div className="hidden sm:block">
            <Image src={LargeCloseIcon} alt="close-icon" />
          </div>
        </button>

        <div className="mt-[60px] sm:mt-[0px] w-full border-b">
          <H2 className="text-[30px] sm:text-[50px] text-center mb-[60px]">
            Other Benefits
          </H2>
        </div>

        <div className="px-[20px] flex mt-[45px] sm:mt-[75px] flex-wrap justify-center gap-y-[20px] gap-x-[10px] sm:gap-x-[20px]">
          {options.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col relative    cursor-pointer`}
              onClick={() => handleSelectOption(index)}
            >
              <div
                className={`relative w-[170px] h-[170px] sm:h-[220px] sm:w-[270px] flex flex-col rounded-[15px] items-center border-2 ${
                  selectedOption === index
                    ? "border-rem-green-400"
                    : "border-gray-200"
                }`}
              >
                <Image src={item.image} alt={item.label} />
              </div>
              <div className="px-[0px] sm:px-[20px] bg-white mt-[20px] sm:mt-[30px]  flex items-center justify-center">
                <span className="text-[16px] sm:text-[20px] leading-[1.25] font-medium  text-center">
                  {item.label}
                </span>
                {selectedOption === index ? (
                  <div className="w-[30px] h-[30px] absolute -top-3 left-[calc(50%-7.5px)] bg-rem-green-400 rounded-full flex items-center justify-center">
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
                  <div className="w-[30px] h-[30px] absolute -top-3 left-[calc(50%-7.5px)] bg-rem-green-400 rounded-full flex items-center justify-center">
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
          ))}
        </div>

        <div className="px-[20px] mt-[60px] w-full flex items-center justify-center">
          <Button
            type="fill"
            className="rounded-full w-full sm:w-[310px] text-[16px] leading-[1.25]"
            onClick={() => handleNextStep({ activeStep, setActiveStep })}
          >
            Save & Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
