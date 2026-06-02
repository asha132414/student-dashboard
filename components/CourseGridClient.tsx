"use client";

import { motion, Variants } from "framer-motion";
import CourseCard, { Course } from "./CourseCard";

interface CourseGridClientProps {
  courses: Course[];
}

// ⭐️ Framer Motion 'Variants' టైప్‌ను స్పష్టంగా డిఫైన్ చేయడం ద్వారా TypeScript ఎర్రర్ రాకుండా ఉంటుంది
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Requirement 4: కార్డులు ఒకదాని తర్వాత ఒకటి రావడానికి
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20, // Requirement 4: స్ప్రింగ్ ఫిజిక్స్ పారామీటర్లు
    },
  },
};

export default function CourseGridClient({ courses }: CourseGridClientProps) {
  if (!courses || courses.length === 0) {
    return <p className="text-zinc-500 text-sm font-medium">No active courses found.</p>;
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {courses.map((course) => (
        <motion.div key={course.id} variants={cardVariants}>
          <CourseCard course={course} />
        </motion.div>
      ))}
    </motion.div>
  );
}