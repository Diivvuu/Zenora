import React from "react";
import { SignupFormDemo } from "../ui/SignUpForm";
import { GlobeDemo } from "../ui/GithubGlobe";
import { AuroraBackground } from "../ui/aurora-background";

function ContactUs() {
  return (
    <div className="w-full flex h-screen items-center justify-center gap-x-40 px-20 bg-black z-[10]">
      <div className="hide-on-small md:w-1/2 md:h-full md:flex md:items-center">
        <GlobeDemo />
      </div>
      <div className="w-1/2 px-40">
        <SignupFormDemo />
      </div>
    </div>
  );
}

export default ContactUs;
