import {
  ContactTeam,
  HomeBanner,
  TripleLink,
  TeamSlider,
  SetApart,
  CustomerSatisfaction,
  ExpertSupport,
  ContactAgent,
} from "@/components/home";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <TripleLink />
      <ContactTeam />
      <TeamSlider />
      <SetApart />
      <CustomerSatisfaction />
      <ExpertSupport />
      <ContactAgent />
    </>
  );
}
