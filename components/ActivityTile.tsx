"use client";

import { motion } from "framer-motion";

// ప్రతి రోజుకు సంబంధించిన స్టడీ అవర్స్ (స్కోర్లు) ఇంటర్‌ఫేస్
interface ActivityData {
  day: string;
  hours: number;
}

// ⭐️ మీ వీక్లీ స్కోర్స్ (గ్రాఫ్ బార్స్ రావడానికి డేటా)
const weeklyData: ActivityData[] = [
  { day: "Mon", hours: 4 },
  { day: "Tue", hours: 6 },
  { day: "Wed", hours: 3 },
  { day: "Thu", hours: 8 },
  { day: "Fri", hours: 5 },
  { day: "Sat", hours: 7 },
  { day: "Sun", hours: 2 },
];

export default function ActivityTile() {
  // గరిష్ట స్కోరును కనుక్కోవడం (గ్రాఫ్ ఎత్తును కరెక్ట్‌గా లెక్కించడానికి)
  const maxHours = Math.max(...weeklyData.map((d) => d.hours));

  return (
    <section className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl relative overflow-hidden group transition-colors duration-300">
      {/* Background Hover Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

      <div className="relative z-10 flex flex-col h-full justify-between">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="text-lg font-bold text-white">Weekly Activity</h3>
            <p className="text-zinc-500 text-xs mt-0.5">Hours spent learning this week</p>
          </div>
          <span className="text-xs font-medium text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-full border border-cyan-500/20">
            This Week
          </span>
        </div>

        {/* 📊 అనిమేటెడ్ గ్రాఫ్ కంటైనర్ (ఇది మీ స్కోర్లను బార్స్ రూపంలో చూపిస్తుంది) */}
        <div className="flex items-end justify-between h-40 pt-6 px-4 bg-zinc-950/40 rounded-xl border border-zinc-800/50 gap-2 md:gap-4">
          {weeklyData.map((data) => {
            // ప్రతి రోజు స్కోర్ ఆధారంగా బార్ ఎత్తు శాతం లెక్కించడం
            const barHeightPercentage = (data.hours / maxHours) * 100;

            return (
              <div key={data.day} className="flex flex-col items-center flex-1 group/bar relative">
                
                {/* 🌟 మైక్రో-ఇంటరాక్షన్: మౌస్ హోవర్ చేసినప్పుడు స్కోర్ (గంటలు) చూపే Tooltip */}
                <div className="absolute -top-7 opacity-0 group-hover/bar:opacity-100 transition-opacity bg-zinc-800 text-cyan-400 text-[10px] font-bold px-2 py-0.5 rounded border border-zinc-700 shadow-md pointer-events-none whitespace-nowrap z-20">
                  {data.hours} hrs
                </div>

                {/* 0% నుండి మీ స్కోర్ వాల్యూ వరకు పెరిగే స్ప్రింగ్ అనిమేటెడ్ బార్ */}
                <div className="w-full max-w-[28px] bg-zinc-800/50 h-full rounded-t-md flex items-end">
                  <motion.div
                    initial={{ height: "0%" }}
                    animate={{ height: `${barHeightPercentage}%` }}
                    // Challenge Requirement: స్ప్రింగ్ ఫిజిక్స్ వాడటం
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 15,
                      delay: 0.1
                    }}
                    className="w-full bg-gradient-to-t from-blue-600 via-cyan-500 to-cyan-400 rounded-t-md shadow-[0_0_15px_rgba(34,211,238,0.2)]"
                  />
                </div>

                {/* కింద ఉండే వారాల పేర్లు (Mon, Tue...) */}
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