import React from "react";

interface TimelineEntry {
  title: string;
  description: string;
}

interface RoadmapProps {
  data: TimelineEntry[];
}

function Roadmap({ data }: RoadmapProps) {
  return (
    <div className="w-full flex flex-col items-center justify-center py-40">
      {/* Heading */}
      <div className="mb-[4rem] text-center">
        <h2 className="tertiary-heading highlighted-text-dark">Roadmap</h2>
        <p className="subheading">How can we help you??</p>
      </div>

      {/* Timeline Container */}
      <div className="w-9/12 flex md:flex-row flex-col items-center relative">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex md:flex-col flex-row items-center text-center relative w-full md:mb-0 mb-8"
          >
            {/* Circle */}
            <div
              className={`w-8 h-8 flex items-center justify-center rounded-full border-[1.5px] border-blue-500 bg-white z-10`}
            >
              <div className="w-[0.9rem] h-[0.9rem] bg-blue-500 rounded-full"></div>
            </div>

            {/* Horizontal or Vertical Line */}
            {index < data.length - 1 && (
              <div
                className={`absolute md:top-3.5 md:left-[calc(50%+10px)] md:right-[calc(-50%-10px)] md:h-1 md:bg-black
                            left-[calc(50%-1px)] top-8 bottom-0 w-[2px] h-full bg-black md:w-auto z-0`}
              ></div>
            )}

            {/* Title & Description */}
            <div className="mt-4 md:mt-0 absolute md:top-10 top-12 left-12 md:left-0 flex flex-col justify-center items-center">
              <span className="small-font-size">STEP {index + 1}</span>
              <p className="subheading highlighted-text-dark font-medium">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Roadmap;
