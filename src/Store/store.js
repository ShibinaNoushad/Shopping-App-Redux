import { configureStore } from "@reduxjs/toolkit";
import showCartReducer from "./showCartSlice";
import cartReducer from "./CartSlice";
const store = configureStore({
  reducer: {
    showCartButton: showCartReducer,
    cart: cartReducer,
  },
});
export default store;
