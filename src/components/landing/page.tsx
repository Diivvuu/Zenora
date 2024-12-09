import React, { useRef } from "react";
// import LeadForm from "./LeadForm";
import { useScroll, useTransform, motion } from "framer-motion";
import { AuroraBackground } from "../ui/aurora-background";
import SearchBar from "../ui/searchBar";
import { BackgroundBeams } from "../ui/background-beams";
import { FocusCards } from "../ui/focus-cards";
import { services } from "@/constants/data";

const Hero = ({ scrollToContact }) => {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"]);
  return (
    <>
      <AuroraBackground showRadialGradient={true}>
        <BackgroundBeams />
        <div className="z-10 mb-[12rem] relative px-4 w-full  left-0 top-0 section-padding h-[70vh] flex flex-col justify-center">
          <div className="mb-[5rem]">
            <h1 className="primary-heading">
              Welcome to <br />
              Zenora
            </h1>
          </div>
          <div>
            <SearchBar />
          </div>
          <div className="absolute inset-0 top-[110%] flex items-center justify-center mt-20">
            <FocusCards cards={services} />
          </div>
          <div
            className="absolute right-40 bottom-20"
            onClick={scrollToContact}
          >
            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              Tap here
            </button>
          </div>
        </div>
      </AuroraBackground>
      {/* <HeroParallax products={products} /> */}
    </>
  );
};

export default Hero;
