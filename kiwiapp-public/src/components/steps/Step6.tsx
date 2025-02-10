import type { FC } from "react";
// componets
import Image from "next/image";
import ActionButtons from "@/components/common/ActionButtons";
import RangeSelector from "@/components/common/RangeSelector";
import { H2 } from "@/components/common/Headers";
import { RANGE_LIST } from "@/constants/usage-frequenc.constants";
// assets
import StepImage6 from "public/assets/images/step6.png";
// types
import type { IStep } from "@/types/steps.types";

const UsageFrequencyStep: FC<IStep> = ({ onPrevStep, onNextStep }) => (
  <div className="w-full flex flex-col px-5 items-center justify-center">
    <div className="flex flex-col w-full items-center">
      <Image src={StepImage6} alt="Usage Frequency" className="mt-9" />
      <div className="mt-18 md:mt-10 flex flex-col  justify-center items-center w-full">
        <H2 className="md:max-w-[840px] text-[30px] leading-snug md:!leading-tight  md:text-[50px] font-normal text-center">
          Now All We Need To Know Is How Often You Visit Providers.
        </H2>
        <span className="capitalize md:normal-case mt-2 max-w-[318px] md:max-w-[690px] text-[16px] md:text-[25px] font-normal leading-6 md:leading-9 text-center">
          This helps us ensure we get you a good level of coverage and
          potentially reduce out of pocket costs.
        </span>
      </div>
    </div>
    <div className="flex flex-col w-full mt-15 md:mt-24 gap-y-7">
      {RANGE_LIST.map((item) => (
        <div key={item.id} className=" w-full flex flex-col gap-y-5 md:gap-y-7">
          <span className="text-[16px] md:text-[20px] font-semibold font-sans">
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

export default UsageFrequencyStep;
