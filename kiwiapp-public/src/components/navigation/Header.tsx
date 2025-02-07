import Image from "next/image";
import Link from "next/link";

import RemLogo from "public/assets/icons/rem-logo.png";
import PhoneIcon from "public/assets/icons/phone-icon.svg";

import { Container } from "@/components/common/Container";
import { routes } from "@/utils/routes";
import { Button } from "../common/Button";
export const Header = () => {
  return (
    <nav className="relative w-full pb-[30px] pt-[60px] border-b border-[#DCE1E0] md:border-none md:pt-[28px]">
      <Container>
        <div className="flex bg-white justify-between  rounded-full  items-center px-[20px]">
          <div>
            <Link href={routes.home}>
              <Image
                src={RemLogo}
                alt="RemLogo"
                className="h-[30px] w-auto md:w-[150px] md:h-[50px] cursor-pointer"
              />
            </Link>
          </div>

          <div className="flex">
            <div className="gap-8 hidden lg:flex pl-4 text-[20px] font-[500]"></div>
          </div>

          <div className="gap-x-[10px] flex items-center justify-center md:gap-x-[20px]">
            <Button
              type="outline"
              className="h-[40px] py-[10px] md:h-[60px] px-[20px] md:py-[20px] md:px-[30px] border border-solid border-[#DCE1E0] align-middle rounded-[40px]"
            >
              <Image src={PhoneIcon} alt="PhoneIcon" className="mr-[7px]" />
              <span className="text-[16px] font-sans leading-[1.25]">
                (623) 223-8884
              </span>
            </Button>
            <Button
              type="fill"
              className="py-[10px] px-[20px] md:px-[30px] md:py-[20px] h-[40px] md:h-[60px] align-middle rounded-full max-[400px]:text-sm text-base"
            >
              Sign In
            </Button>
          </div>
        </div>
      </Container>
    </nav>
  );
};
