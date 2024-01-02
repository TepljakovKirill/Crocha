import { createSlice } from "@reduxjs/toolkit";

type CartsState = {
    carts: number[],
}

const initialState: CartsState = {
    carts: [],
}

const cartSlice = createSlice({
    name: 'carts',
    initialState,
    reducers: {
        setCarts(state, action) {
            state.carts.push(action.payload);
            console.log(state.carts)
        },
        deleteCard(state, action) {
            state.carts = state.carts.filter(cart => cart.id !== action.payload)
        }
    }
})



export const { setCarts, deleteCard } = cartSlice.actions;

export default cartSlice.reducer;