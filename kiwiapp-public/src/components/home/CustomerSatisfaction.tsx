import Image from "next/image";
import GreenDotsRight from "public/assets/images/green-dots-2.png";
import PersonOnPc from "public/assets/images/person-on-pc.jpg";
import PersonOnPcMobile from "public/assets/images/person-on-pc-mobile.jpg";
import { H4 } from "@/components/common/Headers";
import { Container } from "@/components/common/Container";

export function CustomerSatisfaction() {
  return (
    <section className="pb-24 bg-white flex justify-center">
      <Container>
        <div className="flex items-center justify-between flex-col">
          <div className="flex flex-col lg:flex-row bg-evergreen-800 max-sm:bg-green-dots-bottom-mobile bg-no-repeat bg-right-bottom items-center rounded-3xl gap-x-12 relative justify-between p-5 lg:p-12">
            <Image src={GreenDotsRight} alt="GreenDotsRight" className="absolute bottom-0 right-0 pointer-events-none max-sm:hidden"/>
            <div className="w-full lg:w-[40%] flex justify-center">
              <Image src={PersonOnPc} alt="PersonOnPc" className="w-full max-w-[480px] rounded-2xl mb-8 lg:mb-0 hidden sm:block"/>
              <Image src={PersonOnPcMobile} alt="PersonOnPcMobile" className="w-full rounded-2xl mb-8 lg:mb-0 block sm:hidden"/>
            </div>
            <div className="w-full lg:w-[56%]">
              <div className="pb-10 lg:pb-8">
                <H4 className="italic text-xl lg:!leading-[1.75] !leading-[1.5] mb-8 text-left text-white">“After My Previous Plan Stopped Offering Medicare Advantage, I Felt Completely Overwhelmed Trying To Find The Right Coverage. I Wasn’t Sure Whether Medicare Supplement Or Medicare Advantage Was Right For Me. Amy Was So Patient, Answering All My Questions Without Any Pressure. She Helped Me Stop Overpaying And Find Better Coverage That Included My Preferred Providers. She Even Helped Me Access Benefits I Didn’t Know Medicare Offered, Like Gym Memberships! I Couldn’t Be Happier With The Support I Received—Even After I Signed Up.” -- Bonnie, King County WA “When My Premium Went Up And My Preferred Providers Were No Longer In-Network, I Didn’t Know Where To Start. Amy Helped Me Find A Plan That Fit My Budget, Included My Doctors, And Even Connected Me With A Spanish-Speaking Provider. She Made The Process Simple And Checked In Afterward To Ensure Everything Was Going Smoothly. I’m So Thankful For Her Support!”</H4>
                <p className="text-white font-semibold text-xl leading-[1] mb-3">Rebeca, King County, WA</p>
                <p className="text-white font-medium">King County, WA</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}