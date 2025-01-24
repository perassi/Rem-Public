import Image from "next/image";
import Logo from "public/assets/images/Logo.png";

import circles1 from "public/assets/images/advantages/circles1.png";
import circles2 from "public/assets/images/advantages/circles2.png";
import circles3 from "public/assets/images/advantages/circles3.png";
import circles4 from "public/assets/images/advantages/circles4.png";

import { Container } from "@/components/common/Container";
import { H2, H3 } from "../common/Headers";
import { Button } from "../common/Button";
import MaskGroup from "public/assets/images/dashed-circles-tr.png";

export function RemAdvantages() {
  return (
    <section className="flex bg-white justify-center pt-[400px] lg:pt-[300px] pb-14 lg:pb-32 relative">
      <Image
        src={MaskGroup}
        alt="MaskGroup"
        width={1000}
        height={500}
        className="absolute right-0 !w-[30%] !h-[500px] top-0"
      />

      <Container className="">
        <div className="flex items-center flex-col">
          <Image src={Logo} alt="Logo" />
          <H2 className="text-center mt-9 font-[300]">
            With REM, you won&apos;t miss Another Commission payment again.
          </H2>

          <span className="font-sans font-[400] mt-10 text-[16px] text-center">
            In Today&apos;s rapidly evolving insurance landscape, efficiency, accuracy, and customer satisfaction are
            paramount. Rem delivers Next-Generation <br /> Al-powered solutions that transform outdated processes,
            making your operations faster, more reliable, and customer-centric.
          </span>

          <div className="flex justify-center mt-10 gap-8">
            <Button type="fill" className="sm:px-8 px-5 py-[10px] sm:py-5 align-middle max-[400px]:text-sm text-base">
              Book A Demo
            </Button>
            <Button
              type="outline"
              className="sm:px-8 px-5 py-[10px] sm:py-5 align-middle max-[400px]:text-sm text-base"
            >
              Learn More
            </Button>
          </div>
        </div>
        <div className="w-full border-t border-b border-black flex justify-around py-[30px] mt-32">
          <div className="flex flex-col items-start gap-6 w-[200px]">
            <Image src={circles1} alt="circles1" width={70} height={60} className="w-[70px] h-[60px]" />
            <H3 className="font-[300] text-[40px]">10%</H3>
            <span className="font-sans font-medium">
              Reduction In <br /> Commission Errors.
            </span>
          </div>

          <div className="flex flex-col items-start gap-6 w-[200px]">
            <Image src={circles2} alt="circles2" width={70} height={60} className="w-[70px] h-[60px]" />
            <H3 className="font-[300] text-[40px]">95%</H3>
            <span className="font-sans font-medium">Reduction in Commission Reconciliation And Management</span>
          </div>

          <div className="flex flex-col items-start gap-6 w-[200px]">
            <Image src={circles3} alt="Logo" width={70} height={60} className="w-[80px] h-[60px]" />
            <H3 className="font-[300] text-[40px]">20%</H3>
            <span className="font-sans font-medium">Lower Cost Than Alternatives</span>
          </div>

          <div className="flex flex-col items-start gap-6 w-[200px]">
            <Image src={circles4} alt="Logo" width={70} height={60} className="w-[60px] h-[60px]" />
            <H3 className="font-[300] text-[40px]">+100K</H3>
            <span className="font-sans font-medium">Commission Records Processed To Date</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
