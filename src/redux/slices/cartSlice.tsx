import { createSlice } from "@reduxjs/toolkit";

export interface CartsState {
    carts: number[],
}

const initialState: CartsState = {
    carts: [],
}

const cartSlice = createSlice({
    name: 'carts',
    initialState,
    reducers: {
        addCartInArray(state, action) {

        }
    }

})

export const { addCartInArray } = cartSlice.actions;

export default cartSlice.reducer;