import React, { useRef } from "react";
// import LeadForm from "./LeadForm";
import { useScroll, useTransform, motion } from "framer-motion";
// import { Button } from "../ui/button";

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
        className="h-[70vh] relative overflow-hidden gradient-1 flex justify-center  "
        ref={container}
      >
        <motion.div style={{ y }} className="">
          <div className="flex flex-col justify-center gap-y-4 section-padding h-full">
            <h1 className="primary-heading">
              Welcome to
              <span> Zenora</span>
            </h1>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default LandingPage;
