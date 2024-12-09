"use client";

import { AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Preloader from "@/components/Preloader";
import Button from "@/components/ui/button";
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
      <HeaderComponent />
      <Hero
        scrollToContact={() =>
          contactUsRef.current.scrollIntoView({ behavior: "smooth" })
        }
      />
      <Roadmap data={timelineData} />
      <Testimonials />
      <ParallaxSection />
      <div ref={contactUsRef} id="contact-us">
        <ContactUs />
      </div>

      <ButtonDemo />
      <Footer />
    </div>
  );
}
