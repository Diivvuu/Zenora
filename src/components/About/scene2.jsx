"use client";

import { useEffect, useRef } from "react";

export default function Scene2() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    // Create the circle element
    const cursorCircle = document.createElement("div");
    cursorCircle.style.width = "180px";
    cursorCircle.style.height = "180px";
    cursorCircle.style.position = "fixed";
    cursorCircle.style.top = "-70px";
    cursorCircle.style.bottom = "0";
    cursorCircle.style.left = "-70px";
    cursorCircle.style.right = "0";
    cursorCircle.style.borderRadius = "50%";
    cursorCircle.style.backgroundColor = "white";
    cursorCircle.style.pointerEvents = "none";
    cursorCircle.style.opacity = "0";
    cursorCircle.style.transition = "opacity 0.2s ease, transform 0.1s ease";
    cursorCircle.style.filter = "blur(100px)"; // Add blur effect
    cursorCircle.style.zIndex = "9999";
    document.body.appendChild(cursorCircle);

    const handleMouseMove = (e) => {
      // Only activate when the mouse is inside the container
      const { left, top, right, bottom } = container.getBoundingClientRect();
      const scrollY = window.scrollY;
      if (
        e.clientX >= left &&
        e.clientX <= right &&
        e.clientY >= top &&
        e.clientY <= bottom &&
        scrollY < window.innerHeight // Check if scroll is within 100vh
      ) {
        cursorCircle.style.opacity = "1";
        cursorCircle.style.transform = `translate(${e.clientX - 20}px, ${
          e.clientY - 20
        }px)`;
      } else {
        cursorCircle.style.opacity = "0";
      }
    };

    const handleScroll = () => {
      if (window.scrollY >= window.innerHeight) {
        cursorCircle.style.opacity = "0";
      }
    };

    const handleMouseOver = () => {
      if (window.scrollY < window.innerHeight / 2) {
        cursorCircle.style.opacity = "1";
      }
    };

    const handleMouseLeave = () => {
      cursorCircle.style.opacity = "0";
    };

    const hoverTargets = container.querySelectorAll("h2, p");

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    hoverTargets.forEach((target) => {
      target.addEventListener("mouseover", handleMouseOver);
      target.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      hoverTargets.forEach((target) => {
        target.removeEventListener("mouseover", handleMouseOver);
        target.removeEventListener("mouseleave", handleMouseLeave);
      });
      cursorCircle.remove();
    };
  }, []);

  return (
    <div className="h-[200vh] flex flex-col justify-center">
      <div className="h-[100vh]"></div>
      <div className="h-[90vh]  grid grid-cols-[0.5fr_1.5fr_1fr]  grid-rows-[1fr_1.5fr_1.5fr] gap-x-[4rem] gap-y-[4rem]">
        <div class="col-span-3 flex items-center">
          <h2 className="about-us">ABOUT</h2>
        </div>
        <div class="">
          <h2 className="about-us">US</h2>
        </div>
        <div class="bg-black rounded-custom-20 col-start-2 col-end-3 row-start-2 row-end-4 about-us-bg1 "></div>
        <div class="bg-black rounded-custom-20 about-us-bg2 "></div>
        <div class="box-5 text-block">
          {" "}
          <h3 className="lg:text-6xl">
            Luxurious Interior and Industrial Design
          </h3>
          <p>
            Modern Elegance: Designs featuring clean lines, neutral palettes,
            and high-quality materials.
          </p>
        </div>
        <div class="box-6 text-block">
          {" "}
          <h3>Our Philosophy</h3>
          <p>
            At Britto Charette, we believe in creating luxurious, personalized
            environments that reflect our clients&apos; tastes and lifestyles.
          </p>
        </div>
      </div>
    </div>
  );
}
