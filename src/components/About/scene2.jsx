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
    <div ref={containerRef} className="h-[200vh] ok">
      <div className="h-[100vh] flex items-center justify-center">
        <h2 className="lg:text-8xl md:text-6xl text-4xl font-playfair text-white font-bold">
          About ZENORA
        </h2>
        <p className="lg:text-3xl md:text-6xl text-4xl font-nunito text-white text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
          consequatur ut numquam dolor quam aperiam amet quasi, unde facere? Quo
          fuga id commodi reprehenderit. Impedit fugit error illum adipisci
          nobis?
        </p>
      </div>
    </div>
  );
}
