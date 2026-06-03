"use client";

import React from "react";
import { BookOpen, Code, Terminal, Layers, Cpu, Shield } from "lucide-react";

export interface CourseProps {
  title: string;
  progress: number;
  icon_name: string;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  BookOpen: BookOpen,
  Code: Code,
  Terminal: Terminal,
  Layers: Layers,
  Cpu: Cpu,
  Shield: Shield,
};

export default function CourseCard({ title, progress, icon_name }: CourseProps) {
  const DisplayIcon = iconMap[icon_name] || BookOpen;

  // 🎯 వార్నింగ్‌ను పోగొట్టడానికి ఇక్కడ ఒక చిన్న ట్రిక్ వాడుతున్నాం
  const progressStyle = { "--progress-width": `${progress}%` } as React.CSSProperties;

  return (
    <div className="bg-[#121212] p-5 rounded-2xl border border-[#222] shadow-xl relative overflow-hidden flex flex-col justify-between h-44 group transition-colors duration-300 hover:border-[#38bdf8]/30">
      {/* బ్యాక్ గ్రౌండ్ ఎఫెక్ట్ */}
      <div className="absolute -inset-px bg-gradient-to-tr from-[#0284c7]/0 to-[#38bdf8]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />

      <div className="flex items-start justify-between relative z-10">
        <div className="p-3 bg-[#1a1a1a] rounded-xl border border-[#262626] text-[#38bdf8]">
          <DisplayIcon className="h-5 w-5" />
        </div>
        <span className="text-xs font-semibold bg-[#1a2d3d] text-[#38bdf8] px-2.5 py-1 rounded-full border border-[#1e3a52]">
          Active
        </span>
      </div>

      <div className="relative z-10 w-full">
        <h3 className="text-sm font-bold text-white mb-2 line-clamp-1">{title}</h3>
        
        <div className="w-full bg-[#1c1c1c] h-1.5 rounded-full overflow-hidden border border-[#252525]">
          {/* 🎯 ఇన్‌లైన్ స్టైల్ వార్నింగ్ రాకుండా ఇక్కడ మార్పు చేసాము */}
          <div
            className="h-full bg-gradient-to-r from-[#0284c7] to-[#38bdf8] rounded-full transition-all duration-500 w-[var(--progress-width)]"
            style={progressStyle}
          />
        </div>
        
        <div className="flex justify-between items-center mt-2 text-[10px] text-gray-500 font-bold uppercase tracking-wider">
          <span>Progress</span>
          <span className="text-white font-semibold">{progress}%</span>
        </div>
      </div>
    </div>
  );
}