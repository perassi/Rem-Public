"use client";
import StepLine from "@/components/common/StepLine";
import { useCallback } from "react";
import PlanTypeStep from "@/components/steps/Step1";
import { Container } from "@/components/common/Container";
import AboutYouStep from "@/components/steps/Step2";
import MyDrugsStep from "@/components/steps/Step3";
import MyDoctorsStep from "@/components/steps/Step4";
import ExtrasStep from "@/components/steps/Step5";
import UsageFrequencyStep from "@/components/steps/Step6";
// hooks
import { useSteps } from "@/hooks/use-steps";

export default function StepPage() {
  const { activeStep, onPrevStep, onNextStep } = useSteps(1, 6);

  const renderCurrentStepContent = useCallback(() => {
    if (activeStep)
      switch (activeStep) {
        case 1:
          return (
            <PlanTypeStep onNextStep={onNextStep} onPrevStep={onPrevStep} />
          );
        case 2:
          return (
            <AboutYouStep onNextStep={onNextStep} onPrevStep={onPrevStep} />
          );
        case 3:
          return (
            <MyDrugsStep onNextStep={onNextStep} onPrevStep={onPrevStep} />
          );
        case 4:
          return (
            <MyDoctorsStep onNextStep={onNextStep} onPrevStep={onPrevStep} />
          );
        case 5:
          return <ExtrasStep onNextStep={onNextStep} onPrevStep={onPrevStep} />;
        case 6:
          return (
            <UsageFrequencyStep
              onNextStep={onNextStep}
              onPrevStep={onPrevStep}
            />
          );
        default:
          break;
      }
  }, [activeStep, onNextStep, onPrevStep]);

  return (
    <Container>
      <div>
        <div>
          <StepLine activeStep={activeStep} />
        </div>
        <div className="mt-[60px] mb-[60px] flex justify-center">
          {renderCurrentStepContent()}
        </div>
      </div>
    </Container>
  );
}
