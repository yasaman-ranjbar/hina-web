"use client";

import { useParams } from "next/navigation";
import { useCourseComments } from "../../_api/get-comments";
import { Comment } from "@/app/[lng]/_components/comments/comments";
import { TextPlaceholder } from "@/app/[lng]/_components/placeholders";

function CourseComments() {
  const { slug } = useParams();

  const { data: comments, isLoading } = useCourseComments({
    params: {
      slug: slug as string,
      page: 1,
    },
  });

  return (
    <div>
      {comments?.data.map((comment) => (
        <Comment key={`comment-${comment.id}`} {...comment} variant="info" />
      ))}

      {isLoading && <TextPlaceholder />}
    </div>
  );
}

export default CourseComments;
