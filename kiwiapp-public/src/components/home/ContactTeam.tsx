import Image from "next/image";
import GreenDotsLeft from "public/assets/images/green-dots-1.png";
import GreenDotsRight from "public/assets/images/green-dots-2.png";
import PhoneBlackIcon from "public/assets/icons/phone-black.svg";
import { Button } from "@/components/common/Button";
import { H3 } from "@/components/common/Headers";

export function ContactTeam() {
  return (
    <section className="max-sm:bg-green-dots-bg bg-cover bg-no-repeat bg-center bg-evergreen-800 items-center relative justify-between py-[60px] sm:py-[100px]">
      <Image src={GreenDotsLeft} alt="GreenDotsLeft" className="absolute max-sm:hidden top-0 left-0 pointer-events-none"/>
      <Image src={GreenDotsRight} alt="GreenDotsRight" className="absolute max-sm:hidden bottom-0 right-0 pointer-events-none"/>
      <div className="container flex flex-col items-center">
        <H3 className="text-white text-center text-[30px] md:text-[40px] mb-[30px]">Our Local Team Of Licensed Insurance Agents<br className="hidden sm:block"/> Has 50+ Years Of Combined Experience.<br className="hidden sm:block"/> We’re Here To Help At No Cost To You.<br className="hidden sm:block"/>
        </H3>
        <a href="tel:+16232238884">
          <Button type="fill" className="text-[20px] py-[20px] lg:py-[30px]">
            <Image src={PhoneBlackIcon} alt="PhoneBlackIcon"/>
            <span>&nbsp;(623) 223-8884</span>
          </Button>
        </a>
      </div>
    </section>
  );
}