"use client";

import React from "react";
import { LayoutDashboard, BookOpen, BarChart3, User, Settings, LogOut } from "lucide-react";

export default function Sidebar() {
  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard, active: true },
    { name: "Courses", icon: BookOpen, active: false },
    { name: "Analytics", icon: BarChart3, active: false },
    { name: "Profile", icon: User, active: false },
    { name: "Settings", icon: Settings, active: false },
  ];

  return (
    <aside className="w-64 bg-[#0a0a0a] min-h-screen border-r border-[#1a1a1a] p-6 flex flex-col justify-between shrink-0 hidden md:flex">
      <div className="flex flex-col gap-10">
        {/* 🎯 బ్రాండ్ లోగో: Lumina Path */}
        <div className="flex items-center gap-2 px-2">
          <span className="text-2xl font-black tracking-tight text-[#00e5ff] drop-shadow-[0_0_10px_rgba(0,229,255,0.2)]">
            Lumina Path
          </span>
        </div>

        {/* నావిగేషన్ లింకులు */}
        <nav className="flex flex-col gap-2">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={index}
                className={`flex items-center gap-4 px-4 py-3.5 rounded-xl text-sm font-bold tracking-wide transition-all duration-300 w-full text-left ${
                  item.active
                    ? "bg-[#1c1c1c] text-white border border-[#2d2d2d] shadow-lg"
                    : "text-gray-500 hover:text-gray-300 hover:bg-[#121212]/50"
                }`}
              >
                <Icon className={`h-5 w-5 ${item.active ? "text-[#00e5ff]" : "text-gray-500"}`} />
                {item.name}
              </button>
            );
          })}
        </nav>
      </div>

      {/* లాగ్ అవుట్ బటన్ */}
      <button className="flex items-center gap-4 px-4 py-3.5 rounded-xl text-sm font-bold text-gray-500 hover:text-red-400 hover:bg-red-500/5 transition-all duration-300 w-full text-left mt-auto">
        <LogOut className="h-5 w-5" />
        Logout
      </button>
    </aside>
  );
}