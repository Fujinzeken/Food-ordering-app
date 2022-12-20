import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../store/shopping-cart/CartSlice";
import toggleReducer from "../store/shopping-cart/ToggleSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    toggle: toggleReducer,
  },
});
