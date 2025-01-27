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
  return (
    <section className='flex bg-white justify-center pt-[200px] lg:pt-[300px] pb-14 lg:pb-32 relative'>
      <Image
        src={MaskGroup}
        alt='MaskGroup'
        width={1000}
        height={500}
        className='absolute  right-0 !w-[30%] !h-[500px] top-0 hidden lg:block'
      />

      <Container className='-mt-14 md:mt-0'>
        <div className='flex items-center flex-col '>
          <Image src={Logo} alt='Logo' className='w-[76px] h-[80px] ' />
          <div className=' flex flex-col gap-0 mt-9'>
            <H1 className='text-center  text-3xl/loose  font-[300] md:font-[300] md:text-6xl'>
              With REM, You Won&apos;t Miss
            </H1>
            <H1 className='text-center text-3xl/loose font-[300] md:font-[300] md:text-6xl'>
              Another Commission{" "}
            </H1>
            <H1 className='text-center  text-3xl/loose font-[300] md:font-[300] md:text-6xl'>
              Payment Again.
            </H1>
          </div>

          <span className='font-sans font-[470] mt-10 text-[16px] text-center'>
            In today&apos;s rapidly evolving insurance landscape, efficiency,
            accuracy, and customer satisfaction are paramount. Rem delivers
            Next-Generation <br /> Al-powered solutions that transform outdated
            processes, making your operations faster, more reliable, and
            customer-centric.
          </span>

          <div className='flex justify-center mt-10 gap-5'>
            <Button
              type='fill'
              className='sm:px-8 px-5 py-[10px] w-[180px] sm:py-5 align-middle max-[400px]:text-sm text-base font-[450]'>
              Book A Demo
            </Button>
            <Button
              type='outline'
              className='sm:px-8 px-5 py-[10px] w-[180px] sm:py-5 align-middle max-[400px]:text-sm text-base font-[450]'>
              Learn More
            </Button>
          </div>
        </div>

        <div className='w-full border-t border-b border-black flex flex-col items-center justify-center gap-10 md:flex-row md:flex-wrap lg:flex-nowrap sm:justify-center lg:justify-around py-[30px] mt-32'>
          <div className='flex flex-col items-center md:items-center lg:items-start gap-6 w-full md:w-[calc(50%-100px)] lg:w-[200px] text-center md:text-center lg:text-left'>
            <Image
              src={circles1}
              alt='circles1'
              width={70}
              height={80}
              className='w-[90px] h-[80px] -ml-3'
            />
            <H3 className='font-[300] text-[40px]'>10%</H3>
            <span className='font-sans font-[450]'>
              Reduction In Commission Errors.
            </span>
          </div>

          <div className='flex flex-col items-center md:items-center lg:items-start gap-6 w-full md:w-[calc(50%-100px)] lg:w-[200px] text-center md:text-center lg:text-left'>
            <Image
              src={circles2}
              alt='circles2'
              width={70}
              height={80}
              className='w-[90px] h-[80px] -ml-3'
            />
            <H3 className='font-[300] text-[40px]'>95%</H3>
            <span className='font-sans font-[450]'>
              Reduction in Commission Reconciliation <br /> And Management
            </span>
          </div>

          <div className='flex flex-col items-center md:items-center lg:items-start gap-6 w-full md:w-[calc(50%-100px)] lg:w-[200px] text-center md:text-center lg:text-left'>
            <Image
              src={circles3}
              alt='circles3'
              width={70}
              height={60}
              className='w-[90px] h-[80px] -ml-3'
            />
            <H3 className='font-[300] text-[40px]'>20%</H3>
            <span className='font-sans font-[450]'>
              Lower Cost Than Alternatives
            </span>
          </div>

          <div className='flex flex-col items-center md:items-center lg:items-start gap-6 w-full md:w-[calc(50%-100px)] lg:w-[200px] text-center md:text-center lg:text-left'>
            <Image
              src={circles4}
              alt='circles4'
              width={70}
              height={60}
              className='w-[90px] h-[80px] -ml-3'
            />
            <H3 className='font-[300] text-[40px]'>+100K</H3>
            <span className='font-sans font-[450]'>
              Commission Records Processed To Date
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
