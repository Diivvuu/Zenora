"use client";
import { useScroll } from "framer-motion";
import Lenis from "lenis";
import React, { useEffect, useRef } from "react";
import { projects } from "@/constants/data";
import Card from "./Card";

function Services() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });
  return (
    <>
      <div className="flex">
        <div className="left-container">
          <h2 className="lg:text-8xl md:text-6xl text-4xl font-playfair  font-bold text-center relative ">
            Our services
          </h2>
        </div>
        <div ref={container} className=" relative section-padding">
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                {...project}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Services;
