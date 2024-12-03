"use client";
import { useScroll } from "framer-motion";
import Lenis from "lenis";
import { services } from "@/constants/data";
import { useRef, useEffect } from "react";
import Card from "./Card";

function Services() {
  const cardRef = useRef([]);
  useEffect(() => {
    // Log all the service-card references
    console.log("All Card Refs:", cardRef.current);
  }, []); // Runs once after the component mounts

  return (
    <section className="section-services mt-[70vh]">
      <div
        className="section-padding w-full h-full relative mx-auto"
        style={{ width: "70%" }}
      >
        <div
          className="services-cards absolute top-0 left-0 flex gap-6 inset-0"
          style={{ top: "-100%" }}
        >
          {services.map((service, i) => (
            <Card
              key={i}
              service={service}
              cardRef={(el) => (cardRef.current[i] = el)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
