import { useCallback, type FC, type FormEvent } from "react";
// components
import Image from "next/image";
import ActionButtons from "@/components/common/ActionButtons";
import { H2 } from "@/components/common/Headers";
import { Container } from "@/components/common/Container";
// assets
import StepImage1 from "public/assets/images/step1Image.png";
// types
import type { IStep } from "@/types/stepType";

const PlanTypeStep: FC<IStep> = ({ onNextStep, onPrevStep }) => {
  const handleChange = useCallback((e: FormEvent<HTMLInputElement>) => {
    e.currentTarget.value = e.currentTarget.value
      .replace(/\D/g, "")
      .slice(0, 5);
  }, []);

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
              onInput={handleChange}
              title="Enter exactly 5 digits"
              required
            />
            <ActionButtons
              className="mt-[30px] sm:mt-[40px]"
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
