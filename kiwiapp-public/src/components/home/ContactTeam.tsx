import Image from "next/image";
import GreenDotsLeft from "public/assets/images/green-dots-1.png";
import GreenDotsRight from "public/assets/images/green-dots-2.png";
import PhoneBlackIcon from "public/assets/icons/phone-black.svg";
import { Button } from "@/components/common/Button";
import { H3 } from "@/components/common/Headers";
import { Container } from "@/components/common/Container";

export function ContactTeam() {
  return (
    <section
      className="max-sm:bg-green-dots-bg bg-cover bg-no-repeat bg-center bg-evergreen-800 items-center relative justify-between py-16
        sm:py-[100px]"
    >
      <Image
        src={GreenDotsLeft}
        alt="GreenDotsLeft"
        className="absolute max-sm:hidden top-0 left-0 pointer-events-none"
      />
      <Image
        src={GreenDotsRight}
        alt="GreenDotsRight"
        className="absolute max-sm:hidden bottom-0 right-0 pointer-events-none"
      />
      <Container className="flex flex-col items-center">
        <H3 className="text-white text-center text-3xl md:text-4xl mb-8">
          Our Local Team Of Licensed Insurance Agents
          <br className="hidden sm:block" /> Has 50+ Years Of Combined Experience.
          <br className="hidden sm:block" /> We’re Here To Help At No Cost To You.
          <br className="hidden sm:block" />
        </H3>
        <a href="tel:+16232238884">
          <Button type="fill" className="text-xl py-5 lg:py-8">
            <Image src={PhoneBlackIcon} alt="PhoneBlackIcon" />
            <span>&nbsp;(623) 223-8884</span>
          </Button>
        </a>
      </Container>
    </section>
  );
}
