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
        className="hero relative overflow-hidden z-10 gradient-1 "
        ref={container}
      >
        <motion.div style={{ y }} className="">
          {/* Main Section */}
          <section className="flex flex-col lg:flex-row w-full h-[80vh] mt-48">
            {/* Left Container */}
            <div className="flex flex-col justify-center gap-y-4 w-full lg:w-1/2 section-padding">
              <h1 className="primary-heading">
                Welcome to <br />
                <span>Zenora</span>
              </h1>
              <p className=" 2xl:text-4xl xl:text-3xl  lg:text-2xl  text-xl font-poppins text-text-white lg:text-left text-center mb-16">
                Transforming Illness into Wellness
              </p>
              <span>
                <Button
                  variant="default"
                  size="default"
                  className="after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-teal-500 after:bottom-[-2px] after:left-0 after:scale-0 hover:after:scale-100 after:transition-transform after:duration-300"
                >
                  Ghost
                </Button>
              </span>
            </div>

            {/* Right Container */}
            <div className="flex items-center justify-center md:h-full w-full lg:w-1/2 relative">
              <div className="h-full w-full mr-8 section-padding">
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
