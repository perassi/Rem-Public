import React from "react";
import { Container } from "../common/Container";
import StepImage1 from "public/assets/images/step1Image.png";
import Image from "next/image";
import { H2 } from "../common/Headers";
import { Button } from "../common/Button";
import { IStep } from "@/types/stepType";
import { handleNextStep, handlePrevStep } from "@/utils/stepUtils";

const PlanTypeStep = ({ setActiveStep, activeStep }: IStep) => {
  return (
    <div className="mt-[10px]">
      <Container>
        <div className="flex flex-col items-center justify-center">
          <Image src={StepImage1} alt="StepImage1" className="py-[45px]" />
          <div className="px-[20px] mt-11 flex flex-col justify-center items-center w-full">
            <H2 className="text-[30px] sm:text-[50px] font-[400]">
              What’s Your ZIP Code?
            </H2>
            <span className="capitalize mt-[10px] sm:mt-[20px] text-center text-[16px] font-[500] leading-[1.25]">
              We need to know this in order to check which plans are available
              in your area.
            </span>
          </div>
          <div className="px-[20px] mt-[30px] sm:mt-[40px] w-full flex flex-col">
            <input
              className="placeholder-evergreen-800 w-full border-[1px] border-[#172A25] h-[60px] sm:w-full md=[640px] px-5 bg-white rounded-[5px]"
              placeholder="Enter Zip Code"
              maxLength={5}
              inputMode="numeric"
              onInput={(e) => {
                e.currentTarget.value = e.currentTarget.value
                  .replace(/\D/g, "")
                  .slice(0, 5);
              }}
              title="Enter exactly 5 digits"
              required
            />
            <div className="mt-[30px] sm:mt-[40px] flex justify-center items-center gap-5">
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
        </div>
      </Container>
    </div>
  );
};

export default PlanTypeStep;
