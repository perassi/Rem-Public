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

const companyData = [
  { image: AetnaCompany, alt: "AetnaCompany" },
  { image: UnitedCompany, alt: "UnitedCompany" },
  { image: HumanaCompany, alt: "HumanaCompany" },
  { image: BlueCrossCompany, alt: "BlueCrossCompany" },
  { image: CignaCompany, alt: "CignaCompany" },
  { image: DevotedHealthCompany, alt: "DevotedHealthCompany" },
]

export function HomeBanner() {
  return (
    <section className="flex relative bg-remGreen-700 max-sm:bg-gradient-to-b from-[rgba(14,232,152,0.3)] to-remGreen-700 justify-center pt-[60px] lg:pb-[160px] pb-[140px]">
      <div className="container">
        <div className="w-full flex flex-col xl:flex-row items-center justify-between xl:gap-x-[20px]">
          <Image src={GreenShade} alt="GreenShade" className="absolute top-0 left-0 sm:block hidden pointer-events-none" />
          <div className="mb-[60px] xl:mb-0">
            <H1 className="!leading-[30px] !text-[30px] lg:!leading-[60px] lg:!text-[60px] mb-[10px] lg:mb-[20px] xl:max-w-[675px] text-white">Save Money And Get The Medicare Coverage You Deserve</H1>
            <p className="text-white mb-[30px] xl:max-w-[675px] leading-[30px]">Unbiased, Local Experts Find Plans That Fit Your Needs And Your Budget. Save More With Personalized Recommendations Tailored To Your Life.</p>
            <div className="flex flex-col sm:flex-row max-sm:gap-y-[20px] gap-x-[20px]">
              <Button className="border-remGreen-400 border-[1px] hover:bg-transparent hover:text-white !text-[16px] w-fit">Find Plans On Your Own</Button>
              <Button className="bg-transparent border-remGreen-400 hover:bg-remGreen-500 hover:text-textDark border-[1px] text-white !text-[16px] w-fit">Get A Free Consultation Now</Button>
            </div>
          </div>
          <Image src={HomeHero} alt="HomeHero" className="mb-[30px] xl:mb-0 hidden sm:block"/>
          <Image src={HomeHeroMobile} alt="HomeHero" className="mb-[30px] xl:mb-0 block sm:hidden w-full h-auto"/>
          <div className="flex flex-col absolute rounded-[20px] px-[20px] lg:px-[35px] drop-shadow-[0_100px_100px_rgba(0,38,43,0.05)] max-w-[1300px] w-[calc(100%-40px)] bottom-0 translate-y-[50%] items-center bg-white py-[30px] sm:pt-[55px] sm:pb-[60px] gap-y-[30px]">
            <H5 className="mb-0 text-center !font-sans lg:!text-[20px]">Compare Plans From Carriers</H5>
            <div className="flex flex-wrap xl:flex-nowrap max-[1300px]:gap-x-[20px] gap-y-[25px] justify-evenly w-full">
              {companyData.map((item) => (
                <Image src={item.image} alt={item.alt} key={item.alt} className="object-contain max-sm:basis-[25%]"/>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
