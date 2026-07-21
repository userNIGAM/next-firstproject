import { courses } from "@/app/data/course";
import { notFound } from "next/navigation";
import { coursereviews } from "../../../../data/coursereviews";
import CourseReviewCard from "@/app/components/CourseReviewCard";
export default async function Reviews({
  params,
}: {
  params: Promise<{ courseId: string }>;
}) {
  const { courseId } = await params;
  const course = courses.find((item) => item.id.toString() === courseId);

  if (!course) return notFound();

  const courseReview = coursereviews.filter(
    (item) => item.id.toString() === courseId,
  );

  if (!courseReview) return notFound();

  const courseFilter = coursereviews.filter((review)=> review.id)

  return (
    <>
      <div className="">
        <div className="">
          {courseReview.map((item) => (
            <div key={item.id}>
              <CourseReviewCard key={item.id} review={item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
