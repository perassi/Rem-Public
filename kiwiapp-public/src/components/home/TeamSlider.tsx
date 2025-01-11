"use client";

import Slider from "react-slick";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/utils/commonUtils";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { teamSliderData } from "@/utils/sliderData";
import ChevronLeftIcon from "public/assets/icons/chevron-left.svg";
import ChevronRightIcon from "public/assets/icons/chevron-right.svg";
import LocationIcon from "public/assets/icons/location.svg";
import { H2, H6 } from "@/components/common/Headers";
import { Container } from "@/components/common/Container";

export const TeamSlider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [shouldCenter, setShouldCenter] = useState(false);

  useEffect(() => {
    if (window.screen.width < 640) {
      setShouldCenter(true);
    }
  }, [shouldCenter]);

  let sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: true,
    swipeToSlide: true,
    variableWidth: true,
    centerMode: shouldCenter,
    rows: 1,
    // @ts-expect-error react-slick
    beforeChange: (current, next) => setSlideIndex(next),
    arrows: false,
  };

  return (
    <section className="py-16 lg:py-32 flex flex-col bg-white">
      <Container className="w-screen max-sm:p-0">
        <div className="relative flex flex-col">
          <H2 className="text-3xl md:text-6xl mb-8 md:mb-12 w-full text-center">
            Meet Our Licensed
            <br className="block sm:hidden" /> Insurance Agents
          </H2>
          <div className="md:w-full max-h-96">
            <Slider
              ref={(slider) => {
                // @ts-expect-error react-slick's types don't like react refs
                sliderRef = slider;
              }}
              {...settings}
            >
              {teamSliderData.map((slide) => (
                <div key={slide.location} className="max-sm:mx-3 sm:mr-5 flex flex-row max-w-[94%]">
                  <div className="relative">
                    <Image
                      src={slide.image}
                      alt={slide.name}
                      className={"w-full bg-beige-400 rounded-lg object-cover"}
                    />
                    <div className="absolute bottom-5 w-max -translate-x-[50%] rounded-full left-[50%] bg-white z-10 flex gap-1 py-3 px-5">
                      <Image src={LocationIcon} alt="LocationIcon" />
                      <p className="font-medium">{slide.location}</p>
                    </div>
                  </div>
                  <div className="mt-8 sm:mt-4 flex flex-col w-full justify-center md:mt-8">
                    <H6 className="mb-3 font-semibold font-sans text-xl text-center">{slide.name}</H6>
                    <p className="mb-0 leading-[1.25] text-center">{slide.position}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="mt-8 sm:mt-12 items-center gap-5 flex">
              <button
                // @ts-expect-error react-slick
                onClick={() => sliderRef.slickGoTo(slideIndex - (shouldCenter ? 1 : 4))}
                className={cn(
                  `w-16 h-16 flex justify-center items-center rounded-full z-10 bg-remGreen-400 hover:bg-remGreen-500 transition-colors
                  cursor-pointer`
                )}
              >
                <Image src={ChevronLeftIcon} alt="ChevronLeftIcon" />
              </button>
              <button
                // @ts-expect-error react-slick
                onClick={() => sliderRef.slickGoTo(slideIndex + (shouldCenter ? 1 : 4))}
                className={cn(
                  `w-16 h-16 flex justify-center items-center rounded-full z-10 bg-remGreen-400 hover:bg-remGreen-500 transition-colors
                  cursor-pointer`
                )}
              >
                <Image src={ChevronRightIcon} alt="ChevronRightIcon" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
