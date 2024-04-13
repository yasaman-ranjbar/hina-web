"use client";

import Image from "next/image";
import Link from "next/link";
import {
  IconCalendar,
  IconClock,
  IconComment,
  IconEye,
  IconUserProfile,
} from "../../_components/icons/icons";
import { Badge } from "../../_components/badge/badge";
import { BlogPostSummary } from "@/types/blog-post-summary-interface";
import { useTranslation } from "@/app/i18n/client";
import { LanguageProps } from "@/types/translation";


export type BlogPostCardProps = BlogPostSummary & LanguageProps &{};

export const BlogPostCard: React.FC<BlogPostCardProps> = ({
  title,
  thumbnailUrl,
  studyTime,
  author,
  postDate,
  numberOfViews,
  numberOfComments,
  isNew,
  slug,
  lng,
}) => {
    const { t } = useTranslation(lng!);
  return (
    <div className="card">
      {isNew && (
        <Badge
          variant="ghost"
          size="small"
          className="absolute right-2 top-2 !opacity-100"
        >
          {t("new")}
        </Badge>
      )}
      <figure>
        <Image src={thumbnailUrl} alt={title} width={550} height={327} />
      </figure>
          <div className="card-body">
              {/* TODO: Link language check */}
        <Link href={`fa/blog/${slug}`} className="card-title mb-auto">
          {title}
        </Link>

        <div className="flex items-center justify-between mt-2">
          <Badge variant="info" size="tiny">
            <IconUserProfile width={16} height={16} />
            {author}
          </Badge>
          <Badge variant="neutral">
            <IconCalendar width={16} height={16} />
            {postDate}
          </Badge>
        </div>
      </div>

      <div className="card-footer text-xs justify-between">
        <div className="flex gap-1">
          <Badge variant="warning">
            <IconEye width={16} height={16} />
            {numberOfViews}
          </Badge>
          <Badge variant="accent">
            <IconComment width={16} height={16} />
            {numberOfComments}
          </Badge>
        </div>
        <span className="flex items-center gap-1">
          <IconClock width={16} height={16} />
          {`${t("studyTime")} ${studyTime} ${t("minutes")}`}
        </span>
      </div>
    </div>
  );
};
