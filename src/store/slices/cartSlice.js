import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems: [],
  loading: false,
  quantity: 0,
  total: 0,
}

export const AppSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {

      let isOldItem = state.cartItems.find(val => val.item.id === action.payload.item?.id || val.item.id === action.payload.id)

      if(isOldItem) {
        const index = state.cartItems.indexOf(isOldItem)
        state.cartItems[index].quantity++;
        state.total += action.payload.item ? action.payload.item.price : action.payload.price
      }

      else{
        state.quantity++;
        const data= {
          "item": action.payload,
          "quantity": 1
        }
        state.cartItems.push(data);
        state.total =state.total + action.payload.price
      }

    },
    removeItemFromCart: (state, action) => {

      let item = state.cartItems.find(item => item.item.id === action.payload)
      let index = state.cartItems.indexOf(item)

      state.cartItems.splice(index, 1)
      state.cartItems = [...state.cartItems]
      state.total = state.total - (item.item.price* item.quantity)
      state.quantity--
  },
    decreaseItem: (state, action) => {

      let item = state.cartItems.find(item => item.item.id === action.payload)
      let index = state.cartItems.indexOf(item)

      state.cartItems[index].quantity--;
      state.total = state.total - item.item.price
    },
    confirmCart: (state) => {
      state.cartItems = []
      state.quantity= 0
      state.total= 0
    }
}})

export const { addItemToCart, removeItemFromCart, decreaseItem, confirmCart } = AppSlice.actions

export default AppSlice.reducer
