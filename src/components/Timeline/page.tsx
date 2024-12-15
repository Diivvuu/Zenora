import React from "react";

type TimelineProps = {
  data: [];
};

const Timeline: React.FC<TimelineProps> = ({ data }) => {
  return (
    <div
      id="section-timeline"
      className="section-padding flex md:flex-col h-[60vh] md:h-[50vh] justify-between md:justify-start"
    >
      <div className=" mb-[4rem] text-center flex flex-col justify-center">
        <h2 className="tertiary-heading highlighted-text-dark text-left md:text-center">
          Roadmap
        </h2>
        <p className="subheading text-left md:text-center">
          Here is how we assist you!
        </p>
      </div>

      <div className="flex justify-center items-center w-[50%] md:w-full">
        <div className="relative flex flex-col md:flex-row md:justify-between md:items-center w-11/12 max-w-screen-lg">
          {/* Timeline Line */}
          <div
            className="absolute md:top-[15%] md:left-0 md:w-full md:h-0.5 bg-[#9999] md:transform md:-translate-y-1/2 
                        top-0 left-5 w-0.5"
          ></div>

          {data.map((item, index) => (
            <div
              key={index}
              className="flex md:flex-col md:items-center relative text-center z-10 mb-8 md:mb-0 gap-4"
            >
              <div className="w-4 h-4 bg-[var(--color-primary-500)] rounded-full shadow-md   my-auto"></div>
              <div>
                <p className="large-font-size font-medium text-left">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
