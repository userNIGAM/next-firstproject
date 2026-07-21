import { CourseReview } from "../types/coursereview";

type CourseReviewCardProps = {
  review: CourseReview;
};

export default function CourseReviewCard({
  review,
}: CourseReviewCardProps) {
  return (
    <div>
      <p>{review.userName}</p>
      <p>{review.courseId}</p>
      <p>{review.rating}</p>
      <p>{review.comment}</p>
      <p>{review.date}</p>
    </div>
  );
}