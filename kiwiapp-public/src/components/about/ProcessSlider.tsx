"use client"

import Slider from 'react-slick';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/utils/commonUtils';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { processSliderData } from '@/utils/sliderData';
import ChevronLeftIcon from "public/assets/icons/chevron-left.svg";
import ChevronRightIcon from "public/assets/icons/chevron-right.svg";
import { H2, H6 } from '@/components/common/Headers';

export const ProcessSlider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [smallScreen, setSmallScreen] = useState(false);
  const [mediumScreen, setMediumScreen] = useState(false);

  const resize = () => {
    if (window.screen.width < 850) {
      setSmallScreen(true);
    } else if (window.screen.width < 1340) {
      setMediumScreen(true);
    }
  }

  useEffect(() => {
    resize();
  }, [])

  let sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: smallScreen,
    swipeToSlide: true,
    slidesToShow: smallScreen ? 1 : mediumScreen ? 2 : 3,
    centerMode: smallScreen,
    rows: 1,
    // @ts-expect-error react-slick
    beforeChange: (current, next) => setSlideIndex(next),
    arrows: false
  };

  return (
    <section className="relative pb-[60px] lg:pb-[120px] flex flex-col bg-white">
      <div className="absolute w-full h-full pointer-events-none z-10 from-white bg-gradient-to-l to-0% min-[850px]:to-[50px] [1350px]:to-[100px] to-transparent" />
      <div className="absolute w-full h-full pointer-events-none z-10 from-white bg-gradient-to-r to-0% min-[850px]:to-[50px] [1350px]:to-[100px] to-transparent" />
      <div className="absolute border-t-2 p-1 rounded-[20px] border-dashed border-textDark w-full top-[280px] sm:top-[310px]"/>
      <div className="sm:container">
        <div className="relative flex flex-col">
          <H2 className="text-[30px] md:text-[60px] mb-[30px] md:mb-[20px] w-full text-center">Our Process</H2>
            <Slider
              ref={(slider) => {
                // @ts-expect-error react-slick's types don't like react refs
                sliderRef = slider;
              }}
              {...settings}
            >
              {processSliderData.map((slide, i) => (
                <div className={cn("w-full !flex justify-center transition-opacity duration-300", i !== slideIndex && "max-sm:!opacity-0", i !== slideIndex && i !== slideIndex + 1 && "max-xl:!opacity-0", i !== slideIndex && i !== slideIndex + 1 && i !== slideIndex + 2 && "xl:!opacity-0")} key={slide.description}>
                  <div className="relative flex flex-col pt-[30px] max-w-[340px] xl:max-w-[374px]">
                    <div className="absolute top-0 left-0 -translate-x-[50%] rounded-full flex items-center justify-center border-2 border-textDark text-[30px] leading-[1] font-bold w-[60px] h-[60px] box-border bg-remGreen-400">{i + 1}</div>
                    <div className="p-[20px] border-2 border-textDark border-dashed bg-beige-400 rounded-[20px] max-h-[400px] w-[310px] min-[400px]:w-[340px] sm:max-w-[380px] xl:w-[400px]">
                      <Image src={slide.image} alt={slide.description} className={'min-sm:w-auto bg-beige-400 rounded-[15px] object-cover w-[270px] min-[400px]:w-[300px] xl:w-full h-[320px] sm:h-[360px]'} />
                    </div>
                    <div className="mt-[30px] xl:ml-[6px] sm:mt-[18px] flex flex-col w-full justify-center md:mt-[30px]">
                      <H6 className="mb-[10px] font-semibold font-sans text-[20px] text-center">{slide.title}</H6>
                      <p className="mb-0 text-center">{slide.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          <div className="flex-1 flex justify-center">
            <div className="mt-[10px] sm:mt-[50px] items-center gap-[20px] flex">
              {/* @ts-expect-error react-slick */}
              <button disabled={!smallScreen && !mediumScreen && slideIndex === 0} onClick={() => sliderRef.slickGoTo(slideIndex - 1)} className={cn("w-[60px] h-[60px] flex justify-center items-center rounded-full z-10", !smallScreen && slideIndex === 0 ? "bg-beige-400 cursor-default" : "bg-remGreen-400 hover:bg-remGreen-500 transition-colors cursor-pointer")}>
                <Image src={ChevronLeftIcon} alt='ChevronLeftIcon'/>
              </button>
              {/* @ts-expect-error react-slick */}
              <button disabled={!smallScreen && !mediumScreen && slideIndex === 1} onClick={() => sliderRef.slickGoTo(slideIndex + 1)} className={cn("w-[60px] h-[60px] flex justify-center items-center rounded-full z-10", !smallScreen && !mediumScreen && slideIndex === 1 ? "bg-beige-400 cursor-default" : "bg-remGreen-400 hover:bg-remGreen-500 transition-colors cursor-pointer")}>
                <Image src={ChevronRightIcon} alt='ChevronRightIcon'/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
