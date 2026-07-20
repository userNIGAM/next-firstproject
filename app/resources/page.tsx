import Link from "next/link";
import ResourceCard from "../components/ResourcesCard";
import { resources } from "../data/data";

export default function Resources() {
  return (
    <>
      {/* Header with count */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
          <i className="fa-regular fa-layer-group text-purple-500" />
          All Resources
          <span className="text-sm font-normal text-gray-400 ml-1">
            ({resources.length})
          </span>
        </h2>
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <span className="inline-flex items-center gap-1">
            <i className="fa-regular fa-arrow-up-wide-short" />
            Sort by
          </span>
          <select className="bg-transparent border border-purple-100/50 rounded-full px-2 py-1 text-gray-600 text-xs focus:outline-none focus:ring-1 focus:ring-purple-300">
            <option>Newest</option>
            <option>Popular</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Resources Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {resources.map((item) => (
          <Link key={item.id} href={`/resources/${item.id}`} className="block">
            <ResourceCard resource={item} />
          </Link>
        ))}
      </div>
    </>
  );
}
