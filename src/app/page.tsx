"use client";
import { AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Preloader from "@/components/Preloader";
import LandingPage from "@/components/landing/page";
import Lenis from "lenis";
import HeaderComponent from "@/components/Header";
import Services from "@/components/Services/page";
import Footer from "@/components/Footer/page";
import { timelineData } from "@/constants/data";
import ContactUs from "@/components/Contact/page";
import { Marquee } from "@/components/ui/marquee";
import Testimonials from "@/components/Testimonials/page";
import Roadmap from "@/components/Roadmap/page";

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
    <>
      {/* <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence> */}
      <HeaderComponent />
      <LandingPage
        scrollToContact={() =>
          contactUsRef.current.scrollIntoView({ behavior: "smooth" })
        }
      />
      {/* <Services /> */}
      <Roadmap data={timelineData} />
      <Testimonials />
      <div ref={contactUsRef} id="contact-us">
        <ContactUs />
      </div>
      <Footer />
    </>
  );
}
