import Image from "next/image";
import { cn } from '@/utils/commonUtils';
import Graphic1 from "public/assets/images/set-apart-graphic-1.jpg";
import Graphic2 from "public/assets/images/set-apart-graphic-2.jpg";
import Graphic3 from "public/assets/images/set-apart-graphic-3.jpg";
import { H2, H6 } from "@/components/common/Headers";
import { Container } from "@/components/common/Container";

const graphicData = [
  { image: Graphic1, title: "No Call Centers, Only Local Experts", text: "Work With Agents Who Know Your Community, Culture, And Needs. Our Agents Compare Plans To Help Lower Your Premiums, Co-Pays, And Out-Of-Pocket Costs" },
  { image: Graphic2, title: "100% Free Consultations", text: "You’ll never pay for our expert guidance- its completely Free. We’re always here for you and your family." },
  { image: Graphic3, title: "With you every step of the way", text: "From Enrollment To Understanding Your Policy, And Guiding You Through Yearly Enrollment, We Ensure Your Plan Adapts As Your Needs Change. Stay Confident Knowing You’re Always On The Right Coverage." }
]

export function SetApart() {
  return (
    <section className="flex relative bg-white items-center justify-center pb-8 sm:pb-14 lg:pb-32">
      <Container>
        <div className="max-w-[1300px] flex items-center justify-center xl:justify-between flex-col">
          <H2 className="text-3xl md:text-6xl mb-3 md:mb-5 w-full text-center">What Sets Us Apart</H2>
          <p className="font-medium mb-8 sm:mb-12 text-center max-w-[1080px]">This Presentation Contains Confidential And Proprietary Information Intended Solely For The Recipient. By Accepting This
          <br/>Document, You Agree To Keep All Information Contained Within It Confidential.</p>
          <div className="flex flex-col xl:flex-row gap-x-5">
            {graphicData.map((item, i) => (
              <div className="flex flex-col xl:flex-1 sm:items-center xl:items-start" key={item.title}>
                <div className={cn("rounded-2xl flex items-center justify-center w-full sm:w-fit p-5 sm:p-8 mb-8", i === 0 ? "bg-[#F8F1F4]" : "bg-[#E4F8F0]")}>
                  <Image className="rounded-2xl w-full sm:w-[360px]" src={item.image} alt={item.title}/>
                </div>
                <H6 className="text-xl font-semibold font-sans mb-3">{item.title}</H6>
                <p className="text-center max-w-[600px] xl:max-w-auto xl:text-left font-medium max-xl:mb-8">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
