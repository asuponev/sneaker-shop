import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { ISneaker, ISneakerData } from '@/interfaces/sneaker.interface'

const initialState: ISneakerData = {
  sneakers: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<ISneaker>) {
      state.sneakers.push(action.payload)
    },
    removeFromCart(state, action: PayloadAction<ISneaker>) {
      state.sneakers = state.sneakers.filter(
        (sneaker) => sneaker.id !== action.payload.id
      )
    },
  },
})

export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer
