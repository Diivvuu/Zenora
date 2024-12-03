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
    <section className="h-screen w-full">
      <div className="w-full h-full relative m-auto">
        <div className="flex items-center">
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
