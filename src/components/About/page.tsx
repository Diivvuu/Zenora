import React from "react";
import Scene2 from "./scene2";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"]);
  console.log(y);
  return (
    <div className="section-padding overflow-hidden">
      <Scene2 />
      {/* <Image
          src={Background}
          fill
          alt="image"
          style={{ objectFit: "cover" }}
        /> */}
    </div>
  );
}
