import { Resource } from "../types/resource";
interface ResourceCardProps {
  resource: Resource;
}

export default function ResourceCard({ resource }: ResourceCardProps) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-md transition">
      <h3 className="text-xl font-semibold">Title : {resource.title}</h3>
      <p className="text-gray-600 my-2">Description :{resource.description}</p>
      <p className="text-gray-600 my-2">Category : {resource.category}</p>
      <p className="text-gray-600 my-2">Rating : {resource.rating}</p>
      <p className="text-gray-600 my-2">Price : Rs.{resource.price}</p>

    </div>
  );
}