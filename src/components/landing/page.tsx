import React, { useRef } from "react";
import LeadForm from "./LeadForm";
import { useScroll, useTransform, motion } from "framer-motion";

const LandingPage = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"]);
  return (
    <div className="h-screen overflow-hidden" ref={container}>
      <motion.div style={{ y }} className="section-padding">
        <section className="flex flex-col md:h-[80vh] md:flex-row bg-black w-full h-auto mt-20">
          {/* <section className="flex flex-col md:h-[80vh] md:flex-row bg-black w-screen h-auto"> */}
          <div className="bg-gray-100 flex flex-col items-center justify-center gap-y-4 h-[50vh] md:h-full w-full md:w-1/2">
            <h1 className="text-3xl text-center">
              Welcome to <span className="font-bold text-5xl">Zenora</span>
            </h1>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum ea vero veniam omnis incidunt sint! Excepturi
              perferendis quia laboriosam ducimus in modi! Adipisci quidem ad
              eligendi recusandae inventore laudantium ipsa!
            </p>
          </div>
          <div className="bg-gray-100 flex items-center justify-center h-[50vh] md:h-full w-full md:w-1/2">
            <LeadForm />
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default LandingPage;
