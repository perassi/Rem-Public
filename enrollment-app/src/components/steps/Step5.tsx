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
    <div className=''>
      <Container>
        <div className=' w-full flex flex-col items-center justify-center relative'>
          {modal && (
            <div className=' absolute z-1000 top-20'>
              <Modal
                onClose={() => setModal(false)}
                activeStep={activeStep}
                setActiveStep={setActiveStep}
              />
            </div>
          )}
          <div className='mt-11 flex flex-col  justify-center items-center w-full'>
            <H2 className=' text-[50px] font-[400] text-center'>
              Select The Benefits That <br />
              Matter Most To you
            </H2>
          </div>

          <div
            className={`  w-[full] flex flex-wrap justify-center gap-4 mt-20 ${
              modal && "!-z-10"
            } `}>
            {optionsArr.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col w-[310px] relative    cursor-pointer`}
                onClick={() => handleSelectOption(index)}>
                <div
                  className={`relative w-full h-[220px] flex flex-col rounded-[15px] items-center border-2 ${
                    selectedOption === index
                      ? "border-rem-green-400"
                      : "border-gray-200"
                  }`}>
                  <Image src={item.img} alt={item.alt} />
                </div>
                <div className='p-4 bg-white  flex items-center justify-center'>
                  <span className=' text-[20px] leading-[1.25] font-400  text-center'>
                    {item.title}
                  </span>
                  {selectedOption === index ? (
                    <div className='w-6 h-6 absolute -top-3 left-36 bg-rem-green-400 rounded-full flex items-center justify-center'>
                      <svg
                        className='w-4 h-4 text-black'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M5 13l4 4L19 7'></path>
                      </svg>
                    </div>
                  ) : (
                    <div className='w-6 h-6 absolute -top-3 left-36 bg-rem-green-400 rounded-full flex items-center justify-center'>
                      <svg
                        width='30'
                        height='30'
                        viewBox='0 0 30 30'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <circle cx='15' cy='15' r='15' fill='#DCE1E0' />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className='w-[50%] mt-10 flex flex-col'>
            <div className='mt-10 flex justify-center items-center gap-5'>
              <Button
                type='outline'
                className='rounded-full w-full text-[16px] leading-[1.25]'
                onClick={() => handlePrevStep({ activeStep, setActiveStep })}>
                Go Back
              </Button>
              <Button
                type='fill'
                className='rounded-full w-full text-[16px] leading-[1.25]'
                onClick={() => setModal(true)}>
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
