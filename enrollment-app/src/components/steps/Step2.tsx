import React from "react";
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

  return (
    <div className='mt-20'>
      <Container>
        <div className=' flex flex-col items-center justify-center'>
          <div className='mt-11 flex flex-col  justify-center items-center w-full'>
            <H2 className=' text-[50px] font-[400]'>
              Do you know the type of plan you want to sign up for?
            </H2>
          </div>
          {/* <Image src={StepImage1} alt='StepImage1' className='' /> */}

          <div className='w-full flex justify-center gap-5 items-center'>
            {optionsArr.map((item, i) => (
              <div key={i} className="flex flex-col justify-center items-center">
                <Image src={item.img} alt={item.alt}/> 

              </div>
            ))}
          </div>

          <div className='w-full flex flex-col'>
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
