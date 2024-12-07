import React, { useRef } from "react";
// import LeadForm from "./LeadForm";
import { useScroll, useTransform, motion } from "framer-motion";
import { AuroraBackground } from "../ui/aurora-background";
import SearchBar from "../ui/searchBar";
import { HeroParallax } from "../ui/hero-parallax";
import { products } from "@/constants/data";
import { BackgroundBeams } from "../ui/background-beams";

const LandingPage = () => {
  return (
    <>
      <AuroraBackground showRadialGradient={true}>
        <BackgroundBeams />
        <div className="z-10 mb-5 relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0 section-padding  h-[100vh] flex flex-col justify-center">
          <div className="mb-[5rem]">
            <h1 className="primary-heading">
              Welcome to <br />
              Zenora
            </h1>
          </div>
          <div>
            <SearchBar />
          </div>
        </div>
      </AuroraBackground>
      {/* <HeroParallax products={products} /> */}
    </>
  );
};

export default LandingPage;
