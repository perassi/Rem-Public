import React from "react";
import { Container } from "../common/Container";
import { Button } from "../common/Button";
import Image from "next/image";
import StepImage4 from "public/assets/images/step4.png";
import { H2 } from "../common/Headers";
import { handleNextStep, handlePrevStep } from "@/utils/stepUtils";
import { IStep } from "@/types/stepType";
import ProvidersTable from "../common/ProvidersTable";

const MyDoctorsStep = ({ setActiveStep, activeStep }: IStep) => {
  return (
    <div className='w-full pb-32'>
      <Container className='flex flex-col items-center '>
        <div className=' flex flex-col w-full items-center'>
          <Image src={StepImage4} alt='StepImage3' className='' />
          <div className='mt-14 flex flex-col  justify-center items-center w-full'>
            <H2 className=' text-[50px] font-[400]'> Add Your Providers</H2>
            <span className='mt-4 text-[25px] font-[400] '>
              This Helps Us Find a Plan to Minimize Your Costs
            </span>
          </div>
        </div>
        <div className='w-full mt-11 flex flex-col items-start  gap-10 overflow-hidden '>
          <span className='text-[30px] font-sans font-[600]  '>Providers</span>
          <ProvidersTable />
        </div>
        <div className=' w-full flex justify-center mt-16 gap-5'>
          <div className=' flex flex-col w-full'>
            <span className="  text-[16px] font-sans font-[600]">Zip Code</span>
            <input
              className='mt-5 px-8 h-[60px] border border-black rounded-[5px]'
              placeholder='Some..'
            />
          </div>
          <div className=' flex flex-col w-full'>
            <span className=" text-[16px] font-sans font-[600]">Last Name of Provider</span>
            <input
              className=' mt-5 px-8 h-[60px] border border-black rounded-[5px]'
              placeholder='Some..'
            />
          </div>
        </div>
        <div className='w-[50%] flex flex-col mt-5 '>
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
      </Container>
    </div>
  );
};

export default MyDoctorsStep;
