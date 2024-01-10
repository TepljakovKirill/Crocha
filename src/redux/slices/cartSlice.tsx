import { createSlice } from "@reduxjs/toolkit";

type CartsState = {
  carts: number[];
  discount: number;
  totalSumProduct: number;
  totalSumOrder: number;
};

const initialState: CartsState = {
  carts: [],
  discount: 0,
  totalSumProduct: 0,
  totalSumOrder: 0,
};

const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    setCarts(state, action) {
      const findCarts = state.carts.find((obj) => obj.id === action.payload.id);

      if (findCarts) {
        findCarts.count++;
      } else {
        state.carts.push({
          ...action.payload,
          count: 1,
        });
      }

      state.totalSumProduct = state.carts.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },

    increment(state, action) {
      const findCarts = state.carts.find((obj) => obj.id === action.payload);
      if (findCarts) {
        findCarts.count++;
      }
      state.totalSumProduct = state.carts.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
    decrement(state, action) {
      const findCarts = state.carts.find((obj) => obj.id === action.payload.id);
      if (findCarts && findCarts.count >= 2) {
        findCarts.count--;
        state.totalSumProduct -= action.payload.price;
      }
    },

    deleteCard(state, action) {
      state.carts = state.carts.filter((cart) => cart.id !== action.payload);

      state.totalSumProduct = state.carts.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
  },
});

export const { setCarts, increment, decrement, deleteCard } = cartSlice.actions;

export default cartSlice.reducer;
