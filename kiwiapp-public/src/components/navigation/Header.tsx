import Image from "next/image";
import Link from "next/link";

import RemLogo from "public/assets/icons/rem-logo.svg";
import PhoneIcon from "public/assets/icons/phone.svg";
import MenuIcon from "public/assets/icons/hamburger-menu-white.svg";
import { routes } from "@/utils/routes";
import { Button } from "@/components/common/Button";
import { Container } from "@/components/common/Container";

export const Header = () => {
  return (
    <nav className="h-[130px] sm:h-[120px] bg-white border-b-[1px] border-[#DCE1E0] z-50 w-screen fixed pb-[30px] pt-[60px] sm:py-[30px]">
      <Container>
        <div className="flex justify-between items-center">
          <Link href={routes.home}>
            <Image src={RemLogo} alt="RemLogo" className="h-[30px] w-auto sm:w-[154px] sm:h-[50px] cursor-pointer" />
          </Link>
          <div className="flex items-center">
            <div className="flex items-center lg:border-r-4 border-remGreen-400 lg:pr-10 pr-0">
              <div className="gap-8 hidden xl:flex pr-14">
                <Link className="cursor-pointer hover:opacity-70 transition-opacity" href={routes.resources}>
                  Resources
                </Link>
                <Link className="cursor-pointer hover:opacity-70 transition-opacity" href={routes.about}>
                  About REM
                </Link>
                <Link className="cursor-pointer hover:opacity-70 transition-opacity" href={routes.espanol}>
                  Español
                </Link>
              </div>
              <Button type="fill" className="sm:px-8 px-5 py-[10px] sm:py-5 align-middle max-[400px]:text-sm text-base">
                Get Covered Now
              </Button>
              <button
                className="h-10 w-10 max-[400px]:ml-[10px] ml-5 lg:hidden bg-evergreen-800 flex items-center justify-center rounded-full
                  cursor-pointer hover:opacity-90 transition-opacity"
              >
                <Image src={MenuIcon} alt="MenuIcon" />
              </button>
            </div>
            <div className="flex-col hidden lg:flex pl-5 gap-y-4">
              <p className="text-xl leading-[1]">Speak to a licensed agent (M-F 9am - 5pm) PST</p>
              <div className="flex gap-x-0.5">
                <Image src={PhoneIcon} alt="PhoneIcon" />
                <a
                  href="tel:+16232238884"
                  className="font-semibold text-xl leading-[1] hover:opacity-70 transition-opacity cursor-pointer"
                >
                  (623) 223-8884 | TTY: 711
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};
