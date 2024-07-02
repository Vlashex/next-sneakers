import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface userInterface {
    id: number
    name: string
    email: string
    userCart: number[] | null
    inLiked: number[] | null
}

export interface authStateInterface {
    user: userInterface | null
    token: string | null
}

const authBaseState: authStateInterface = {
    user: null,
    token: null
}

const authSlice = createSlice({
    name: 'authSlice',
    initialState: authBaseState,
    reducers: {
        setCredentials(state,{payload}) {
            state.user = {
                    id: payload.user.id,
                    name: payload.user.name,
                    email: payload.user.email,
                    userCart: payload.user.userCart || null,
                    inLiked: payload.user.inLiked || null
                    }
            state.token = payload.token
        },
        logout(state) {
            state.user = null
            state.token = null
        },
        addToCart(state, {payload}:{payload:number}) {
            state.user != null
                ?state.user.userCart != null
                    ? state.user.userCart = [...state.user.userCart, payload]
                    :null
                :null
        },
        removeFromCart(state, {payload}:{payload:number}) {
            state.user != null
                ?state.user.userCart != null
                    ? state.user.userCart = state.user.userCart.filter((elemet)=>elemet!=payload) 
                    : null
                :null
        },
        addToLiked(state, {payload}:{payload:number}) {
            state.user != null
                ?state.user.inLiked != null
                    ? state.user.inLiked = [...state.user.inLiked, payload]
                    :null
                :null
        },
        removeFromLiked(state, {payload}:{payload:number}) {
            state.user != null
                ?state.user.inLiked != null
                    ? state.user.inLiked = state.user.inLiked.filter((elemet)=>elemet!=payload) 
                    : null
                :null
        },
    },
    selectors: {
        selectAuth(state){
            return state
        },
        selectUser(state){
            return state.user
        },
        isAuth(state):boolean{
            return state.user != null
        }
    }
})
export const { setCredentials, logout, addToCart, removeFromCart, addToLiked, removeFromLiked } = authSlice.actions
export const { selectAuth, selectUser, isAuth } = authSlice.selectors
export default authSlice