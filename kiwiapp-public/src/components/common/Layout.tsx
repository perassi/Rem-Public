import GreenShade from "public/assets/images/green-shade.png";
import "@/styles/globals.css";
import Image from "next/image";
import { Header } from "../navigation/Header";
import { Footer } from "../navigation/Footer";

export function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='bg-beige-400 font-sans'>
        <div className='bg-evergreen-800 z-100 relative'>
          <Image
            src={GreenShade}
            alt='GreenShade'
            className='absolute top-0 left-0 lg:block hidden pointer-events-none'
          />

          <Header />

          <main className='-mt-20'>{children}</main>
        </div>

        <Footer />
      </body>
    </html>
  );
}
