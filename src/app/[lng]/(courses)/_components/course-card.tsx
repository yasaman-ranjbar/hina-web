"use client";

import { CourseSummary } from "@/types/course-summary.interface";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "../../_components/badge/badge";
import { useTranslation } from "@/app/i18n/client";
import { IconArrowLeftFill, IconClock } from "../../_components/icons/icons";
import { Price } from "../../_components/price/price";

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
  console.log(lng);
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
        {/* TODO: Link language check */}
        <Link href={`fa/courses/${slug}`} className="card-title">
          {title}
        </Link>
        <p>{subTitle}</p>
        <div className="flex items-center justify-between mt-3">
          <Badge variant="warning">
            <IconClock width={16} height={16} />
            {duration}
          </Badge>
          <Price price={basePrice} size="small" />
        </div>
      </div>
      {/* TODO: Link language check */}
      <Link
        className="card-footer animated-icon justify-center"
        href={`fa/courses/${slug}`}
      >
        {t("showDetailsCourse")}
        <IconArrowLeftFill fill="currentColor" />
      </Link>
    </div>
  );
};

export default CourseCard;
