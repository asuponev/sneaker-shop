import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { ISneaker } from '@/interfaces/sneaker.interface'

type cartState = {
  sneakers: ISneaker[]
  price: number
}

const initialState: cartState = {
  sneakers: [],
  price: 0
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<ISneaker>) {
      state.sneakers.push(action.payload)
      state.price = state.price + action.payload.price
    },
    removeFromCart(state, action: PayloadAction<ISneaker>) {
      state.sneakers = state.sneakers.filter(
        (sneaker) => sneaker.id !== action.payload.id
      )
      state.price = state.price - action.payload.price
    },
  },
})

export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer
