import Image from "next/image";
import ClientMeeting from "public/assets/images/client-meeting-dashed.png";
import ClientMeetingMobile from "public/assets/images/client-meeting-dashed-mobile.png";
import { H2 } from "@/components/common/Headers";
import { Button } from "@/components/common/Button";

export function Origins() {
  return (
    <section className="flex bg-white justify-center pt-[60px] lg:pt-[120px] pb-[60px] lg:pb-[120px]">
      <div className="container">
        <div className="items-center justify-between flex-col">
          <div className="flex flex-wrap justify-between items-center gap-y-[30px] md:gap-y-[60px]">
            <div className="w-full lg:w-[40%] flex justify-center">
              <Image src={ClientMeeting} alt="ClientMeeting" className="rounded-[20px] h-auto w-full max-w-[520px] mt-[20px] lg:mt-0 lg:mb-0 hidden sm:block" />
              <Image src={ClientMeetingMobile} alt="ClientMeeting" className="rounded-[20px] h-auto md:min-w-[530px] mb-[30px] lg:mb-0 max-md:max-w-full sm:hidden block" />
            </div>
            <div className="w-full lg:w-[56%] flex flex-col justify-center font-medium">
              <H2 className="text-[30px] md:text-[60px] font-normal mb-[10px] md:mb-[20px]">Why Jorge Started REM</H2>
              <p>When Jorge Began Helping His Parents Navigate Medicare, He Thought It Would Be A Simple Process. Instead, He Discovered How Confusing And Overwhelming It Could Be. His Parents Were Targeted By High-Pressure Sales Tactics And Enrolled In Plans That Didn’t Cover Their Doctors Or Meet Their Needs. Hidden Details Led To Unexpected Costs And Poor Health Outcomes, Leaving Them Spending Hours On The Phone Searching For Providers, Clarifying Benefits, And Fixing Issues. He Realized That The System Wasn’t Built For Seniors—It Was Built For Profits. Families Like His Were Left To Navigate A Maze Of Complicated Options On Their Own. That’s Why Jorge Started Rem. At REM, We’re Committed To:</p>
              <ul className="list-disc list-inside mb-[30px]">
                <li>
                  <p className="inline relative">Simplifying Medicare: Helping Families Find Plans That Truly Fit Their Needs Without The Pressure Or Confusion.</p>
                </li>
                <li>
                  <p className="inline">Supporting Every Step: From Finding Doctors To Using Benefits, We Go Beyond Enrollment To Make Medicare Work For You.</p>
                </li>
                <li>
                  <p className="inline">Community-Based Help: With Trusted Local Agents, You Get Real, Personalized Support—Not Scripted Calls. Jorge Built Rem To Be The Resource His Parents Never Had: A Safe, Low-Pressure Place Where Seniors And Their Families Are Empowered With Clear Answers And Trusted Guidance.</p>
                </li>
              </ul>
              <div className="flex flex-wrap gap-[20px]">
                <Button type="fill-invert" className="text-[16px]">Find Plans On Your Own</Button>
                <Button type="outline" className="text-[16px]">Get A Free Consultation Now</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}