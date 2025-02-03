import { notFound } from "next/navigation";
import { steps } from "../steps";

export default function StepPage({ params }: { params: { step: string } }) {
  const stepData = steps.find((s) => s.id === params.step);
  if (!stepData) return notFound(); // 404 если шаг не найден

  const StepComponent = stepData.component;
  return <StepComponent />;
}