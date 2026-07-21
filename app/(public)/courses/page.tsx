import Link from "next/link";
import CoursesCard from "../../components/CoursesCard";
import { courses } from "../../data/course";

export default async function CoursePage() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const firstFive = courses.slice(0, 5);

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
          Featured Courses
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          Explore our top {firstFive.length} courses to kickstart your learning
          journey
        </p>
        <div className="mt-4 h-1 w-20 bg-linear-to-r from-blue-600 to-indigo-600 rounded-full" />
      </div>

      {/* Course Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {firstFive.map((item) => (
            <Link
              key={item.id}
              href={`/courses/${item.id}`}
              className="group block transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-xl"
            >
              <CoursesCard course={[item]} />
            </Link>
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-xl text-gray-700 font-medium hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 shadow-sm"
          >
            View All Courses
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </main>
  );
}
