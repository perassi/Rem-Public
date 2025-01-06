import Image from "next/image";
import AboutHero from "public/assets/images/about-hero.jpg";
import { Button } from "@/components/common/Button";
import { H1, H2 } from "@/components/common/Headers";

export function AboutBanner() {
  return (
    <section className="flex relative bg-white justify-center pt-[60px] lg:pb-[120px] pb-[60px]">
      <div className="container">
        <div className="w-full flex flex-wrap items-center justify-between lg:gap-x-[20px] gap-y-[60px]">
          <div className="lg:mb-0 w-full lg:w-[56%]">
            <H1 className="text-[30px] md:text-[60px] mb-[10px] md:mb-[20px]">About Us</H1>
            <p className="mb-[30px] lg:max-w-[720px]">At REM, We Believe Medicare Should Be Simple, Accessible, And Focused On Your Needs—Not Sales Quotas. That’s Why We’ve Built A Team Of Local, Trusted Agents Who Provide Personalized Support, Not Just For Enrollment, But For Navigating The Complexities Of Medicare. With REM, You Get More Than A Plan—You Get Guidance From Someone Who Understands Your Community And Puts Your Health And Well-Being First.</p>
            <div className="flex flex-wrap gap-[20px] pb-[60px]">
              <Button type="fill-invert" className="text-[16px] leading-[1.25]">Find Plans On Your Own</Button>
              <Button type="outline" className="text-[16px] leading-[1.25]">Get A Free Consultation Now</Button>
            </div>
            <div className="flex max-sm:flex-col gap-x-[30px]">
              <div className="flex max-sm:pb-[40px] flex-col gap-[20px]">
                <H2 className="text-[60px]">30+</H2>
                <p className="text-[20px] leading-[1] font-medium">Years Of Experience</p>
              </div>
              <div className="flex max-sm:pb-[30px] flex-col gap-[20px]">
                <H2 className="text-[60px]">99%</H2>
                <p className="text-[20px] leading-[1] font-medium">Customer Satisfaction</p>
              </div>
              <div className="flex flex-col gap-[20px]">
                <H2 className="text-[60px]">4</H2>
                <p className="text-[20px] leading-[1] font-medium">Available In NY, CA, WA, FL</p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[40%] flex justify-center">
            <Image src={AboutHero} alt="AboutHero" className="rounded-[20px] lg:mb-0 block"/>
          </div>
        </div>
      </div>
    </section>
  );
}
