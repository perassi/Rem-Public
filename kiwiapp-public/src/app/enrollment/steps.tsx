// import Step1 from "@/components/Step1";
// import Step2 from "@/components/Step2";
// import Step3 from "@/components/Step3";

import PlanTypeStep from "@/components/steps/Step1";
import AboutYouStep from "@/components/steps/Step2";
import MyDrugsStep from "@/components/steps/Step3";
import MyDoctorsStep from "@/components/steps/Step4";
import ExtrasStep from "@/components/steps/Step5";
import UsageFrequencyStep from "@/components/steps/Step6";
export const steps = [
  { id: "1", component: PlanTypeStep, label: "Plan Type", progress: 8 },
  { id: "2", component: AboutYouStep, label: "About You", progress: 25 },
  { id: "3", component: MyDrugsStep, label: "My Drugs", progress: 40  },
  { id: "4", component: MyDoctorsStep },
  { id: "5", component: ExtrasStep },
  { id: "6", component: UsageFrequencyStep },
];