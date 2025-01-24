import Image from "next/image";
import Logo from "public/assets/images/Logo.png";

import circles1 from "public/assets/images/advantages/circles1.png";
import circles2 from "public/assets/images/advantages/circles2.png";
import circles3 from "public/assets/images/advantages/circles3.png";
import circles4 from "public/assets/images/advantages/circles4.png";

import { Container } from "@/components/common/Container";
import { H2, H3 } from "../common/Headers";
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

      <Container className=''>
        <div className='flex items-center flex-col'>
          <Image src={Logo} alt='Logo' className="w-[100px] h-[100px] md:w-[152px] md:h-[160px]" />
          <H2 className='text-center mt-9 text-4xl font-[300] md:font-[300] md:text-6xl'>
            With REM, you won&apos;t miss Another Commission payment again.
          </H2>

          <span className='font-sans font-[400] mt-10 text-[16px] text-center'>
            In Today&apos;s rapidly evolving insurance landscape, efficiency,
            accuracy, and customer satisfaction are paramount. Rem delivers
            Next-Generation <br /> Al-powered solutions that transform outdated
            processes, making your operations faster, more reliable, and
            customer-centric.
          </span>

          <div className='flex justify-center mt-10 gap-8'>
            <Button
              type='fill'
              className='sm:px-8 px-5 py-[10px] sm:py-5 align-middle max-[400px]:text-sm text-base'>
              Book A Demo
            </Button>
            <Button
              type='outline'
              className='sm:px-8 px-5 py-[10px] sm:py-5 align-middle max-[400px]:text-sm text-base'>
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
              height={60}
              className='w-[70px] h-[60px]'
            />
            <H3 className='font-[300] text-[40px]'>10%</H3>
            <span className='font-sans font-medium'>
              Reduction In <br /> Commission Errors.
            </span>
          </div>

          <div className='flex flex-col items-center md:items-center lg:items-start gap-6 w-full md:w-[calc(50%-100px)] lg:w-[200px] text-center md:text-center lg:text-left'>
            <Image
              src={circles2}
              alt='circles2'
              width={70}
              height={60}
              className='w-[70px] h-[60px]'
            />
            <H3 className='font-[300] text-[40px]'>95%</H3>
            <span className='font-sans font-medium'>
              Reduction in Commission Reconciliation And Management
            </span>
          </div>

          <div className='flex flex-col items-center md:items-center lg:items-start gap-6 w-full md:w-[calc(50%-100px)] lg:w-[200px] text-center md:text-center lg:text-left'>
            <Image
              src={circles3}
              alt='circles3'
              width={70}
              height={60}
              className='w-[80px] h-[60px]'
            />
            <H3 className='font-[300] text-[40px]'>20%</H3>
            <span className='font-sans font-medium'>
              Lower Cost Than Alternatives
            </span>
          </div>

          <div className='flex flex-col items-center md:items-center lg:items-start gap-6 w-full md:w-[calc(50%-100px)] lg:w-[200px] text-center md:text-center lg:text-left'>
            <Image
              src={circles4}
              alt='circles4'
              width={70}
              height={60}
              className='w-[60px] h-[60px]'
            />
            <H3 className='font-[300] text-[40px]'>+100K</H3>
            <span className='font-sans font-medium'>
              Commission Records Processed To Date
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
