import { resources } from "@/app/data/data";
import { notFound } from "next/navigation";
import ReviewCard from "@/app/components/ReviewCard";
import { reviews } from "@/app/data/reviews";

export default async function ReviewDetails({
  params,
}: {
  params: Promise<{
    reviewId: string;
    resourceId: string;
  }>;
}) {
  const { reviewId, resourceId } = await params;

  const resource = resources.find((item) => item.id.toString() === resourceId);
  if(!resource) return notFound();

  const review = reviews.find((item)=> item.id.toString() === reviewId)
  if(!review) return notFound()

    if (review.resourceId !== Number(resourceId)){
        return notFound()
    }
  return (
    <>
      <div className="">
        <div className="">
          <h2>ReviewDetails</h2>
          <ReviewCard review={review}/>
        </div>
      </div>
    </>
  );
}
