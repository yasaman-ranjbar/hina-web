import { API_URL } from "@/configs/global";
import { CourseDetailsProps } from "@/types/course-details.interface";
import { CourseAside } from "./_components/courses-aside/courses-aside";
import { Tab } from "@/types/tab.type";
import { Tabs } from "@/app/[lng]/_components/tabs/tabs";
import { Accordion } from "@/app/[lng]/_components/accordion/accordion";
import { Accordion as AccordionType } from "@/types/accardion";
import CourseComments from "./_components/comments/course-comments";
import { CourseChapter } from "@/types/course-chapter.interface";
import { CourseCurriculum } from "./_components/curriculum/course-curriculum";
import { useTranslation } from "@/app/i18n";
import Image from "next/image";
import { VideoPlayer } from "@/app/[lng]/_components/video-palyer/video-player";

interface paramsProps {
  params: {
    slug: string;
    lng: string;
  };
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

async function getCurriculum(slug: string): Promise<CourseChapter[]> {
  const res = await fetch(`${API_URL}/courses/${slug}/curriculum`);
  return res.json();
}

export default async function CourseDetails({ params }: paramsProps) {
  const { slug } = params;
  const { lng } = params;
  const { t } = await useTranslation(lng);
  const courseData = getCourses(slug);
  const courseCurriculumData = getCurriculum(slug);

  const [course, courseCurriculum] = await Promise.all([
    courseData,
    courseCurriculumData,
  ]);

  const faqs: AccordionType[] = course.frequentlyAskedQuestions.map((item) => ({
    id: item.id,
    title: item.question,
    content: item.answer,
  }));

  const tabs: Tab[] = [
    {
      label: t("courseDetails"),
      content: course.description,
    },
    {
      label: t("comment&Question"),
      content: <CourseComments />,
    },
    {
      label: t("faq"),
      content: <Accordion data={faqs} />,
    },
  ];

  return (
    <div className="container grid grid-cols-10 grid-rows-[1fr 1fr] gap-10 py-10">
      <div className="bg-primary pointer-events-none absolute right-0 aspect-square w-1/2   rounded-full opacity-10 blur-3xl"></div>
      <div className="col-span-10 xl:col-span-7">
        <h1 className="text-center xl:text-right text-2xl lg:text-3xl xl:text-4xl font-black leading-10">
          {course.title}
        </h1>
        <h2 className="mt-4 text-center xl:text-right text-lg  leading-9">
          {course.subTitle}
        </h2>

        <div className=" mt-5">
          {course.videoUrl ? (
            <VideoPlayer
              src={course.videoUrl}
              poster={`${API_URL}/picture/${course.coverImageId}`}
            />
          ) : (
            <Image
              src={`${API_URL}/picture/${course.coverImageId}`}
              alt={course.title}
              width={550}
              height={327}
              className="w-full"
            />
          )}
        </div>
      </div>
      <div className="col-span-10 xl:col-span-3 ">
        <CourseAside {...course} />
      </div>
      <div className="col-span-10 xl:col-span-6 ">
        <Tabs tabs={tabs} />
      </div>
      <div className="col-span-10 xl:col-span-4 ">
        <div className="sticky top-5">
          <h2 className="mb-5 text-xl">{t("courseHeadings")}</h2>
          <CourseCurriculum lng={lng} data={courseCurriculum} />
        </div>
      </div>
    </div>
  );
}
