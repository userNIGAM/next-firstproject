import Link from "next/link";
import { resources } from "../data/data";

export default function CategoriesCard() {
  return (
    <>
      <div className="">
        <div className="bg-gray-300 ">
          <h1>Browse Resources</h1>
          <h2 className="text-center font-bold text-3xl ">Categories</h2>
          <div className="grid grid-cols-5 gap-3">
            {resources.map((resource) => (
              <div key={resource.id}>
                <h1 className="border border-black hover:bg-white cursor-pointer">
                  <Link href="">{resource.title}</Link>{" "}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
