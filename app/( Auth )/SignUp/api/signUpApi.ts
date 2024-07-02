import { apiSlice } from "@/app/api/authApi"

export interface registerInterface {
    username: string
    email: string
    password: string
}

export const signUpApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        signUp: builder.mutation({
            query: (credentials:registerInterface) => ({
                url: '/api/auth/local/register',
                method: 'POST',

                body: credentials
            })
        })
    })
})

export const { useSignUpMutation } = signUpApiSlice