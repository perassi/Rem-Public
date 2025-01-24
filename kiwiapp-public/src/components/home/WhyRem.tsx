import Image from "next/image";
import { H2, H3 } from "@/components/common/Headers";
import { Container } from "@/components/common/Container";
import TailoredSolutions from "public/assets/images/whyRem/tailoredSolutions.png";
import ModernizedWithAI from "public/assets/images/whyRem/modernizedWithAI.png";
import SeamlessCompliance from "public/assets/images/whyRem/seamlessCompliance.png";
import Scheme from "public/assets/images/Scheme/scheme.png";




export function WhyRem() {
  return (
    <section className="flex bg-white justify-center pb-14 lg:pb-32 relative">
      <Container className="flex flex-col items-center">
        <H2 className="text-center font-[300] mb-8">Why REM</H2>

        <div className="flex flex-col xl:flex-row justify-around gap-4 mt-10">

          <div className="flex flex-col w-full xl:w-[420px]">
            <Image src={TailoredSolutions} alt="TailoredSolutions" width={420} height={420} className="w-full xl:w-[420px]"/>
            <H3 className="mt-10 font-[300]">Tailored Solutions</H3>
            <span className="font-sans font-[400] mt-10 text-[16px] text-center">
              Customize our platforms to address your specific challenges, aligning perfectly with your business
              objectives for maximum impact. We democratize access to advanced digital tools, making them accessible to
              all, regardless of size.
            </span>
          </div>

          <div className="flex flex-col w-full xl:w-[420px]">
            <Image src={ModernizedWithAI} alt="TailoredSolutions" width={420} height={420} className="w-full xl:w-[420px]"/>
            <H3 className="mt-10 font-[300]">Modernized with AI</H3>
            <span className="font-sans font-[400] mt-10 text-[16px] text-center">
              Replace outdated, manual processes with AI-powered automation that reduces errors, accelerates workflows,
              and delivers actionable insights for better decision-making. Our platform brings expertise from top tech
              companies and leading digital brokerages, ensuring cutting-edge solutions tailored for the insurance
              industry.
            </span>
          </div>

          <div className="flex flex-col w-full xl:w-[420px]">
            <Image src={SeamlessCompliance} alt="TailoredSolutions" width={420} height={420} className="w-full xl:w-[420px]"/>
            <H3 className="mt-10 font-[300]">Seamless Compliance</H3>
            <span className="font-sans font-[400] mt-10 text-[16px] text-center">
              Our solutions integrate effortlessly with your existing systems, enabling you to modernize without
              disruption and start seeing results quickly. We uphold strict compliance standards, ensuring that your
              operations remain secure and compliant while leveraging the latest technology.
            </span>
          </div>
        </div>
        <div className=" flex justify-center mt-40">
          <Image src={Scheme} alt="Scheme" width={1440} height={810}  />
        </div>
      </Container>
    </section>
  );
}
