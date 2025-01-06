import Image from "next/image";
import clsx from "clsx";
import ArrowRightIcon from "public/assets/icons/arrow-right.svg";
import ClientMeeting from "public/assets/images/client-meeting.jpg";
import ClientMeetingMobile from "public/assets/images/client-meeting-mobile.jpg";
import { routes } from "@/utils/routes";
import { H3 } from "@/components/common/Headers";
import Link from "next/link";

const items = [
  { title: "Find The Right Coverage For You", 
    content: "Our Technology Compares The Top Medicare Plans To Find The One That Fits Your Budget And Healthcare Needs.", href: routes.about },
  { title: "Our Service Is Always Free To You", 
    content: "Our Service Is Completely Free For You Because We’re Paid By The Insurance Companies. No Matter Which Plan You Select, Our Compensation Stays The Same.", href: routes.about },
  { title: "Local Experts, Real People", 
    content: "Our Agents Understand That Medicare Plans Vary By Location. Whether It’s Medicare Supplement Or Medicare Advantage, We Help You Navigate All The Options To Find The Right Fit For Your Needs And Where You Live.", href: routes.about }
]

export function TripleLink() {
  return (
    <section className="flex bg-white justify-center pt-[200px] lg:pt-[155px] pb-[60px] xl:pb-[120px]">
      <div className="container">
        <div className="items-center justify-between flex-col">
          <div className="flex flex-col-reverse xl:flex-row gap-x-[20px] items-center pt-[60px]">
            <Image src={ClientMeeting} alt="ClientMeeting" className="rounded-[20px] h-auto md:min-w-[530px] mt-[20px] xl:mt-0 xl:mb-0 max-md:max-w-full hidden sm:block" />
            <Image src={ClientMeetingMobile} alt="ClientMeeting" className="rounded-[20px] h-auto md:min-w-[530px] mt-[20px] xl:mb-0 max-md:max-w-full sm:hidden block" />
            <div className="flex flex-col gap-y-[20px]">
              {items.map((item, i) => (
                <Link href="/" className={clsx("py-[40px] px-[20px] md:py-[45px] md:px-[40px] xl:items-center justify-between rounded-[20px] cursor-pointer hover:opacity-80 transition-opacity bg-beige-400 flex-col flex lg:flex-row gap-x-[30px]", i === 0 && "md:!py-[60px]")} key={item.title}>
                  <div>
                    <H3 className="lg:!text-[30px] leading-[30px] mb-[10px] !text-left">{item.title}</H3>
                    <p className="text-[16px] leading-[30px] font-medium">{item.content}</p>
                  </div>
                  <div className="flex items-center rounded-full cursor-pointer hover:opacity-70 transition-opacity bg-beige-500 max-xl:mt-[20px] max-xl:w-[60px] lg:min-w-[60px] h-[60px] justify-center">
                    <Image src={ArrowRightIcon} alt="ArrowRightIcon"/>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}