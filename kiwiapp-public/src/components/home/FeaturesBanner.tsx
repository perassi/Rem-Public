"use client";
import Image from "next/image";

import { H3 } from "@/components/common/Headers";
import { Container } from "@/components/common/Container";

import CarrierBreakdown from "public/assets/images/features/carrier-brealdown.png";
import NewVsRecurring from "public/assets/images/features/new-vs-recurring.png";
import IncreasedRevenue from "public/assets/images/features/increased-revenue.png";
import UnpaidCommissionMotive from "public/assets/images/features/unpaid-commission-motive.png";
import { Button } from "../common/Button";
import { FeaturesSlider } from "./FeaturesSlider";
import GreenShade from "public/assets/images/green-shade.png";

const textData = [
  {
    color:
      "bg-clip-text text-transparent bg-gradient-to-b from-white via-white/50 to-transparent",
    text: "FMO & IMO Owners",
  },
  {
    color: "text-[#18F1A1]",
    text: "Agency Owners",
  },
  {
    color:
      "bg-clip-text text-transparent bg-gradient-to-b from-white via-white/50 to-transparent",

    text: "Carriers",
  },
  {
    color:
      "bg-clip-text text-transparent bg-gradient-to-b from-white via-white/50 to-transparent",

    text: "Independent Agents",
  },
];

const imageData = [
  {
    image: CarrierBreakdown,
    alt: "CarrierBreakdown",
  },
  {
    image: NewVsRecurring,
    alt: "NewVsRecurring",
  },
  {
    image: IncreasedRevenue,

    alt: "IncreasedRevenue",
  },
  {
    image: UnpaidCommissionMotive,

    alt: "UnpaidCommissionMotive",
  },
];

export function FeaturesBanner() {
  return (
    <section className='relative flex justify-center flex-col '>
      <Image
        src={GreenShade}
        alt='GreenShade'
        className='absolute top-0 left-0 sm:block  pointer-events-none'
      />
      <Container>
        <div className=' flex justify-center lg:justify-start mt-16 w-full lg:px-10 md:mt-[7%]'>
          <div className=' flex justify-center md:justify-start gap-[13%] md:gap-32 md:mt-2 w-full '>
            <div className='flex flex-col items-center mt-11 md:mt-14 lg:mt-20 '>
              <H3 className=' font-[300] text-[30px] md:text-4xl lg:text-5xl xl:text-6xl text-white '>
                For
              </H3>
            </div>

            <div className=' flex flex-col items-start gap-4 w-full '>
              {textData.map((item, i) => (
                <div key={i}>
                  <H3
                    className={` font-[300] text-[30px] sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl ${item.color}`}>
                    {item.text}
                  </H3>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className=' flex flex-wrap w-full justify-center gap-5 mt-16 md:mt-28 '>
          {imageData.map((img, i) => (
            <div key={i} className='w-full lg:w-[640px] flex justify-center '>
              <Image src={img.image} alt={img.alt} />
            </div>
          ))}
        </div>

        <div className=' mt-16 md:-mb-5 w-full flex flex-col items-center justify-center'>
          <span className='text-white font-header text-center md:w-[60%] font-[300] text-[32px] leading-[1.12] md:text-[40px] md:mt-10'>
            Learn about the features Disrupting Medicare & Health Insurance
            Servicing.
          </span>

          <div className='flex justify-center mt-8 md:mt-10 gap-5'>
            <Button
              type='fill'
              className=' w-[180px] h-[50px] align-middle text-base font-[450]'>
              Book A Demo
            </Button>
            <Button
              type='outline'
              className='w-[164px] p-1 h-[50px] align-middle text-base text-white font-[450]'>
              Learn More
            </Button>
          </div>
        </div>
      </Container>
      <div className='w-full h-[252px] md:h-[100px] flex justify-center'>
        <FeaturesSlider />
      </div>
      <div className='bg-gray-100 w-full h-[300px] mt-[20%] md:mt-[13%] md:h-[440px]' />
    </section>
  );
}
