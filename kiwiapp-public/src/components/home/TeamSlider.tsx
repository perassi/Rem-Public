"use client"

import Slider from 'react-slick';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/utils/commonUtils';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { teamSliderData } from '@/utils/sliderData';
import ChevronLeftIcon from "public/assets/icons/chevron-left.svg";
import ChevronRightIcon from "public/assets/icons/chevron-right.svg";
import LocationIcon from "public/assets/icons/location.svg";
import { H2, H6 } from '@/components/common/Headers';
import { Container } from "@/components/common/Container";

export const TeamSlider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [shouldCenter, setShouldCenter] = useState(false);

  useEffect(() => {
    if (window.screen.width < 640) {
      setShouldCenter(true);
    } 
  }, [shouldCenter])

  let sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: shouldCenter,
    swipeToSlide: true,
    variableWidth: true,
    centerMode: shouldCenter,
    rows: 1,
    // @ts-expect-error react-slick
    beforeChange: (current, next) => setSlideIndex(next),
    arrows: false
  };

  return (
    <section className="py-[60px] lg:py-[120px] flex flex-col bg-white">
      <Container className="max-sm:w-screen max-sm:p-0">
        <div className="relative flex flex-col">
          <H2 className="text-[30px] md:text-[60px] mb-[30px] md:mb-[50px] w-full text-center">Meet Our Licensed<br className='block sm:hidden'/> Insurance Agents</H2>
          <div className="md:w-full max-h-[390px]">
            <Slider
              ref={(slider) => {
                // @ts-expect-error react-slick's types don't like react refs
                sliderRef = slider;
              }}
              {...settings}
            >
              {teamSliderData.map((slide) => (
                <div key={slide.location} className="max-sm:mx-[10px] sm:mr-[20px] flex flex-row max-w-[310px]">
                  <div className="relative">
                    <Image src={slide.image} alt={slide.name} className={'w-full bg-beige-400 rounded-lg object-cover h-[310px]'} />
                    <div className="absolute bottom-[20px] w-max -translate-x-[50%] rounded-full left-[50%] bg-white z-10 flex gap-[5px] py-[10px] px-[20px]">
                      <Image src={LocationIcon} alt="LocationIcon"/>
                      <p className="font-medium">{slide.location}</p>
                    </div>
                  </div>
                  <div className="mt-[30px] sm:mt-[18px] flex flex-col w-full justify-center md:mt-[30px]">
                    <H6 className="mb-[10px] font-semibold font-sans text-[20px] text-center">{slide.name}</H6>
                    <p className="mb-0 leading-[20px] text-center">{slide.position}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="mt-[30px] sm:mt-[50px] items-center gap-[20px] flex">
              {/* @ts-expect-error react-slick */}
              <button disabled={!shouldCenter && slideIndex === 0} onClick={() => sliderRef.slickGoTo(slideIndex - 1)} className={cn("w-[60px] h-[60px] flex justify-center items-center rounded-full z-10", !shouldCenter && slideIndex === 0 ? "bg-beige-400 cursor-default" : "bg-remGreen-400 hover:bg-remGreen-500 transition-colors cursor-pointer")}>
                <Image src={ChevronLeftIcon} alt='ChevronLeftIcon'/>
              </button>
              {/* @ts-expect-error react-slick */}
              <button disabled={!shouldCenter && slideIndex === 5} onClick={() => sliderRef.slickGoTo(slideIndex + 1)} className={cn("w-[60px] h-[60px] flex justify-center items-center rounded-full z-10", !shouldCenter && slideIndex === 5 ? "bg-beige-400 cursor-default" : "bg-remGreen-400 hover:bg-remGreen-500 transition-colors cursor-pointer")}>
                <Image src={ChevronRightIcon} alt='ChevronRightIcon'/>
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
