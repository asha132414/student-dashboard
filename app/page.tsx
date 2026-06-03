import { supabase } from "@/lib/supabase";
import CourseGridClient from "@/components/CourseGridClient"; // Bento grid కోసం
import { Suspense } from "react";
import SkeletonLoader from "@/components/SkeletonLoader"; // Loading state కోసం 

export default async function DashboardPage() {
  // Supabase నుండి courses డేటాను ఫెచ్ చేయడం [cite: 27]
  const { data: courses, error } = await supabase
    .from("courses")
    .select("id, title, progress, icon_name");

  if (error) {
    return <div>Error loading dashboard: {error.message}</div>; // Error Handling [cite: 43]
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white p-8">
      <h1 className="text-3xl font-black mb-10">Welcome Back, Student 👋</h1>
      
      {/* Suspense తో loading skeleton  */}
      <Suspense fallback={<SkeletonLoader />}>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CourseGridClient courses={courses || []} />
        </section>
      </Suspense>
    </main>
  );
}