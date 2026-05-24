import { configureStore } from '@reduxjs/toolkit'
import categorySlice from "./categorySlice"
import productSlice from "./productSlice"
import cartReducer from "./cartSlice"

export const store = configureStore({
  reducer: {
    categories: categorySlice,
    products: productSlice,
    cart: cartReducer,
  },
})
