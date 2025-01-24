import Image from "next/image";

import { H2, H3 } from "@/components/common/Headers";
import { Container } from "@/components/common/Container";

import CarrierBrealdown from "public/assets/images/features/carrier-brealdown.png";
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
    image: CarrierBrealdown,
    alt: "CarrierBrealdown",
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
    <section className='  relative flex justify-center flex-col  pb-8  sm:pb-14 lg:pb-20'>
      <Image
        src={GreenShade}
        alt='GreenShade'
        className='absolute top-0 left-0 sm:block hidden pointer-events-none'
      />
      <Container>
        <div className=' flex justify-start mt-20  w-full '>
          <div className=' flex justify-start  gap-10 '>
            <div className='flex  flex-col items-center mt-20 '>
              <H3 className=' font-[300] text-6xl text-white '>For</H3>
            </div>

            <div className=' flex flex-col items-start gap-5  '>
              {textData.map((item, i) => (
                <div key={i}>
                  <H3 className={` font-[300] text-6xl ${item.color}`}>
                    {item.text}
                  </H3>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className=' flex flex-wrap justify-center gap-4 mt-20'>
          {imageData.map((img, i) => (
            <div key={i} className='w-[640px] flex justify-center '>
              <Image src={img.image} alt={img.alt} />
            </div>
          ))}
        </div>
        <div className=' mt-20 w-full flex flex-col items-center  justify-center'>
          <H2 className='text-white text-center font-[300]'>
            {" "}
            Learn about the features disrupting <br /> Medicare & health
            insurance servicing.
          </H2>

          <div className='flex justify-center mt-10 gap-8'>
            <Button
              type='fill'
              className='sm:px-8 px-5 py-[10px] sm:py-5 align-middle max-[400px]:text-sm text-base'>
              Book A Demo
            </Button>
            <Button
              type='outline'
              className='sm:px-8 px-5 py-[10px] sm:py-5 align-middle max-[400px]:text-sm text-white text-base'>
              Learn More
            </Button>
          </div>
        </div>
      </Container>
      <div className='w-full h-[250px] flex justify-center mt-32'>
        <div className='  w-full    '>
          <FeaturesSlider />
        </div>
      </div>
    </section>
  );
}
