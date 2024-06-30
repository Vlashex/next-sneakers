import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const sneakersApi = createApi({
    reducerPath: "sneakersAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:1337/",
    }),
    endpoints: (builder) => ({
        getSneakersList: builder.query({
            query: (name: string) => `api/${name}`,
        }),
    }),
});

export const {useGetSneakersListQuery} = sneakersApi;