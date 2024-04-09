import { CourseSummary } from "@/types/course-summary.interface";
import { useTranslation } from "../i18n";
import HomeHeroSection from "./_components/home-hero-section/home-hero-section";
import CourseCardList from "./(courses)/_components/course-card-list";

type paramsProps = {
  params: {
    lng: string;
  };
};

// render as static rendering as a default rendering ---------------

// fetch has cashing without sending several req. 
// if this function is used in the others pages, if this url does not changed only once call this API
async function getNewestCourses(count: number): Promise<CourseSummary[]> {
  const res = await fetch(
    `https://api.classbon.com/api/courses/newest/${count}`, {
      next: {
        revalidate:20 //data revalidate after 20 seconds
      }
    }
  );
  // this response cashed in server side
  return res.json();
}

export default async function Home({ params: { lng } }: paramsProps) {
  const { t } = await useTranslation(lng);
  const newestCourses = await getNewestCourses(4);

  return (
    <>
      <HomeHeroSection />
      <section className="container  pt-20">
        <div className="text-center xl:text-right">
          <h2 className="text-2xl font-extrabold">{t("newestCourses")}</h2>
          <p className="mt-3 text-lg">{t("newestCoursesDescription")}</p>
        </div>
        <CourseCardList courses={newestCourses} />
      </section>
    </>
  );
}
