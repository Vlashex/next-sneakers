import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";


const baseQuery = fetchBaseQuery({
    baseUrl: ``,
    credentials: "same-origin",
    prepareHeaders: (headers, {getState}) => {

        const token = null
        if (token) {
            headers.set("Authorization", `Bearer ${token}`)
        }
        return headers
    },
})

export const apiSlice = createApi({
    baseQuery: baseQuery,
    endpoints: builder => ({})
})