import Link from "next/link";
import CategoriesCard from "./components/CategoriesCard";
import ResourcesCard from "./components/ResourcesCard";
import { resources } from "./data/data";

export default function Home() {
  const firstThree = resources.slice(0,3)
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-200">
        <div className="w-max min-w-md bg-white py-4 shadow-2xl">
          <div className="hero py-2">
            <h2 className="font-bold text-2xl text-purple-600">DevStore!</h2>

            <p className="font-light text-xl text-purple-600">
              Dev store is a online based marketplace where you can explore many
              features.
            </p>

            <div className="w-30">
              <button className="border rounded-2xl w-full bg-purple-700 hover:bg-purple-800">
              <Link href="/resources">Browse Resources</Link>
            </button>
            </div>
          </div>
          <CategoriesCard />
          <div className="grid grid-cols-3 gap-3 p-5">
            {firstThree.map((item)=>(
            <ResourcesCard key={item.id} resource={item}/>
          ))}
          </div>
        </div>
      </div>
    </>
  );
}
