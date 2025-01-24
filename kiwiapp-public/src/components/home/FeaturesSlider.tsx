"use client";

import Slider from "react-slick";
import { useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ChevronLeftIcon from "public/assets/icons/chevron-left.svg";
import ChevronRightIcon from "public/assets/icons/chevron-right.svg";

import Image from "next/image";
import { H2 } from "../common/Headers";
import Logo from "public/assets/images/Logo.png";
import SliderBackground from "public/assets/images/features/features-slider/slider-background.png";
import SliderImage from "public/assets/images/features/features-slider/slider-image.png";
import GreenShade from "public/assets/images/green-shade.png";

export const FeaturesSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    centerMode: true,
    centerPadding: "200px",
    slidesToShow: 1,
    infinite: true,
    speed: 500,
    arrows: false,
    // @ts-expect-error react-slick
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };

  const testimonials = [
    {
      text: "Learn about the features disrupting Medicare & Health insurance servicing.",
      alt: "Nemesio Ortiz",
      background: SliderBackground,
      image: SliderImage,
    },
    {
      text: "Learn about the features disrupting Medicare & Health insurance servicing.",
      alt: "Jane Doe",
      background: SliderBackground,
      image: SliderImage,
    },
    {
      text: "Learn about the features disrupting Medicare & Health insurance servicing.",
      alt: "John Smith",
      background: SliderBackground,
      image: SliderImage,
    },
  ];

  return (
    <section className='py-16    lg:py-32 flex flex-col  '>
      <div className='relative flex flex-col '>
        <div className=' relative  '>
          <Slider ref={sliderRef} {...settings}>
            {testimonials.map((testimonial, index) => {
              const isActiveSlide = index === currentSlide;
              const isAdjacentSlide =
                index === (currentSlide + 1) % testimonials.length ||
                index ===
                  (currentSlide - 1 + testimonials.length) %
                    testimonials.length;

              return (
                <div key={index} className='px-2  rounded-[30px]'>
                  <div
                    className={`relative rounded-[30px]  ${
                      isActiveSlide ? "bg-white" : "bg-white "
                    }  transition-colors duration-500`}>
                    {isAdjacentSlide && <div className='rounded-[30px]'></div>}
                    <Image
                      src={GreenShade}
                      alt='GreenShade'
                      className='absolute rounded-[30px]  top-0 left-0 sm:block hidden pointer-events-none'
                    />
                    <div className='  flex items-center justify-between relative h-[544px] z-10'>
                      <div className=' p-10 relative flex flex-col  justify-between w-full min-h-[544px] max-h-[544px] '>
                        <Image
                          src={Logo}
                          alt='Logo'
                          className='  w-[76px] h-[80px]'
                        />

                        <H2 className='text-black font-[300] text-5xl  text-left w-1/3 '>
                          {testimonial.text}
                        </H2>
                      </div>

                      <div className=' absolute top-0 right-0 '>
                        <Image
                          src={testimonial.background}
                          alt={testimonial.alt}
                          className=' h-[400px] w-[450px] z-0 rounded-[30px]'
                        />
                      </div>
                      <div className=' absolute top-0 right-0 '>
                        <Image
                          src={testimonial.image}
                          alt={testimonial.alt}
                          className=' h-[400px] w-[420px] z-10 rounded-[30px]'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>

        <div className=' absolute flex justify-between  w-full px-44 mt-44'>
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className='bg-beige-400 flex justify-center items-center w-[50px] h-[50px] rounded-full '>
            <Image src={ChevronLeftIcon} alt='ChevronLeftIcon' />
          </button>
          <button
            onClick={() => sliderRef.current?.slickNext()}
            className='bg-remGreen-400 text-black  flex justify-center items-center w-[50px] h-[50px] rounded-full '>
            <Image src={ChevronRightIcon} alt='ChevronRightIcon' />
          </button>
        </div>
      </div>
    </section>
  );
};
