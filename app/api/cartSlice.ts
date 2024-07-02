import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'isCartOpen',
    initialState: false,
    reducers: {
        openCart() {
            return true
        },
        closeCart() {
            return false
        }
    },
    selectors: {
        selectCartOpen: (sliceValue) => sliceValue
    }
})

export const { openCart, closeCart } = cartSlice.actions
export const { selectCartOpen } = cartSlice.selectors
export default cartSlice