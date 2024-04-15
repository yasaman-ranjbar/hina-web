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
  const courseData = await getCourses(slug);

  return <h1>{courseData.title}</h1>;
}
