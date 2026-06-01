export default function SkeletonLoader() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3].map((n) => (
        <div key={n} className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl animate-pulse">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-zinc-800 rounded-xl" />
            <div className="h-6 bg-zinc-800 rounded w-2/3" />
          </div>
          <div className="mt-8">
            <div className="h-4 bg-zinc-800 rounded w-1/4 mb-2" />
            <div className="w-full bg-zinc-800 h-2.5 rounded-full" />
          </div>
        </div>
      ))}
    </div>
  );
}