"use client";

import React from "react";
import { BookOpen, Code, Terminal, Layers, Cpu, Shield, FileCode } from "lucide-react";

export interface CourseProps {
  title: string;
  progress: number;
  icon_name: string;
}

// Supabase డేటాబేస్ నుండి వచ్చే ఐకాన్ పేర్లను బట్టి ఇక్కడ మ్యాపింగ్ చేయండి
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  BookOpen: BookOpen,
  Code: Code,
  Terminal: Terminal,
  Layers: Layers,
  Cpu: Cpu,
  Shield: Shield,
  Globe: BookOpen,      // Supabase లో 'Globe' అని ఉంటే ఇది వస్తుంది
  Database: Cpu,        // Supabase లో 'Database' ఉంటే ఇది వస్తుంది
  FileCode: FileCode,   // Supabase లో 'FileCode' ఉంటే ఇది వస్తుంది
};

export default function CourseCard({ title, progress, icon_name }: CourseProps) {
  // ఐకాన్ మ్యాపింగ్ - దొరకకపోతే డిఫాల్ట్‌గా BookOpen వస్తుంది
  const DisplayIcon = iconMap[icon_name] || BookOpen;

  // CSS Variable ద్వారా ప్రోగ్రెస్ విడ్త్ ని సెట్ చేస్తున్నాం (వార్నింగ్ రాకుండా)
  const progressStyle = { "--progress-width": `${progress}%` } as React.CSSProperties;

  return (
    <div className="bg-[#121212] p-5 rounded-2xl border border-[#222] shadow-xl relative overflow-hidden flex flex-col justify-between h-44 group transition-colors duration-300 hover:border-[#38bdf8]/30">
      {/* హోవర్ ఎఫెక్ట్ */}
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
        
        {/* ప్రోగ్రెస్ బార్ */}
        <div className="w-full bg-[#1c1c1c] h-1.5 rounded-full overflow-hidden border border-[#252525]">
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