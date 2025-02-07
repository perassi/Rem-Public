import Image from "next/image";
import Link from "next/link";

import RemLogo from "public/assets/icons/rem-logo.png";
import PhoneIcon from "public/assets/icons/phone-icon.svg";

import { Container } from "@/components/common/Container";
import { routes } from "@/utils/routes";
import { Button } from "../common/Button";
export const Header = () => {
  return (
    <nav className="relative w-full pb-[30px] pt-[60px] border-b border-[#DCE1E0] sm:border-none sm:pt-[28px]">
      <Container>
        <div className="flex bg-white justify-between  rounded-full  items-center px-[20px]">
          <div>
            <Link href={routes.home}>
              <Image
                src={RemLogo}
                alt="RemLogo"
                className="h-[30px] w-auto sm:w-[150px] sm:h-[50px] cursor-pointer"
              />
            </Link>
          </div>

          <div className="flex">
            <div className="gap-8 hidden lg:flex pl-4 text-[20px] font-[500]"></div>
          </div>

          <div className="gap-x-[10px] flex items-center justify-center sm:gap-x-[20px]">
            <Button
              type="outline"
              className="h-[40px] py-[10px] sm:h-[60px] px-[20px] sm:py-[20px] sm:px-[30px] border border-solid border-[#DCE1E0] align-middle rounded-[40px]"
            >
              <Image src={PhoneIcon} alt="PhoneIcon" className="mr-[7px]" />
              <span className="text-[16px] font-sans leading-[1.25]">
                (623) 223-8884
              </span>
            </Button>
            <Button
              type="fill"
              className="py-[10px] px-[20px] sm:px-[30px] sm:py-[20px] h-[40px] sm:h-[60px] align-middle rounded-[40px] sm:rounded-xl md:rounded-full max-[400px]:text-sm text-base"
            >
              Sign In
            </Button>
          </div>
        </div>
      </Container>
    </nav>
  );
};
