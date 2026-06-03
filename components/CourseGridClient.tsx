"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import CourseCard from "./CourseCard";

interface CourseItem {
  id: string;
  title: string;
  progress: number;
  icon_name: string;
}

interface CourseGridClientProps {
  courses: CourseItem[];
}

// 🎯 TypeScript క్రాష్ అవ్వకుండా 'Variants' టైప్‌ను ఖచ్చితంగా ఇక్కడ అప్లై చేసాము
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

export default function CourseGridClient({ courses }: CourseGridClientProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
    >
      {courses.map((course) => (
        <motion.div
          key={course.id}
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <CourseCard
            title={course.title}
            progress={course.progress}
            icon_name={course.icon_name}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}