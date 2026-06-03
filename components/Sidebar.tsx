"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { LayoutDashboard, BookOpen, BarChart3, Settings, LogOut } from "lucide-react";

const menuItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "courses", label: "My Courses", icon: BookOpen },
  { id: "analytics", label: "Analytics", icon: BarChart3 },
  { id: "settings", label: "Settings", icon: Settings },
];

export default function Sidebar() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <nav className="h-screen w-20 lg:w-64 bg-[#0d0d0d] border-r border-[#1a1a1a] flex flex-col justify-between p-4 sticky top-0">
      <div className="flex flex-col gap-8">
        {/* Logo */}
        <div className="flex items-center gap-3 px-2 py-4">
          <div className="h-8 w-8 bg-gradient-to-tr from-[#0284c7] to-[#38bdf8] rounded-lg" />
          <span className="hidden lg:block text-xl font-black text-white tracking-wider">NEXT-GEN</span>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col gap-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`relative flex items-center gap-4 px-4 py-3 rounded-xl text-sm font-medium transition-colors w-full ${
                  isActive ? "text-[#38bdf8]" : "text-gray-400 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute inset-0 bg-[#142433] rounded-xl border-l-2 border-[#38bdf8] -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                )}
                <Icon className="h-5 w-5 min-w-[20px]" />
                <span className="hidden lg:block">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Logout */}
      <button className="flex items-center gap-4 px-4 py-3 text-sm font-medium text-gray-500 hover:text-red-400 transition-colors w-full rounded-xl">
        <LogOut className="h-5 w-5 min-w-[20px]" />
        <span className="hidden lg:block">Logout</span>
      </button>
    </nav>
  );
}