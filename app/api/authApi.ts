import { FetchArgs, createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { authStateInterface, setCredentials } from "./authSlice";

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:1337/',
    credentials: "same-origin",
    prepareHeaders: (headers, {getState}) => {

        const token = (getState() as authStateInterface).token
        console.log(token)
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