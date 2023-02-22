import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import productService from "../client/products.service"

export const fetchAllProducts = createAsyncThunk('product/getAllProducts', async () => {
  return await productService.getAllProducts();
})

const initialState = {
  loading: false,
  products: [],
}

export const cartSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllProducts.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      state.loading = false
      state.products = action.payload
    })
    builder.addCase(fetchAllProducts.rejected, (state) => {
      state.loading = false
    })
  }
})

export default cartSlice.reducer
