"use client";

import React from "react";

interface ActivityItem {
  day: string;
  hours: number;
}

interface ActivityTileProps {
  data: ActivityItem[];
}

export default function ActivityTile({ data }: ActivityTileProps) {
  const maxHours = data.length > 0 ? Math.max(...data.map((d) => d.hours)) : 1;

  const chartData = data.length > 0 ? data : [
    { day: "Mon", hours: 5 },
    { day: "Tue", hours: 8 },
    { day: "Wed", hours: 2 },
    { day: "Thu", hours: 9 },
    { day: "Fri", hours: 6 },
  ];

  return (
    <div className="bg-[#111111] p-6 rounded-[2rem] border border-[#222] shadow-xl w-full">
      <h2 className="text-xl font-bold text-white mb-6 tracking-wide">Weekly Activity</h2>
      
      <div className="flex flex-col gap-4 w-full pt-2">
        {chartData.map((item, index) => {
          const barPercentage = Math.max((item.hours / maxHours) * 100, 8);
          
          return (
            <div key={index} className="flex items-center w-full gap-4 group">
              <span className="text-sm text-gray-400 font-semibold w-10 shrink-0 uppercase tracking-wider">
                {item.day}
              </span>
              
              <div className="flex-1 bg-[#161616] h-7 rounded-lg overflow-hidden border border-[#222] relative flex items-center">
                {/* 🎯 ఇన్‌లైన్ స్టైల్ వార్నింగ్ రాకుండా Tailwind Arbitrary Square Brackets వాడాము */}
                <div 
                  className="bg-[#00c853] h-full rounded-r-md transition-all duration-700 ease-out shadow-[0_0_15px_rgba(0,200,83,0.2)]"
                  style={{ width: `${barPercentage}%` }}
                />
                
                <span className="absolute right-3 text-[11px] font-bold text-gray-500 group-hover:text-[#00c853] transition-colors duration-300">
                  {item.hours} hrs
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}