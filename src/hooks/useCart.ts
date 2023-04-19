import { ISneaker } from '@/interfaces/sneaker.interface'
import { useAppDispatch, useAppSelector } from './hook'
import { addToCart, incOneItem } from '@/store/cartSlice'

const useCart = () => {

  const dispatch = useAppDispatch()
  const { sneakers } = useAppSelector(state => state.cart)

  const onAddToCart = (sneaker: ISneaker) => {
    if (sneakers.some(item => item.id === sneaker.id)) {
      dispatch(incOneItem(sneaker))
      return
    }

    dispatch(addToCart(sneaker))
  }

  return {
    onAddToCart
  }
}

export default useCart