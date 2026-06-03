import { Suspense } from "react";
import { supabase } from "@/lib/supabase";
import Sidebar from "@/components/Sidebar";
import ActivityTile from "@/components/ActivityTile";
import CourseGridClient from "@/components/CourseGridClient";
import SkeletonLoader from "@/components/SkeletonLoader";

export default async function DashboardPage() {
  // 1. 'courses' టేబుల్ నుండి డేటా ఫెచ్ చేయడం
  const { data: courseData } = await supabase
    .from("courses")
    .select("id, title, progress, icon_name");

  // 2. 'student_activity' టేబుల్ నుండి గ్రాఫ్ డేటా ఫెచ్ చేయడం
  const { data: activityDataRaw } = await supabase
    .from("student_activity")
    .select("day, hours");

  // డేటా క్లీనింగ్
  const courses = (courseData || []).map((item) => ({
    id: item.id,
    title: item.title,
    progress: item.progress ?? 0,
    icon_name: item.icon_name ?? "BookOpen",
  }));

  const activityData = (activityDataRaw || []).filter(
    (row) => row.day && row.hours !== null
  );

  return (
    <div className="flex bg-[#050505] min-h-screen text-white font-sans antialiased">
      <Sidebar />
      <main className="flex-1 min-w-0 overflow-y-auto px-4 sm:px-8 py-8 lg:px-12">
        <div className="max-w-[1400px] mx-auto space-y-10">
          
          <div className="bg-[#111] border border-[#222] p-8 rounded-[2rem] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
             {/* హెడర్ కంటెంట్ అలాగే ఉంచండి */}
             <h1 className="text-3xl font-black">Welcome Back, Student 👋</h1>
          </div>

          <Suspense fallback={<SkeletonLoader />}>
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 items-start">
              <div className="xl:col-span-1">
                <ActivityTile data={activityData} />
              </div>
              <div className="xl:col-span-2 space-y-6">
                <h2 className="text-xl font-bold text-white px-1">My Courses</h2>
                <CourseGridClient courses={courses} />
              </div>
            </div>
          </Suspense>

        </div>
      </main>
    </div>
  );
}