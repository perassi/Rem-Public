import { Footer } from "@/components/navigation/Footer";
import { Header } from "@/components/navigation/Header";
import "@/styles/globals.css";

export const metadata = {
  title: "Rem",
  description: "AI-powered insurance solutions.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-beige-400 font-sans">
        <Header />
        <div className="pt-[130px] sm:pt-[120px]">{children}</div>
        <Footer />
        </body>
    </html>
  );
}
