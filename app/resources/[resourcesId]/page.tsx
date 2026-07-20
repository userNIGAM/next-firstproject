import ResourceCard from "@/app/components/ResourcesCard";
import { resources } from "@/app/data/data";
import { notFound } from "next/navigation";

export default async function ResourcesPage({
  params,
}: {
  params: Promise<{ resourcesId: string }>;
}) {
  const { resourcesId } = await params;

  const resource = resources.find(
    (item) => item.id.toString() === resourcesId
  );

  if (!resource) {
    notFound();
  }

  return <ResourceCard resource={resource} />;
}