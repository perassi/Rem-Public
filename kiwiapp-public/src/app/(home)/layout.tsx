import { DefaultLayout } from "@/components/common/Layout";
import "@/styles/globals.css";

export const metadata = {
  title: "Rem",
  description: "AI-powered insurance solutions.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <DefaultLayout>{children}</DefaultLayout>;
}
