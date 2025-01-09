"use client";

import { useState } from "react";
import Image from "next/image";
import GreenDotsRight from "public/assets/images/green-dots-2.png";
import PersonOnPc from "public/assets/images/person-on-pc.jpg";
import PersonOnPcMobile from "public/assets/images/person-on-pc-mobile.jpg";
import { H4 } from "@/components/common/Headers";
import { Container } from "@/components/common/Container";
import { cn } from "@/utils/commonUtils";

const testimonyPart1 = "“After my previous plan stopped offering Medicare Advantage, I felt completely overwhelmed trying";
const testimonyPart2 = "to find the right coverage. I wasn’t sure whether Medicare Supplement or Medicare Advantage was right for me. Amy was so patient, answering all my questions without any pressure. She helped me stop overpaying and find better coverage that included my preferred providers. She even helped me access benefits I didn’t know Medicare offered, like gym memberships! I couldn’t be happier with the support I received—even after I signed up.”"

export function CustomerSatisfaction() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="pb-24 bg-white flex justify-center">
      <Container>
        <div className="flex items-center justify-between flex-col">
          <div className="flex flex-col lg:flex-row bg-evergreen-800 max-sm:bg-green-dots-bottom-mobile bg-no-repeat bg-right-bottom rounded-3xl gap-x-12 relative justify-between p-5 lg:p-12">
            <Image src={GreenDotsRight} alt="GreenDotsRight" className="absolute bottom-0 right-0 pointer-events-none max-sm:hidden"/>
            <div className="w-full lg:w-[40%] flex justify-center">
              <Image src={PersonOnPc} alt="PersonOnPc" className="w-full max-w-[480px] rounded-2xl mb-8 lg:mb-0 hidden sm:block"/>
              <Image src={PersonOnPcMobile} alt="PersonOnPcMobile" className="w-full rounded-2xl mb-8 lg:mb-0 block sm:hidden"/>
            </div>
            <div className="w-full lg:w-[56%]">
              <div className="pb-10 lg:pb-8">
                <H4 className="text-xl lg:!leading-[1.75] font-sans hidden min-[640px]:block !leading-[1.5] mb-8 text-left text-white">{testimonyPart1 + testimonyPart2}</H4>
                <H4 className={cn("text-xl lg:!leading-[1.75] font-sans min-[640px]:hidden !leading-[1.5] mb-8 text-left text-white transition-opacity", expanded && "mb-0")}>{testimonyPart1}{!expanded && <span>...</span>} <span onClick={() => setExpanded(!expanded)} className={cn("underline block", expanded && "hidden")}>Read more</span></H4>
                <H4 className={cn("text-xl lg:!leading-[1.75] font-sans min-[640px]:hidden !leading-[1.5] mb-8 text-left text-white transition-opacity duration-500", !expanded && "h-0 mb-0 opacity-0 invisible")}>{testimonyPart2} <span onClick={() => setExpanded(!expanded)} className="underline block">Show less</span></H4>
                <p className="text-white font-semibold text-xl leading-[1] mb-3">Rebeca, King County, WA</p>
                <p className="text-white font-medium">King County, WA</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}