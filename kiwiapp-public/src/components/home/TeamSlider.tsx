"use client";

import Slider from "react-slick";
// import Image from "next/image";
import {  useRef, useState } from "react";
// import { cn } from "@/utils/commonUtils";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import { teamSliderData } from "@/utils/sliderData";
// import ChevronLeftIcon from "public/assets/icons/chevron-left.svg";
// import ChevronRightIcon from "public/assets/icons/chevron-right.svg";
// import LocationIcon from "public/assets/icons/location.svg";
// import { H2, H6 } from "@/components/common/Headers";
import { Container } from "@/components/common/Container";

export const TeamSlider = () => {

  //   {
  //     text: "Managing commissions across a large network of agents and agencies used to be a constant headache. It felt like we were always chasing down missed payments, reconciling chargebacks, and trying to make sense of complex statements. REM’s solution changed all of that. Now, everything is automated and accurate, saving us so much time and stress. The real-time insights into payments and agent performance have made it easier to run the business and focus on growth",
  //     img: "asd",
  //     name: "Some Name",
  //   },
  //   {
  //     text: "Managing commissions across a large network of agents and agencies used to be a constant headache. It felt like we were always chasing down missed payments, reconciling chargebacks, and trying to make sense of complex statements. REM’s solution changed all of that. Now, everything is automated and accurate, saving us so much time and stress. The real-time insights into payments and agent performance have made it easier to run the business and focus on growth",
  //     img: "asd",
  //     name: "Some Name",
  //   },
  //   {
  //     text: "Managing commissions across a large network of agents and agencies used to be a constant headache. It felt like we were always chasing down missed payments, reconciling chargebacks, and trying to make sense of complex statements. REM’s solution changed all of that. Now, everything is automated and accurate, saving us so much time and stress. The real-time insights into payments and agent performance have made it easier to run the business and focus on growth",
  //     img: "asd",
  //     name: "Some Name",
  //   },
  //   {
  //     text: "Managing commissions across a large network of agents and agencies used to be a constant headache. It felt like we were always chasing down missed payments, reconciling chargebacks, and trying to make sense of complex statements. REM’s solution changed all of that. Now, everything is automated and accurate, saving us so much time and stress. The real-time insights into payments and agent performance have made it easier to run the business and focus on growth",
  //     img: "asd",
  //     name: "Some Name",
  //   },
  //   {
  //     text: "Managing commissions across a large network of agents and agencies used to be a constant headache. It felt like we were always chasing down missed payments, reconciling chargebacks, and trying to make sense of complex statements. REM’s solution changed all of that. Now, everything is automated and accurate, saving us so much time and stress. The real-time insights into payments and agent performance have made it easier to run the business and focus on growth",
  //     img: "asd",
  //     name: "Some Name",
  //   },
  // ];

  const [currentSlide, setCurrentSlide] = useState(0); // Храним индекс активного слайда
  const sliderRef = useRef(null); // Референс для управления слайдером

  const settings = {
    centerMode: true, // Включает центральное выравнивание
    centerPadding: "100px", // Отступы по бокам (регулируйте под дизайн)
    slidesToShow: 1, // Количество отображаемых слайдов
    infinite: true, // Бесконечный цикл
    speed: 500, // Скорость прокрутки
    arrows: true, // Показывает стрелки
        // @ts-expect-error react-slick
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex), // Отслеживаем смену слайда
  };
  
  const testimonials = [
    {
      text: "Managing commissions across a large network of agents and agencies used to be a constant headache. It felt like we were always chasing down missed payments, reconciling chargebacks, and trying to make sense of complex statements. REM’s solution changed all of that. Now, everything is automated and accurate, saving us so much time and stress. The real-time insights into payments and agent performance have made it easier to run the business and focus on growth.It’s been a game-changer for us.",
      name: "Nemesio Ortiz",
      position: "Gamma Care FMO",
      avatar: "https://via.placeholder.com/150", // Замените на реальный аватар
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
    <section className="py-16 mb-32 lg:py-32 flex flex-col bg-white">
      <Container className="w-screen max-sm:p-0">
        <div className="relative flex flex-col mb-[400px]">
          <div className=" ">
          <Slider ref={sliderRef} {...settings}>
      {testimonials.map((testimonial, index) => {
        // Определяем, активный ли это слайд или соседний
        const isActiveSlide = index === currentSlide;
        const isAdjacentSlide =
          index === (currentSlide + 1) % testimonials.length || // Следующий слайд
          index === (currentSlide - 1 + testimonials.length) % testimonials.length; // Предыдущий слайд

        return (
          <div  key={index} className="px-4 ">
            <div
           
            className={`relative px-4 border-2  border-black ${
              isActiveSlide
                ? "bg-beige-500 " // Активный слайд с синим фоном
                : "bg-beige-100 border " // Соседние слайды с зеленым фоном
            } rounded-xl transition-colors  duration-500`}
          >
            {isAdjacentSlide && (
              <div className="absolute inset-5 bg-green-500 blur-2xl rounded-xl"></div>
            )}

            {/* Содержимое слайда */}
            <div className="p-6 text-center w-[860px] h-[410px]  relative z-10">
              <p className="text-black text-center">{testimonial.text}</p>
              <div className="mt-4">
            
                <h3 className="text-lg font-semibold mt-2 text-white">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-200">{testimonial.position}</p>
              </div>
            </div>
          </div>
          </div>
        );
      })}
    </Slider>
          </div>
   {/* Кастомные кнопки */}
      <div className="flex justify-center gap-4 mt-4">
        <button
          onClick={() => sliderRef.current.slickPrev()} // Назад
          className="bg-gray-300 text-black px-4 py-2 rounded-md hover:bg-gray-400"
        >
          Previous
        </button>
        <button
          onClick={() => sliderRef.current.slickNext()} // Вперед
          className="bg-gray-300 text-black px-4 py-2 rounded-md hover:bg-gray-400"
        >
          Next
        </button>
      </div>
          {/* <div className="flex-1 flex justify-center mt-56">
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
          </div> */}
        </div>
      </Container>
    </section>
  );
};
