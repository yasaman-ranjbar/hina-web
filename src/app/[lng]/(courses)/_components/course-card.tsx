"use client";

import { CourseSummary } from "@/types/course-summary.interface";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "../../_components/badge/badge";
import { useTranslation } from "@/app/i18n/client";

type CourseCardProps = CourseSummary & {
  lng?: string;
};

const CourseCard: React.FC<CourseCardProps> = ({
  coverImageId,
  title,
  subTitle,
  level,
  recordStatus,
  basePrice,
  duration,
  slug,
  lng,
}) => {
    const { t } = useTranslation(lng!);
  return (
    <div className="card">
      <figure>
        {/* for display external Images like from API we need config security config in Next.config file */}
        <Image
          src={`https://api.classbon.com/api/picture/${coverImageId!}`}
          alt={title}
          width={550}
          height={327}
        />
      </figure>
      <div className="mt-2 flex gap-2 font-semibold dark:text-info px-3 py-2">
        <Badge variant="info">{recordStatus}</Badge>
        <Badge variant="accent">{level}</Badge>
      </div>
      <div className="card-body">
        <Link href={`/course/${slug}`} className="card-title">
          {title}
        </Link>
        <p>{subTitle}</p>
        <div className="flex items-center justify-between">
          <Badge variant="warning">{duration}</Badge>
          {basePrice}
        </div>
      </div>

      <Link
        className="card-footer animated-icon justify-center"
        href={`/course/${slug}`}
      >
        {t("showDetailsCourse")}
      </Link>
    </div>
  );
};

export default CourseCard;
