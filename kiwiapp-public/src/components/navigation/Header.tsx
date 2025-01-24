import Image from "next/image";
import Link from "next/link";

import RemLogo from "public/assets/icons/rem-logo.svg";
// import PhoneIcon from "public/assets/icons/phone.svg";
// import MenuIcon from "public/assets/icons/hamburger-menu-white.svg";

import { Button } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import { routes } from "@/utils/routes";

export const Header = () => {
  return (
    <nav className="h-[100px] sm:h-[80px] z-50 w-screen pb-[30px] pt-[60px] sm:py-[30px] ">
      <Container>
        <div className="flex p-[10px] bg-beige-400 justify-between rounded-[60px] items-center">
          <div className="">
            <Link href={routes.home}>
              <Image src={RemLogo} alt="RemLogo" className="h-[30px] w-auto sm:w-[154px] sm:h-[50px] cursor-pointer" />
            </Link>
          </div>

          <div className="flex">
            <div className="gap-8 hidden xl:flex pr-14 font-[500]">
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
          </div>
          <Button
            type="fill"
            className="sm:px-8 px-5 py-[10px] sm:py-5 align-middle rounded-full max-[400px]:text-sm text-base"
          >
            Book A Demo
          </Button>
        </div>
      </Container>
    </nav>
  );
};

{
  /* <button
                className="h-10 w-10 max-[400px]:ml-[10px] ml-5 lg:hidden bg-evergreen-800 flex items-center justify-center rounded-full
                  cursor-pointer hover:opacity-90 transition-opacity"
              >
                <Image src={MenuIcon} alt="MenuIcon" />
              </button> */
}