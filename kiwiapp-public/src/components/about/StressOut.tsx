import Image from "next/image";
import GreenDotsLeft from "public/assets/images/green-dots-1.png";
import GreenDotsRight from "public/assets/images/green-dots-2.png";
import { Button } from "@/components/common/Button";
import { H2 } from "@/components/common/Headers";
import { Container } from "@/components/common/Container";

export function StressOut() {
  return (
    <section className="max-sm:bg-green-dots-bg bg-cover bg-no-repeat bg-center bg-evergreen-800 items-center relative justify-between py-[60px] sm:py-[120px]">
      <Image src={GreenDotsLeft} alt="GreenDotsLeft" className="absolute max-sm:hidden top-0 left-0 pointer-events-none"/>
      <Image src={GreenDotsRight} alt="GreenDotsRight" className="absolute max-sm:hidden bottom-0 right-0 pointer-events-none"/>
      <Container className="flex flex-col items-center">
        <H2 className="text-white text-center text-[30px] md:text-[60px] mb-[10px]">Take The Stress Out Of Medicare.</H2>
        <p className="pb-[20px] sm:pb-[30px] font-medium text-white max-lg:text-center">We Ensure Every Step Is Easy, From Finding The Right Plan To Getting The Most Out Of Your Benefits.</p>
        <div className="flex flex-wrap justify-center gap-[20px]">
          <Button type="fill-invert" className="hover:text-white lg:py-[30px]">Find Plans On Your Own</Button>
          <Button type="outline" className="hover:text-evergreen-800 text-white lg:py-[30px]">Get A Free Consultation Now</Button>
        </div>
      </Container>
    </section>
  );
}