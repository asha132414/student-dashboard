import { Suspense } from "react";
import { supabase } from "@/lib/supabase";
import Sidebar from "@/components/Sidebar";
import ActivityTile from "@/components/ActivityTile";
import CourseGridClient from "@/components/CourseGridClient";
import SkeletonLoader from "@/components/SkeletonLoader";

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

export default async function DashboardPage() {
  // Supabase నుండి ఒకే క్వెరీతో క్లీన్ గా డేటాను ఫెచ్ చేయడం
  const { data: rawData } = await supabase
    .from("student_activity")
    .select("id, title, progress, icon_name, day, hours");

  const typedData = (rawData as DbCourseRow[]) || [];

  // 1. కోర్సుల లిస్ట్ ఫిల్టరింగ్ (యునిక్ కోర్సులు మాత్రమే వచ్చేలా)
  const coursesMap = new Map<string, CourseItem>();
  typedData.forEach((row) => {
    if (row.id && row.title && !coursesMap.has(row.id)) {
      coursesMap.set(row.id, {
        id: row.id,
        title: row.title,
        progress: row.progress ?? 0,
        icon_name: row.icon_name ?? "BookOpen",
      });
    }
  });
  const courses = Array.from(coursesMap.values());

  // 2. యాక్టివిటీ గ్రాఫ్ డేటా ఫిల్టరింగ్
  const activityData = typedData
    .filter((row) => row.day && row.hours !== null)
    .map((row) => ({
      day: row.day as string,
      hours: row.hours as number,
    }));

  return (
    <div className="flex bg-[#050505] min-h-screen text-white font-sans antialiased selection:bg-[#00e5ff]/30">
      {/* ఎడమవైపు సైడ్‌బార్ */}
      <Sidebar />

      {/* కుడివైపు మెయిన్ కంటెంట్ */}
      <main className="flex-1 min-w-0 overflow-y-auto px-4 sm:px-8 py-8 lg:px-12">
        <div className="max-w-[1400px] mx-auto space-y-10">
          
          {/* వెల్‌కమ్ హెడర్ */}
          <div className="bg-[#111] border border-[#222] p-8 rounded-[2rem] flex flex-col sm:flex-row sm:items-center justify-between gap-6 relative overflow-hidden">
            <div className="space-y-2 relative z-10">
              <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white flex items-center gap-3">
                Welcome Back, Student <span className="animate-pulse">👋</span>
              </h1>
              <p className="text-sm text-gray-400 font-medium max-w-xl">
                Your server-rendered bento architecture is running smoothly with zero layout shifts.
              </p>
            </div>
            <div className="bg-[#161616] border border-[#262626] px-6 py-4 rounded-2xl flex items-center gap-4 shrink-0 relative z-10">
              <span className="text-2xl">🔥</span>
              <div>
                <div className="text-lg font-black text-white">12 Days</div>
                <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Learning Streak</div>
              </div>
            </div>
          </div>

          {/* లేఅవుట్ గ్రిడ్ - యాక్టివిటీ మరియు కోర్సులు */}
          <Suspense fallback={<SkeletonLoader />}>
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 items-start">
              
              {/* యాక్టివిటీ టైల్ */}
              <div className="xl:col-span-1">
                <ActivityTile data={activityData} />
              </div>

              {/* కోర్సుల గ్రిడ్ */}
              <div className="xl:col-span-2 space-y-6">
                <h2 className="text-xl font-bold text-white tracking-wide px-1">My Courses</h2>
                <CourseGridClient courses={courses} />
              </div>

            </div>
          </Suspense>

        </div>
      </main>
    </div>
  );
}