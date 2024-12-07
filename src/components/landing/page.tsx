import React, { useRef } from "react";
// import LeadForm from "./LeadForm";
import { useScroll, useTransform, motion } from "framer-motion";
import { AuroraBackground } from "../ui/aurora-background";
import SearchBar from "../ui/searchBar";
import { BackgroundBeams } from "../ui/background-beams";

const LandingPage = () => {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"]);
  return (
<<<<<<< HEAD
    <>
      <AuroraBackground showRadialGradient={true}>
        <BackgroundBeams />
        <div className="z-10 mb-5 relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0 section-padding  h-[70vh] flex flex-col justify-center">
          <div className="mb-[5rem]">
            <h1 className="primary-heading">
              Welcome to <br />
              Zenora
            </h1>
          </div>
          <div>
            <SearchBar />
            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              Shimmer
            </button>
          </div>
        </div>
      </AuroraBackground>
      {/* <HeroParallax products={products} /> */}
    </>
=======
    <div className="overflow-hidden h-screen">
      <motion.div style={{ y }} className="relative h-full">
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
      </motion.div>
    </div>
>>>>>>> 2dd945a7a432012f85b0c50ce0be8cace14bfe64
  );
};

export default LandingPage;
