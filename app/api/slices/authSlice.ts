
import { IAuth } from "@/app/types";
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
        }
    },
    selectors: {
        selectUser: (state) => state.user
    }
})

export const { setCredentials } = authSlice.actions
export const { selectUser } = authSlice.selectors
export default authSlice