import { Comment } from "@/types/comment.interface";

export interface commentListProps {
    data: Comment[];
    nextPage: number;
}