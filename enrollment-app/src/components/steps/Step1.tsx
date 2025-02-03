import React from "react";
import { Container } from "../common/Container";
import StepImage1 from "public/assets/images/step1Image.png";
import Image from "next/image";
import { H2 } from "../common/Headers";
import { Button } from "../common/Button";

interface IPlanTypeStep {
  activeStep: number;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
}

const PlanTypeStep = ({ setActiveStep, activeStep }: IPlanTypeStep) => {
  return (
    <div className=''>
      <Container>
        <div className=' flex flex-col items-center justify-center'>
          <Image src={StepImage1} alt='StepImage1' className='' />
          <div className='mt-11 flex flex-col  justify-center items-center w-full'>
            <H2 className=' text-[50px] font-[400]'> What’s Your ZIP Code?</H2>
            <span className='mt-4 text-[16px] font-[500] leading-[1.25]'>
              We need to know this in order to check which plans are available
              in your area.
            </span>
          </div>
          <div className='w-full flex flex-col'>
            <input
              className=' mt-10 border-[1px] border-[#172A25] h-[60px] w-[640px] px-5 bg-white rounded-[5px]'
              placeholder='Enter Zip Code'
            />
            <div className='mt-10 flex justify-center items-center gap-5'>
              <Button
                type='outline'
                className='rounded-full w-full text-[16px] leading-[1.25]'>
                Go Back
              </Button>
              <Button
                type='fill'
                className='rounded-full w-full text-[16px] leading-[1.25]'
                onClick={() => setActiveStep(activeStep + 1)}>
                Save & Continue
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PlanTypeStep;
