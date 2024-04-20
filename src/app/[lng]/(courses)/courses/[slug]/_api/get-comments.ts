import { readData } from "@/core/http-service/http-service";
import { commentListProps } from "../_types/course-comment.interface";
import { useInfiniteQuery } from "@tanstack/react-query";

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

    const { data, isFetching , fetchNextPage, isFetchingNextPage, hasNextPage, refetch, error } = useInfiniteQuery({
        queryKey: ['courseComments' , params.slug],
        queryFn: ({ pageParam  }) => getComments({ params: { ...params, page: pageParam } }),
        getNextPageParam: (lastPage) => lastPage.nextPage,
        initialPageParam: 1,
        staleTime: 5 * 60 * 60 * 1000,
        gcTime: 6 * 60 * 60 * 1000, // 6 hours
    })

    return { data, isFetching, fetchNextPage, isFetchingNextPage, hasNextPage, refetch, error };
}
