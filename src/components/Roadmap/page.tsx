import React from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

interface RoadmapProps {
  data: TimelineEntry[];
}

function Roadmap({ data }: RoadmapProps) {
  return (
    <div className="h-[40vh] z-10 w-full flex items-center justify-center relative">
      <div className="w-8/12 relative">
        <div className="absolute w-full h-4 bg-gradient-to-r from-gray-300 via-gray-500 to-gray-800 blur-[1.5px] rounded-md"></div>
        <div className="w-full flex justify-between items-center px-16">
          {data.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center text-center"
            >
              <h3
                className={`text-lg font-semibold text-slate-600 absolute bottom-10 ${
                  index % 2 === 0 ? "bottom-32" : ""
                }`}
              >
                {item.title}
              </h3>
              <div className="absolute text-lg font-bold w-4 h-4 -top-1/2 bg-black rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
