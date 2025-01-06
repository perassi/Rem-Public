import { Footer } from "@/components/navigation/Footer";
import { Header } from "@/components/navigation/Header";
import "@/styles/globals.css";

export function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-beige-400 font-sans">
        <Header />
        <main className="pt-[130px] sm:pt-[120px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
