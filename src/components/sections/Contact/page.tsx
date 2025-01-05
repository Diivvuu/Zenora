import React from "react";
import { SignupFormDemo } from "../../ui/SignUpForm";
import { GlobeDemo } from "../../ui/GithubGlobe";

function ContactUs() {
  return (
    <div
      id="section-contact"
      className="w-full flex flex-col md:flex-row items-center justify-center gap-y-2 xl:gap-y-0 xl:gap-x-40 bg-[#000] h-[80vh] section-padding"
    >
      <div className="hidden md:block w-1/4 md:w-1/2">
        <GlobeDemo />
      </div>
      <div className="w-full md:w-1/2 md:pl-[6rem] xl:pl-[8rem]">
        <SignupFormDemo />
      </div>
    </div>
  );
}

export default ContactUs;
