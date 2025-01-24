"use client";

import Slider from "react-slick";
import { useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ChevronLeftIcon from "public/assets/icons/chevron-left-white.svg";
import ChevronRightIcon from "public/assets/icons/chevron-right.svg";
import { Container } from "@/components/common/Container";
import Image from "next/image";
import Person1 from "public/assets/images/persons/person-1.png";
import { useMediaQuery } from "react-responsive";

export const TeamSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<Slider | null>(null);
  const isMobile = useMediaQuery({ query: "(max-width: 1340px)" });
  const settings = {
    centerMode: true,
    centerPadding: isMobile ? "0px" : "200px",
    slidesToShow: 1,
    infinite: true,
    speed: 500,
    arrows: false,
    // @ts-expect-error react-slick
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };

  const testimonials = [
    {
      text: "Managing commissions across a large network of agents and agencies used to be a constant headache. It felt like we were always chasing down missed payments, reconciling chargebacks, and trying to make sense of complex statements. REM’s solution changed all of that. Now, everything is automated and accurate, saving us so much time and stress. The real-time insights into payments and agent performance have made it easier to run the business and focus on growth.It’s been a game-changer for us.",
      name: "Nemesio Ortiz",
      position: "Gamma Care FMO",
      avatar: "https://via.placeholder.com/150",
    },
    {
      text: "Managing commissions across a large network of agents and agencies used to be a constant headache. It felt like we were always chasing down missed payments, reconciling chargebacks, and trying to make sense of complex statements. REM’s solution changed all of that. Now, everything is automated and accurate, saving us so much time and stress. The real-time insights into payments and agent performance have made it easier to run the business and focus on growth.It’s been a game-changer for us.",
      name: "Jane Doe",
      position: "Prime Care",
      avatar: "https://via.placeholder.com/150",
    },
    {
      text: "Managing commissions across a large network of agents and agencies used to be a constant headache. It felt like we were always chasing down missed payments, reconciling chargebacks, and trying to make sense of complex statements. REM’s solution changed all of that. Now, everything is automated and accurate, saving us so much time and stress. The real-time insights into payments and agent performance have made it easier to run the business and focus on growth.It’s been a game-changer for us.",
      name: "John Smith",
      position: "Care Agency",
      avatar: "https://via.placeholder.com/150",
    },
  ];

  return (
    <section className='py-16  lg:py-32 flex flex-col bg-white '>
      <Container className='w-screen max-sm:p-0'>
        <div className='relative flex flex-col '>
          <div className='slider-wrapper relative  '>
            <div className='absolute inset-0 pointer-events-none hidden  2xl:block'>
              <div className='blur-overlay blur-overlay-left'></div>
              <div className='blur-overlay blur-overlay-right'></div>
            </div>

            <Slider ref={sliderRef} {...settings}>
              {testimonials.map((testimonial, index) => {
                const isActiveSlide = index === currentSlide;
                const isAdjacentSlide =
                  index === (currentSlide + 1) % testimonials.length ||
                  index ===
                    (currentSlide - 1 + testimonials.length) %
                      testimonials.length;

                return (
                  <div key={index} className='px-4'>
                    <div
                      className={`relative  border border-beige/20 ${
                        isActiveSlide ? "bg-beige-500" : "bg-beige-100 border"
                      } rounded-xl transition-colors duration-500`}>
                      {isAdjacentSlide && (
                        <div className='absolute rounded-xl'></div>
                      )}
                      <div className=' p-20 flex items-center justify-center w-full  2xl:w-[860px]  relative z-10'>
                        <p className='text-black text-center'>
                          {testimonial.text}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>

          <div className=' absolute mb-10  flex flex-col bottom-9 items-center left-[calc(50%-100px)] w-[200px] '>
            <div className='flex justify-center'>
              <Image
                src={Person1}
                alt='Logo'
                width={58}
                height={28}
                className='w-[80px] h-[80px]'
              />
            </div>
            <div className='flex flex-col items-center'>
              <h3 className='text-lg font-semibold mt-2 text-black'>
                {testimonials[currentSlide].name}
              </h3>
              <p className='text-sm text-black-200'>
                {testimonials[currentSlide].position}
              </p>
            </div>
          </div>

          <div className='flex justify-center gap-4 mt-32'>
            <button
              onClick={() => sliderRef.current?.slickPrev()}
              className='bg-evergreen-800  flex justify-center items-center w-[50px] h-[50px] rounded-full '>
              <Image src={ChevronLeftIcon} alt='ChevronLeftIcon' />
            </button>
            <button
              onClick={() => sliderRef.current?.slickNext()}
              className='bg-remGreen-400 text-black  flex justify-center items-center w-[50px] h-[50px] rounded-full '>
              <Image src={ChevronRightIcon} alt='ChevronRightIcon' />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};
