"use client";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Preloader from "@/components/Preloader";
import LandingPage from "@/components/landing/page";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll(); // Initialize without assigning

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2500);
    })();
  }, []);

  return (
    <main className="">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <LandingPage />
    </main>
  );
}
