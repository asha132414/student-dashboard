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
  const safeData = data && data.length > 0 ? data : [];
  const maxHours = safeData.length > 0 ? Math.max(...safeData.map(d => Number(d.hours) || 0)) : 10;

  return (
    <div className="bg-[#121212] p-6 rounded-2xl border border-[#222] shadow-xl w-full max-w-xl col-span-1 md:col-span-2">
      <h2 className="text-xl font-bold text-white mb-6">Weekly Activity</h2>
      
      <div className="flex items-end justify-between h-48 pt-4 px-4 bg-[#1a1a1a] rounded-xl gap-3">
        {safeData.length === 0 ? (
          <div className="text-gray-500 text-center w-full pb-16 text-sm">
            No data found in Supabase table
          </div>
        ) : (
          safeData.map((item, index) => {
            const currentHours = Number(item.hours) || 0;
            const barPercentage = Math.min(100, Math.max(8, (currentHours / maxHours) * 100));
            
            return (
              <div key={index} className="flex flex-col items-center flex-1 group h-full justify-end">
                <span className="text-xs text-[#38bdf8] opacity-0 group-hover:opacity-100 transition-opacity mb-1 font-semibold duration-200">
                  {currentHours}h
                </span>
                
                <div 
                  className="w-full bg-gradient-to-t from-[#0284c7] to-[#38bdf8] rounded-t-md transition-all duration-500"
                  style={{ height: `${barPercentage}%` }}
                ></div>
                
                <span className="text-[11px] text-gray-400 mt-2 font-medium">
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