import { LayoutDashboard, Brain, GitPullRequest, Settings } from "lucide-react";
import { useState } from "react";

const menuItems = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "AI Analysis",
    icon: Brain,
  },
  {
    name: "Pull Requests",
    icon: GitPullRequest,
  },
  {
    name: "Settings",
    icon: Settings,
  },
];

const Sidebar = () => {
  const [active, setActive] = useState("Dashboard");

  return (
    <aside className="w-64 min-h-screen bg-white/5 backdrop-blur-xl border-r border-white/10 text-white p-6">
      <h2 className="text-lg font-bold mb-10 tracking-wide">Sentinel AI</h2>

      <nav className="flex flex-col gap-3">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.name;

          return (
            <button
              key={item.name}
              onClick={() => setActive(item.name)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition
                ${
                  isActive
                    ? "bg-gradient-to-r from-sky-500 to-indigo-500 shadow-lg"
                    : "hover:bg-white/10"
                }`}
            >
              <Icon size={18} />
              {item.name}
            </button>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
