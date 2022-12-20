import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,

  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      state.totalQuantity++;

      if (!existingItem) {
        state.cartItems.push({
          id: newItem.id,
          title: newItem.title,
          image01: newItem.image01,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) + Number(newItem.price);
      }
    },

    removeItem: (state, action) => {
      console.log(action);
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      let cartQuantity = 0;
      state.cartItems.forEach((item) => {
        cartQuantity += item.quantity;
      });
      state.totalQuantity = cartQuantity;
    },

    increase: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      cartItem.quantity = cartItem.quantity + 1;
      cartItem.totalPrice = cartItem.price * cartItem.quantity;
      state.totalQuantity++;
    },

    decrease: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      cartItem.quantity = cartItem.quantity - 1;
      state.totalQuantity--;
      if (cartItem.quantity === 0) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload
        );
      }
    },

    calcTotal: (state, action) => {
      let total = 0;
      state.cartItems.forEach((item) => {
        total += item.price * item.quantity;
      });
      state.totalAmount = total;
    },
  },
});

export const { addItem, removeItem, increase, decrease, calcTotal } =
  cartSlice.actions;
export default cartSlice.reducer;
