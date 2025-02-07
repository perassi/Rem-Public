"use client";
import StepLine from "@/components/common/StepLine";
import { useCallback, useState } from "react";
import PlanTypeStep from "@/components/steps/Step1";
import { Container } from "@/components/common/Container";
import AboutYouStep from "@/components/steps/Step2";
import MyDrugsStep from "@/components/steps/Step3";
import MyDoctorsStep from "@/components/steps/Step4";
import ExtrasStep from "@/components/steps/Step5";
import UsageFrequencyStep from "@/components/steps/Step6";

export default function StepPage() {
  const [activeStep, setActiveStep] = useState<number>(1);

  const renderCurrentStepContent = useCallback(() => {
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
            <MyDrugsStep
              setActiveStep={setActiveStep}
              activeStep={activeStep}
            />
          );
        case 4:
          return (
            <MyDoctorsStep
              setActiveStep={setActiveStep}
              activeStep={activeStep}
            />
          );
        case 5:
          return (
            <ExtrasStep setActiveStep={setActiveStep} activeStep={activeStep} />
          );
        case 6:
          return (
            <UsageFrequencyStep
              setActiveStep={setActiveStep}
              activeStep={activeStep}
            />
          );
        default:
          break;
      }
  }, [activeStep]);

  return (
    <Container>
      <div>
        <div>
          <StepLine activeStep={activeStep} setActiveStep={setActiveStep} />
        </div>
        <div className="mt-[60px] mb-[60px] flex justify-center">
          {renderCurrentStepContent()}
        </div>
      </div>
    </Container>
  );
}
