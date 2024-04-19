"use client";

import { useParams } from "next/navigation";
import { useCourseComments } from "../../_api/get-comments";
import { Comment } from "@/app/[lng]/_components/comments/comments";

function CourseComments() {
  const { slug } = useParams();

  const { data: comments } = useCourseComments({
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
    </div>
  );
}

export default CourseComments;
