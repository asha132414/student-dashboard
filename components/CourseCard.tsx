"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";

// సుపాబేస్ నుండి వచ్చే డేటా స్ట్రక్చర్ ఇంటర్‌ఫేస్
interface Course {
  id: string;
  title: string;
  progress: number;
  icon_name: string;
}

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  // లూసిడ్ ఐకాన్స్ లోని కీస్ మాత్రమే ఉండేలా టైప్ సేఫ్ లాజిక్
  const iconKey = Object.keys(Icons).find(
    (key) => key.toLowerCase() === course.icon_name.toLowerCase()
  ) as keyof typeof Icons | undefined;
  
  // ఒకవేళ ఐకాన్ దొరికితే దాన్ని వాడుతుంది, లేదంటే డిఫాల్ట్‌గా BookOpen ఐకాన్ వస్తుంది
  const LucideIcon = iconKey ? (Icons[iconKey] as React.ComponentType<{ className?: string }>) : Icons.BookOpen;

  return (
    <motion.article 
      // Requirement 4: మౌస్ పెట్టినప్పుడు 1-2% స్కేల్ అవ్వాలి మరియు వై-యాక్సిస్ పై పైకి జరగాలి
      whileHover={{ scale: 1.02, y: -5 }} 
      // Requirement: స్ప్రింగ్ ఫిజిక్స్ వాడాలి
      transition={{ type: "spring", stiffness: 300, damping: 20 }} 
      className="bg-zinc-900 border border-zinc-800 hover:border-cyan-500/50 p-6 rounded-2xl relative overflow-hidden group transition-colors duration-300"
    >
      {/* Background: హోవర్ చేసినప్పుడు గ్రేడియంట్ మెష్ రివీల్ అవుతుంది */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

      <div className="relative z-10">
        {/* Glowing Icon Container */}
        <div className="p-3 bg-zinc-800 text-cyan-400 w-fit rounded-xl mb-4 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-shadow">
          <LucideIcon className="w-6 h-6" />
        </div>
        
        {/* Course Title */}
        <h3 className="text-lg font-bold text-white mb-2">{course.title}</h3>
        
        <div className="mt-6">
          <div className="flex justify-between text-sm text-zinc-400 mb-2">
            <span>Progress</span>
            <span className="font-medium text-cyan-400">{course.progress}%</span>
          </div>
          
          {/* Progress Bar Container */}
          <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
            {/* Requirement: 0% నుండి ఆటోమేటిక్‌గా డేటాబేస్ వాల్యూ వరకు యానిమేట్ అవ్వాలి */}
            <motion.div 
              initial={{ width: "0%" }} 
              animate={{ width: `${course.progress}%` }} 
              transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.3 }}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full rounded-full"
            />
          </div>
        </div>
      </div>
    </motion.article>
  );
}