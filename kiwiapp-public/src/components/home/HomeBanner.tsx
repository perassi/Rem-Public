import Image from "next/image";
import OverviewPreview from "public/assets/images/overview-preview.png";
import { Container } from "@/components/common/Container";

export function HomeBanner() {
  return (
    <section className="flex relative justify-center lg:pb-48 pb-36">
      <Container className="relative z-10">
        <div className="relative flex justify-center translate-y-[40%] ">
          <div className="">
            <div className="absolute -inset-10 rounded-[40px] backdrop-blur-sm bg-beige-400/20 border-[1px] border-white/20" />
            <Image src={OverviewPreview} alt="OverviewPreview" className="relative z-10" />
          </div>
        </div>
      </Container>
    </section>
  );
}
