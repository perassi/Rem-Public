"use client";
import StepLine from "@/components/common/StepLine";
import { useMemo, useState } from "react";
import PlanTypeStep from "@/components/steps/Step1";
import { Container } from "@/components/common/Container";
import AboutYouStep from "@/components/steps/Step2";

export default function StepPage() {
  const [activeStep, setActiveStep] = useState<number>(1);

  const getCurrentStep = () => {
    if (activeStep)
      switch (activeStep) {
        case 1:
          return (
            <PlanTypeStep
              setActiveStep={setActiveStep}
              activeStep={activeStep}
            />
          );
        case 2:
          return (
            <AboutYouStep
              setActiveStep={setActiveStep}
              activeStep={activeStep}
            />
          );
        case 3:
          return (
            <PlanTypeStep
              setActiveStep={setActiveStep}
              activeStep={activeStep}
            />
          );
        case 4:
          return (
            <PlanTypeStep
              setActiveStep={setActiveStep}
              activeStep={activeStep}
            />
          );
        case 5:
          return (
            <PlanTypeStep
              setActiveStep={setActiveStep}
              activeStep={activeStep}
            />
          );
        case 6:
          return (
            <PlanTypeStep
              setActiveStep={setActiveStep}
              activeStep={activeStep}
            />
          );
        default:
          break;
      }
  };

  const currentStepContent = useMemo(() => getCurrentStep(), [activeStep]);
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
