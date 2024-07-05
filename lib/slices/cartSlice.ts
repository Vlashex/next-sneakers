import { createSlice } from "@reduxjs/toolkit/react";

export const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: false,
    reducers: {
        openCart: state => state=true,
        closeCart: state => state=false,
    },
    selectors: {
        selectCartOpen: state => state
    }
})

export const { openCart, closeCart } = cartSlice.actions
export const { selectCartOpen } = cartSlice.selectors
export default cartSlice