"use client";
import React, { ReactNode } from "react";
import { useEffect, useRef } from "react";
import * as motion from "motion/react-client";

interface AnimatedSectionProps {
  children: ReactNode; // Тип для children (любой React-элемент)
  initialY?: number; // Необязательный пропс для начального смещения по оси Y
  duration?: number; // Необязательный пропс для длительности анимации
}

const AnimatedSection = ({
  children,
  initialY = 50,
  duration = 0.8,
}: AnimatedSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) return; // Добавляем проверку на null

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.style.opacity = "1";
          element.style.transform = "translateY(0)";
        }
      },
      { threshold: 0.2 }
    );

    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <motion.div
      ref={ref}
      style={{
        opacity: 0,
        transform: `translateY(${initialY}px)`,
        transition: `opacity ${duration}s ease, transform ${duration}s ease`,
      }}
      className='my-8 p-8 '>
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
