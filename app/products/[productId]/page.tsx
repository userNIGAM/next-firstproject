  import { notFound } from "next/navigation";
import { resources } from "../../data/data";
import ResourceCard from "@/app/components/ResourcesCard";

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;
  const resource = resources.find((item) => item.id.toString() === productId);
  if(!resource){
    notFound()
  }
  return (
    <>
      <div className="">
        <div className="">
          <h2>Product Details Page</h2>
          <ResourceCard resource={resource}/>
        </div>
      </div>
    </>
  );
}
