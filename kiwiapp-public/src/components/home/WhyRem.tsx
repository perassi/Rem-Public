"use client";
import Image from "next/image";
import { H3, H4 } from "@/components/common/Headers";
import { Container } from "@/components/common/Container";
import TailoredSolutions from "public/assets/images/whyRem/tailoredSolutions.png";
import ModernizedWithAI from "public/assets/images/whyRem/modernizedWithAI.png";
import SeamlessCompliance from "public/assets/images/whyRem/seamlessCompliance.png";
import Scheme from "public/assets/images/Scheme/scheme.png";
import AnimatedSection from "@/utils/animationUtils";

export function WhyRem() {
  return (
    <section className='flex bg-white justify-center lg:pb-32 -mt-1 relative'>
      <Container className='flex flex-col items-center mb-14 md:mb-0'>
        <AnimatedSection initialY={100} duration={1}>
          <H3 className='text-center text-[36px] lg:text-[60px] font-[300] mb-6 md:mb-10 md:mt-5'>
            Why REM?
          </H3>

          <div className='flex flex-col xl:flex-row justify-around gap-4'>
            <div className='flex flex-col w-full mb-5'>
              <Image
                src={TailoredSolutions}
                alt='TailoredSolutions'
                width={420}
                height={420}
                className='w-full xl:w-[420px]'
              />
              <H4 className='mt-9 md:mt-14 text-[26px] md:text-[30px] leading-[1.15] md:leading-[1] font-[300]'>
                Tailored Solutions
              </H4>
              <span className='font-sans font-[440] mt-4 text-[16px] leading-[1.8] text-center'>
                Customize our platforms to address your specific challenges,
                aligning perfectly with your business objectives for maximum
                impact. We democratize access to advanced digital tools, making
                them accessible to all, regardless of size.
              </span>
            </div>

            <div className='flex flex-col mb-5 w-full '>
              <Image
                src={ModernizedWithAI}
                alt='TailoredSolutions'
                width={420}
                height={420}
                className='w-full  xl:w-[420px] '
              />
              <H4 className='mt-9 md:mt-14 text-[26px] leading-[1.15] font-[300]'>
                Modernized With AI
              </H4>
              <span className='font-sans font-[440] mt-4 text-[16px] leading-[1.8] text-center'>
                Replace outdated, manual processes with AI <br />
                -powered automation that reduces errors, accelerates workflows,
                and delivers actionable insights for better decision-making. Our
                platform brings expertise from top tech companies and leading
                digital brokerages, ensuring cutting-edge solutions tailored for
                the insurance industry.
              </span>
            </div>

            <div className='flex flex-col mb-14 w-full '>
              <Image
                src={SeamlessCompliance}
                alt='TailoredSolutions'
                width={420}
                height={420}
                className='w-full xl:w-[420px]'
              />
              <H4 className='mt-9 md:mt-14 text-[26px] leading-[1.15] font-[300]'>
                Seamless Compliance
              </H4>
              <span className='font-sans font-[440] mt-4 text-[16px] leading-[1.8] text-center'>
                Our solutions integrate effortlessly with your <br /> existing
                systems, enabling you to modernize without disruption and start
                seeing results quickly. We <br /> uphold strict compliance
                standards, ensuring that your operations remain secure and
                compliant while leveraging the latest technology.
              </span>
            </div>
          </div>
        </AnimatedSection>
        <AnimatedSection initialY={100} duration={1}>
          <div className='flex justify-center md:mt-[11%] -mx-5'>
            <Image
              src={Scheme}
              alt='Scheme'
              width={1440}
              height={810}
              className=' '
            />
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
