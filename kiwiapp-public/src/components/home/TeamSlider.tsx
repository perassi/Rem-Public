"use client";

import Slider from "react-slick";
import { useEffect, useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ChevronLeftIcon from "public/assets/icons/chevron-left-white.svg";
import ChevronRightIcon from "public/assets/icons/chevron-right.svg";
import { Container } from "@/components/common/Container";
import Image from "next/image";
import Person1 from "public/assets/images/persons/person-1.png";
import { useMediaQuery } from "react-responsive";
import AnimatedSection from "@/utils/animationUtils";

export const TeamSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<Slider | null>(null);
  const isMobile = useMediaQuery({ query: "(max-width: 1340px)" });
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
      text: "Managing commissions across a large network of agents and agencies used to be a constant headache. It felt like we were always chasing down missed payments, reconciling chargebacks, and trying to make sense of complex statements. REM’s solution changed all of that. Now, everything is automated and accurate, saving us so much time and stress. The real-time insights into payments and agent performance have made it easier to run the business and focus on growth. It’s been a game-changer for us.",
      name: "Nemesio Ortiz",
      position: "Gamma Care FMO",
      avatar: "https://via.placeholder.com/150",
    },
    {
      text: "Managing commissions across a large network of agents and agencies used to be a constant headache. It felt like we were always chasing down missed payments, reconciling chargebacks, and trying to make sense of complex statements. REM’s solution changed all of that. Now, everything is automated and accurate, saving us so much time and stress. The real-time insights into payments and agent performance have made it easier to run the business and focus on growth. It’s been a game-changer for us.",
      name: "Jane Doe",
      position: "Prime Care",
      avatar: "https://via.placeholder.com/150",
    },
    {
      text: "Managing commissions across a large network of agents and agencies used to be a constant headache. It felt like we were always chasing down missed payments, reconciling chargebacks, and trying to make sense of complex statements. REM’s solution changed all of that. Now, everything is automated and accurate, saving us so much time and stress. The real-time insights into payments and agent performance have made it easier to run the business and focus on growth. It’s been a game-changer for us.",
      name: "John Smith",
      position: "Care Agency",
      avatar: "https://via.placeholder.com/150",
    },
  ];

  return (
    <section className='py-16 lg:py-32 flex -mt-14 lg:-mt-14 flex-col bg-white'>
      <Container className='w-screen max-sm:p-0'>
        <AnimatedSection initialY={100} duration={1}>
          <div className='relative flex flex-col '>
            <div className=' overflow-hidden relative'>
              <div className='absolute inset-0 pointer-events-none hidden 2xl:block'>
                <div className='absolute top-0 bottom-0 w-[190px] z-10 pointer-events-none -left-[10px] bg-gradient-to-r from-[rgba(255,255,255,1)] via-[rgba(255,255,255,0.8)] to-[rgba(255,255,255,0)] blur-[5px]'></div>
                <div className='absolute top-0 bottom-0 w-[190px] z-10 pointer-events-none -right-[10px] bg-gradient-to-l from-[rgba(255,255,255,1)] via-[rgba(255,255,255,0.8)] to-[rgba(255,255,255,0)] blur-[5px]'></div>
              </div>

              <Slider ref={sliderRef} {...setting}>
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
                        className={`relative border border-beige/20 ${
                          isActiveSlide ? "bg-beige-500" : "bg-beige-100 border"
                        } rounded-xl transition-colors duration-500`}>
                        {isAdjacentSlide && (
                          <div className='absolute rounded-xl'></div>
                        )}
                        <div className='px-10 py-[18%] md:p-20 flex items-center justify-center w-full 2xl:w-[860px] relative z-10'>
                          <p className='text-black text-center font-sans font-[490] text-[18px] leading-[1.6]'>
                            {testimonial.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>

            <div className='absolute mb-9 flex flex-col bottom-9 items-center left-[calc(50%-100px)] w-[200px] '>
              <div className='flex justify-center'>
                <Image
                  src={Person1}
                  alt='Logo'
                  width={58}
                  height={28}
                  className='w-[80px] h-[80px]'
                />
              </div>
              <div className='flex flex-col items-center pb-2'>
                <h3 className='text-[20px] font-semibold mt-4 text-black'>
                  {testimonials[currentSlide].name}
                </h3>
                <p className='text-[16px] leading-[1.25] text-black-200'>
                  {testimonials[currentSlide].position}
                </p>
              </div>
            </div>

            <div className='flex justify-center gap-5 mt-[32%] md:mt-32'>
              <button
                onClick={() => sliderRef.current?.slickPrev()}
                className='bg-evergreen-800 flex justify-center items-center w-[50px] h-[50px] rounded-full'>
                <Image src={ChevronLeftIcon} alt='ChevronLeftIcon' />
              </button>
              <button
                onClick={() => sliderRef.current?.slickNext()}
                className='bg-rem-green-400 text-black flex justify-center items-center w-[50px] h-[50px] rounded-full'>
                <Image src={ChevronRightIcon} alt='ChevronRightIcon' />
              </button>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
};
