import { apiSlice } from "@/app/api/authApi"
import { IRegistrate } from "./types"


export const signUpApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        signUp: builder.mutation({
            query: (credentials:IRegistrate) => ({
                url: '/api/auth/registrate',
                method: 'POST',

                body: credentials
            })
        })
    })
})

export const { useSignUpMutation } = signUpApiSlice