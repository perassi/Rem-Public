import Image from "next/image";
import GreenDotsRight from "public/assets/images/green-dots-2.png";
import PersonOnPc from "public/assets/images/person-on-pc.jpg";
import PersonOnPcMobile from "public/assets/images/person-on-pc-mobile.jpg";
import { H4 } from "@/components/common/Headers";

export function CustomerSatisfaction() {
  return (
    <section className="pb-[100px] bg-white flex justify-center">
      <div className="container">
        <div className="flex items-center justify-between flex-col">
          <div className="flex flex-col lg:flex-row bg-remGreen-700 max-sm:bg-green-dots-bottom-mobile bg-no-repeat bg-right-bottom items-center rounded-[30px] gap-x-[50px] relative justify-between p-[20px] lg:p-[50px]">
            <Image src={GreenDotsRight} alt="GreenDotsRight" className="absolute bottom-0 right-0 pointer-events-none max-sm:hidden"/>
            <div className="w-full lg:w-[40%] flex justify-center">
              <Image src={PersonOnPc} alt="PersonOnPc" className="w-full max-w-[480px] rounded-[20px] mb-[30px] lg:mb-0 hidden sm:block"/>
              <Image src={PersonOnPcMobile} alt="PersonOnPcMobile" className="w-full rounded-[20px] mb-[30px] lg:mb-0 block sm:hidden"/>
            </div>
            <div className="w-full lg:w-[56%]">
              <div className="pb-[40px] lg:pb-[30px]">
                <H4 className="italic text-[20px] lg:!leading-[1.75] !leading-[1.5] mb-[30px] text-left text-white">“After My Previous Plan Stopped Offering Medicare Advantage, I Felt Completely Overwhelmed Trying To Find The Right Coverage. I Wasn’t Sure Whether Medicare Supplement Or Medicare Advantage Was Right For Me. Amy Was So Patient, Answering All My Questions Without Any Pressure. She Helped Me Stop Overpaying And Find Better Coverage That Included My Preferred Providers. She Even Helped Me Access Benefits I Didn’t Know Medicare Offered, Like Gym Memberships! I Couldn’t Be Happier With The Support I Received—Even After I Signed Up.” -- Bonnie, King County WA “When My Premium Went Up And My Preferred Providers Were No Longer In-Network, I Didn’t Know Where To Start. Amy Helped Me Find A Plan That Fit My Budget, Included My Doctors, And Even Connected Me With A Spanish-Speaking Provider. She Made The Process Simple And Checked In Afterward To Ensure Everything Was Going Smoothly. I’m So Thankful For Her Support!”</H4>
                <p className="text-white font-semibold text-[20px] leading-[1] mb-[10px]">Rebeca, King County, WA</p>
                <p className="text-white font-medium">King County, WA</p>
              </div>
              {/* <div className="py-[40px]">
                <div className="flex gap-x-[50px]">
                  <div className="flex flex-col gap-[20px]">
                    <H1 className="text-white leading-[45px] lg:leading-[60px]">99%</H1>
                    <p className="text-white text-[16px] lg:text-[20px] font-medium leading-[20px]">Customer Satisfaction</p>
                  </div>
                  <div className="flex flex-col gap-[20px]">
                    <H1 className="text-white leading-[45px] lg:leading-[60px]">1m</H1>
                    <p className="text-white text-[16px] lg:text-[20px] font-medium leading-[20px]">Yearly Revenue</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-x-[30px] cursor-pointer">
                <p className="text-white text-[20px] font-semibold">Read Full Story</p>
                <div className="flex items-center rounded-full cursor-pointer bg-remGreen-400 hover:bg-remGreen-500 transition-colors w-[60px] h-[60px] justify-center">
                  <Image src={ArrowRightIcon} alt="ArrowRightIcon"/>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}