import Image from "next/image";
import Link from "next/link";

import RemLogo from "public/assets/icons/rem-logo.png";
import PhoneIcon from "public/assets/icons/phone-icon.svg";

import { Container } from "@/components/common/Container";
import { routes } from "@/utils/routes";
import { Button } from "../common/Button";
export const Header = () => {
  return (
    <nav className='relative w-full md:pt-[28px]  '>
      <Container>
        <div className='flex bg-white justify-between  rounded-full  items-center'>
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
            <div className='gap-8 hidden lg:flex pl-4 text-[20px] font-[500]'></div>
          </div>

          <div className=' flex items-center justify-center gap-5'>
            <Button
              type='outline'
              className='px-5 py-[8px] sm:px-[25px]  sm:py-5 align-middle rounded-xl md:rounded-full   '>
              <Image src={PhoneIcon} alt='PhoneIcon' className='mr-3' />
              <span className='text-[16px] font-sans leading-[1.25]'>
                (623) 223-8884
              </span>
            </Button>
            <Button
              type='fill'
              className='px-5 py-[8px] sm:px-8  sm:py-5 align-middle rounded-xl md:rounded-full max-[400px]:text-sm text-base'>
              Sign In
            </Button>
          </div>
        </div>
      </Container>
    </nav>
  );
};
