import Image from "next/image";
import HomeHero from "public/assets/images/home-hero.png";
import HomeHeroMobile from "public/assets/images/home-hero-mobile.png";
import GreenShade from "public/assets/images/green-shade.png";
import AetnaCompany from "public/assets/images/aetna-company.png";
import UnitedCompany from "public/assets/images/united-company.png";
import CignaCompany from "public/assets/images/cigna-company.png";
import BlueCrossCompany from "public/assets/images/bluecross-company.png";
import DevotedHealthCompany from "public/assets/images/devotedhealth-company.png";
import HumanaCompany from "public/assets/images/humana-company.png";
import { Button } from "@/components/common/Button";
import { H1, H5 } from "@/components/common/Headers";
import { Container } from "@/components/common/Container";

const companyData = [
  { image: AetnaCompany, alt: "AetnaCompany" },
  { image: UnitedCompany, alt: "UnitedCompany" },
  { image: HumanaCompany, alt: "HumanaCompany" },
  { image: BlueCrossCompany, alt: "BlueCrossCompany" },
  { image: CignaCompany, alt: "CignaCompany" },
  { image: DevotedHealthCompany, alt: "DevotedHealthCompany" },
];

export function HomeBanner() {
  return (
    <section
      className="flex relative bg-evergreen-800 max-sm:bg-gradient-to-b from-[rgba(14,232,152,0.3)] to-evergreen-800 justify-center pt-16
        lg:pb-40 pb-36"
    >
      <Container>
        <div className="w-full flex flex-wrap items-center justify-between xl:gap-x-5 gap-y-16">
          <Image
            src={GreenShade}
            alt="GreenShade"
            className="absolute top-0 left-0 sm:block hidden pointer-events-none"
          />
          <div className="xl:mb-0 w-full lg:w-[56%]">
            <H1 className="text-3xl md:text-6xl mb-3 md:mb-5 md:max-w-[675px] text-white">
              Save Money And Get The Medicare Coverage You Deserve
            </H1>
            <p className="text-white mb-5 md:mb-8 xl:max-w-[675px]">
              Unbiased, Local Experts Find Plans That Fit Your Needs And Your Budget. Save More With Personalized
              Recommendations Tailored To Your Life.
            </p>
            <div className="flex flex-wrap gap-5">
              <Button type="fill" className="text-base">
                Find Plans On Your Own
              </Button>
              <Button type="outline" className="text-base text-white">
                Get A Free Consultation Now
              </Button>
            </div>
          </div>
          <div className="w-full lg:w-[40%] flex justify-center">
            <Image src={HomeHero} alt="HomeHero" className="mb-8 xl:mb-0 hidden sm:block" />
            <Image src={HomeHeroMobile} alt="HomeHero" className="mb-8 xl:mb-0 block sm:hidden w-full h-auto" />
          </div>
          <div
            className="flex flex-col absolute rounded-2xl px-5 lg:px-9 drop-shadow-[0_100px_100px_rgba(0,38,43,0.05)] max-w-[1300px]
              w-[calc(100%-40px)] bottom-0 translate-y-[50%] items-center bg-white py-8 sm:pt-14 sm:pb-14 gap-y-8"
          >
            <H5 className="mb-0 text-center font-sans text-xl">Compare Plans From Carriers</H5>
            <div className="flex flex-wrap xl:flex-nowrap max-[1300px]:gap-x-5 gap-y-6 justify-evenly w-full">
              {companyData.map((item) => (
                <Image src={item.image} alt={item.alt} key={item.alt} className="object-contain max-sm:basis-[25%]" />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
