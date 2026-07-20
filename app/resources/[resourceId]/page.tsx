import ResourceCard from "@/app/components/ResourcesCard";
import { resources } from "@/app/data/data";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateMetadata ({params} : {params : Promise<{resourceId : string}>}){
    const {resourceId} = await params;

    const resource = resources.find((item)=> item.id.toString() === resourceId )
    if(!resource) return {
        title :  "Resources Not Found",
        description  : "The requested resource could not be found.",
    };

    return{
        title : resource.title,
        description : resource.description,
    }
}
export default async function ResourcesPage({
  params,
}: {
  params: Promise<{ resourceId: string }>;
}) {
  const { resourceId } = await params;

  const resource = resources.find(
    (item) => item.id.toString() === resourceId
  );

  if (!resource) {
    notFound();
  }

  return (
  <>
    <div>
      <Link
      className="bg-blue-500 border border-blue-400 hover:bg-blue-600 m-2 p-2 w-full rounded-2xl"
      href="/resources">Back</Link>
        <div className="m-5"></div>
      <Link href={`/resources/${resource.id}/review`}><ResourceCard resource={resource} /></Link>
    </div>
  </>
);
}