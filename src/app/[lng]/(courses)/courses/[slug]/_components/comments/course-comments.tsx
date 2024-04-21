"use client";

import { useParams } from "next/navigation";
import { useCourseComments } from "../../_api/get-comments";
import { Comment } from "@/app/[lng]/_components/comments/comments";
import { TextPlaceholder } from "@/app/[lng]/_components/placeholders";
import { Fragment, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Button from "@/app/[lng]/_components/button/button";
import { IconRefresh } from "@/app/[lng]/_components/icons/icons";
import { useTranslation } from "@/app/i18n/client";
import { LanguageProps } from "@/types/translation";
import { Alert } from "@/app/[lng]/_components/alert/alert";

function CourseComments({lng} : LanguageProps) {
  const { ref, inView } = useInView({});
  const { slug } = useParams();
  const {t} = useTranslation(lng!)

  const {
    data: comments,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    refetch,
  } = useCourseComments({
    params: {
      slug: slug as string,
      page: 1,
    },
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);
  
  if (error) {
    return (
      <>
        <Alert variant="error">{t("serverError")}</Alert>
        <div className="text-center mt-3">
          <Button
            variant="neutral"
            className="font-semibold"
            isOutline={true}
            shape="wide"
            onClick={() => refetch()}
          >
            <IconRefresh />
            {t("tryAgain")}
          </Button>
        </div>
      </>
    );
  }

  return (
    <div>
      {comments?.pages.map((item) => (
        <Fragment key={`comment-page-${item}`}>
          {item.data.map((comment) => (
            <Comment
              key={`comment-${comment.id}`}
              {...comment}
              variant="info"
            />
          ))}
        </Fragment>
      ))}

      {isFetching ||
        (hasNextPage && (
          <div ref={ref}>
            <TextPlaceholder />
          </div>
        ))}
    </div>
  );
}

export default CourseComments;
