"use client";

import { useParams } from "next/navigation";
import { useCourseComments } from "../../_api/get-comments";
import { Comment } from "@/app/[lng]/_components/comments/comments";
import { TextPlaceholder } from "@/app/[lng]/_components/placeholders";
import { Fragment, useEffect } from "react";
import { useInView } from "react-intersection-observer";

function CourseComments() {
  const { ref, inView } = useInView({});
  const { slug } = useParams();

  const {
    data: comments,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
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

      {isFetchingNextPage ||
        (hasNextPage && (
          <div ref={ref}>
            <TextPlaceholder />
          </div>
        ))}
    </div>
  );
}

export default CourseComments;
