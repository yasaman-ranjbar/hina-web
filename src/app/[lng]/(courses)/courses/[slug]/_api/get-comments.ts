import { readData } from "@/core/http-service/http-service";
import { commentListProps } from "../_types/course-comment.interface";
import { useQuery } from "@tanstack/react-query";

type commentParamsProps = {
    params: {
        slug: string;
        page: number
    }
}


const getComments = ({ params }: commentParamsProps): Promise<commentListProps> => {
    const { slug, page } = params;
    return readData(`/courses/${slug}/comments?page=${page}`);
}

export const useCourseComments = ({ params }: commentParamsProps) => {

    const { data , isLoading } = useQuery({
        queryKey: ['courseComments'],
        queryFn: () => getComments({ params }),
        staleTime: 5 * 60 * 60 * 1000,
        gcTime: 6 * 60 * 60 * 1000, // 6 hours
    })

    return { data, isLoading };
}
