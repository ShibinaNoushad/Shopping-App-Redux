import { createSlice } from "@reduxjs/toolkit";
const initialShowCartState = { showCart: false };
const showCart = createSlice({
  name: "showCart",
  initialState: initialShowCartState,
  reducers: {
    toggleShowCart(state) {
      state.showCart = !state.showCart;
    },
  },
});
export default showCart.reducer;
export const showCartActions = showCart.actions;
