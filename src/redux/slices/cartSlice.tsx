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
        }
    }
})



export const { setCarts } = cartSlice.actions;

export default cartSlice.reducer;