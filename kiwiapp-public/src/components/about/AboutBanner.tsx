import Image from "next/image";
import AboutHero from "public/assets/images/about-hero.jpg";
import { Button } from "@/components/common/Button";
import { H1, H2 } from "@/components/common/Headers";
import { Container } from "@/components/common/Container";

export function AboutBanner() {
  return (
    <section className="flex relative bg-white justify-center pt-16 lg:pb-32 pb-16">
      <Container>
        <div className="w-full flex flex-wrap items-center justify-between lg:gap-x-5 gap-y-16">
          <div className="lg:mb-0 w-full lg:w-[56%]">
            <H1 className="text-3xl md:text-16 mb-2 md:mb-5">About Us</H1>
            <p className="mb-8 lg:max-w-screen-md">
              At REM, We Believe Medicare Should Be Simple, Accessible, And Focused On Your Needs—Not Sales Quotas.
              That’s Why We’ve Built A Team Of Local, Trusted Agents Who Provide Personalized Support, Not Just For
              Enrollment, But For Navigating The Complexities Of Medicare. With REM, You Get More Than A Plan—You Get
              Guidance From Someone Who Understands Your Community And Puts Your Health And Well-Being First.
            </p>
            <div className="flex flex-wrap gap-5 pb-16">
              <Button type="fill" className="text-base leading-[1.25]">
                Find Plans On Your Own
              </Button>
              <Button type="outline" className="text-base leading-[1.25]">
                Get A Free Consultation Now
              </Button>
            </div>
            <div className="flex max-sm:flex-col gap-x-8">
              <div className="flex max-sm:pb-10 flex-col gap-5">
                <H2 className="text-6xl">30+</H2>
                <p className="text-xl leading-[1] font-medium">Years Of Experience</p>
              </div>
              <div className="flex max-sm:pb-8 flex-col gap-5">
                <H2 className="text-6xl">99%</H2>
                <p className="text-xl leading-[1] font-medium">Customer Satisfaction</p>
              </div>
              <div className="flex flex-col gap-5">
                <H2 className="text-6xl">4</H2>
                <p className="text-xl leading-[1] font-medium">Available In NY, CA, WA, FL</p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[40%] flex justify-center">
            <Image src={AboutHero} alt="AboutHero" className="rounded-2xl lg:mb-0 block" />
          </div>
        </div>
      </Container>
    </section>
  );
}
