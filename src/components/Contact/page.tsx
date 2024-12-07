import React from "react";
import { SignupFormDemo } from "../ui/SignUpForm";
import { GlobeDemo } from "../ui/GithubGlobe";

function ContactUs() {
  return (
    <div className="w-full flex items-center justify-center gap-x-40 section-padding bg-black">
      <div className="w-1/2">
        <SignupFormDemo />
      </div>
      <div className="w-1/2">
        <GlobeDemo />
      </div>
    </div>
  );
}

export default ContactUs;
