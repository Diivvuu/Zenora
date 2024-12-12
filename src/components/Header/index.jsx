"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "./style.module.scss";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import Nav from "./nav/page";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Rounded from "../../common/RoundedButton";
// import Magnetic from "../../common/Magnetic";
import Image from "next/image";

export default function HeaderComponent() {
  const header = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  const button = useRef(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);
  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 1024);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);
  useLayoutEffect(() => {
    const isMobileOrTablet = window.innerWidth <= 1024;
    gsap.registerPlugin(ScrollTrigger);

    if (!isMobileOrTablet) {
      // Apply scroll-trigger behavior only for larger screens
      gsap.to(button.current, {
        scrollTrigger: {
          trigger: document.documentElement,
          start: 0,
          end: window.innerHeight / 2,
          onLeave: () => {
            gsap.to(button.current, {
              scale: 1,
              duration: 0.25,
              ease: "power1.out",
            });
          },
          onEnterBack: () => {
            gsap.to(
              button.current,
              { scale: 0, duration: 0.25, ease: "power1.out" },
              setIsActive(false)
            );
          },
        },
      });
    } else {
      // Ensure the button is always visible on mobile or tablet
      gsap.set(button.current, {
        scale: 1, // Ensure it's fully visible
      });
    }
  }, []);

  return (
    <>
      <div
        ref={header}
        className={`${styles.header} section-padding-sm  relative z-11`}
      >
        <div className="inset-0 absolute  "> </div>
        <div>
          <Image src="/logo_2.png" alt="logo" width={100} height={100} />
        </div>
        <div className={styles.nav}>
          <div className={styles.el}>
            <a className="font-poppins text-text-white lg:text-2xl md:text-2xl cursor-pointer">
              Work
            </a>
          </div>
          <div className={styles.el}>
            <a className="font-poppins text-text-white lg:text-2xl md:text-2xl cursor-pointer">
              About
            </a>
          </div>
          <div className={styles.el}>
            <a className="font-poppins text-text-white lg:text-2xl md:text-2x cursor-pointer">
              Contact
            </a>
          </div>
        </div>
      </div>

      <div ref={button} className={styles.headerButtonContainer}>
        <Rounded
          onClick={() => {
            setIsActive(!isActive);
          }}
          className={`${styles.button}`}
        >
          <div
            className={`${styles.burger} ${
              isActive ? styles.burgerActive : ""
            }`}
          ></div>
        </Rounded>
      </div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </>
  );
}
