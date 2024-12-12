"use client";

import { useEffect, useRef, useState } from "react";
import Hero from "@/components/landing/page";
import Lenis from "lenis";
import HeaderComponent from "@/components/Header";
import Footer from "@/components/Footer/page";
import { timelineData } from "@/constants/data";
import ContactUs from "@/components/Contact/page";
import Testimonials from "@/components/Testimonials/page";
import Roadmap from "@/components/Roadmap/page";
import ParallaxSection from "@/components/ui/parallexComponent";
import ButtonDemo from "@/components/ui/kk";

export default function Home() {
  const contactUsRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll(); // Initialize without assigning

      const lenis = new Lenis();
      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2500);
    })();
  }, []);
  const scrollToContact = () =>
    contactUsRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="relative">
      {/* <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence> */}
      {/* 
      <Button
        variant="secondary"
        state="hover"
        className="absolute top-[100%] left-[90%]S"
      >
        Button
      </Button> */}
      <div className="bg-black text-white w-fit fixed bottom-20 right-20 z-10">
        <div
          // className="absolute right-40 bottom-20 z-[99999999]"
          onClick={scrollToContact}
        >
          <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            Tap here
          </button>
        </div>
      </div>
      <HeaderComponent />
      <Hero />
      <Roadmap data={timelineData} />
      <ParallaxSection />
      <Testimonials />
      <ContactUs />
      <ButtonDemo />
      <Footer />
    </div>
  );
}
