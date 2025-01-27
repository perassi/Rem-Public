"use client";

import Slider from "react-slick";
import { useEffect, useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ChevronLeftIcon from "public/assets/icons/chevron-left.svg";
import ChevronRightIcon from "public/assets/icons/chevron-right.svg";

import Image from "next/image";
import Logo from "public/assets/images/Logo.png";
import SliderBackground from "public/assets/images/features/features-slider/slider-background.png";
import SliderImage from "public/assets/images/features/features-slider/slider-image.png";
import GreenShade from "public/assets/images/green-shade.png";
import { useMediaQuery } from "react-responsive";

export const FeaturesSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<Slider | null>(null);
  const isMobile = useMediaQuery({ query: "(max-width: 1340px)" });
  console.log("[isMobile]", isMobile);
  const [setting, setSetting] = useState({
    centerMode: true,
    centerPadding: "200px",
    slidesToShow: 1,
    infinite: true,
    speed: 500,
    arrows: false,
    // @ts-expect-error react-slick
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  });
  useEffect(() => {
    if (isMobile) {
      setSetting({
        centerMode: true,
        centerPadding: "0px",
        slidesToShow: 1,
        infinite: true,
        speed: 500,
        arrows: false,
        beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
      });
    } else {
      setSetting({
        centerMode: true,
        centerPadding: "200px",
        slidesToShow: 1,
        infinite: true,
        speed: 500,
        arrows: false,
        beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
      });
    }
  }, [isMobile]);

  const testimonials = [
    {
      text: "Learn About The Features Disrupting Medicare & Health Insurance Servicing.",
      alt: "Nemesio Ortiz",
      background: SliderBackground,
      image: SliderImage,
    },
    {
      text: "Learn About the features disrupting Medicare & Health insurance servicing.",
      alt: "Jane Doe",
      background: SliderBackground,
      image: SliderImage,
    },
    {
      text: "Learn About the features disrupting Medicare & Health insurance servicing.",
      alt: "John Smith",
      background: SliderBackground,
      image: SliderImage,
    },
  ];

  return (
    <section className='w-full py-14 lg:py-32 flex flex-col'>
      <div className='relative flex flex-col'>
        <div className='relative'>
          <Slider ref={sliderRef} {...setting}>
            {testimonials.map((testimonial, index) => {
              const isActiveSlide = index === currentSlide;
              const isAdjacentSlide =
                index === (currentSlide + 1) % testimonials.length ||
                index ===
                  (currentSlide - 1 + testimonials.length) %
                    testimonials.length;

              return (
                <div key={index} className='px-5 rounded-[30px]'>
                  <div
                    className={`relative overflow-hidden rounded-[30px]  ${
                      isActiveSlide ? "bg-white" : "bg-white "
                    }  transition-colors duration-500`}>
                    {isAdjacentSlide && <div className='rounded-[30px]'></div>}
                    <Image
                      src={GreenShade}
                      alt='GreenShade'
                      className='absolute rounded-[30px] top-0 left-0 sm:block hidden pointer-events-none'
                    />
                    <div className='flex items-center justify-between relative z-10 overflow-hidden'>
                      <div className='p-5 xl:p-10 relative flex flex-col justify-between w-full min-h-[530px] lg:min-h-[544px] lg:max-h-[544px]'>
                        <Image
                          src={Logo}
                          alt='Logo'
                          className='w-[76px] h-[80px] mt-9'
                        />

                        <h2 className='text-black font-header md:block font-[300] leading-[1.25] text-[24px] mb-[34%] w-[320px] lg:text-[40px] xl:mb-0 text-left md:w-2/3 lg:w-[490px]'>
                          {testimonial.text}
                        </h2>
                      </div>

                      <div className='absolute -top-3 -right-20 md:-top-2 md:-right-10  '>
                        <Image
                          src={testimonial.background}
                          alt={testimonial.alt}
                          className='h-[290px] w-[340px] md:h-[400px] md:w-[450px] z-0 rounded-[30px]'
                        />
                      </div>

                      <div className='absolute -top-2 -right-14  '>
                        <Image
                          src={testimonial.image}
                          alt={testimonial.alt}
                          className='h-[285px] w-[295px] md:h-[400px] md:w-[420px] z-10 rounded-[30px]'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>

        <div className='absolute flex bottom-16 px-10 gap-6 xl:top-2 xl:justify-between w-full xl:px-44 xl:mt-44 '>
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className='bg-beige-400 flex justify-center items-center w-[50px] h-[50px] rounded-full '>
            <Image src={ChevronLeftIcon} alt='ChevronLeftIcon' />
          </button>
          <button
            onClick={() => sliderRef.current?.slickNext()}
            className='bg-rem-green-400 text-black flex justify-center items-center w-[50px] h-[50px] rounded-full '>
            <Image src={ChevronRightIcon} alt='ChevronRightIcon' />
          </button>
        </div>
      </div>
    </section>
  );
};
