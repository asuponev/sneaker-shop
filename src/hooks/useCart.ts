import { ISneaker } from '@/interfaces/sneaker.interface'
import { useAppDispatch, useAppSelector } from '@/hooks/hook'
import { addToCart, removeFromCart, incOneItem, decOneItem } from '@/store/cartSlice'

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

  const onDecOneItemFromCart = (sneaker: ISneaker) => {
    if (sneaker.selectedItemsCount === 1) {
      dispatch(removeFromCart(sneaker))
      return
    }
    
    dispatch(decOneItem(sneaker))
  }

  const onIncOneItemInCard = (sneaker: ISneaker) => {
    dispatch(incOneItem(sneaker))
  }

  const onRemoveFromCard = (sneaker: ISneaker) => {
    dispatch(removeFromCart(sneaker))
  }

  return {
    onAddToCart,
    onDecOneItemFromCart,
    onIncOneItemInCard,
    onRemoveFromCard
  }
}

export default useCart