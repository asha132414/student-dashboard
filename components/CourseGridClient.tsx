"use client";

import { motion } from "framer-motion";
import CourseCard from "./CourseCard";

// టైప్‌స్క్రిప్ట్ ఇంటర్‌ఫేస్ (అసైన్‌మెంట్ రూల్) [cite: 72]
interface Course {
  id: string;
  title: string;
  progress: number;
  icon_name: string;
}

export default function CourseGridClient({ courses }: { courses: Course[] }) {
  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={{
        // 1. హిడెన్ స్టేట్
        hidden: { opacity: 0 },
        // 2. విజిబుల్ స్టేట్ (ఇక్కడే ఒకదాని తర్వాత ఒకటి వచ్చేలా స్టాగ్గర్ పెట్టాలి) 
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.15 // 0.15 సెకన్ల గ్యాప్‌తో కార్డ్స్ వస్తాయి
          }
        }
      }}
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {courses.map((course) => (
        // ఇక్కడ నుండి 'index={index}' తీసేశాము, ఎందుకంటే గ్రూప్ యానిమేషన్ ఆటోమేటిక్‌గా స్టాగ్గర్ అవుతుంది
        <CourseCard key={course.id} course={course} />
      ))}
    </motion.div>
  );
}