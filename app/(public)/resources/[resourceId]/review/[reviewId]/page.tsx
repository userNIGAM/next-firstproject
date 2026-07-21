import { resources } from "../../../../../data/data";
import { notFound } from "next/navigation";
import ReviewCard from "../../../../../components/ReviewCard";
import { reviews } from "../../../../../data/reviews";
import Link from "next/link";

export default async function ReviewDetails({
  params,
}: {
  params: Promise<{ reviewId: string; resourceId: string }>;
}) {
  await new Promise((resolve)=>setTimeout(resolve, 2000))
  const { reviewId, resourceId } = await params;

  const resource = resources.find((item) => item.id.toString() === resourceId);
  if (!resource) return notFound();

  const review = reviews.find((item) => item.id.toString() === reviewId);
  if (!review) return notFound();

  if (review.resourceId !== Number(resourceId)) {
    return notFound();
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200 p-4">
      <div className="w-full max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-6 md:p-8 lg:p-10 border border-purple-100/50">
        {/* ─── Back button ─── */}
        <Link
          href={`/resources/${resourceId}`}
          className="inline-flex items-center gap-2 px-5 py-2.5 mb-6 bg-white border border-purple-200/60 hover:bg-purple-50 text-purple-700 font-medium rounded-full shadow-sm hover:shadow transition-all duration-200 text-sm"
        >
          <i className="fa-solid fa-arrow-left" />
          Back to Resource
        </Link>

        {/* ─── Hero Header ─── */}
        <div className="relative overflow-hidden rounded-2xl bg-linear-to-br from-purple-50 via-white to-indigo-50/60 px-6 py-8 md:py-10 md:px-8 mb-6 border border-purple-100/40">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-indigo-200/25 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs text-purple-600 font-semibold uppercase tracking-wider mb-1">
                <span className="bg-purple-100/70 px-3 py-1 rounded-full border border-purple-200/50">
                  <i className="fa-regular fa-star mr-1" />
                  Review Detail
                </span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-500 font-normal normal-case">
                  Resource: {resource.title}
                </span>
              </div>
              <h1 className="text-2xl md:text-3xl font-extrabold text-gray-800 flex items-center gap-3">
                <i className="fa-regular fa-comment text-purple-500 text-xl" />
                Review #{review.id}
              </h1>
              <p className="text-gray-500 text-sm mt-1">
                by{" "}
                <span className="font-medium text-purple-700">
                  {review.username || "Anonymous"}
                </span>{" "}
                ·{" "}
                {new Date(review.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>

            {/* Rating summary */}
            <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow-sm border border-purple-100/50">
              <span className="text-sm font-semibold text-gray-700">
                {review.rating?.toFixed(1) || "0"}
              </span>
              <div className="flex text-amber-400 text-sm">
                {[...Array(5)].map((_, i) => (
                  <i
                    key={i}
                    className={
                      i < Math.round(review.rating || 0)
                        ? "fa-solid fa-star"
                        : "fa-regular fa-star"
                    }
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ─── Review Card ─── */}
        <div className="mt-2">
          <ReviewCard review={review} />
        </div>

        {/* ─── Additional actions (optional) ─── */}
        <div className="mt-6 pt-4 border-t border-purple-100/60 flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs text-gray-400">
            <i className="fa-regular fa-link mr-1" />
            Review ID: {review.id}
          </span>
          <div className="flex gap-2">
            <button className="text-xs text-purple-500 hover:text-purple-700 transition-colors flex items-center gap-1">
              <i className="fa-regular fa-flag" />
              Report
            </button>
            <button className="text-xs text-purple-500 hover:text-purple-700 transition-colors flex items-center gap-1">
              <i className="fa-regular fa-heart" />
              Like
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
