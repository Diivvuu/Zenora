import HeaderComponent from "@/components/Header";
import type { Metadata } from "next";
import { Nunito, Lora } from "next/font/google";
// import Lora from "next/font/local";
import "./globals.css";

const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-nunito",
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
      <body className={`${lora.variable} ${nunito.variable} antialiased`}>
        <HeaderComponent />
        {children}
      </body>
    </html>
  );
}
