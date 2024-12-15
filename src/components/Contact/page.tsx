import React from "react";
import { SignupFormDemo } from "../ui/SignUpForm";
import { GlobeDemo } from "../ui/GithubGlobe";

function ContactUs() {
  return (
    <div
      id="section-contact"
      className="w-full flex flex-col xl:flex-row min-h-screen items-center justify-center gap-y-2 xl:gap-y-0 xl:gap-x-40 px-2 xl:px-40 bg-[#1b1b1b]"
    >
      <div className="hidden xl:block min-w-1/2">
        <GlobeDemo />
      </div>
      <div className="w-full  xl:w-4/12 px-20 md:px-40 xl:px-20">
        <SignupFormDemo />
      </div>
    </div>
  );
}

export default ContactUs;
