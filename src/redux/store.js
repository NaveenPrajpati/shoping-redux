import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./slices/homeSlice";
import cartSlice from "./slices/cartSlice";

export default configureStore({
    reducer:{
        home:homeSlice,
        cart:cartSlice,

    },
})