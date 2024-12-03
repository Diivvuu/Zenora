import HeaderComponent from "@/components/Header";
import type { Metadata } from "next";
import { Nunito, Poppins, Roboto_Slab } from "next/font/google";
// import Lora from "next/font/local";
import "./globals.css";
import RO from "locomotive-scroll/dist/types/core/RO.js";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-nunito",
});

const rb = Roboto_Slab({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-rb",
});

// const robotoSlab = Roboto({
//   subsets: ["latin"],
//   weight: ["400", "500", "700", "900"],
//   variable: "--font-robotoSlab",
// });

export const metadata: Metadata = {
  title: "Zenora",
  description: "Sahi app hai",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${nunito.variable} ${rb.variable} antialiased`}>
        <HeaderComponent />
        {children}
      </body>
    </html>
  );
}
