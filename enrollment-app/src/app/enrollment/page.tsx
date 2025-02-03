"use client";
import StepLine from "@/components/common/StepLine";
import { useMemo, useState } from "react";
import PlanTypeStep from "@/components/steps/Step1";
import { Container } from "@/components/common/Container";

export default function StepPage() {
  const [activeStep, setActiveStep] = useState<number>(1);

  const getCurrentStep = () => {
    if(activeStep)
    switch (activeStep) {
      case 1:
        return (
          <PlanTypeStep setActiveStep={setActiveStep} activeStep={activeStep} />
        );
        break;

      default:
        break;
    }
  };

  const currentStepContent = useMemo(() => getCurrentStep(), [activeStep]);
  console.log("[activeStep]", activeStep);
  return (
    <Container>
      <div>
        <div>
          <StepLine activeStep={activeStep} setActiveStep={setActiveStep} />
        </div>

        <div className=' mt-28 flex justify-center'>{currentStepContent}</div>
      </div>
    </Container>
  );
}
