import React from "react";
import { SignupFormDemo } from "../ui/SignUpForm";
import { GlobeDemo } from "../ui/GithubGlobe";
import { AuroraBackground } from "../ui/aurora-background";

function ContactUs() {
  return (
    <div className="w-full flex items-center justify-center gap-x-40 section-padding bg-[#1a1a1a]  z-[10]">
      <div className="w-1/2">
        <GlobeDemo />
      </div>
      <div className="w-1/2"></div>
      <SignupFormDemo />
    </div>
  );
}

export default ContactUs;
