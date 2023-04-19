import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { ISneaker } from '@/interfaces/sneaker.interface'

type cartState = {
  sneakers: ISneaker[]
  price: number
  isOpen: boolean
}

const initialState: cartState = {
  sneakers: [],
  price: 0,
  isOpen: false
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<ISneaker>) {
      state.sneakers.push(action.payload)
      state.price += action.payload.price
    },
    removeFromCart(state, action: PayloadAction<ISneaker>) {
      state.sneakers = state.sneakers.filter((sneaker) =>
        sneaker.id !== action.payload.id
      )
      state.price -= (action.payload.price * action.payload.selectedItemsCount)
    },
    incOneItem(state, action: PayloadAction<ISneaker>) {
      state.sneakers.map((sneaker) =>
        sneaker.id === action.payload.id ? sneaker.selectedItemsCount++ : ''
      )
      state.price += action.payload.price
    },
    decOneItem(state, action: PayloadAction<ISneaker>) {
      state.sneakers.map((sneaker) =>
        sneaker.id === action.payload.id ? sneaker.selectedItemsCount-- : ''
      )
      state.price -= action.payload.price
    },
    toggleOpenCart(state) {
      state.isOpen = !state.isOpen
    }
  },
})

export const { 
  addToCart, 
  removeFromCart, 
  incOneItem, 
  decOneItem,
  toggleOpenCart
} = cartSlice.actions
export default cartSlice.reducer
