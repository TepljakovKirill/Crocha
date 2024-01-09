import { createSlice } from "@reduxjs/toolkit";

type CartsState = {
  carts: number[];
  discount: number;
  totalSumArray: number[];
  totalSumProduct: number;
  totalSumOrder: number;
};

const initialState: CartsState = {
  carts: [],
  discount: 0,
  totalSumArray: [],
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
      const findCarts = state.carts.find((obj) => obj.id === action.payload);
      if (findCarts) {
        findCarts.count--;
      }
    },

    deleteCard(state, action) {
      state.carts = state.carts.filter((cart) => cart.id !== action.payload);
    },

    // setTotalSumProduct(state, action) {
    //   state.totalSumArray.push(action.payload);
    //   state.totalSumProduct = state.totalSumArray.reduce((a, b) => a + b, 0);
    // },

    // setTotalSumDeleteProduct(state, action) {
    //   const deletePrice = action.payload;
    //   state.totalSumArray = state.totalSumArray.filter(
    //     (number) => number !== deletePrice
    //   );
    //   state.totalSumProduct = state.totalSumArray.reduce((a, b) => a + b, 0);
    // },

    setDiscount(state, action) {
      state.discount += action.payload;
    },
    setDeleteDiscount(state, action) {
      state.discount -= action.payload;
    },
  },
});

export const {
  setCarts,
  increment,
  decrement,
  deleteCard,
  // setTotalSumProduct,
  // setTotalSumDeleteProduct,
  setDiscount,
  setDeleteDiscount,
} = cartSlice.actions;

export default cartSlice.reducer;
