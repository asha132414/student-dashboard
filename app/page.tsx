import { Suspense } from "react";
import { supabase } from "../lib/supabase";
import Sidebar from "../components/Sidebar";
import ActivityTile from "../components/ActivityTile";
import CourseGridClient from "../components/CourseGridClient";
import SkeletonLoader from "../components/SkeletonLoader";

interface Course {
  id: string;
  title: string;
  progress: number;
  icon_name: string;
}

async function getCourses(): Promise<Course[]> {
  try {
    const { data: courses, error } = await supabase
      .from("courses")
      .select("*");

    if (error) {
      console.error("Supabase Error:", error.message);
      return [];
    }
    return courses || [];
  } catch (err) {
    console.error("Database connection failed:", err);
    return [];
  }
}

export default async function Home() {
  const courses = await getCourses();

  return (
    <main className="min-h-screen bg-black text-white flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <section className="flex-1 p-8 overflow-y-auto h-screen">
        
        {/* Hero Tile */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 mb-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-6 opacity-10 text-8xl select-none">🎓</div>
          <h1 className="text-4xl font-extrabold text-white tracking-tight">
            Welcome Back, Student 👋
          </h1>
          <p className="text-lg mt-2 text-zinc-400">
            Learning Streak: <span className="text-orange-500 font-bold animate-pulse">12 Days 🔥</span>
          </p>
        </div>

        {/* Courses Section */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-zinc-300 mb-4">Your Active Courses</h2>
          
          {/* Suspense with Skeleton Loader */}
          <Suspense fallback={<SkeletonLoader />}>
            <CourseGridClient courses={courses} />
          </Suspense>
        </div>

        {/* Activity Tile */}
        <ActivityTile />
        
      </section>
    </main>
  );
}