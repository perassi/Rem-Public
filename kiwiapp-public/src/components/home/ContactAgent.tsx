import Image from "next/image";
import DashedCircles from "public/assets/images/dashed-circles.png";
import PhoneBlackIcon from "public/assets/icons/phone-black.svg";
import { Button } from "@/components/common/Button";
import { H3 } from "@/components/common/Headers";
import { Container } from "@/components/common/Container";

export function ContactAgent() {
  return (
    <section className="bg-beige-400 relative py-16 sm:py-24">
      <Image src={DashedCircles} alt="DashedCircles" className="absolute bottom-0 right-0"/>
      <Container className="flex flex-col items-center justify-between">
        <H3 className="text-center max-md:text-3xl mb-3 z-10">Have A Question?<br className="block sm:hidden"/> Talk To A Medicare<br className="block sm:hidden"/> Expert Now</H3>
        <p className="text-xl mb-8 font-medium text-center z-10 max-w-[1000px]">Get Expert Help With Your Medicare Questions—Completely Free. Whether You’re Exploring Plans Or Ready
        To Enroll, We’re Here To Guide You Every Step Of The Way. Hablamos Español.</p>
        <a href="tel:+16232238884">
          <Button type="fill" className="mb-8 py-5 z-10">
            <Image src={PhoneBlackIcon} alt="PhoneBlackIcon"/>
            <span>&nbsp;(623) 223-8884</span>
          </Button>
        </a>
        <p className="text-xl text-center font-medium z-10">Mon - Fri 9am-5pm</p>
      </Container>
    </section>
  );
}