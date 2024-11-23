import { TriangleAlertIcon } from "lucide-react";
import React from "react";

function Roadmap() {
  // Define the roadmap data
  const roadmapData = [
    { name: "Diagnosis", icon: <TriangleAlertIcon className="size-14" /> },
    { name: "Decision", icon: <TriangleAlertIcon className="size-14" /> },
    { name: "Treatment Plan", icon: <TriangleAlertIcon className="size-14" /> },
    { name: "Arrival", icon: <TriangleAlertIcon className="size-14" /> },
    { name: "Treatment", icon: <TriangleAlertIcon className="size-14" /> },
    { name: "Recovery", icon: <TriangleAlertIcon className="size-14" /> },
    { name: "After care", icon: <TriangleAlertIcon className="size-14" /> },
  ];

  return (
    <div className="mx-auto w-full py-32 bg-gray-200 font-poppins">
      <div className="flex justify-center items-center w-full gap-x-32 mb-5">
        {roadmapData.map((item, index) =>
          index % 2 !== 0 ? (
            <div
              key={index}
              className="ml-4 text-xl font-semibold w-full max-w-32 break-words text-center"
            >
              {roadmapData[index].name}
            </div>
          ) : (
            <>&nbsp;</>
          )
        )}
      </div>
      <div className="w-full flex justify-center items-center">
        {roadmapData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center gap-y-4"
          >
            {/* Icon and connecting line */}
            <div className="flex items-center">
              <div className="p-8 bg-blue-100 rounded-full shadow-md">
                {item.icon}
              </div>
              {index < roadmapData.length - 1 && (
                <div className="w-20 h-1 bg-black"></div>
              )}
            </div>

            {/* Map over names separately */}
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center w-full gap-x-32 mt-5">
        {roadmapData.map((item, index) =>
          index % 2 === 0 ? (
            <div
              key={index}
              className="ml-4 text-xl font-semibold w-full max-w-32 break-words text-center"
            >
              {roadmapData[index].name}
            </div>
          ) : (
            <>&nbsp;</>
          )
        )}
      </div>
    </div>
  );
}

export default Roadmap;
