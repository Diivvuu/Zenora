import React from "react";
import { SignupFormDemo } from "../ui/SignUpForm";
import { GlobeDemo } from "../ui/GithubGlobe";

function ContactUs() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center gap-x-40">
      <div>
        <SignupFormDemo />
      </div>
      <div>
        <GlobeDemo />
      </div>
    </div>
  );
}

export default ContactUs;
