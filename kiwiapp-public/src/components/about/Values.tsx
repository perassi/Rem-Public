import Image from "next/image";
import DashedCircles from "public/assets/images/dashed-circles-tr.png";
import DashedCirclesMobile from "public/assets/images/dashed-circles-tr-mobile.png";
import BillsIcon from "public/assets/icons/bills.svg";
import CheckmarkIcon from "public/assets/icons/checkmark.svg";
import PersonIcon from "public/assets/icons/person.svg";
import ConnectionsIcon from "public/assets/icons/connections.svg";
import { H2, H6 } from "@/components/common/Headers";
import { Container } from "@/components/common/Container";
import { cn } from "@/utils/commonUtils";

const valuesItems = [
  {
    icon: BillsIcon,
    title: "Integrity",
    text: "We Prioritize Honesty And Fairness, Ensuring You Receive Unbiased Advice And Feel Confident In Every Decision.",
  },
  {
    icon: CheckmarkIcon,
    title: "Personalized Support",
    text: "No Two People Are The Same. That’s Why We Take The Time To Understand Your Unique Health, Budget, And Lifestyle Needs, Providing Tailored Medicare Guidance.",
  },
  {
    icon: PersonIcon,
    title: "Transparency, Always",
    text: "We Believe In Clear, Simple Explanations—No Hidden Details, No Surprises. You’ll Always Know Exactly What You’re Getting.",
  },
  {
    icon: ConnectionsIcon,
    title: "Community-Centered Care",
    text: "Our Local Agents Are Part Of Your Community, Bringing Personal Insights And Genuine Care To Help You Navigate Medicare With Ease.",
  },
];

export function Values() {
  return (
    <section className="bg-beige-400 relative pt-16 pb-14 lg:pt-32 lg:pb-32">
      <Container>
        <H2 className="text-center text-3xl md:text-6xl mb-8 md:mb-12 z-10">Our Values</H2>
        <div className="flex flex-wrap items-center lg:items-start justify-evenly gap-y-8 gap-x-5">
          {valuesItems.map((item, i) => (
            <div
              className="flex flex-col items-center min-[770px]:h-[290px] w-full xl:w-[23.5%] md:w-[48%] z-10"
              key={item.title}
            >
              <div
                className={cn(
                  "h-20 w-20 rounded-2xl mb-8 flex items-center justify-center",
                  i % 2 === 0 ? "bg-[#932159]" : "bg-[#F8894B]"
                )}
              >
                <Image src={item.icon} alt={item.title} />
              </div>
              <H6 className="font-sans font-semibold text-xl mb-3">{item.title}</H6>
              <p className="max-lg:max-w-[640px] font-medium text-center sm:w-80">{item.text}</p>
            </div>
          ))}
        </div>
      </Container>
      <Image src={DashedCircles} alt="DashedCircles" className="absolute top-0 right-0 hidden sm:block" />
      <Image src={DashedCirclesMobile} alt="DashedCirclesMobile" className="absolute top-0 right-0 block sm:hidden" />
    </section>
  );
}
