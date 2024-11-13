import React from "react";
import Scene2 from "./scene2";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"]);

  return (
    <div className="h-screen bg-blue-200 overflow-hidden" ref={container}>
      <motion.div style={{ y }} className="relative h-full">
        <Scene2 />
        {/* <Image
          src={Background}
          fill
          alt="image"
          style={{ objectFit: "cover" }}
        /> */}
      </motion.div>
    </div>
  );
}
