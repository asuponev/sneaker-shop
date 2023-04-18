import { configureStore } from '@reduxjs/toolkit'

import cart from './cartSlice'

export const store = configureStore({
  reducer: {
    cart
  },
  devTools: process.env.NODE_ENV !== 'production'
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch