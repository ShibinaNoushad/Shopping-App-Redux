import { configureStore } from "@reduxjs/toolkit";
import showCartReducer from "./showCartSlice";
const store = configureStore({
  reducer: {
    showCartButton: showCartReducer,
  },
});
export default store;
