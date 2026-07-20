import Link from "next/link";
import { resources } from "../data/data";

// Helper to get unique categories and count resources per category
const getCategories = () => {
  const categoryMap = new Map<string, number>();
  resources.forEach((r) => {
    const cat = r.category || "Uncategorized";
    categoryMap.set(cat, (categoryMap.get(cat) || 0) + 1);
  });
  return Array.from(categoryMap.entries()).map(([name, count]) => ({
    name,
    count,
  }));
};

// Icon mapping for each category (you can extend as needed)
const categoryIcons: Record<string, string> = {
  Frontend: "fa-brands fa-react",
  Backend: "fa-solid fa-server",
  Design: "fa-solid fa-palette",
  Mobile: "fa-solid fa-mobile-screen",
  DevOps: "fa-solid fa-cloud",
  "AI / ML": "fa-solid fa-brain",
  Uncategorized: "fa-solid fa-folder",
};

// Color mapping for gradient backgrounds
const categoryColors: Record<string, string> = {
  Frontend: "from-purple-100 to-purple-200/60 text-purple-600",
  Backend: "from-indigo-100 to-indigo-200/60 text-indigo-600",
  Design: "from-pink-100 to-pink-200/60 text-pink-600",
  Mobile: "from-cyan-100 to-cyan-200/60 text-cyan-600",
  DevOps: "from-emerald-100 to-emerald-200/60 text-emerald-600",
  "AI / ML": "from-amber-100 to-amber-200/60 text-amber-600",
  Uncategorized: "from-gray-100 to-gray-200/60 text-gray-600",
};

export default function CategoriesCard() {
  const categories = getCategories();

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg md:text-xl font-bold text-gray-800 flex items-center gap-2">
          <i className="fa-solid fa-grid-2 text-purple-500 text-sm" />
          Categories
        </h2>
        <Link
          href="#"
          className="text-sm font-medium text-purple-600 hover:text-purple-800 transition-colors flex items-center gap-1"
        >
          See all
          <i className="fa-solid fa-arrow-right text-[10px]" />
        </Link>
      </div>

      {/* Horizontal scrollable row */}
      <div className="flex gap-4 overflow-x-auto pb-3 -mx-1 px-1 scrollbar-thin scrollbar-thumb-purple-300 scrollbar-track-purple-50">
        {categories.map((cat) => {
          const iconClass = categoryIcons[cat.name] || "fa-solid fa-folder";
          const colorClass =
            categoryColors[cat.name] || "from-gray-100 to-gray-200/60 text-gray-600";

          return (
            <div
              key={cat.name}
              className="flex-shrink-0 w-44 md:w-52 p-4 rounded-2xl bg-white/80 border border-purple-100/50 shadow-sm cursor-pointer hover:shadow-md hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 group"
            >
              <div className="flex items-center gap-3">
                <span
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${colorClass} flex items-center justify-center group-hover:scale-110 transition-transform`}
                >
                  <i className={`${iconClass} text-sm`} />
                </span>
                <div>
                  <h4 className="font-semibold text-gray-800 text-sm">{cat.name}</h4>
                  <p className="text-[11px] text-gray-400">{cat.count} resources</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}