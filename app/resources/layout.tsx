export const metadata = {
  title: "Resources",
  description: "Browse our developer resources.",
};

export default function ResourcesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200 p-4">
      <div className="w-full max-w-6xl mx-auto bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-6 md:p-8 lg:p-10 border border-purple-100/50">
        {/* ─── Header ─── */}
        <div className="relative overflow-hidden rounded-2xl bg-linear-to-br from-purple-50 via-white to-indigo-50/60 px-6 py-8 md:py-10 md:px-8 mb-6 border border-purple-100/40">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-indigo-200/25 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-xs text-purple-600 font-semibold uppercase tracking-wider mb-1">
                <span className="bg-purple-100/70 px-3 py-1 rounded-full border border-purple-200/50">
                  <i className="fa-regular fa-folder-open mr-1" />
                  Marketplace
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 flex items-center gap-3">
                <i className="fa-solid fa-cubes text-purple-500" />
                Resources
              </h1>
              <p className="text-gray-600 text-base md:text-lg max-w-2xl mt-1">
                Browse our developer resources — tools, templates, and more to
                level up your projects.
              </p>
            </div>

            {/* Search / Filter placeholder */}
            <div className="shrink-0">
              <div className="flex items-center gap-2 bg-white/80 rounded-full shadow-sm border border-purple-100/50 px-4 py-2">
                <i className="fa-regular fa-magnifying-glass text-gray-400" />
                <input
                  type="text"
                  placeholder="Search resources..."
                  className="bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400 w-40 md:w-48"
                />
                <button className="text-purple-600 hover:text-purple-800 transition-colors">
                  <i className="fa-regular fa-sliders" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Page Content ─── */}
        <div className="relative">{children}</div>
      </div>
    </div>
  );
}
