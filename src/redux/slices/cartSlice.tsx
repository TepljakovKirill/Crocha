import { createSlice } from "@reduxjs/toolkit";

type CartsState = {
<<<<<<< HEAD
    carts: number[],
    discount: number,
    totalSumArray: number[],
    totalSumProduct: number,
    totalSumOrder: number
}

const initialState: CartsState = {
    carts: [],
    discount: 0,
    totalSumArray: [],
    totalSumProduct: 0,
    totalSumOrder: 0

}

const cartSlice = createSlice({
    name: 'carts',
    initialState,
    reducers: {
        setCarts(state, action) {
            state.carts.push(action.payload);
        },
        deleteCard(state, action) {
            state.carts = state.carts.filter(cart => cart.id !== action.payload)
        },
        // setTotalSumProduct(state, action) {
        //     state.totalSumProduct += action.payload;
        // },

        setTotalSumProduct(state, action) {
            state.totalSumArray.push(action.payload);
            state.totalSumProduct = state.totalSumArray.reduce((a, b) => a + b, 0);
        },

        setTotalSumDeleteProduct(state) {
            state.totalSumArray.pop();
            state.totalSumProduct = state.totalSumArray.reduce((a, b) => a + b, 0);
        },
        setDiscount(state, action) {
            state.discount += action.payload;
        },
        setDeleteDiscount(state, action) {
            state.discount -= action.payload;
        },
    }
})
=======
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
      state.carts.push(action.payload);
    },
    deleteCard(state, action) {
      state.carts = state.carts.filter((cart) => cart.id !== action.payload);
    },
    setTotalSumProduct(state, action) {
      state.totalSumProduct += action.payload;
    },
    setTotalSumDeleteProduct(state, action) {
      state.totalSumProduct -= action.payload;
    },
    setDiscount(state, action) {
      state.discount += action.payload;
    },
    setDeleteDiscount(state, action) {
      state.discount -= action.payload;
    },
  },
});
>>>>>>> 73164c2a3b90f74998e968abbeec709b18a60d7b

export const {
  setCarts,
  deleteCard,
  setTotalSumProduct,
  setTotalSumDeleteProduct,
  setDiscount,
  setDeleteDiscount,
} = cartSlice.actions;

export default cartSlice.reducer;
