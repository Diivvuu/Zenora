import type { Metadata } from "next";
import { Nunito, Inter } from "next/font/google";
// import Lora from "next/font/local";
import "./globals.css";
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-nunito",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-rb",
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
      <body className={` ${nunito.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
