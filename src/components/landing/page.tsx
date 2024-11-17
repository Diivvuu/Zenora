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
      <div className="h-screen relative overflow-hidden z-10 " ref={container}>
        <motion.div style={{ y }} className="">
          <section className="flex flex-col md:h-[80vh] md:flex-row w-full h-auto mt-20">
            <div className=" flex flex-col justify-center gap-y-4 h-[50vh] md:h-full w-full md:w-1/2 section-padding">
              <h1 className="lg:text-10xl md:text-6xl text-4xl font-playfair text-text-primary semi-bold">
                Welcome to <br></br>
                <span className="font-semibold lora text-text-navy">
                  Zenora
                </span>
              </h1>
              <p className="lg:text-3xl md:text-2xl text-xl font-nunito">
                Transforming Illness into Wellness
              </p>
              <Button>Heelo</Button>
            </div>
            <div className=" flex items-center justify-center h-[50vh] md:h-full w-full md:w-1/2 relative">
              <div className="h-screen absolute inset-0">
                <div className="relative h-[100vh]">
                  <div className="gradient-1 absolute inset-0"></div>
                </div>
              </div>
              <LeadForm />
            </div>
          </section>
        </motion.div>
      </div>
    </>
  );
};

export default LandingPage;
