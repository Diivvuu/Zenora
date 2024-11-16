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
    <div className="h-[200vh]">
      {" "}
      {/* Adjusted height to allow scrolling */}
      <div className="h-[100vh] flex items-center justify-center">
        <h1
          onMouseOver={() => {
            setIsActive(true);
          }}
          onMouseLeave={() => {
            setIsActive(false);
          }}
          className="text-[4.5vw] max-w-[90vw] text-center text-white z-50 p-20 --font-lora"
        >
          The quick brown fox jumps over the lazy dog
        </h1>
      </div>
      {/* <GradientCursor isActive={isActive} /> */}
    </div>
  );
}
