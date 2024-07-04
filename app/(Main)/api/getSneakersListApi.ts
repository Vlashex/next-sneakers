import { apiSlice } from "@/app/api/authApi";


const getSneakersListApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getSneakersList: builder.mutation({
            query: (arg: null) => ({
                url: '/api/sneakers-cards',
                method: 'GET'
            })
        })
    })
})

export const { useGetSneakersListMutation } = getSneakersListApiSlice
export default getSneakersListApiSlice