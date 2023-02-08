import { createSlice } from "@reduxjs/toolkit";
const initialShowCartState = { showCart: false, notification: null };
const showCart = createSlice({
  name: "showCartButton",
  initialState: initialShowCartState,
  reducers: {
    toggleShowCart(state) {
      state.showCart = !state.showCart;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});
export default showCart.reducer;
export const showCartActions = showCart.actions;
