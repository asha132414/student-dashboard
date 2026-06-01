export default function Sidebar() {
  const menuItems = [
    { name: "Dashboard", icon: "🏠", active: true },
    { name: "Courses", icon: "📚", active: false },
    { name: "Analytics", icon: "📊", active: false },
    { name: "Profile", icon: "👤", active: false },
    { name: "Settings", icon: "⚙️", active: false },
  ];

  return (
    <nav className="w-64 min-h-screen border-r border-zinc-800 p-6 hidden md:block">
      <h2 className="text-2xl font-bold mb-8 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
        Lumina Path
      </h2>
      <ul className="space-y-2">
        {menuItems.map((item) => (
          <li
            key={item.name}
            className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all ${
              item.active 
                ? "bg-zinc-900 text-white shadow-inner" 
                : "text-zinc-500 hover:bg-zinc-900 hover:text-zinc-300"
            }`}
          >
            <span>{item.icon}</span>
            <span className="font-medium">{item.name}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}