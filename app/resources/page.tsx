import Link from "next/link";
import ResourceCard from "../components/ResourcesCard";
import { resources } from "../data/data";

export default function Resources() {
  return (
    <>
      <div>
        <div>
          <h2>Resources</h2>
          <div className="grid grid-cols-4 gap-4">
            {resources.map((item) => (
              <div key={item.id}>
                <ResourceCard resource={item} />

                <Link
                  href={`/resources/${item.id}`}
                  className="inline-block bg-blue-400 hover:bg-blue-500 p-3 m-3 rounded-xl"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
