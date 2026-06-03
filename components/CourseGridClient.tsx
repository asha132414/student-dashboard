"use client";

import React from "react";
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

export default function CourseGridClient({ courses }: CourseGridClientProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      {courses.map((course) => (
        <div key={course.id} className="w-full">
          <CourseCard
            title={course.title}
            progress={course.progress}
            icon_name={course.icon_name}
          />
        </div>
      ))}
    </div>
  );
}