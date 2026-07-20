import { Review } from "../types/review";

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  // Helper to render star ratings (1–5)
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <i key={`full-${i}`} className="fa-solid fa-star text-amber-400" />,
      );
    }
    if (hasHalfStar) {
      stars.push(
        <i
          key="half"
          className="fa-solid fa-star-half-stroke text-amber-400"
        />,
      );
    }
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <i key={`empty-${i}`} className="fa-regular fa-star text-amber-400" />,
      );
    }
    return stars;
  };

  // Format date (if createdAt is a string or Date)
  const formattedDate = review.createdAt
    ? new Date(review.createdAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : "Unknown date";

  return (
    <div className="group bg-white/90 rounded-2xl p-5 shadow-sm hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-purple-100/50">
      {/* Header: avatar + username + rating */}
      <div className="flex items-start gap-3 mb-3">
        <div className="shrink-0 w-10 h-10 rounded-full bg-linear-to-br from-purple-100 to-purple-200/70 flex items-center justify-center text-purple-600 text-base">
          <i className="fa-regular fa-user" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center justify-between gap-1">
            <h3 className="font-semibold text-gray-800 text-sm truncate">
              {review.username || "Anonymous"}
            </h3>
            <div className="flex items-center gap-0.5 text-xs">
              {renderStars(review.rating || 0)}
              <span className="ml-1 text-xs text-gray-400">
                ({review.rating?.toFixed(1) || "0"})
              </span>
            </div>
          </div>
          <p className="text-xs text-gray-400">
            <i className="fa-regular fa-calendar mr-1" />
            {formattedDate}
          </p>
        </div>
      </div>

      {/* Comment */}
      <p className="text-sm text-gray-600 leading-relaxed mb-2 line-clamp-3">
        {review.comment || "No comment provided."}
      </p>

      {/* Footer: resource ID (as badge) */}
      <div className="flex items-center justify-end gap-3 text-xs text-gray-400 border-t border-purple-50/80 pt-2 mt-1">
        <span className="inline-flex items-center gap-1">
          <i className="fa-regular fa-folder-open text-purple-400" />
          Resource #{review.resourceId}
        </span>
        <span className="inline-flex items-center gap-1">
          <i className="fa-regular fa-id-badge text-purple-400" />
          ID: {review.id}
        </span>
      </div>
    </div>
  );
}
