import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "Cart",
    initialState: {
        total: 0,
        cartList: []
    },
    reducers: {
        addToCart: (state, action) => {
            state.cartList.push(action.payload)
            state.total = state.cartList.reduce((a, b) => a + b.price, 0)
        },
        removeFromCart: (state, action) => {
            state.cartList = state.cartList.filter(item => item.id !== action.payload.id)
            state.total = state.cartList.reduce((a, b) => a + b.price, 0)
        }
        ,
        removeAll: (state) => {
            state.cartList = []
            state.total = 0
        }
    }
})

export const { addToCart, removeFromCart, removeAll } = cartSlice.actions

export default cartSlice.reducer