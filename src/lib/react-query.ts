import { MutationCache, QueryCache, QueryClient } from '@tanstack/react-query'


export const queryClient = new QueryClient({
    queryCache: new QueryCache({
        onError: (error) => {
            // show notification
        }
    }),

    mutationCache: new MutationCache({
        onError: (error) => {
            // show notification
        }
    }),

    defaultOptions: {
        queries: {
            retry: false, // when the req is failed we do not want to send req again
            refetchOnWindowFocus: false, // when the window is minimized we do not want to send a req again
            throwOnError: false, // we set error handle in http service
            gcTime: 1000 * 60 * 60 * 24 // the time data inactive
        }
    }
})