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
    <div className="w-full flex flex-col px-[20px]">
      <Container className="flex w-full">
        <div className="flex flex-col w-full items-center">
          <Image src={StepImage6} alt="StepImage6" className="mt-[35px]" />
          <div className="mt-[72px] sm:mt-[40px] flex flex-col  justify-center items-center w-full">
            <H2 className="sm:max-w-[840px] text-[30px] !leading-[36px] sm:!leading-[60px]  sm:text-[50px] font-[400] text-center">
              Now All We Need To Know Is How Often You Visit Providers.
            </H2>
            <span className="capitalize sm:normal-case mt-[10px] max-w-[318px] sm:max-w-[690px] text-[16px] sm:text-[25px] font-[400] leading-[24px] sm:leading-[35px] text-center">
            This helps us ensure we get you a good level of coverage and potentially reduce out of pocket costs.
            </span>
          </div>
        </div>
      </Container>
      <div className="flex flex-col w-full mt-[60px] sm:mt-[100px] gap-y-[30px]">
        <div className=" w-full flex flex-col gap-y-[20px] sm:gap-y-[30px]">
          <span className="text-[16px] sm:text-[20px] font-[600] font-sans">
            How many times approximately did you see your Primary Care Physician
            Last Year?
          </span>
          <RangeSelector />
        </div>

        <div className=" w-full flex flex-col gap-y-[20px] sm:gap-y-[30px]">
          <span className="text-[16px] sm:text-[20px] font-[600] font-sans">
            How many times approximately did you see your Primary Care Physician
            Last Year?
          </span>
          <RangeSelector />
        </div>

        <div className="w-full flex flex-col gap-y-[20px] sm:gap-y-[30px]">
          <span className="text-[16px] sm:text-[20px] font-[600] font-sans">
            How many times approximately did you see your Primary Care Physician
            Last Year?
          </span>
          <RangeSelector />
        </div>
      </div>

      <div className="mt-[60px] flex justify-center items-center gap-[10px]">
        <Button
          type="outline"
          className="h-[60px] rounded-full w-[310px] text-[16px] leading-[1.25]"
          onClick={() => handlePrevStep({ activeStep, setActiveStep })}
        >
          Go Back
        </Button>
        <Button
          type="fill"
          className="px-[20px] rounded-full w-[310px] text-[16px] leading-[1.25]"
          onClick={() => handleNextStep({ activeStep, setActiveStep })}
        >
          Save & Continue
        </Button>
      </div>
    </div>
  );
};

export default UsageFrequencyStep;
