import Image from "next/image";
import ActionButtons from "@/components/common/ActionButtons";
import { H2 } from "@/components/common/Headers";
import StepImage4 from "public/assets/images/step4.png";
import ProvidersTable from "@/components/common/ProvidersTable";
import type { FC } from "react";
import type { IStep } from "@/types/steps.types";

const MyDoctorsStep: FC<IStep> = ({ onPrevStep, onNextStep }) => (
  <div className="mt-7 md:mt-12 w-full px-5 flex flex-col items-center justify-center">
    <div className="flex flex-col w-full items-center">
      <Image src={StepImage4} alt="My Doctors" />
      <div className="mt-16 flex flex-col  justify-center items-center w-full">
        <H2 className="font-normal">
          {" "}
          Add Your Providers
        </H2>
        <span className="mt-[10px] md:mt-5 md:text-2xl font-normal">
          This Helps Us Find a Plan to Minimize Your Costs
        </span>
      </div>
    </div>
    <div className="w-full mt-15 flex flex-col items-start  gap-y-7 overflow-hidden">
      <span className="text-5 md:text-3xl font-sans font-semibold">
        Providers
      </span>
      <ProvidersTable />
    </div>
    <div className="w-full flex-col flex justify-center mt-15 gap-5">
      <div className="flex flex-col w-full">
        <span className="font-sans font-semibold">Zip Code</span>
        <input
          className="mt-5 px-8 h-15 border border-black rounded-md"
          placeholder="Some..."
        />
      </div>
      <div className="flex flex-col w-full">
        <span className="font-sans font-semibold">
          Last Name of Provider
        </span>
        <input
          className="mt-5 px-8 h-15 border border-black rounded-md"
          placeholder="Some..."
        />
      </div>
    </div>
    <ActionButtons
      onClickPrimaryButton={onNextStep}
      onClickSecondaryButton={onPrevStep}
    />
  </div>
);

export default MyDoctorsStep;
