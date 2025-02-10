import { useCallback, type FC, type FormEvent } from "react";
// components
import Image from "next/image";
import ActionButtons from "@/components/common/ActionButtons";
import { H2 } from "@/components/common/Headers";
import { Container } from "@/components/common/Container";
// assets
import StepImage1 from "public/assets/images/step1Image.png";
// types
import type { IStep } from "@/types/steps.types";

const PlanTypeStep: FC<IStep> = ({ onNextStep, onPrevStep }) => {
  const handleChange = useCallback((e: FormEvent<HTMLInputElement>) => {
    e.currentTarget.value = e.currentTarget.value
      .replace(/\D/g, "")
      .slice(0, 5);
  }, []);

  return (
    <div className="mt-2">
      <Container>
        <div className="flex flex-col items-center justify-center">
          <Image src={StepImage1} alt="Plan type" className="py-11" />
          <div className="px-5 mt-11 flex flex-col justify-center items-center w-full">
            <H2 className="text-[30px] md:text-[50px] font-normal">
              What’s Your ZIP Code?
            </H2>
            <span className="capitalize mt-2 md:mt-5 text-center text-[16px] font-medium leading-tight">
              We need to know this in order to check which plans are available
              in your area.
            </span>
          </div>
          <div className="px-5 mt-7 md:mt-10 w-full flex flex-col">
            <input
              className="placeholder-evergreen-800 w-full border-[1px] border-evergreen-800 h-15 md:w-full px-5 bg-white rounded-md"
              placeholder="Enter Zip Code"
              maxLength={5}
              inputMode="numeric"
              onInput={handleChange}
              title="Enter exactly 5 digits"
              required
            />
            <ActionButtons
              className="mt-7 md:mt-10"
              onClickPrimaryButton={onNextStep}
              onClickSecondaryButton={onPrevStep}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PlanTypeStep;
