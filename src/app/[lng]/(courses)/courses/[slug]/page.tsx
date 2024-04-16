import Progress from "@/app/[lng]/_components/progress/progress";
import Rating from "@/app/[lng]/_components/rating/rating";
import { API_URL } from "@/configs/global";
import { CourseDetailsProps } from "@/types/course-details.interface";

interface paramsProps {
  params: { slug: string };
}

// this function is a reserved function Next.js and used in dynamic route and create static page
// when use this function all route created as a static page
export async function generateStaticParams() {
  const slug = await fetch(`${API_URL}/courses/slugs`).then((res) =>
    res.json()
  );

  return (slug as string[]).map((slug) => ({
    slug: slug,
  }));
}

async function getCourses(slug: string): Promise<CourseDetailsProps> {
  const res = await fetch(`${API_URL}/courses/${slug}`);
  return res.json();
}

export default async function CourseDetails({ params }: paramsProps) {
  const { slug } = params;
  const course = await getCourses(slug);

  return (
    <div className="h-96 container grid grid-cols-10 grid-rows-[1fr 1fr] gap-10 py-10">
      <div className="bg-primary pointer-events-none absolute right-0 aspect-square w-1/2   rounded-full opacity-10 blur-3xl"></div>
      <div className="col-span-10 xl:col-span-7">
        <h1 className="text-center xl:text-right text-2xl lg:text-3xl xl:text-4xl font-black leading-10">
          {course.title}
        </h1>
        <h2 className="mt-4 text-center xl:text-right text-lg  leading-9">
          {course.subTitle}
        </h2>

        <div className=" mt-5">Video Player Component</div>
      </div>
      <div className="col-span-10 xl:col-span-3 ">
        <Rating rate={2} />
        <Progress value={50} variant="accent" size="large" />
      </div>
      <div className="col-span-10 xl:col-span-6 bg-info"></div>
      <div className="col-span-10 xl:col-span-4 bg-warning"></div>
    </div>
  );
}
