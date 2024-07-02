import { apiSlice } from "@/app/api/authApi"

export interface passRecInterface {
    code: string
    password: string
    passwordConfirmation: string
}

export const passRecApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        passrecover: builder.mutation({
            query: (credentials: string) => ({
                url: 'api/auth/reset-password',
                method: 'POST',

                body: credentials
            }),
        })
    })
})

export const { usePassrecoverMutation } = passRecApi