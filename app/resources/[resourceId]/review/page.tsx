import ReviewCard from "@/app/components/ReviewCard";
import { reviews } from "@/app/data/reviews";
import Link from "next/link";
import { notFound } from "next/navigation";
import { resources } from "@/app/data/data";

export default async function ReviewPage({
  params,
}: {
  params: Promise<{ resourceId: string, reviewId : string }>;
}) {
  const { resourceId , reviewId } = await params;

  const resource = resources.find((item) => item.id.toString() === resourceId);

  if (!resource) {
    notFound();
  }


  const resourceReviews = reviews.filter(
    (review) => review.resourceId === Number(resourceId),
  );
  if (resourceReviews.length === 0)
    return (
      <>
        <h2>No Reviews Yet</h2>
        <p>Be the first to review this resource.</p>
      </>
    );

  return (
    <>
      <div className="">
        <div className="">
          <h2>ReviewPage</h2>
          <div className="m-5">
            <Link
              className="bg-blue-500 border border-blue-500 p-2 m-3 rounded-xl hover:bg-blue-600"
              href={`/resources/${resourceId}`}
            >
              Back
            </Link>
          </div>
          <div>
            {resourceReviews.map((item) => (
              <Link key={item.id} href={``}><ReviewCard key={item.id} review={item} /></Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
