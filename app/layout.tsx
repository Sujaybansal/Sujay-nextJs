// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
import HeaderMain from "@/components/HeaderMain";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSideBar";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* <SidebarProvider> */}
          <main>
          <HeaderMain />
          {/* <AppSidebar /> */}
            {/* <SidebarTrigger /> */}
            {children}
          </main>
        {/* </SidebarProvider> */}
      </body>
    </html>
  );
}
