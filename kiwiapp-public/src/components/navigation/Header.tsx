import Link from "next/link";
import Image from "next/image";
import Button from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import RemLogo from "public/assets/icons/rem-logo.png";
import PhoneIcon from "public/assets/icons/phone-icon.svg";
import { routes } from "@/constants/routes.constants";

export const Header = () => (
  <nav className="relative w-full pb-7 pt-15 border-b border-neutral-100 md:border-none md:pt-7">
    <Container>
      <div className="flex bg-white justify-between  rounded-full  items-center px-5">
        <div>
          <Link href={routes.home}>
            <Image
              src={RemLogo}
              alt="RemLogo"
              className="h-7 w-auto md:w-[150px] md:h-[50px] cursor-pointer"
            />
          </Link>
        </div>
        <div className="flex">
          <div className="gap-8 hidden lg:flex pl-4 text-xl font-medium" />
        </div>
        <div className="gap-x-2 flex items-center justify-center md:gap-x-5">
          <Button
            type="outline"
            className="h-10 py-[10px] md:h-15 px-5 md:py-5 md:px-7 border border-solid border-neutral-100 align-middle rounded-full"
          >
            <Image src={PhoneIcon} alt="Phone" className="mr-2" />
            <span className="text-base font-sans leading-tight">
              (623) 223-8884
            </span>
          </Button>
          <Button
            type="fill"
            className="py-2 px-5 md:px-7 md:py-5 h-10 md:h-15 align-middle rounded-full max-10:text-sm text-base"
          >
            Sign In
          </Button>
        </div>
      </div>
    </Container>
  </nav>
);
