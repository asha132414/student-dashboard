"use client";

import React from "react";
import { LayoutDashboard, BookOpen, BarChart3, User, Settings, LogOut } from "lucide-react";
import { motion } from "framer-motion"; // యానిమేషన్ కోసం

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
        {/* బ్రాండ్ లోగో */}
        <div className="flex items-center gap-2 px-2">
          <span className="text-2xl font-black tracking-tight text-[#00e5ff]">
            Lumina Path
          </span>
        </div>

        {/* నావిగేషన్ లింకులు */}
        <nav className="flex flex-col gap-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.name}
                className="relative flex items-center gap-4 px-4 py-3.5 rounded-xl text-sm font-bold w-full transition-all"
              >
                {/* యాక్టివ్ ఐటమ్ హైలైట్ యానిమేషన్ */}
                {item.active && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-[#1c1c1c] border border-[#2d2d2d] rounded-xl shadow-lg"
                    transition={{ type: "spring", stiffness: 300, damping: 20 }} // స్ప్రింగ్ ఫిజిక్స్
                  />
                )}
                <Icon className={`relative z-10 h-5 w-5 ${item.active ? "text-[#00e5ff]" : "text-gray-500"}`} />
                <span className={`relative z-10 ${item.active ? "text-white" : "text-gray-500"}`}>
                  {item.name}
                </span>
              </button>
            );
          })}
        </nav>
      </div>

      <button className="flex items-center gap-4 px-4 py-3.5 rounded-xl text-sm font-bold text-gray-500 hover:text-red-400 hover:bg-red-500/5 transition-all w-full">
        <LogOut className="h-5 w-5" />
        Logout
      </button>
    </aside>
  );
}