"use client";

import { motion } from "framer-motion";

interface ActivityData {
  day: string;
  hours: number;
}

const weeklyData: ActivityData[] = [
  { day: "Mon", hours: 2 },
  { day: "Tue", hours: 5 },
  { day: "Wed", hours: 3 },
  { day: "Thu", hours: 6 },
  { day: "Fri", hours: 4 },
  { day: "Sat", hours: 7 },
  { day: "Sun", hours: 1 },
];

export default function ActivityTile() {
  const maxHours = Math.max(...weeklyData.map((d) => d.hours));

  return (
    <section className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl relative overflow-hidden group transition-colors duration-300">
      {/* Subtle Background Glow Mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

      <div className="relative z-10 flex flex-col h-full justify-between">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="text-lg font-bold text-white">Weekly Activity</h3>
            <p className="text-zinc-500 text-xs mt-0.5">Hours spent learning this week</p>
          </div>
          <span className="text-xs font-medium text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-full border border-cyan-500/20">
            This Week
          </span>
        </div>

        {/* 📊 Smooth Animated Bar Chart Container */}
        <div className="flex items-end justify-between h-36 pt-4 px-2 bg-zinc-950/40 rounded-xl border border-zinc-800/50">
          {weeklyData.map((data) => {
            const barHeightPercentage = (data.hours / maxHours) * 100;

            return (
              <div key={data.day} className="flex flex-col items-center flex-1 group/bar">
                {/* Hours Tooltip on Hover */}
                <div className="absolute mb-16 opacity-0 group-hover/bar:opacity-100 transition-opacity bg-zinc-800 text-cyan-400 text-[10px] font-bold px-1.5 py-0.5 rounded border border-zinc-700 shadow-md transform -translate-y-2 pointer-events-none">
                  {data.hours}h
                </div>

                {/* Animated Chart Bar with Spring Physics */}
                <div className="w-full max-w-[24px] bg-zinc-800 h-full rounded-t-md flex items-end overflow-hidden">
                  <motion.div
                    initial={{ height: "0%" }}
                    animate={{ height: `${barHeightPercentage}%` }}
                    transition={{
                      type: "spring",
                      stiffness: 80,
                      damping: 15,
                      delay: 0.2,
                    }}
                    className="w-full bg-gradient-to-t from-blue-600 via-cyan-500 to-cyan-400 rounded-t-md shadow-[0_0_10px_rgba(34,211,238,0.2)]"
                  />
                </div>

                {/* Day Label */}
                <span className="text-xs text-zinc-500 font-medium mt-2 mb-1 group-hover/bar:text-zinc-300 transition-colors">
                  {data.day}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}