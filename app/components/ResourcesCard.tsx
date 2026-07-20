import { Resource } from "../types/resource";

// Icon mapping based on category (fallback to generic)
const resourceIcons: Record<string, string> = {
  Frontend: "fa-brands fa-react",
  Backend: "fa-brands fa-node",
  Design: "fa-brands fa-figma",
  Mobile: "fa-solid fa-mobile-screen",
  DevOps: "fa-solid fa-cloud",
  "AI / ML": "fa-solid fa-brain",
};

// Color mapping for icon backgrounds
const iconColorClasses: Record<string, string> = {
  Frontend: "from-purple-100 to-purple-200/70 text-purple-600",
  Backend: "from-indigo-100 to-indigo-200/70 text-indigo-600",
  Design: "from-pink-100 to-pink-200/70 text-pink-600",
  Mobile: "from-cyan-100 to-cyan-200/70 text-cyan-600",
  DevOps: "from-emerald-100 to-emerald-200/70 text-emerald-600",
  "AI / ML": "from-amber-100 to-amber-200/70 text-amber-600",
};

interface ResourceCardProps {
  resource: Resource;
}

export default function ResourceCard({ resource }: ResourceCardProps) {
  // Determine icon and color
  const iconKey = resource.category || "Uncategorized";
  const iconClass = resourceIcons[iconKey] || "fa-regular fa-file";
  const colorClass =
    iconColorClasses[iconKey] || "from-gray-100 to-gray-200/70 text-gray-600";

  // Decide badge (Free if price === 0, else Premium)
  const isFree = resource.price === 0 || resource.price == null;
  const badgeText = isFree ? "Free" : "Premium";
  const badgeColor = isFree
    ? "text-emerald-600 bg-emerald-50"
    : "text-amber-600 bg-amber-50";

  // Placeholder for "time ago" – you can add a date field to Resource if available
  const timeAgo = "2h ago"; // static for demo; could be computed

  return (
    <div className="group block bg-white/90 rounded-2xl p-5 shadow-sm hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-purple-100/50 hover:-translate-y-1">
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div
          className={`shrink-0 w-12 h-12 rounded-xl bg-linear-to-br ${colorClass} flex items-center justify-center text-xl transition-transform group-hover:scale-110`}
        >
          <i className={iconClass} />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-gray-800 text-base group-hover:text-purple-700 transition-colors truncate">
            {resource.title}
          </h3>
          <p className="text-sm text-gray-500 truncate">
            {resource.description}
          </p>
          <div className="flex items-center gap-3 mt-1.5">
            <span
              className={`text-xs font-medium px-2 py-0.5 rounded-full ${badgeColor}`}
            >
              {badgeText}
            </span>
            <span className="text-xs text-gray-400 flex items-center gap-1">
              <i className="fa-regular fa-clock" /> {timeAgo}
            </span>
            {/* Optionally show rating */}
            {resource.rating && (
              <span className="text-xs text-gray-400 flex items-center gap-1">
                <i className="fa-regular fa-star text-amber-400" />{" "}
                {resource.rating}
              </span>
            )}
          </div>
        </div>

        {/* Arrow icon on hover */}
        <i className="fa-regular fa-arrow-up-right-from-square text-gray-300 group-hover:text-purple-500 transition-colors text-sm mt-1" />
      </div>
    </div>
  );
}
