import ReviewCard from "@/app/components/ReviewCard";
import { reviews } from "@/app/data/reviews";
import Link from "next/link";
import { notFound } from "next/navigation";
import { resources } from "@/app/data/data";

export default async function ReviewPage({
  params,
}: {
  params: Promise<{ resourceId: string }>;
}) {
  const { resourceId} = await params;

  const resource = resources.find((item) => item.id.toString() === resourceId);

  if (!resource) {
    notFound();
  }

  const resourceReviews = reviews.filter(
    (review) => review.resourceId === Number(resourceId),
  );

  // ─── Empty state ────────────────────────────────────────────────
  if (resourceReviews.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-200 p-4">
        <div className="w-full max-w-3xl mx-auto bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 text-center border border-purple-100/50">
          <div className="w-20 h-20 rounded-full bg-purple-100/70 flex items-center justify-center mx-auto mb-6">
            <i className="fa-regular fa-comment-dots text-4xl text-purple-500" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-3">
            No Reviews Yet
          </h2>
          <p className="text-gray-500 text-lg mb-8">
            Be the first to review{" "}
            <span className="font-semibold text-purple-700">
              {resource.title}
            </span>
            .
          </p>
          <Link
            href={`/resources/${resourceId}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold rounded-full shadow-lg shadow-purple-500/30 hover:shadow-purple-500/40 transition-all duration-300"
          >
            <i className="fa-solid fa-arrow-left" />
            Back to Resource
          </Link>
        </div>
      </div>
    );
  }

  // ─── Reviews list ──────────────────────────────────────────────
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200 p-4">
      <div className="w-full max-w-5xl mx-auto bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-6 md:p-8 lg:p-10 border border-purple-100/50">
        {/* ─── Header ─── */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6 pb-4 border-b border-purple-100/60">
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-gray-800 flex items-center gap-2">
              <i className="fa-regular fa-star text-amber-400 text-xl" />
              Reviews for {resource.title}
            </h1>
            <p className="text-sm text-gray-400 mt-0.5 flex items-center gap-1">
              <i className="fa-regular fa-message" />
              {resourceReviews.length}{" "}
              {resourceReviews.length === 1 ? "review" : "reviews"} •
              <span className="text-purple-600 font-medium">
                avg. rating: ★{" "}
                {(
                  resourceReviews.reduce((acc, r) => acc + (r.rating || 0), 0) /
                  resourceReviews.length
                ).toFixed(1)}
              </span>
            </p>
          </div>
          <Link
            href={`/resources/${resourceId}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-purple-200/60 hover:bg-purple-50 text-purple-700 font-medium rounded-full shadow-sm hover:shadow transition-all duration-200 text-sm"
          >
            <i className="fa-solid fa-arrow-left" />
            Back to Resource
          </Link>
        </div>

        {/* ─── Reviews Grid ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {resourceReviews.map((item) => (
            <Link
              key={item.id}
              href={`/resources/${resourceId}/review/${item.id}`}
              className="block"
            >
              <ReviewCard review={item} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
