import CoursesCard from "@/app/components/CoursesCard";
import { courses } from "@/app/data/course";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function ({
  params,
}: {
  params: Promise<{ courseId: string }>;
}) {
    const {courseId} = await params;
    const course = courses.find((item)=> item.id.toString() === courseId)
    if(!course) return notFound()
  return (
    <>
      <div className="w-full min-w-md p-4 grid grid-cols-4 gap-4">
            {courses.map((item)=>(
                <div key={item.id}>
                    <Link key={item.id} href={`/courses/${item.id}/coursereviews`}><CoursesCard course={[item]} /></Link>
                </div>
            ))}
      </div>
    </>
  );
}
