"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";

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
  // ⭐️ 'any' ఎర్రర్‌ను ఫిక్స్ చేసే లాజిక్ ఇక్కడ ఉంది
  const iconName = course.icon_name as keyof typeof Icons;
  const LucideIcon = (Icons[iconName] as React.ElementType) || Icons.BookOpen;

  return (
    <motion.article 
      whileHover={{ scale: 1.02, y: -5 }} 
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="bg-zinc-900 border border-zinc-800 hover:border-cyan-500/50 p-6 rounded-2xl relative overflow-hidden group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

      <div className="relative z-10">
        <div className="p-3 bg-zinc-800 text-cyan-400 w-fit rounded-xl mb-4 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-shadow">
          <LucideIcon className="w-6 h-6" />
        </div>
        
        <h3 className="text-lg font-bold text-white mb-2">{course.title}</h3>
        
        <div className="mt-6">
          <div className="flex justify-between text-sm text-zinc-400 mb-2">
            <span>Progress</span>
            <span className="font-medium text-cyan-400">{course.progress}%</span>
          </div>
          
          <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
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