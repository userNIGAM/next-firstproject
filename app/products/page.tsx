import Link from "next/link";
import ResourceCard from "../components/ResourcesCard";
import { resources } from "../data/data";

export default function ProductsPage() {
  return (
    <>
      <div className="">
        <div className="">
          <h2>Products Page</h2>
          <div className="grid grid-cols-3 gap-6">
            {resources.map((item) => {
              return (
                <div>
                  <ResourceCard key={item.id} resource={item} />
                  <div className="mt-4">
                    <Link
                    href={`/products/${item.id}`} 
                  className=" bg-blue-600 rounded-2xl border border-green-600 hover:bg-blue-700 p-3">
                    View
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
