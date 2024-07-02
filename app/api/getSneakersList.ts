import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { apiSlice } from "./authApi";

export const sneakersApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getSneakersList: builder.query({
            query: (name: string) => `api/${name}`,
        }),
    }),
})

export const {useGetSneakersListQuery} = sneakersApi;