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
    <div className="w-full flex items-center justify-center py-40 h-[50vh]">
      <div className="w-9/12 flex items-center relative">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center relative w-full"
          >
            {/* Circle */}
            <div
              className={`w-8 h-8 flex items-center justify-center rounded-full border-[1.5px] border-blue-500 bg-white z-10`}
            >
              <div className="w-[0.9rem] h-[0.9rem] bg-blue-500 rounded-full"></div>
            </div>

            {/* Horizontal Line */}
            {index < data.length - 1 && (
              <div
                className={`absolute top-3.5 left-[calc(50%+10px)] right-[calc(-50%-10px)] h-1 bg-blue-500 z-0`}
              ></div>
            )}

            {/* Title & Description */}
            {/* <div className="mt-4"> */}
            <div className="absolute left-40 top-10 flex flex-col justify-center items-start text-lg w-full font-semibold text-gray-800">
              <span className="text-sm text-gray-500">STEP {index + 1}</span>
              {item.title}
            </div>
            {/* <p className="text-sm font-medium text-blue-500">
              {item.description}
            </p> */}
            {/* </div> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Roadmap;
