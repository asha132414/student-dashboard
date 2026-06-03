export default function SkeletonLoader() {
  return (
    // 'lg:grid-cols-3' ని 'lg:grid-cols-2' కి మార్చండి
    <div className="grid md:grid-cols-2 gap-6"> 
      {[1, 2].map((n) => (
        <div key={n} className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl animate-pulse">
           {/* ... మిగిలిన కోడ్ అలాగే ఉంచండి ... */}
        </div>
      ))}
    </div>
  );
}