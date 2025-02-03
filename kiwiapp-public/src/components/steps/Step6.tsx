import React from "react";
import { Container } from "../common/Container";
import StepImage6 from "public/assets/images/step6.png";
import Image from "next/image";
import { H2 } from "../common/Headers";
import { Button } from "../common/Button";
import { IStep } from "@/types/stepType";
import { handleNextStep, handlePrevStep } from "@/utils/stepUtils";
import RangeSelector from "../common/RangeSelector";

const UsageFrequencyStep = ({ setActiveStep, activeStep }: IStep) => {
  return (
    <div className='w-full flex flex-col mb-32'>
      <Container className='flex w-full'>
        <div className=' flex flex-col w-full items-center'>
          <Image src={StepImage6} alt='StepImage6' className='' />
          <div className='mt-11 flex flex-col  justify-center items-center w-full'>
            <H2 className=' text-[50px] font-[400] text-center'>
              Now All We Need To Know Is How <br />
              Often You Visit Providers.
            </H2>
            <span className='mt-4 text-[25px] font-[400] leading-[1.4] text-center'>
              This helps us ensure we get you a good level of coverage and
              <br /> potentially reduce out of pocket costs.
            </span>
          </div>
        </div>
      </Container>
      <div className='flex flex-col w-full mt-28 gap-14'>
        <div className=' w-full flex flex-col gap-5'>
          <span className='text-[20px] font-[600] font-sans '>
            How many times approximately did you see your Primary Care Physician
            Last Year?
          </span>
          <RangeSelector />
        </div>

        <div className=' w-full flex flex-col gap-5'>
          <span className='text-[20px] font-[600] font-sans'>
            How many times approximately did you see your Primary Care Physician
            Last Year?
          </span>
          <RangeSelector />
        </div>

        <div className=' w-full flex flex-col gap-5'>
          <span className='text-[20px] font-[600] font-sans'>
            How many times approximately did you see your Primary Care Physician
            Last Year?
          </span>
          <RangeSelector />
        </div>
      </div>

      <div className='mt-14 flex justify-center items-center gap-5'>
        <Button
          type='outline'
          className='rounded-full w-[310px] text-[16px] leading-[1.25]'
          onClick={() => handlePrevStep({ activeStep, setActiveStep })}>
          Go Back
        </Button>
        <Button
          type='fill'
          className='rounded-full w-[310px] text-[16px] leading-[1.25]'
          onClick={() => handleNextStep({ activeStep, setActiveStep })}>
          Save & Continue
        </Button>
      </div>
    </div>
  );
};

export default UsageFrequencyStep;
