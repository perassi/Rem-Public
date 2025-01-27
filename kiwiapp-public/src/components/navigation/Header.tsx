import Image from "next/image";
import Link from "next/link";

import RemLogo from "public/assets/icons/rem-logo.svg";
import MenuIcon from "public/assets/icons/hamburger-menu-white.svg";

import { Button } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import { routes } from "@/utils/routes";
export const Header = () => {
  return (
    <nav className=' relative h-[110px] sm:h-[80px] z-50 w-full pt-[60px] md:pt-[30px]  z-101 '>
      <Container>
        <div className='flex p-[20px] md:px-10 md:pr-5 bg-beige-400 justify-between  rounded-full  items-center'>
          <div className=''>

            <Link href={routes.home}>
              <Image
                src={RemLogo}
                alt='RemLogo'
                className='h-[30px] w-auto sm:w-[150px] sm:h-[50px] cursor-pointer'
              />
            </Link>
          </div>

          <div className='flex'>
            <div className='gap-8 hidden lg:flex pl-4 text-[20px] font-[500]'>
              <Link
                className='cursor-pointer hover:opacity-70 transition-opacity'
                href={routes.resources}>
                Resources
              </Link>
              <Link
                className='cursor-pointer hover:opacity-70 transition-opacity'
                href={routes.about}>
                About REM
              </Link>
              <Link
                className='cursor-pointer hover:opacity-70 transition-opacity'
                href={routes.espanol}>
                Español
              </Link>
            </div>
          </div>

          <div className=' flex items-center justify-center '>
            <Button
              type='fill'
              className='px-5 py-[8px] sm:px-8  sm:py-5 align-middle rounded-xl md:rounded-full max-[400px]:text-sm text-base'>
              Book A Demo
            </Button>
            <button
              className='h-10 w-10 max-[400px]:ml-[10px] ml-5 lg:hidden bg-evergreen-800 flex items-center justify-center rounded-full
  cursor-pointer hover:opacity-90 transition-opacity'>
              <Image src={MenuIcon} alt='MenuIcon' />
            </button>
          </div>
        </div>
      </Container>
    </nav>
  );
};
