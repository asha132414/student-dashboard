import { Suspense } from "react";
import { supabase } from "@/lib/supabase";
import Sidebar from "@/components/Sidebar";
import ActivityTile from "@/components/ActivityTile";
import CourseGridClient from "@/components/CourseGridClient";
import SkeletonLoader from "@/components/SkeletonLoader";
import { Flame } from "lucide-react";

// 🎯 Supabase Payload కోసం స్ట్రిక్ట్ TypeScript ఇంటర్‌ఫేసెస్
interface DbCourseRow {
  id: string;
  title: string;
  progress: number | null;
  icon_name: string | null;
  day: string | null;
  hours: number | null;
}

interface CourseItem {
  id: string;
  title: string;
  progress: number;
  icon_name: string;
}

interface ActivityItem {
  day: string;
  hours: number;
}

async function getDashboardData(): Promise<DbCourseRow[]> {
  try {
    const { data, error } = await supabase
      .from("courses")
      .select("id, title, progress, icon_name, day, hours")
      .order("id", { ascending: true });

    if (error) throw error;
    return (data as DbCourseRow[]) || [];
  } catch (err) {
    console.error("Database connection failed:", err);
    return [];
  }
}

export default async function DashboardPage() {
  const data = await getDashboardData();

  // కోర్సుల డేటా క్లీన్ మ్యాపింగ్
  const courses: CourseItem[] = data
    .filter((item: DbCourseRow) => item.title !== null)
    .map((item: DbCourseRow) => ({
      id: item.id,
      title: item.title,
      progress: item.progress ?? 0,
      icon_name: item.icon_name ?? "BookOpen",
    }));

  // యాక్టివిటీ చార్ట్ డేటా క్లీన్ మ్యాపింగ్ 
  const activityData: ActivityItem[] = data
    .filter((item: DbCourseRow): item is DbCourseRow & { day: string; hours: number } => 
      item.day !== null && item.hours !== null
    )
    .map((item: DbCourseRow) => ({
      day: String(item.day),
      hours: Number(item.hours),
    }));

  return (
    <div className="flex min-h-screen bg-[#060606] text-white font-sans overflow-x-hidden">
      {/* Left Sidebar Menu */}
      <Sidebar />

      {/* Right Bento Grid Content System */}
      <main className="flex-1 p-6 md:p-10 max-w-7xl mx-auto w-full">
        <Suspense fallback={<SkeletonLoader />}>
          <div className="flex flex-col gap-6">
            
            {/* Bento Tile: Welcome Hero Banner */}
            <header className="w-full bg-gradient-to-br from-[#111111] to-[#070707] p-8 rounded-[2rem] border border-[#222] relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#38bdf8]/5 rounded-full blur-[80px] pointer-events-none" />
              <div>
                <h1 className="text-3xl md:text-4xl font-black text-white mb-3">Welcome back, Student!</h1>
                <p className="text-gray-400 text-sm max-w-md leading-relaxed">
                  Your server-rendered bento architecture is running smoothly with zero layout shifts.
                </p>
              </div>
              
              <div className="flex items-center gap-4 bg-[#161616] border border-[#2a2a2a] p-4 rounded-2xl shadow-xl shrink-0">
                <div className="p-3 bg-orange-500/10 text-orange-500 rounded-xl">
                  <Flame className="h-6 w-6 fill-orange-500" />
                </div>
                <div>
                  <div className="text-xl font-black text-white">12 Days</div>
                  <div className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Learning Streak</div>
                </div>
              </div>
            </header>

            {/* Layout Bento Partition System */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
              
              {/* Bento Tile: Activity Contributions Chart */}
              <section className="col-span-1 md:col-span-2">
                <ActivityTile data={activityData} />
              </section>

              {/* Bento Tiles: Client Staggered Course Grid */}
              <div className="col-span-1 md:col-span-2 lg:col-span-3">
                <CourseGridClient courses={courses} />
              </div>

            </div>
          </div>
        </Suspense>
      </main>
    </div>
  );
}