"use client";
import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import { timelineData } from "@/constants/data";
import ParallaxSection from "@/components/ui/parallexComponent";
import ScrollToContactButton from "@/components/sections/Contact/scrollToContactButton";
import { AnimatePresence } from "framer-motion";
import {
  Hero,
  Contact,
  Footer,
  Navigation,
  Testimonials,
  Timeline,
  Preloader,
} from "@/components";

export default function Home() {
  const contactUsRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const hasViewedLoader = sessionStorage.getItem("hasViewedLoader");

    if (!hasViewedLoader) {
      setIsLoading(true);
      sessionStorage.setItem("hasViewedLoader", "true"); // Mark as viewed

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2500);
    }

    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll();

      const lenis = new Lenis();
      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    })();
  }, []);

  const scrollToContact = () =>
    contactUsRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <ScrollToContactButton />
      <Navigation />
      <Hero />
      <Timeline data={timelineData} />
      <ParallaxSection />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
