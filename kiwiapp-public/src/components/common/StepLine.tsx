"use client";
import React, { useRef, useEffect, useState, useCallback } from "react";
// components
import Image from "next/image";
import { Container } from "./Container";
// assets
import ExtraIcon from "public/assets/icons/extras-icon.svg";
import MyDrugsIcon from "public/assets/icons/my-drugs-icon.svg";
import NotebookIcon from "public/assets/icons/notebook-icon.svg";
import AboutYouIcon from "public/assets/icons/about-you-icon.svg";
import MyDoctorIcon from "public/assets/icons/my-doctor-icon.svg";
// types
import type { IStep } from "@/types/stepType";
import type { StaticImport } from "next/dist/shared/lib/get-img-props";

interface Step {
  id: number;
  icon: StaticImport;
  label: string;
}

const StepLine = ({ activeStep }: IStep) => {
  const [activeStepLeftPosition, setActiveStepLeftPosition] = useState(0);
  const steps: Step[] = [
    { id: 1, label: "Plan Type", icon: NotebookIcon },
    { id: 2, label: "About You", icon: AboutYouIcon },
    { id: 3, label: "My Drugs", icon: MyDrugsIcon },
    { id: 4, label: "My Doctors", icon: MyDoctorIcon },
    { id: 5, label: "Extras", icon: ExtraIcon },
    { id: 6, label: "Usage Frequency", icon: NotebookIcon },
  ];

  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const getPosition = useCallback(() => {
    const stepElement = stepRefs.current[activeStep - 1];
    if (stepElement && wrapperRef.current) {
      const stepRect = stepElement.getBoundingClientRect();
      const wrapperRect = wrapperRef.current.getBoundingClientRect();
      setActiveStepLeftPosition(stepRect.left - wrapperRect.left);
    }
  }, [activeStep]);

  useEffect(() => {
    getPosition();
    const handleResize = () => {
      getPosition();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [activeStep]);

  const [stepObject, setStepObject] = useState<Step>(steps[0]);

  useEffect(() => {
    const currentStep = steps.find((step) => step.id === activeStep);
    if (currentStep) {
      setStepObject(currentStep);
    }
  }, [activeStep]);

  const handleGetStepRef = (step: Step) => (el: HTMLDivElement | null) => {
    stepRefs.current[step.id - 1] = el;
  };

  return (
    <div ref={wrapperRef} className="mt-[30px] px-[20px] sm:mt-[60px]">
      <Container>
        <div className=" relative flex flex-col items-center w-full !-z-10 ">
          <div className="relative w-full flex  items-center rounded-full">
            <div
              className={`z-10 absolute top-1/2 transform translate-y-1/2 left-0 bg-rem-green-400 h-[1px] rounded-full `}
              style={{ width: `${activeStepLeftPosition}px` }}
            />
            <div
              className={`w-full absolute top-1/2 transform translate-y-1/2 left-0 bg-gray-200 h-[1px] rounded-full `}
            />
            <div className="w-full flex gap-x-[16px] justify-center sm:justify-around">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className="relative flex flex-col items-center"
                  ref={handleGetStepRef(step)}
                >
                  <button
                    className={`w-[40px] h-[40px] sm:w-[40px] sm:h-[40px] rounded-full flex items-center justify-center ${
                      step.id <= stepObject.id
                        ? "bg-rem-green-400"
                        : "bg-gray-300"
                    } text-black z-10`}
                  >
                    <div className="hidden sm:block">
                      {step.id < stepObject.id ? (
                        <svg
                          width="16"
                          height="12"
                          viewBox="0 0 16 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.72686 12C5.4067 12 5.10255 11.8661 4.87844 11.6317L0.348174 6.89362C-0.116058 6.40809 -0.116058 5.60446 0.348174 5.11894C0.812406 4.63341 1.58079 4.63341 2.04502 5.11894L5.72686 8.96966L13.955 0.364144C14.4192 -0.121381 15.1876 -0.121381 15.6518 0.364144C16.1161 0.849669 16.1161 1.6533 15.6518 2.13882L6.57529 11.6317C6.35118 11.8661 6.04702 12 5.72686 12Z"
                            fill="#172A25"
                          />
                        </svg>
                      ) : (
                        <span className="text-[20px] font-sans font-[500]">
                          {step.id}
                        </span>
                      )}
                    </div>
                    <div className="sm:hidden flex justify-center items-center">
                      <Image src={step.icon} alt={step.label} />
                    </div>
                  </button>
                  <div
                    className={`${
                      step.id !== activeStep && "hidden"
                    } sm:block absolute bottom-[-40px] w-max text-[12px] py-[5px] px-[15px] rounded-[20px] border border-[#DCE1E0] font-sans font-[500] sm:border-none sm:text-[14px] md:text-[20px]  sm:rounded-none sm:py-[0px] sm:px-[0px]`}
                  >
                    {step.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default StepLine;
