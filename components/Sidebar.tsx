"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { LayoutDashboard, BookOpen, BarChart2, User, Settings } from "lucide-react";

const menuItems = [
  { id: "dashboard", name: "Dashboard", icon: LayoutDashboard },
  { id: "courses", name: "Courses", icon: BookOpen },
  { id: "analytics", name: "Analytics", icon: BarChart2 },
  { id: "profile", name: "Profile", icon: User },
  { id: "settings", name: "Settings", icon: Settings },
];

export default function Sidebar() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <nav className="w-64 bg-zinc-950 border-r border-zinc-900 min-h-screen p-4 flex flex-col">
      <div className="text-xl font-bold text-cyan-400 mb-8 px-4">Lumina Path</div>
      
      <div className="space-y-2 relative">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center space-x-4 px-4 py-3 rounded-xl text-sm font-medium transition-colors relative z-10 ${
                isActive ? "text-white" : "text-zinc-400 hover:text-white"
              }`}
            >
              {/* Active Background Highlight Animation */}
              {isActive && (
                <motion.div
                  layoutId="activeHighlight" // ⭐️ ఇది ఆ బ్యాక్‌గ్రౌండ్ స్నాప్ యానిమేషన్ ఇస్తుంది
                  className="absolute inset-0 bg-zinc-900 border border-zinc-800 rounded-xl -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              
              <Icon className="w-5 h-5" />
              <span>{item.name}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}