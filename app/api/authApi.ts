import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";
import { IAuth } from "../(Auth)/SignUp/api/types";


const baseQuery = fetchBaseQuery({
    baseUrl: ``,
    credentials: "same-origin",
    prepareHeaders: (headers, {getState}) => {

        const token = (getState() as IAuth).token
        if (token) {
            headers.set("Authorization", `Bearer ${token}`)
        }
        return headers
    },
})

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: baseQuery,
    endpoints: builder => ({})
})