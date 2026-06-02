"use client";

import { useState } from "react";
import { motion } from "framer-motion";
// PDF నిబంధన ప్రకారం Lucide React ఐకాన్స్ వాడుతున్నాము
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
      {/* క్లీన్ మరియు ఫ్యూచరిస్టిక్ బ్రాండింగ్ */}
      <div className="text-xl font-bold text-cyan-400 mb-8 px-4 tracking-tight">
        Lumina Path
      </div>
      
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
              {/* ⭐️ Micro-interaction: క్లిక్ చేసినప్పుడు బ్యాక్‌గ్రౌండ్ స్నాప్ అవుతుంది */}
              {isActive && (
                <motion.div
                  layoutId="activeHighlight" 
                  className="absolute inset-0 bg-zinc-900 border border-zinc-800 rounded-xl -z-10"
                  // PDF లో అడిగిన ఖచ్చితమైన Spring Physics పారామీటర్లు[cite: 1]
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 20 
                  }} 
                />
              )}
              
              <Icon className={`w-5 h-5 ${isActive ? "text-cyan-400" : ""}`} />
              <span>{item.name}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}