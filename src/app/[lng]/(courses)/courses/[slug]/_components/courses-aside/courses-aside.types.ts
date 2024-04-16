import { CourseDetailsProps } from "@/types/course-details.interface";

export type CourseAsideProps = Pick<
    CourseDetailsProps,
    | "basePrice"
    | "numberOfLectures"
    | "numOfStudents"
    | "duration"
    | "recordStatus"
    | "isDownloadable"
    | "averageReviewRating"
    | "level"
    | "numOfReviews"
    | "authorName"
    | "authorSpecialty"
    | "profileImageId"
    | "levelNumber"
>;