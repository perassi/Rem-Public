import Image from "next/image";
import DashedCircles from "public/assets/images/dashed-circles-tr.png";
import DashedCirclesMobile from "public/assets/images/dashed-circles-tr-mobile.png";
import BillsIcon from "public/assets/icons/bills.svg";
import CheckmarkIcon from "public/assets/icons/checkmark.svg";
import PersonIcon from "public/assets/icons/person.svg";
import ConnectionsIcon from "public/assets/icons/connections.svg";
import { H2, H6 } from "@/components/common/Headers";
import { cn } from '@/utils/commonUtils';

const valuesItems = [
  {
    icon: BillsIcon,
    title: "Integrity",
    text: "We Prioritize Honesty And Fairness, Ensuring You Receive Unbiased Advice And Feel Confident In Every Decision."
  },
  {
    icon: CheckmarkIcon,
    title: "Personalized Support",
    text: "No Two People Are The Same. That’s Why We Take The Time To Understand Your Unique Health, Budget, And Lifestyle Needs, Providing Tailored Medicare Guidance."
  },
  {
    icon: PersonIcon,
    title: "Transparency, Always",
    text: "We Believe In Clear, Simple Explanations—No Hidden Details, No Surprises. You’ll Always Know Exactly What You’re Getting."
  },
  {
    icon: ConnectionsIcon,
    title: "Community-Centered Care",
    text: "Our Local Agents Are Part Of Your Community, Bringing Personal Insights And Genuine Care To Help You Navigate Medicare With Ease."
  }
]

export function Values() {
  return (
    <section className="bg-beige-400 relative pt-[60px] pb-[60px] lg:pt-[120px] lg:pb-[120px]">
      <div className="container">
        <H2 className="text-center text-[30px] md:text-[60px] mb-[30px] md:mb-[50px] z-10">Our Values</H2>
        <div className="flex flex-wrap items-center lg:items-start justify-evenly gap-y-[30px] gap-x-[20px]">
          {valuesItems.map((item, i) => (
            <div className="flex flex-col items-center min-[770px]:h-[290px] w-full xl:w-[23.5%] md:w-[48%] z-10" key={item.title}>
              <div className={cn("h-[80px] w-[80px] rounded-[15px] mb-[30px] flex items-center justify-center", i % 2 === 0 ? "bg-[#932159]" : "bg-[#F8894B]")}>
                <Image src={item.icon} alt={item.title}/>
              </div>
              <H6 className="font-sans font-semibold text-[20px] mb-[10px]">{item.title}</H6>
              <p className="max-lg:max-w-[640px] font-medium text-center sm:w-[310px]">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
      <Image src={DashedCircles} alt="DashedCircles" className="absolute top-0 right-0 hidden sm:block"/>
      <Image src={DashedCirclesMobile} alt="DashedCirclesMobile" className="absolute top-0 right-0 block sm:hidden"/>
    </section >
  );
}