import { apiSlice } from "@/app/api/authApi"

export interface loginInterface {
    identifier: string
    password: string
}

export const loginApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: (credentials: loginInterface) => ({
                url: 'api/auth/local/',
                method: 'POST',
                
                body: credentials
            })
        }),
    })
})

export const { useLoginMutation } = loginApiSlice