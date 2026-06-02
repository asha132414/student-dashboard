"use client";

import React from "react";
import { motion } from "framer-motion";
import CourseCard from "./CourseCard";

// లోకల్‌గా టైప్ డిఫైన్ చేశాం, దీనివల్ల వేరే ఫైల్ నుండి ఇంపోర్ట్ ఎర్రర్ రాదు
interface Course {
  id: string;
  title: string;
  progress: number;
  icon_name: string;
}

interface CourseGridClientProps {
  courses: Course[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function CourseGridClient({ courses }: CourseGridClientProps) {
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </motion.div>
  );
}