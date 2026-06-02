"use client";

import React from "react";

// 1. డేటా స్వీకరించడానికి టైప్ ఇంటర్‌ఫేస్ క్రియేట్ చేసాము
interface ActivityData {
  day: string;
  hours: number;
}

interface ActivityTileProps {
  data: ActivityData[];
}

export default function ActivityTile({ data }: ActivityTileProps) {
  // గరిష్ట వాల్యూ కనుక్కోవడం (గ్రాఫ్ హైట్ సెట్ చేయడానికి)
  const maxHours = data.length > 0 ? Math.max(...data.map(d => d.hours)) : 10;

  return (
    <div className="bg-[#121212] p-6 rounded-2xl border border-[#222] shadow-xl col-span-1 md:col-span-2">
      <h2 className="text-xl font-bold text-white mb-6">Weekly Activity</h2>
      
      {/* గ్రాఫ్ డిజైన్ */}
      <div className="flex items-end justify-between h-48 pt-4 px-2 bg-[#1a1a1a] rounded-xl gap-2">
        {data.length === 0 ? (
          <div className="text-gray-500 text-center w-full pb-20">No data available</div>
        ) : (
          data.map((item, index) => {
            // పర్సంటేజ్ ప్రకారం బార్ హైట్ లెక్కించడం
            const barHeight = `${(item.hours / maxHours) * 100}%`;
            
            return (
              <div key={index} className="flex flex-col items-center flex-1 group">
                {/* హోవర్ చేసినప్పుడు గంటలు చూపించడానికి */}
                <span className="text-xs text-[#38bdf8] opacity-0 group-hover:opacity-100 transition-opacity mb-1 font-semibold">
                  {item.hours}h
                </span>
                
                {/* యానిమేటెడ్ బార్ */}
                <div 
                  style={{ height: barHeight }} 
                  className="w-full bg-gradient-to-t from-[#0284c7] to-[#38bdf8] rounded-t-md transition-all duration-500 min-h-[5px]"
                ></div>
                
                {/* రోజు పేరు */}
                <span className="text-xs text-gray-4 mt-2 font-medium">
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