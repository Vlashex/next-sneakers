
import { IAuth, IUser } from "@/lib/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit/react";

const baseState:IAuth = {
    user: null,
    token: null
}

export const authSlice = createSlice({
    name: 'authSlice',
    initialState: baseState,
    reducers: {
        setCredentials: (state, action: PayloadAction<IAuth>) => {
            const { user, token } = action.payload
            state.user = user
            state.token = token
        },
        updateUser: (state, action: PayloadAction<IUser>) => {
            const  user  = action.payload
            state.user = user
        }
    },
    selectors: {
        selectUser: (state) => state.user
    }
})

export const { setCredentials, updateUser } = authSlice.actions
export const { selectUser } = authSlice.selectors
export default authSlice