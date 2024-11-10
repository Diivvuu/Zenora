import React from "react";
import LeadForm from "./LeadForm";

const LandingPage = () => {
  return (
    <>
      {" "}
      <div className="section-padding">
        <section className=" flex flex-col md:h-[80vh] md:flex-row bg-black w-screen h-auto">
          <div className="bg-gray-100 flex items-center justify-center h-[50vh] md:h-full w-full md:w-1/2">
            hello
          </div>
          <div className="bg-gray-100 flex items-center justify-center h-[50vh] md:h-full w-full md:w-1/2">
            <LeadForm />
          </div>
        </section>
      </div>
    </>
  );
};

export default LandingPage;
