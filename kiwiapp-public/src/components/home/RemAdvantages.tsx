"use client";
import Image from "next/image";
import Logo from "public/assets/images/Logo.png";

import circles1 from "public/assets/images/advantages/circles1.png";
import circles2 from "public/assets/images/advantages/circles2.png";
import circles3 from "public/assets/images/advantages/circles3.png";
import circles4 from "public/assets/images/advantages/circles4.png";

import { Container } from "@/components/common/Container";
import { H1, H3 } from "../common/Headers";
import { Button } from "../common/Button";
import MaskGroup from "public/assets/images/dashed-circles-tr.png";

export function RemAdvantages() {
  const blocksData = [
    {
      imageSrc: circles1,
      imageAlt: "circles1",
      title: "10%",
      description: "Reduction In Commission Errors.",
    },
    {
      imageSrc: circles2,
      imageAlt: "circles2",
      title: "95%",
      description: "Reduction In Commission Reconciliation And Management",
    },
    {
      imageSrc: circles3,
      imageAlt: "circles3",
      title: "20%",
      description: "Lower Cost Than Alternatives",
    },
    {
      imageSrc: circles4,
      imageAlt: "circles4",
      title: "+100K",
      description: "Commission Records Processed To Date",
    },
  ];
  return (
    <section className='flex bg-white justify-center pt-[200px] lg:pt-[300px] pb-14 lg:pb-32 md:-mb-5 relative'>
      <Image
        src={MaskGroup}
        alt='MaskGroup'
        width={1000}
        height={500}
        className='absolute right-0 !w-[30%] !h-[500px] top-0 hidden lg:block'
      />

      <Container className='-mt-16 md:mt-0'>
        <div className='flex items-center flex-col'>
          <Image src={Logo} alt='Logo' className='w-[76px] h-[80px]' />
          <div className='flex flex-col gap-0 mt-9'>
            <H1 className='text-center font-header text-[30px] leading-tight font-[300] md:font-[300] md:text-[50px] md:leading-[1.2] lg:w-[100%] md:mt-0'>
              With REM, You Won&apos;t Miss Another Commission Payment Again.
            </H1>
          </div>

          <span className='mt-6 md:mt-10 font-sans font-[470] text-[16px] leading-[1.8] text-center'>
            In today&apos;s rapidly evolving insurance landscape, efficiency,
            accuracy, and customer satisfaction are paramount. Rem delivers
            Next-Generation Al-
            <br />
            powered solutions that transform outdated processes, making your
            operations faster, more reliable, and customer-centric.
          </span>

          <div className='flex flex-wrap justify-center mt-9 gap-5'>
            <Button
              type='fill'
              className='w-[180px] h-[50px] align-middle text-base font-[450]'>
              Book A Demo
            </Button>
            <Button
              type='outline'
              className='w-[164px] p-1 h-[50px] align-middle text-base font-[450]'>
              Learn More
            </Button>
          </div>
        </div>

        <div className='w-full mt-14 md:mt-32 md:py-[10px] pb-16 md:pb-10 border-t border-b border-black flex flex-col items-center justify-center md:flex-row md:flex-wrap lg:flex-nowrap sm:justify-center lg:justify-end lg:gap-20'>
          {blocksData.map((block, index) => (
            <div
              key={index}
              className='w-full  md:h-[245px]  flex flex-col items-center text-center mt-8  gap-2 md:mt-0  md:items-center lg:items-start  md:w-[calc(50%-100px)] lg:w-[20%] md:text-center lg:text-left'>
              <Image
                src={block.imageSrc}
                alt={block.imageAlt}
                width={70}
                height={80}
                className='w-[108px] h-[100px]  md:-ml-5'
              />
              <H3 className='font-[300] text-[40px]'>{block.title}</H3>
              <span className='font-sans font-[450] text-[20px] leading-[1.25] mt-3'>
                {block.description}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
