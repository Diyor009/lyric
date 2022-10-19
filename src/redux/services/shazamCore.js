import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

   export const shazamCoreApi = createApi({
      reducerPath: "shazamCoreApi",
      baseQuery: fetchBaseQuery({
         baseUrl: "https://shazam-core.p.rapidapi.com/v1",
         prepareHeaders: (headers) => {
            headers.set("X-RapidAPI-Key", "ed3f2428b0msh4755cfaf866ae38p1c4a71jsn79b5345f40e0");

            return headers;
         }
      }),
      endpoints : (builder) => ({
         getTopCharts: builder.query({query: () => "./charts/world"}),

      }),

   });

   export const {
      useGetTopChartsQuery,
   } = shazamCoreApi