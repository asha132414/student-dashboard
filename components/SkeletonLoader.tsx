export default function SkeletonLoader() {
  return (
    <div className="grid md:grid-cols-2 gap-6 w-full">
      {[1, 2, 3, 4].map((n) => (
        <div key={n} className="bg-[#111] border border-[#222] p-6 rounded-[2rem] animate-pulse flex flex-col gap-4">
          {/* Icon Placeholder */}
          <div className="w-12 h-12 bg-[#222] rounded-xl" />
          
          {/* Title Placeholder */}
          <div className="h-6 w-3/4 bg-[#222] rounded-md" />
          
          {/* Progress Bar Placeholder */}
          <div className="h-3 w-full bg-[#222] rounded-full mt-2" />
        </div>
      ))}
    </div>
  );
}