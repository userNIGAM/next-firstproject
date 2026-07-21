import Link from "next/link";
import CategoriesCard from "../components/CategoriesCard";
import ResourcesCard from "../components/ResourcesCard";
import { resources } from "../data/data";

export default function Home() {
  const firstThree = resources.slice(0, 3);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200 p-4">
      <div className="w-full max-w-6xl mx-auto bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-6 md:p-8 lg:p-10 border border-purple-100/50">
        
        {/* ─── HERO ─── */}
        <section className="relative overflow-hidden rounded-2xl bg-linear-to-br from-purple-50 via-white to-indigo-50/60 px-6 py-8 md:py-12 md:px-10 mb-8 border border-purple-100/40">
          {/* decorative blobs */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-indigo-200/25 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-purple-600 bg-purple-100/70 px-3 py-1 rounded-full border border-purple-200/50">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
                  Marketplace
                </span>
                <span className="text-xs text-gray-400 font-medium">✦ v2.0</span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                <span className="bg-linear-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                  DevStore!
                </span>
              </h2>

              <p className="text-gray-600 text-base md:text-lg max-w-xl leading-relaxed font-light">
                DevStore is an online marketplace where you can explore
                <span className="font-semibold text-purple-700"> premium dev resources</span>,
                tools, and templates — all in one place.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/resources"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-linear-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold rounded-full shadow-lg shadow-purple-500/30 hover:shadow-purple-500/40 transition-all duration-300 text-sm md:text-base"
                >
                  <i className="fa-solid fa-compass" />
                  Browse Resources
                  <i className="fa-solid fa-arrow-right text-xs opacity-70" />
                </Link>
                <a
                  href="#categories"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-purple-600 transition-colors duration-200"
                >
                  <i className="fa-regular fa-circle-play" />
                  Explore categories
                  <i className="fa-solid fa-chevron-right text-[10px]" />
                </a>
              </div>
            </div>

            {/* decorative icon (desktop) */}
            <div className="hidden md:flex items-center justify-center">
              <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-linear-to-br from-purple-100 to-indigo-100 flex items-center justify-center shadow-inner border border-white/50 animate-[float_4s_ease-in-out_infinite]">
                <i className="fa-solid fa-cubes text-4xl md:text-5xl text-purple-500" />
              </div>
            </div>
          </div>
        </section>

        {/* ─── CATEGORIES ─── */}
        <section id="categories" className="mb-8">
          <div className="flex items-center justify-between mb-4">
          </div>
          <CategoriesCard />
        </section>

        {/* ─── FEATURED RESOURCES ─── */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg md:text-xl font-bold text-gray-800 flex items-center gap-2">
              <i className="fa-regular fa-star text-amber-400 text-sm" />
              Featured Resources
            </h3>
            <span className="text-xs text-gray-400 font-medium">Top picks</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {firstThree.map((item) => (
              <Link
                key={item.id}
                href={`/resources/${item.id}`}
                className="block group"
              >
                <ResourcesCard resource={item} />
              </Link>
            ))}
          </div>

          <div className="mt-6 text-center">
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 text-sm font-medium text-purple-600 hover:text-purple-800 transition-colors border-b border-purple-200/50 hover:border-purple-400 pb-0.5"
            >
              View all resources
              <i className="fa-solid fa-arrow-right text-xs" />
            </Link>
          </div>
        </section>

        {/* ─── FOOTER STATUS ─── */}
        <div className="mt-8 pt-5 border-t border-purple-100/60 flex flex-wrap items-center justify-between gap-3 text-xs text-gray-400">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>All systems operational</span>
          </span>
          <span className="flex items-center gap-4">
            <span><i className="fa-regular fa-circle-check text-purple-400 mr-1" /> 84 resources</span>
            <span><i className="fa-regular fa-user text-purple-400 mr-1" /> 2.1k devs</span>
            <span className="hidden sm:inline"><i className="fa-regular fa-heart text-purple-400 mr-1" /> 342 likes</span>
          </span>
        </div>
      </div>
    </div>
  );
}