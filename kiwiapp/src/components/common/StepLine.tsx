"use client";
import React, { useEffect, useState } from "react";
import { Container } from "./Container";
import { IStep } from "@/types/stepType";

interface Step {
  id: number;
  label: string;
  progress: number;
}

const StepLine = ({ activeStep }: IStep) => {
  const steps: Step[] = [
    { id: 1, label: "Plan Type", progress: 8 },
    { id: 2, label: "About You", progress: 25 },
    { id: 3, label: "My Drugs", progress: 40 },
    { id: 4, label: "My Doctors", progress: 58 },
    { id: 5, label: "Extras", progress: 73 },
    { id: 6, label: "Usage Frequency", progress: 100 },
  ];

  const [stepObject, setStepObject] = useState<Step>(steps[0]);

  useEffect(() => {
    const currentStep = steps.find((step) => step.id === activeStep);
    if (currentStep) {
      setStepObject(currentStep);
    }
  }, [activeStep]);

  return (
    <div className='mt-[75px] '>
      <Container>
        <div className=' relative flex flex-col items-center w-full !-z-10 '>
          <div className='relative w-full flex   items-center bg-gray-200 rounded-full h-[1px]'>
            <div
              className={` absolute top-0 left-0 bg-rem-green-400 h-[1px] rounded-full `}
              style={{ width: `${stepObject.progress}%` }}
            />
            <div className='w-full flex justify-around'>
              {steps.map((step) => (
                <div
                  key={step.id}
                  className='relative flex flex-col mt-5 items-center'>
                  <button
                    className={`w-[30px] h-[30px] mt-6 mb-4 rounded-full flex items-center justify-center ${
                      step.id <= stepObject.id
                        ? "bg-rem-green-400"
                        : "bg-gray-300"
                    } text-black z-10`}>
                    {step.id < stepObject.id ? (
                      <svg
                        width='16'
                        height='12'
                        viewBox='0 0 16 12'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M5.72686 12C5.4067 12 5.10255 11.8661 4.87844 11.6317L0.348174 6.89362C-0.116058 6.40809 -0.116058 5.60446 0.348174 5.11894C0.812406 4.63341 1.58079 4.63341 2.04502 5.11894L5.72686 8.96966L13.955 0.364144C14.4192 -0.121381 15.1876 -0.121381 15.6518 0.364144C16.1161 0.849669 16.1161 1.6533 15.6518 2.13882L6.57529 11.6317C6.35118 11.8661 6.04702 12 5.72686 12Z'
                          fill='#172A25'
                        />
                      </svg>
                    ) : (
                      <span className=" text-[20px] font-sans font-[500]">{step.id}</span>
                    )}
                  </button>
                  <div className='text-[20px] font-sans font-[500]'>
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
