import type { FC } from "react";
// componets
import Image from "next/image";
import { H2 } from "@/components/common/Headers";
import ActionButtons from "@/components/common/ActionButtons";
import RangeSelector from "@/components/common/RangeSelector";
// assets
import StepImage6 from "public/assets/images/step6.png";
// types
import type { IStep } from "@/types/stepType";

const rangeList = [
  {
    id: 1,
    title:
      "How many times approximately did you see your Primary Care Physician Last Year?",
  },
  {
    id: 2,
    title:
      "How many times approximately did you see your Primary Care Physician Last Year?",
  },
  {
    id: 3,
    title:
      "How many times approximately did you see your Primary Care Physician Last Year?",
  },
];

const UsageFrequencyStep: FC<IStep> = ({ onPrevStep, onNextStep }) => {
  return (
    <div className="w-full flex flex-col px-[20px] items-center justify-center">
      <div className="flex flex-col w-full items-center">
        <Image src={StepImage6} alt="StepImage6" className="mt-[35px]" />
        <div className="mt-[72px] sm:mt-[40px] flex flex-col  justify-center items-center w-full">
          <H2 className="sm:max-w-[840px] text-[30px] !leading-[36px] sm:!leading-[60px]  sm:text-[50px] font-[400] text-center">
            Now All We Need To Know Is How Often You Visit Providers.
          </H2>
          <span className="capitalize sm:normal-case mt-[10px] max-w-[318px] sm:max-w-[690px] text-[16px] sm:text-[25px] font-[400] leading-[24px] sm:leading-[35px] text-center">
            This helps us ensure we get you a good level of coverage and
            potentially reduce out of pocket costs.
          </span>
        </div>
      </div>
      <div className="flex flex-col w-full mt-[60px] sm:mt-[100px] gap-y-[30px]">
        {rangeList.map((item) => (
          <div
            key={item.id}
            className=" w-full flex flex-col gap-y-[20px] sm:gap-y-[30px]"
          >
            <span className="text-[16px] sm:text-[20px] font-[600] font-sans">
              {item.title}
            </span>
            <RangeSelector />
          </div>
        ))}
      </div>
      <ActionButtons
        onClickSecondaryButton={onPrevStep}
        onClickPrimaryButton={onNextStep}
      />
    </div>
  );
};

export default UsageFrequencyStep;
