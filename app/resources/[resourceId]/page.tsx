import ResourceCard from "@/app/components/ResourcesCard";
import { resources } from "@/app/data/data";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ resourceId: string }>;
}) {
  const { resourceId } = await params;
  const resource = resources.find((item) => item.id.toString() === resourceId);
  if (!resource) {
    return {
      title: "Resource Not Found",
      description: "The requested resource could not be found.",
    };
  }
  return {
    title: resource.title,
    description: resource.description,
  };
}

export default async function ResourcesPage({
  params,
}: {
  params: Promise<{ resourceId: string }>;
}) {
  const { resourceId } = await params;
  const resource = resources.find((item) => item.id.toString() === resourceId);

  if (!resource) {
    notFound();
  }

  // Helper to render stars (if you want to show rating)
  const renderStars = (rating: number) => {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5;
    const stars = [];
    for (let i = 0; i < full; i++)
      stars.push(
        <i
          key={`full-${i}`}
          className="fa-solid fa-star text-amber-400 text-sm"
        />,
      );
    if (half)
      stars.push(
        <i
          key="half"
          className="fa-solid fa-star-half-stroke text-amber-400 text-sm"
        />,
      );
    const empty = 5 - stars.length;
    for (let i = 0; i < empty; i++)
      stars.push(
        <i
          key={`empty-${i}`}
          className="fa-regular fa-star text-amber-400 text-sm"
        />,
      );
    return stars;
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200 p-4">
      <div className="w-full max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-6 md:p-8 lg:p-10 border border-purple-100/50">
        {/* ─── Back button ─── */}
        <Link
          href="/resources"
          className="inline-flex items-center gap-2 px-5 py-2.5 mb-6 bg-white border border-purple-200/60 hover:bg-purple-50 text-purple-700 font-medium rounded-full shadow-sm hover:shadow transition-all duration-200 text-sm"
        >
          <i className="fa-solid fa-arrow-left" />
          Back to Resources
        </Link>

        {/* ─── Resource Hero ─── */}
        <div className="relative overflow-hidden rounded-2xl bg-linear-to-br from-purple-50 via-white to-indigo-50/60 px-6 py-8 md:py-10 md:px-8 mb-6 border border-purple-100/40">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-indigo-200/25 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 text-xs text-purple-600 font-semibold uppercase tracking-wider mb-2">
                <span className="bg-purple-100/70 px-3 py-1 rounded-full border border-purple-200/50">
                  {resource.category || "Uncategorized"}
                </span>
                {resource.price === 0 ? (
                  <span className="bg-emerald-100/70 text-emerald-700 px-3 py-1 rounded-full border border-emerald-200/50">
                    Free
                  </span>
                ) : (
                  <span className="bg-amber-100/70 text-amber-700 px-3 py-1 rounded-full border border-amber-200/50">
                    Premium
                  </span>
                )}
              </div>

              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-2">
                {resource.title}
              </h1>

              <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl">
                {resource.description || "No description available."}
              </p>

              <div className="flex flex-wrap items-center gap-4 mt-4">
                {/* Rating */}
                {resource.rating && (
                  <div className="flex items-center gap-1.5 bg-white/80 px-3 py-1.5 rounded-full shadow-sm border border-purple-100/50">
                    {renderStars(resource.rating)}
                    <span className="text-sm font-medium text-gray-700 ml-1">
                      {resource.rating.toFixed(1)}
                    </span>
                  </div>
                )}
                {/* Price */}
                <div className="flex items-center gap-1.5 bg-white/80 px-3 py-1.5 rounded-full shadow-sm border border-purple-100/50">
                  <i className="fa-regular fa-tag text-purple-500" />
                  <span className="text-sm font-medium text-gray-700">
                    Rs. {resource.price?.toLocaleString() || "0"}
                  </span>
                </div>
                {/* Resource ID (optional) */}
                <div className="flex items-center gap-1.5 bg-white/80 px-3 py-1.5 rounded-full shadow-sm border border-purple-100/50">
                  <i className="fa-regular fa-id-badge text-purple-500" />
                  <span className="text-xs text-gray-500">
                    ID: {resource.id}
                  </span>
                </div>
              </div>
            </div>

            {/* Optional: large icon */}
            <div className="hidden md:flex items-center justify-center w-24 h-24 rounded-full bg-linear-to-br from-purple-100 to-indigo-100 shadow-inner border border-white/50">
              <i className="fa-solid fa-cube text-4xl text-purple-500" />
            </div>
          </div>
        </div>

        {/* ─── Actions ─── */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-purple-100/60">
          <span className="text-sm text-gray-400 flex items-center gap-1">
            <i className="fa-regular fa-clock" />
            Added on {new Date().toLocaleDateString()}{" "}
            {/* placeholder; if you have a date field, use it */}
          </span>

          <Link
            href={`/resources/${resource.id}/review`}
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-linear-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold rounded-full shadow-lg shadow-purple-500/30 hover:shadow-purple-500/40 transition-all duration-300 text-sm md:text-base"
          >
            <i className="fa-regular fa-message" />
            View Reviews
            <i className="fa-solid fa-arrow-right text-xs opacity-70" />
          </Link>
        </div>
      </div>
    </div>
  );
}
