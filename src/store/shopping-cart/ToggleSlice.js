import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartIsVisible: false,
};

const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    toggle: (state, action) => {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});

export const { toggle } = toggleSlice.actions;
export default toggleSlice.reducer;
