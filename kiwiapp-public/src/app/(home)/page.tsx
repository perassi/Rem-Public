import {
  WhyRem,
  HomeBanner,
  RemAdvantages,
  TeamSlider,
  FeaturesBanner,
  CustomerSatisfaction,
} from "@/components/home";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <RemAdvantages />
      <WhyRem />
      <TeamSlider />
      <FeaturesBanner />
      <CustomerSatisfaction />
    </>
  );
}
