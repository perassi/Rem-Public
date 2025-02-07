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
    <div className="mt-[30px] sm:mt-[50px] w-full px-[20px]">
      <Container className="flex flex-col items-center ">
        <div className=" flex flex-col w-full items-center">
          <Image src={StepImage4} alt="StepImage4" />
          <div className="mt-[66px] flex flex-col  justify-center items-center w-full">
            <H2 className="text-[30px] sm:text-[50px] font-[400]"> Add Your Providers</H2>
            <span className="mt-[10px] sm:mt-[20px] text-[16px] sm:text-[25px] font-[400] ">
              This Helps Us Find a Plan to Minimize Your Costs
            </span>
          </div>
        </div>
        <div className="w-full mt-[60px] flex flex-col items-start  gap-y-[30px] overflow-hidden ">
          <span className="text-[20px] sm:text-[30px] font-sans font-[600]">Providers</span>
          <ProvidersTable />
        </div>
        <div className="w-full flex-col flex justify-center mt-[60px] gap-5">
          <div className=" flex flex-col w-full">
            <span className="  text-[16px] font-sans font-[600]">Zip Code</span>
            <input
              className="mt-5 px-8 h-[60px] border border-black rounded-[5px]"
              placeholder="Some..."
            />
          </div>
          <div className=" flex flex-col w-full">
            <span className=" text-[16px] font-sans font-[600]">
              Last Name of Provider
            </span>
            <input
              className=" mt-5 px-8 h-[60px] border border-black rounded-[5px]"
              placeholder="Some.."
            />
          </div>
        </div>
        <div className="flex flex-col w-full sm:w-[640px] mt-[60px]">
          <div className="flex justify-center items-center gap-x-[10px] sm:gap-x-[20px]">
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
              onClick={() => handleNextStep({ activeStep, setActiveStep })}
            >
              Save & Continue
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MyDoctorsStep;
