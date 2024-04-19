export interface CommentProps {
    id: number;
    date: string;
    userId: number | undefined;
    fullName: string;
    commentText: string;
    score: number | null;
    isResponse: boolean;
}