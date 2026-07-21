import { Courses } from "../types/course";

export default function CoursesCard({ course }: { course: Courses[] }) {
    return (
        <>
            {course.map((item) => (
                <div
                    key={item.id}
                    className="flex flex-col h-full bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100"
                >
                    {/* Image Container */}
                    <div className="relative w-full h-48 overflow-hidden bg-gray-200">
                        <img
                            src={item.Image}
                            alt={item.Title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        {/* Optional badge */}
                        <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow-md">
                            Featured
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col flex-1 p-4">
                        <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 leading-tight mb-1">
                            {item.Title}
                        </h3>

                        <p className="text-sm text-gray-600 line-clamp-3 flex-1 mb-3">
                            {item.description}
                        </p>

                        <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
                            <div className="flex flex-col">
                                <span className="text-xl font-bold text-gray-900">
                                    ${item.Price}
                                </span>
                                {item.Price && (
                                    <span className="text-xs text-gray-500 line-through">
                                        ${(item.Price * 1.2).toFixed(2)}
                                    </span>
                                )}
                            </div>

                            <div className="flex items-center gap-1 bg-yellow-50 px-2.5 py-1 rounded-full">
                                <span className="text-yellow-500 text-sm">⭐</span>
                                <span className="text-sm font-medium text-gray-700">
                                    {item.Rating}
                                </span>
                            </div>
                        </div>

                        {/* View details link (optional) */}
                        <div className="mt-3 text-right">
                            <span className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors">
                                View Course →
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}