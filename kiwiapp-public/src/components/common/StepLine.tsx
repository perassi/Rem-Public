"use client";
import React, { memo, useRef, useState, useEffect, useCallback, type FC } from "react";
import Image from "next/image";
import { STEPS } from "@/constants/steps-line.constants";
import type { Step } from "@/types/steps.types";

interface StepLineProps {
  activeStep: number;
}

const StepLine: FC<StepLineProps> = ({ activeStep }) => {
  const [activeStepLeftPosition, setActiveStepLeftPosition] = useState(0);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeStep]);

  const [stepObject, setStepObject] = useState<Step>(STEPS[0]);

  useEffect(() => {
    const currentStep = STEPS.find((step) => step.id === activeStep);
    if (currentStep) {
      setStepObject(currentStep);
    }
  }, [activeStep]);

  const handleGetStepRef = useCallback(
    (step: Step) => (el: HTMLDivElement | null) => {
      stepRefs.current[step.id - 1] = el;
    },
    [],
  );

  return (
    <div ref={wrapperRef} className="mt-7 px-5 md:mt-15">
      <div className="relative !-z-10 flex w-full flex-col items-center">
        <div className="relative flex w-full items-center rounded-full">
          <div
            className={"absolute left-0 top-1/2 z-10 h-[1px] translate-y-1/2 transform rounded-full bg-rem-green-400"}
            style={{ width: `${activeStepLeftPosition}px` }}
          />
          <div
            className={"absolute left-0 top-1/2 h-[1px] w-full translate-y-1/2 transform rounded-full bg-gray-200"}
          />
          <div className="flex w-full justify-center gap-x-4 md:justify-around">
            {STEPS.map((step) => (
              <div key={step.id} className="relative flex flex-col items-center" ref={handleGetStepRef(step)}>
                <button
                  className={`flex h-10 w-10 items-center justify-center rounded-full ${ step.id <= stepObject.id ? "bg-rem-green-400" : "bg-gray-300"
                  } z-10 text-black`}
                >
                  <div className="hidden md:block">
                    {step.id < stepObject.id ? (
                      <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M5.72686 12C5.4067 12 5.10255 11.8661 4.87844 11.6317L0.348174 6.89362C-0.116058 6.40809 -0.116058 5.60446 0.348174 5.11894C0.812406 4.63341 1.58079 4.63341 2.04502 5.11894L5.72686 8.96966L13.955 0.364144C14.4192 -0.121381 15.1876 -0.121381 15.6518 0.364144C16.1161 0.849669 16.1161 1.6533 15.6518 2.13882L6.57529 11.6317C6.35118 11.8661 6.04702 12 5.72686 12Z"
                          fill="#172A25"
                        />
                      </svg>
                    ) : (
                      <span className="font-sans text-xl font-medium">{step.id}</span>
                    )}
                  </div>
                  <div className="flex items-center justify-center md:hidden">
                    <Image src={step.icon} alt={step.label} />
                  </div>
                </button>
                <div
                  className={`${step.id !== activeStep && "hidden"} absolute bottom-[-40px] w-max rounded-full border border-neutral-100 px-4 py-1
                  font-sans text-xs font-medium md:block md:rounded-none md:border-none md:px-0 md:py-0 md:text-xl`}
                >
                  {step.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(StepLine);
