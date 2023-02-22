import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "./slices/cartSlice";
import authReducer from "./slices/authSlice"
import productReducer from "./slices/productSlice"
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
    auth: authReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
