import { IStep } from "@/types/stepType";

export const handleNextStep = (
  { setActiveStep, activeStep }: IStep,
  maxStep = 6
) => {
  if (activeStep < maxStep) setActiveStep(activeStep + 1);
};

export const handlePrevStep = ({ setActiveStep, activeStep }: IStep) => {
  if (activeStep > 1) setActiveStep(activeStep - 1);
};
