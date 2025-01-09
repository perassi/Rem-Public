"use client";

import { Providers } from "@/components/provider/Providers";
import { SidebarProvider } from "@/components/navigation/SidebarContext";
import { Sidebar } from "@/components/navigation/Sidebar";
import "@/styles/globals.css";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body className="bg-beige-400">
        <Providers>
          <SidebarProvider>
            <div className="h-min-screen flex overflow-hidden bg-beige-400">
              <Sidebar />
              <div className={"flex flex-1 flex-col bg-beige-400 transition-all duration-300"}>
                <main className="flex h-full w-full flex-1">{children}</main>
              </div>
            </div>
          </SidebarProvider>
        </Providers>
      </body>
    </html>
  );
}
