import React, { useState } from "react";
import { Container } from "../common/Container";
import { IStep } from "@/types/stepType";
import { H2 } from "../common/Headers";
import { Button } from "../common/Button";
import { handlePrevStep } from "@/utils/stepUtils";

import DirectionImage1 from "public/assets/images/step5/direction1.png";
import DirectionImage2 from "public/assets/images/step5/direction2.png";
import DirectionImage3 from "public/assets/images/step5/direction3.png";
import DirectionImage4 from "public/assets/images/step5/direction4.png";
import DirectionImage5 from "public/assets/images/step5/direction5.png";
import DirectionImage6 from "public/assets/images/step5/direction6.png";
import DirectionImage7 from "public/assets/images/step5/direction7.png";
import DirectionImage8 from "public/assets/images/step5/direction8.png";

import Image from "next/image";
import Modal from "../common/ModalWindow";

const ExtrasStep = ({ setActiveStep, activeStep }: IStep) => {
  const optionsArr = [
    {
      img: DirectionImage1,
      alt: "DirectionImage1",
      title: "Vision",
    },
    {
      img: DirectionImage2,
      alt: "DirectionImage2",
      title: "Dental",
    },

    {
      img: DirectionImage3,
      alt: "DirectionImage3",
      title: "Hearing Aids",
    },
    {
      img: DirectionImage4,
      alt: "DirectionImage4",
      title: "Groceries",
    },
    {
      img: DirectionImage5,
      alt: "DirectionImage5",
      title: "Over-the-counter Medications",
    },
    {
      img: DirectionImage6,
      alt: "DirectionImage6",
      title: "Gym Membership",
    },

    {
      img: DirectionImage7,
      alt: "DirectionImage7",
      title: "Transportation",
    },
    {
      img: DirectionImage8,
      alt: "DirectionImage8",
      title: "Other",
    },
  ];
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [modal, setModal] = useState(false);
  const handleSelectOption = (index: number) => {
    setSelectedOption(index);
  };

  return (
    <div className="mt-[29px] sm:mt-[74px] px-[20px] sm:px-[0px]">
      <Container>
        <div className="w-full flex flex-col items-center justify-center relative">
          {modal && (
            <div className="flex justify-center items-center w-[100vw] h-[100vh] top-[0px] left-[0px] fixed z-1000 bg-[rgba(23,42,37,0.7)]">
              <Modal
                onClose={() => setModal(false)}
                activeStep={activeStep}
                setActiveStep={setActiveStep}
              />
            </div>
          )}
          <div className="flex flex-col  justify-center items-center w-full">
            <H2 className="sm:max-w-[600px] text-[30px] !leading-[36px] sm:!leading-[60px] sm:text-[50px] font-[400] text-center">
              Select The Benefits That Matter Most To You
            </H2>
          </div>
          <div
            className={`w-[full] flex flex-wrap justify-center gap-y-[35px] gap-x-[10px] sm:gap-y-10 sm:gap-x-4 mt-[45px] sm:mt-[75px] ${
              modal && "!-z-10"
            } `}
          >
            {optionsArr.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col max-w-[190px] sm:max-w-full sm:min-w-[310px] sm:w-[310px] relative cursor-pointer`}
                onClick={() => handleSelectOption(index)}
              >
                <div
                  className={`relative w-full h-[190px] sm:h-[220px] flex flex-col rounded-[15px] items-center border-2 ${
                    selectedOption === index
                      ? "border-rem-green-400"
                      : "border-gray-200"
                  }`}
                >
                  <Image src={item.img} alt={item.alt} />
                </div>
                <div className="px-[0px] sm:px-[20px] bg-white mt-[20px] sm:mt-[30px]  flex items-center justify-center">
                  <span className="text-[16px] sm:text-[20px] leading-[1.25] font-medium  text-center">
                    {item.title}
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

          <div className="w-full flex flex-col sm:max-w-[640px]">
            <div className="mt-[60px] flex justify-center items-center gap-x-[10px] sm:gap-x-[20px]">
              <Button
                type="outline"
                className="h-[60px] rounded-full w-full text-[16px] leading-[1.25]"
                onClick={() => handlePrevStep({ activeStep, setActiveStep })}
              >
                Go Back
              </Button>
              <Button
                type="fill"
                className="px-[20px] rounded-full w-full text-[16px] leading-[1.25]"
                onClick={() => setModal(true)}
              >
                Save & Continue
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ExtrasStep;
