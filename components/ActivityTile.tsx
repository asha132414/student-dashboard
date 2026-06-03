"use client";

import React from "react";

interface ActivityData {
  day: string;
  hours: number;
}

interface ActivityTileProps {
  data: ActivityData[];
}

export default function ActivityTile({ data }: ActivityTileProps) {
  // గరిష్ట వాల్యూ కనుక్కోవడం
  const maxHours = data && data.length > 0 ? Math.max(...data.map(d => d.hours)) : 10;

  return (
    <div className="bg-[#121212] p-6 rounded-2xl border border-[#222] shadow-xl col-span-1 md:col-span-2">
      <h2 className="text-xl font-bold text-white mb-6">Weekly Activity</h2>
      <div className="flex items-end justify-between h-48 pt-4 px-2 bg-[#1a1a1a] rounded-xl gap-2">
        {!data || data.length === 0 ? (
          <div className="text-gray-500 text-center w-full pb-20">No data available</div>
        ) : (
          data.map((item, index) => {
            // పర్సంటేజ్ లెక్కించి దాన్ని స్టైల్ బాక్స్ లోకి పంపుతున్నాం
            const barPercentage = Math.min(100, Math.max(5, (item.hours / maxHours) * 100));
            
            return (
              <div key={index} className="flex flex-col items-center flex-1 group">
                <span className="text-xs text-[#38bdf8] opacity-0 group-hover:opacity-100 transition-opacity mb-1 font-semibold">
                  {item.hours}h
                </span>
                
                {/* ఇన్-లైన్ స్టైల్ ని Tailwind ఆర్బిట్రరీ వాల్యూగా మార్చాము */}
                <div 
                  className="w-full bg-gradient-to-t from-[#0284c7] to-[#38bdf8] rounded-t-md transition-all duration-500"
                  style={{ height: `${barPercentage}%` }}
                ></div>
                
                <span className="text-xs text-gray-400 mt-2 font-medium">
                  {item.day}
                </span>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}