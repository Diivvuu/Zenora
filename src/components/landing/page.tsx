import React, { useRef } from "react";
// import LeadForm from "./LeadForm";
import { useScroll, useTransform, motion } from "framer-motion";
import { AuroraBackground } from "../ui/aurora-background";
import SearchBar from "../ui/searchBar";
import { BackgroundBeams } from "../ui/background-beams";
import { FocusCards } from "../ui/focus-cards";
import { services } from "@/constants/data";

const Hero = () => {
  const container = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"]);
  return (
    <div className="h-screen overflow-hidden">
      <motion.div className="reltive h-full" style={{ y }}>
        <AuroraBackground showRadialGradient={true}>
          <BackgroundBeams />
          <div className="z-10 mb-[12rem] relative px-4 w-full  left-0 top-0 section-padding h-[70vh] flex flex-col justify-center">
            <div className="mb-[5rem]">
              <h1 className="primary-heading highlighted-text-light">
                Welcome to <br />
                Zenora
              </h1>
            </div>
            <div>
              <SearchBar />
            </div>
            <div className="absolute inset-0 top-[105%] md:top-[110%] flex items-center justify-center mt-20">
              <FocusCards cards={services} />
            </div>
          </div>
        </AuroraBackground>
      </motion.div>
    </div>
  );
};

export default Hero;
