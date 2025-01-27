"use client";
import Image from "next/image";
import OverviewPreview from "public/assets/images/overview-preview.png";
import { useEffect, useState } from "react";

function useWindowWidth(): number | null {
  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return width;
}

export function HomeBanner() {
  const width = useWindowWidth();

  if (width === null) {
    return <div>Loading...</div>;
  }

  return (
    <section
      className={`flex relative justify-center h-[330px] sm:h-[490px] md:h-[590px] lg:h-[840px]`}>
      <div
        className={`absolute -bottom-[20%] z-40  h-auto ${
          width <= 430
            ? "w-[calc(100%-60px)]"
            : width < 490
            ? "w-[calc(100%-90px)]"
            : width < 700
            ? "w-[calc(100%-90px)]"
            : width < 1024
            ? "w-[calc(100%-110px)]"
            : width > 1440
            ? "w-[1220px]"
            : "w-[calc(100%-220px)]"
        }`}>
        <div className='absolute -inset-3 sm:-inset-4 md:-inset-8 lg:-inset-10 rounded-[15px] lg:rounded-[30px] backdrop-blur-sm bg-beige-400/20 border-[1px] border-white/20' />

        <Image
          src={OverviewPreview}
          alt='OverviewPreview'
          className={`relative z-10 w-full  h-auto `}
        />
      </div>
    </section>
  );
}
