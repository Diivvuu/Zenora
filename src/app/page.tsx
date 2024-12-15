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
    <>
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
