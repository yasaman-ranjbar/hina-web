"use client";

import { useParams } from "next/navigation";
import { useCourseComments } from "../../_api/get-comments";

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
      {comments?.data.map((p) => (
        <p key={p.id} className="mb-8">
          {p.commentText}
        </p>
      ))}
    </div>
  );
}

export default CourseComments;
