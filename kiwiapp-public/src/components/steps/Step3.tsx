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
    <div className="mt-7 md:mt-12 w-full px-5 flex flex-col items-center justify-center">
      <div className=" flex flex-col w-full items-center">
        <Image src={StepImage3} alt="StepImage3" className="mb-16" />
        <div className="hidden mt-11 md:flex flex-col md: mb-15 justify-center items-center w-full">
          <H2 className="text-[50px] font-normal"> Add Your Prescriptions</H2>
          <span className="mt-5 text-[25px] font-medium">
            This Helps Us Find a Plan to Minimize Your Costs
          </span>
        </div>
      </div>
      <div className="w-full flex flex-col items-start gap-y-7 md:gap-y-[50px] overflow-hidden ">
        <span className="text-[20px] md:text-[30px] font-sans font-semibold">
          Enrolled Drugs
        </span>
        <MedicationTable />
      </div>
      <div className=" w-full  mt-16">
        <span className="pl-7 text-[16px] font-sans font-semibold">
          Search for medication
        </span>
        <SearchComponent />
      </div>
      <div className="flex-col lg:flex-row w-full mt-15 flex gap-5">
        <div>
          <span className="md:pl-7 text-[16px] font-sans font-semibold">
            Supply
          </span>
          <div className="flex lg:max-w-[640px] gap-x-4  md:gap-x-5 mt-5">
            <input
              className="w-full px-8 h-15 border border-black rounded-md"
              placeholder=""
            />
            <input
              className="w-full px-8 h-15 border border-black rounded-md"
              placeholder=""
            />
            <input
              className="w-full px-8 h-15 border border-black rounded-md"
              placeholder=""
            />
          </div>
        </div>
        <div className="flex flex-col">
          <span className="md:pl-7 text-[16px] font-sans font-semibold">
            Quantity
          </span>
          <div className="flex-col md:flex-row mt-5 flex gap-y-[30px] md:gap-x-[20px]">
            <input
              className="w-full lg:w-[310px] p-2 h-15 border border-black rounded-md"
              placeholder=""
            />
            <Button
              type="fill"
              className="bg-black w-full h-15 rounded-full flex justify-center items-center lg:w-[310px]"
            >
              <span className="text-[16px] leading-tight text-white">
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
