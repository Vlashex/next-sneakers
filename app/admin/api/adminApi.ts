import { IsneakersCardData } from "@/app/( Auth )/SignUp/api/types";
import { apiSlice } from "@/app/api/authApi";

const adminApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        createSneakersCard: builder.mutation({
            query: (credentials: IsneakersCardData) => ({
                url: '/api/admin/createSneakersCard',
                method: 'POST',

                body: credentials
            })
        })
    })
})

export const { useCreateSneakersCardMutation } = adminApiSlice
export default adminApiSlice