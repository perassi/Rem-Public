import React, { useState } from "react";
import { Container } from "../common/Container";
import { IStep } from "@/types/stepType";
import { H2 } from "../common/Headers";
import { Button } from "../common/Button";
import { handleNextStep, handlePrevStep } from "@/utils/stepUtils";
import OptionImage1 from "public/assets/images/step2/option1.png";
import OptionImage2 from "public/assets/images/step2/option2.png";

import OptionImage3 from "public/assets/images/step2/option3.png";
import OptionImage4 from "public/assets/images/step2/option4.png";
import Image from "next/image";

const AboutYouStep = ({ setActiveStep, activeStep }: IStep) => {
  const optionsArr = [
    {
      img: OptionImage1,
      alt: "OptionImage1",
      title: "Medicare Advantage Prescription Drug",
    },
    {
      img: OptionImage2,
      alt: "OptionImage2",
      title: "Prescription Drug Plan",
    },

    {
      img: OptionImage3,
      alt: "OptionImage3",
      title: "Supplemental Insurance",
    },
    {
      img: OptionImage4,
      alt: "OptionImage4",
      title: "No Idea Help me out",
    },
  ];
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleSelectOption = (index: number) => {
    setSelectedOption(index);
  };

  return (
    <div className='mt-20'>
      <Container>
        <div className=' flex flex-col items-center justify-center '>
          
          <div className='mt-11 flex flex-col  justify-center items-center w-full'>
            <H2 className=' text-[50px] font-[400] text-center'>
              Do you know the type of plan you <br /> Want to sign up for?
            </H2>
          </div>
          {/* <Image src={StepImage1} alt='StepImage1' className='' /> */}

          <div className='  w-full flex justify-center gap-6 mt-10 '>
            {optionsArr.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col min-w-[310px] relative    cursor-pointer`}
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

          <div className='w-[50%] flex flex-col'>
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
                onClick={() => handleNextStep({ activeStep, setActiveStep })}>
                Save & Continue
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutYouStep;
