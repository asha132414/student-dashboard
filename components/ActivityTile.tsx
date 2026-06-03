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
  const maxHours = safeData.length > 0 ? Math.max(...safeData.map((d) => d.hours)) : 10;

  // 🎯 Microsoft Edge Tools లింటర్ ని సాటిస్‌ఫై చేయడానికి పర్ఫెక్ట్ హైట్ రేంజ్ మ్యాపింగ్
  const getHeightClass = (percentage: number): string => {
    if (percentage <= 10) return "h-[10%]";
    if (percentage <= 20) return "h-[20%]";
    if (percentage <= 30) return "h-[30%]";
    if (percentage <= 40) return "h-[40%]";
    if (percentage <= 50) return "h-[50%]";
    if (percentage <= 60) return "h-[60%]";
    if (percentage <= 70) return "h-[70%]";
    if (percentage <= 80) return "h-[80%]";
    if (percentage <= 90) return "h-[90%]";
    return "h-[100%]";
  };

  return (
    <div className="bg-[#121212] p-6 rounded-2xl border border-[#222] shadow-xl w-full h-full min-h-[260px] flex flex-col justify-between">
      <h2 className="text-base font-bold text-white mb-4">Weekly Activity</h2>
      
      <div className="flex items-end justify-between h-40 pt-4 px-3 bg-[#1a1a1a] rounded-xl gap-2">
        {safeData.length === 0 ? (
          <div className="text-gray-500 text-center w-full pb-14 text-xs">
            No data found in Supabase table
          </div>
        ) : (
          safeData.map((item, index) => {
            const currentHours = Number(item.hours) || 0;
            const barPercentage = Math.round(Math.min(100, Math.max(8, (currentHours / maxHours) * 100)));
            const heightClass = getHeightClass(barPercentage);
            
            return (
              <div key={index} className="flex flex-col items-center flex-1 group h-full justify-end">
                <span className="text-[10px] text-[#38bdf8] opacity-0 group-hover:opacity-100 transition-opacity mb-1 font-semibold duration-200">
                  {currentHours}h
                </span>
                
                {/* 🎯 ఇన్‌లైన్ 'style' లేదు, తప్పుడు '}' సింటాక్స్ లేదు. ప్యూర్ Tailwind క్లాస్! */}
                <div 
                  className={`w-full bg-gradient-to-t from-[#0284c7] to-[#38bdf8] rounded-t-md transition-all duration-500 ${heightClass}`}
                />
                
                <span className="text-[10px] text-gray-400 mt-2 font-medium">
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