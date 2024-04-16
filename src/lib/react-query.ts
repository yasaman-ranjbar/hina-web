import { QueryCache, QueryClient } from "react-query";

export const queryClient = new QueryClient({
    queryCache: new QueryCache({
        onError: (error) => {
            // show notification
        }
    }),

    defaultOptions: {
        queries: {
            retry: false, // when the req is failed we do not want to send req again
            refetchOnWindowFocus: false, // when the window is minimized we do not want to send a req again
            useErrorBoundary: false, // we set error handle in http service
            cacheTime: 1000 * 60 * 60 * 24 // cash time be 24 hours
        }
    }
})