import React, { type FC } from "react";
// components
import Image from "next/image";
import ActionButtons from "@/components/common/ActionButtons";
import MedicationTable from "@/components/common/MedicationTable";
import SearchComponent from "@/components/common/Search";
import { H2 } from "@/components/common/Headers";
import { Button } from "@/components/common/Button";
// assets
import StepImage3 from "public/assets/images/step3.png";
// types
import type { IStep } from "@/types/stepType";

const MyDrugsStep: FC<IStep> = ({ onPrevStep, onNextStep }: IStep) => {
  return (
    <div className="mt-[30px] sm:mt-[50px] w-full px-[20px] flex flex-col items-center justify-center">
        <div className=" flex flex-col w-full items-center">
          <Image src={StepImage3} alt="StepImage3" className="mb-[64px]" />
          <div className="hidden mt-11 sm:flex flex-col sm: mb-[60px] justify-center items-center w-full">
            <H2 className="text-[50px] font-[400]"> Add Your Prescriptions</H2>
            <span className="mt-[20px] text-[25px] font-[500]">
              This Helps Us Find a Plan to Minimize Your Costs
            </span>
          </div>
        </div>
        <div className="w-full flex flex-col items-start  gap-y-[30px] sm:gap-y-[50px] overflow-hidden ">
          <span className="text-[20px] sm:text-[30px] font-sans font-[600]">
            Enrolled Drugs
          </span>
          <MedicationTable />
        </div>
        <div className=" w-full  mt-[60px]">
          <span className="pl-[30px] text-[16px] font-sans font-[600]">
            Search for medication
          </span>
          <SearchComponent />
        </div>
        <div className="flex-col lg:flex-row w-full mt-[60px] flex gap-5">
          <div>
            <span className="sm:pl-[30px] text-[16px] font-sans font-[600]">
              Supply
            </span>
            <div className="flex lg:max-w-[640px] gap-x-[15px]  sm:gap-x-[20px] mt-5">
              <input
                className="w-full px-8 h-[60px] border border-black rounded-[5px]"
                placeholder=""
              />
              <input
                className="w-full px-8 h-[60px] border border-black rounded-[5px]"
                placeholder=""
              />
              <input
                className="w-full px-8 h-[60px] border border-black rounded-[5px]"
                placeholder=""
              />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="sm:pl-[30px] text-[16px] font-sans font-[600]">
              Quantity
            </span>
            <div className="flex-col sm:flex-row mt-5 flex gap-y-[30px] sm:gap-x-[20px]">
              <input
                className="w-full lg:w-[310px] p-2 h-[60px] border border-black rounded-[5px]"
                placeholder=""
              />
              <Button
                type="fill"
                className="bg-black w-full h-[60px] rounded-full flex justify-center items-center lg:w-[310px]"
              >
                <span className="text-[16px] leading-[1.25] text-white">
                  Add Medication
                </span>
              </Button>
            </div>
          </div>
        </div>
        <ActionButtons
          onClickPrimaryButton={onNextStep}
          onClickSecondaryButton={onPrevStep}
        />
    </div>
  );
};

export default MyDrugsStep;
