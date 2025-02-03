"use client";
import React, { useEffect, useState } from "react";
import { Container } from "./Container";

interface Step {
  id: number;
  label: string;
  progress: number;
}

interface IStepLine {
  activeStep: number;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
}

const StepLine = ({ activeStep, setActiveStep }: IStepLine) => {
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
    console.log("currentStep", currentStep);
    if (currentStep) {
      setStepObject(currentStep);
    }
    // setActiveStep(activeStep)
  }, [activeStep]);

  const handleStepClick = (stepId: number) => {
    const currentStep = steps.find((step) => step.id === stepId);
    if (currentStep) {
      setStepObject(currentStep);
    }
  };

  return (
    <div className='mt-[75px]'>
      <Container>
        <div className=' relative flex flex-col items-center w-full  '>
          <div className='relative w-full flex   items-center bg-gray-200 rounded-full h-[1px]'>
            <div
              className={` absolute top-0 left-0 bg-rem-green-400 h-[1px] rounded-full `}
              style={{ width: `${stepObject.progress}%` }}
            />
            <div className=' w-full flex justify-around'>
              {steps.map((step, index) => (
                <div
                  key={step.id}
                  className='relative flex flex-col items-center'>
                  <button
                    onClick={() => handleStepClick(step.id)}
                    className={`w-[30px] h-[30px] mt-6 rounded-full flex items-center justify-center ${
                      step.id <= stepObject.id
                        ? "bg-rem-green-400"
                        : "bg-gray-300"
                    } text-black z-10`}>
                    {step.id}
                  </button>
                  <div className='mt-2 text-sm'>{step.label}</div>
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
