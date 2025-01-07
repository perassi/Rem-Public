"use client"

import Link from 'next/link';
import Image from 'next/image';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { leadershipData } from '@/utils/sliderData';
import LinkedinIcon from "public/assets/icons/linkedin-dark.svg";
import { H2 } from '@/components/common/Headers';
import { Container } from "@/components/common/Container";

export const Leadership = () => {
  return (
    <section className="py-[60px] lg:py-[120px] flex flex-col bg-white">
      <Container>
        <div className="relative">
          <H2 className="text-[30px] md:text-[60px] mb-[30px] md:mb-[50px] w-full text-center">Leadership</H2>
          <div className="flex flex-wrap justify-center gap-x-[20px] gap-y-[30px] sm:gap-y-[50px]">
              {leadershipData.map((slide) => (
                <div key={slide.name} className="flex flex-col max-w-[420px]">
                  <div className="relative w-full min-[480px]:h-[420px] min-[480px]:w-[420px]">
                    <Image src={slide.image} alt={slide.name} className={'w-full h-full bg-beige-400 rounded-lg object-cover'} />
                    <Link href={slide.link} className="absolute bottom-[20px] left-[20px] hover:opacity-90 transition-opacity cursor-pointer w-max rounded-full bg-white z-10 flex items-center gap-[10px] py-[10px] pl-[10px] pr-[30px]">
                      <div className="flex items-center justify-center bg-remGreen-400 h-[40px] w-[40px] rounded-full">
                        <Image src={LinkedinIcon} alt="LocationIcon"/>
                      </div>
                      <p className="font-medium">Linkedin</p>
                    </Link>
                  </div>
                  <div className="mt-[30px] sm:mt-[18px] md:mt-[30px] text-center">
                    <p className="mb-[10px] font-semibold text-[20px] leading-[1]">{slide.name}</p>
                    <p className="mb-0 pb-[15px]">{slide.position}</p>
                    <p className="mb-0 text-[#7F8785]">{slide.description}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
