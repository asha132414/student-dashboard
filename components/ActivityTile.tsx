"use client";

import { motion } from "framer-motion";

export default function ActivityTile() {
  const weeklyData = [
    { day: "Mon", value: 40 },
    { day: "Tue", value: 75 },
    { day: "Wed", value: 30 },
    { day: "Thu", value: 90 },
    { day: "Fri", value: 55 },
    { day: "Sat", value: 20 },
    { day: "Sun", value: 10 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 25, delay: 0.4 }}
      className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 mt-6 shadow-xl relative overflow-hidden"
    >
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-bold text-zinc-100">Weekly Activity</h2>
          <p className="text-xs text-zinc-500 mt-0.5">Hours spent learning this week</p>
        </div>
        <span className="text-xs bg-zinc-800 border border-zinc-700 px-2.5 py-1 rounded-full text-zinc-400">
          This Week
        </span>
      </div>

      {/* Animated Bar Chart */}
      <div className="flex justify-between items-end h-32 pt-4 px-2">
        {weeklyData.map((data, idx) => (
          <div key={data.day} className="flex flex-col items-center flex-1 gap-2">
            <div className="w-full max-w-[24px] bg-zinc-800 rounded-t-md h-full flex items-end overflow-hidden">
              {/* యానిమేటెడ్ బార్స్ */}
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: `${data.value}%` }}
                transition={{ duration: 1, ease: "easeOut", delay: idx * 0.1 }}
                className="w-full bg-gradient-to-t from-emerald-600 to-green-400 rounded-t-md"
              />
            </div>
            <span className="text-xs text-zinc-500 font-medium">{data.day}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}