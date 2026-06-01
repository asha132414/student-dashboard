"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";

// అసైన్‌మెంట్‌ నిబంధన ప్రకారం టైప్‌స్క్రిప్ట్ ఇంటర్‌ఫేస్
interface Course {
  id: string;
  title: string;
  progress: number;
  icon_name: string;
}

export default function CourseCard({ course }: { course: Course }) {
  // డైనమిక్ ఐకాన్ మ్యాపింగ్ సేఫ్ రూట్
  const IconComponent = (Icons[course.icon_name as keyof typeof Icons] as React.ComponentType<{ className?: string }>) || Icons.BookOpen;

  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
      }}
      // అసైన్‌మెంట్‌ నిబంధన ప్రకారం స్ప్రింగ్ ఫిజిక్స్ యానిమేషన్
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
      whileHover={{ scale: 1.02, y: -5 }} // కార్డ్ హోవర్ ఎఫెక్ట్
      className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-xl relative overflow-hidden hover:border-zinc-700 transition-colors duration-300 group"
    >
      {/* గ్లోయింగ్ బ్యాక్‌గ్రౌండ్ ఎఫెక్ట్ */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="flex items-center gap-4 relative z-10">
        <div className="p-3 bg-zinc-800 text-green-400 rounded-xl group-hover:bg-green-500 group-hover:text-black transition-all duration-300">
          <IconComponent className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold text-zinc-100 group-hover:text-white transition-colors">
          {course.title}
        </h3>
      </div>

      <div className="mt-6 relative z-10">
        <div className="flex justify-between text-sm text-zinc-400 mb-2">
          <span>Progress</span>
          <span className="text-green-400 font-medium">{course.progress}%</span>
        </div>
        
        {/* ప్రోగ్రెస్ బార్ యానిమేషన్ (ఇన్-లైన్ స్టైల్స్ మరియు ఎర్రర్స్ పూర్తిగా తొలగించబడ్డాయి) */}
        <div className="w-full bg-zinc-800 h-2.5 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: "0%" }} // విడ్త్‌ను స్ట్రింగ్ ఫార్మాట్‌లో సున్నా చేసాం
            animate={{ width: `${course.progress}%` }} // ఇక్కడ యానిమేట్ అవుతుంది
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }} // Layout shifts రావు
            className="bg-gradient-to-r from-green-500 to-emerald-400 h-full rounded-full"
          />
        </div>
      </div>
    </motion.article>
  );
}