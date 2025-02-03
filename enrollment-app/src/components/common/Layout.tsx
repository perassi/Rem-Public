import "@/styles/globals.css";
import { Header } from "../navigation/Header";

export function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='bg-beige-400 font-sans'>
        <div className=' relative'>
          <Header />
          <main className=''>{children}</main>
        </div>

        {/* <Footer /> */}
      </body>
    </html>
  );
}
