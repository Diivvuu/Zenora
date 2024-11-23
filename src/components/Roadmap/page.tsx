import { TriangleAlertIcon } from "lucide-react";
import React from "react";

function Roadmap() {
  // Define the roadmap data
  const roadmapData = [
    { name: "Diagnosis", icon: <TriangleAlertIcon className="size-14" /> },
    { name: "Decision", icon: <TriangleAlertIcon className="size-14" /> },
    {
      name: "Treatment Plant",
      icon: <TriangleAlertIcon className="size-14" />,
    },
    { name: "Arrival", icon: <TriangleAlertIcon className="size-14" /> },
    { name: "Treatment", icon: <TriangleAlertIcon className="size-14" /> },
    { name: "Recovery", icon: <TriangleAlertIcon className="size-14" /> },
    { name: "After care", icon: <TriangleAlertIcon className="size-14" /> },
  ];

  return (
    <div className="mx-auto w-full py-32 bg-gray-200">
      <div className="flex flex-col sm:flex-row items-center justify-center  space-y-8 sm:space-y-0">
        {roadmapData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-start items-start gap-y-4 "
          >
            {index % 2 !== 0 ? (
              <div className="text-center w-6/12 text-xl font-semibold">
                {item.name}
              </div>
            ) : (
              <>&nbsp;</>
            )}
            {/* Icon and Line */}
            <div className="flex items-center justify-center gap-x-0">
              <div className="p-8 bg-blue-100 rounded-full shadow-md">
                {item.icon}
              </div>
              {index < roadmapData.length - 1 && (
                <div className="sm:block w-20 h-1 bg-gradient-to-r from-blue-300 to-blue-600 "></div>
              )}
            </div>
            {index % 2 === 0 ? (
              <div className="text-center w-9/12 text-xl font-semibold">
                {item.name}
              </div>
            ) : (
              <>&nbsp;</>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Roadmap;
