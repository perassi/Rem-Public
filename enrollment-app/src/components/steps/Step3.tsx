import React from "react";
import { Container } from "../common/Container";
import { IStep } from "@/types/stepType";
import MedicationTable from "../common/MedicationTable";
import StepImage3 from "public/assets/images/step3.png";
import Image from "next/image";
import { H2 } from "../common/Headers";
import SearchComponent from "../common/Search";
import { Button } from "../common/Button";
import { handleNextStep, handlePrevStep } from "@/utils/stepUtils";

const MyDrugsStep = ({ setActiveStep, activeStep }: IStep) => {
  return (
    <div className=' w-full pb-32 '>
      <Container className='flex flex-col items-center '>
        <div className=' flex flex-col w-full items-center'>
          <Image src={StepImage3} alt='StepImage3' className='' />
          <div className='mt-11 flex flex-col  justify-center items-center w-full'>
            <H2 className=' text-[50px] font-[400]'> Add Your Prescriptions</H2>
            <span className='mt-4 text-[25px] font-[400] '>
              This Helps Us Find a Plan to Minimize Your Costs
            </span>
          </div>
        </div>
        <div className='w-full mt-9 flex flex-col items-start  gap-10 overflow-hidden '>
          <span className='text-[30px] font-sans font-[600]  '>
            Enrolled Drugs
          </span>
          <MedicationTable />
        </div>
        <div className=' w-full  mt-10'>
          <span className=' px-8 text-[16px] font-sans font-[600]'>
            Search for medication
          </span>
          {/* <input className=" w-full mt-5 h-[60px] border border-black rounded-[5px] "/>  */}
          <SearchComponent />
        </div>
        <div className=' w-full mt-20 flex items-end gap-5'>
          <div>
            <span className=' px-5 text-[16px] font-sans font-[600]'>
              Supply
            </span>
            <div className=' flex gap-5 mt-10'>
              <input
                className='w-[200px] px-8 h-[60px] border border-black rounded-[5px]'
                placeholder='Some..'
              />
              <input
                className='w-[200px] px-8 h-[60px] border border-black rounded-[5px]'
                placeholder='Some..'
              />
              <input
                className='w-[200px] px-8 h-[60px] border border-black rounded-[5px]'
                placeholder='Some..'
              />
            </div>
          </div>
          <div className='flex flex-col '>
            <span className=' px-10 text-[16px] font-sans font-[600]'>
              Quantity
            </span>
            <div className='mt-5 flex gap-5'>
              <input
                className='w-[310px] p-2 h-[60px] border border-black rounded-[5px]'
                placeholder='Some..'
              />
              <Button
                type='fill'
                className='bg-black w-[310px] h-[60px] rounded-full flex justify-center items-center'>
                <span className='text-[16px] leading-[1.25] text-white'>
                  {" "}
                  Add Medication
                </span>
              </Button>
            </div>
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

export default MyDrugsStep;
