import React from "react";
import { SignupFormDemo } from "../ui/SignUpForm";
import { GlobeDemo } from "../ui/GithubGlobe";
import { AuroraBackground } from "../ui/aurora-background";

function ContactUs() {
  return (
    <div className="w-full flex min-h-screen items-center justify-center gap-x-40 px-40 bg-black">
      <div className="min-w-1/2">
        <GlobeDemo />
      </div>
      <div className="w-1/2 px-40">
        <SignupFormDemo />
      </div>
    </div>
  );
}

export default ContactUs;
