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
    <section className="py-16 lg:py-32 flex flex-col bg-white">
      <Container>
        <div className="relative">
          <H2 className="text-3xl md:text-6xl mb-8 md:mb-12 w-full text-center">Leadership</H2>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-8 sm:gap-y-12">
              {leadershipData.map((slide) => (
                <div key={slide.name} className="flex flex-col max-w-[420px]">
                  <div className="relative w-full min-[480px]:h-[420px] min-[480px]:w-[420px]">
                    <Image src={slide.image} alt={slide.name} className={'w-full h-full bg-beige-400 rounded-lg object-cover'} />
                    <Link href={slide.link} className="absolute bottom-5 left-5 hover:opacity-90 transition-opacity cursor-pointer w-max rounded-full bg-white z-10 flex items-center gap-3 py-3 pl-3 pr-8">
                      <div className="flex items-center justify-center bg-remGreen-400 h-10 w-10 rounded-full">
                        <Image src={LinkedinIcon} alt="LocationIcon"/>
                      </div>
                      <p className="font-medium">Linkedin</p>
                    </Link>
                  </div>
                  <div className="mt-8 sm:mt-4 md:mt-8 text-center">
                    <p className="mb-3 font-semibold text-xl leading-[1]">{slide.name}</p>
                    <p className="mb-0 pb-4">{slide.position}</p>
                    <p className="mb-0 text-gray-500">{slide.description}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
