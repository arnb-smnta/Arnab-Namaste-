import { configureStore, createReducer } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

//Building redux store

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
export default appStore;
