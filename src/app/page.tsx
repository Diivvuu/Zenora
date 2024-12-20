"use client";

import { useEffect, useRef, useState } from "react";
import Hero from "@/components/landing/page";
import Lenis from "lenis";
import Footer from "@/components/Footer/page";
import { timelineData } from "@/constants/data";
import ContactUs from "@/components/Contact/page";
import Testimonials from "@/components/Testimonials/page";
import ParallaxSection from "@/components/ui/parallexComponent";
import Navigation from "@/components/Header/page";
import ScrollToContactButton from "@/components/Contact/scrollToContactButton";
import Timeline from "@/components/Timeline/page";
import { AnimatePresence } from "framer-motion";
import PreLoader from "@/components/Preloader";

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
        {isLoading && <PreLoader />}
      </AnimatePresence>
      <ScrollToContactButton />
      <Navigation />
      <Hero />
      <Timeline data={timelineData} />
      <ParallaxSection />
      <Testimonials />
      <ContactUs />
      <Footer />
    </>
  );
}
