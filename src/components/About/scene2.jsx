"use client";
import React, { useState, useEffect } from "react";
import GradientCursor from "./GradientCursor";
import { gsap } from "gsap"; // Importing GSAP

export default function Scene2() {
  const [isActive, setIsActive] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     // Check if scrolled past 100vh
  //     if (window.scrollY > window.innerHeight) {
  //       console.log("yes");
  //       setIsActive(true);
  //     } else {
  //       console.log("not");
  //       setIsActive(false);
  //     }
  //   };

  //   // Add scroll event listener
  //   window.addEventListener("scroll", handleScroll);

  //   // Cleanup on component unmount
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <div className="h-[200vh] ok">
      {" "}
      {/* Adjusted height to allow scrolling */}
      <div className="h-[100vh] flex items-center justify-center">
        <h2
          onMouseOver={() => {
            setIsActive(true);
          }}
          onMouseLeave={() => {
            setIsActive(false);
          }}
          className="lg:text-8xl md:text-6xl text-4xl font-playfair text-white semi-bold"
        >
          About ZENORA
        </h2>
      </div>
      {/* <GradientCursor isActive={isActive} /> */}
    </div>
  );
}
