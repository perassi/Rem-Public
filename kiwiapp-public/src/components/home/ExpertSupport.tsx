"use client";

import { useState } from "react";
import Image from "next/image";
import HappyCouple from "public/assets/images/happy-couple.png";
import HappyCoupleMobile from "public/assets/images/happy-couple-mobile.png";
import ChevronUp from "public/assets/icons/chevron-black-up.svg";
import ChevronDown from "public/assets/icons/chevron-black-down.svg";
import { cn } from '@/utils/commonUtils';
import { Button } from "@/components/common/Button";
import { H2 } from "@/components/common/Headers";
import { Container } from "@/components/common/Container";

interface DropdownItem {
  title: string;
  content: string;
}

interface DropdownItemProps {
  item: DropdownItem;
}

const dropdownItems = [
  { title: "Am I Medicare-Eligible?", content: "Whether you're becoming Medicare eligible soon, or already are, we’re here." },
  { title: "When To Enroll", content: "Whether you're becoming Medicare eligible soon, or already are, we’re here." },
  { title: "Medicare Basics", content: "Whether you're becoming Medicare eligible soon, or already are, we’re here." },
  { title: "Medicare Plan Options", content: "Whether you're becoming Medicare eligible soon, or already are, we’re here." },
  { title: "Lower My Medicare Costs", content: "Whether you're becoming Medicare eligible soon, or already are, we’re here." }
]

const DropdownItem = ({item}: DropdownItemProps) => {
  const [open, setOpen] = useState(false);
  return (
    <div key={item.title} onClick={() => setOpen(!open)} className="sm:w-80 mt-8 cursor-pointer hover:opacity-70 transition-opacity">
      <div className="flex items-center justify-between mb-3">
        <p className="text-xl leading-[1.25] font-medium">{item.title}</p>
        {open ? <Image src={ChevronUp} alt="ChevronUp"/> : <Image src={ChevronDown} alt="ChevronDown"/>}
      </div>
      <p className={cn("text-gray-500 transition-opacity", open ? "visible opacity-100 h-auto" : "collapse opacity-0 h-0")}>{item.content}</p>
    </div>
  )
}

export function ExpertSupport() {
  return (
    <section className="pb-14 sm:pb-32 bg-white">
      <Container>
        <div className="flex flex-wrap justify-between items-center rounded-3xl relative">
          <div className="w-full md:w-[40%]  flex justify-center">
            <Image src={HappyCouple} alt="PersonOnPc" className="w-full max-w-[520px] rounded-2xl mb-8 md:mb-0 hidden sm:block"/>
            <Image src={HappyCoupleMobile} alt="PersonOnPc" className="w-full md:h-[640px] rounded-2xl mb-8 md:mb-0 block sm:hidden"/>
          </div>
          <div className="w-full md:w-[56%]">
            <div className="sm:pb-3 flex flex-col sm:items-center md:items-start">
              <H2 className="text-3xl md:text-6xl sm:text-center md:text-left mb-3">Get Medicare Guidance<br className="md:block hidden"/> That’s Simple & Clear.</H2>
              <p className="font-medium mb-5 sm:mb-8">We’re Here To Make Medicare Easy And Work For You</p>
              <Button type="fill" className="text-base">
                Get Answers
              </Button>
            </div>
            <div className="flex min-[1400px]:flex-row flex-col items-center md:items-start gap-x-5">
              <div className="flex flex-col min-[1400px]:items-center gap-x-8">
                {dropdownItems.slice(0,3).map((item) => (
                  <DropdownItem key={item.title} item={item}/>
                ))}
              </div>
              <div className="flex flex-col min-[1400px]:items-center gap-x-8">
                {dropdownItems.slice(3,5).map((item: DropdownItem) => (
                  <DropdownItem key={item.title} item={item}/>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}