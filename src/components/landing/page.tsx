import React, { useRef } from "react";
// import LeadForm from "./LeadForm";
import { useScroll, useTransform, motion } from "framer-motion";
import { AuroraBackground } from "../ui/aurora-background";
import { HeroParallax } from "../ui/hero-parallax";
import { products } from "@/constants/data";

const LandingPage = () => {
  return (
    <>
      <HeroParallax products={products} />
    </>
  );
};

export default LandingPage;
