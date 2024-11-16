import HeaderComponent from "@/components/Header";
import type { Metadata } from "next";
import { Nunito, Playfair } from "next/font/google";
// import Lora from "next/font/local";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-nunito",
});

const playfair = Playfair({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
});

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
      <body className={` ${nunito.variable} ${playfair.variable} antialiased`}>
        <HeaderComponent />
        {children}
      </body>
    </html>
  );
}
