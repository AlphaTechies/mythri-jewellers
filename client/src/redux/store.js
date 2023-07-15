import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import adminReducer from "./adminSlice";

const store = configureStore({
  reducer: {
    products: productReducer,
    admin: adminReducer,
  },
});

export default store;
