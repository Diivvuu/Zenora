import React, { useRef } from "react";
import LeadForm from "./LeadForm";
import { useScroll, useTransform, motion } from "framer-motion";
import { Button } from "../ui/button";

const LandingPage = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"]);
  return (
    <>
      <div
        className="h-screen relative overflow-hidden z-10 gradient-1 "
        ref={container}
      >
        <motion.div style={{ y }} className="">
          {/* Main Section */}
          <section className="flex flex-col lg:flex-row w-full h-[80vh] mt-48">
            {/* Left Container */}
            <div className="flex flex-col justify-center gap-y-4 w-full lg:w-1/2 section-padding">
              <h1 className="3xl:text-10xl 2xl:text-9xl xl:text-6xl lg:text-5xl text-4xl font-poppins font-bold text-text-teal">
                Welcome to <br />
                <span>Zenora</span>
              </h1>
              <p className=" 2xl:text-4xl xl:text-3xl  lg:text-2xl  text-xl font-poppins text-text-white">
                Transforming Illness into Wellness
              </p>
              <Button variant="ghost" size="sm">
                Ghost
              </Button>
            </div>

            {/* Right Container */}
            <div className="flex items-center justify-center md:h-full w-full lg:w-1/2 relative">
              <div className="hero-bg h-[100vh]">
                <LeadForm />
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </>
  );
};

export default LandingPage;
