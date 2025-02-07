// components
import Image from "next/image";
import ActionButtons from "@/components/common/ActionButtons";
import { H2 } from "@/components/common/Headers";
// assets
import StepImage4 from "public/assets/images/step4.png";
import ProvidersTable from "@/components/common/ProvidersTable";
// types
import type { FC } from "react";
import type { IStep } from "@/types/stepType";

const MyDoctorsStep: FC<IStep> = ({ onPrevStep, onNextStep }) => {
  return (
    <div className="mt-[30px] sm:mt-[50px] w-full px-[20px] flex flex-col items-center justify-center">
        <div className="flex flex-col w-full items-center">
          <Image src={StepImage4} alt="StepImage4" />
          <div className="mt-[66px] flex flex-col  justify-center items-center w-full">
            <H2 className="text-[30px] sm:text-[50px] font-[400]">
              {" "}
              Add Your Providers
            </H2>
            <span className="mt-[10px] sm:mt-[20px] text-[16px] sm:text-[25px] font-[400] ">
              This Helps Us Find a Plan to Minimize Your Costs
            </span>
          </div>
        </div>
        <div className="w-full mt-[60px] flex flex-col items-start  gap-y-[30px] overflow-hidden ">
          <span className="text-[20px] sm:text-[30px] font-sans font-[600]">
            Providers
          </span>
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
        <ActionButtons
          onClickPrimaryButton={onNextStep}
          onClickSecondaryButton={onPrevStep}
        />
    </div>
  );
};

export default MyDoctorsStep;
