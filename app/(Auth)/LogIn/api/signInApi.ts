import { apiSlice } from "@/app/api/authApi"
import { ILogin } from "../../SignUp/api/types"


export const signInApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        signIn: builder.mutation({
            query: (credentials:ILogin) => ({
                url: '/api/auth/login',
                method: 'POST',

                body: credentials
            })
        })
    })
})

export const { useSignInMutation } = signInApiSlice
export default signInApiSlice