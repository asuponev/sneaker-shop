import Image from 'next/image'
import { BsCart2 } from 'react-icons/bs'

import { useAppDispatch, useAppSelector } from '@/hooks/hook'
import { ISneaker, ISneakerDataSingle } from '@/interfaces/sneaker.interface'
import { addToCart, incOneItem } from '@/store/cartSlice'

import styles from './SneakerCard.module.scss'

const SneakerCard: React.FC<ISneakerDataSingle> = ({
  sneaker
}) => {
  const dispatch = useAppDispatch()
  const { sneakers } = useAppSelector(state => state.cart)

  const onAddToCart = (data: ISneaker) => {
    if (sneakers.some(item => item.id === sneaker.id)) {
      dispatch(incOneItem(sneaker))
      return
    }

    dispatch(addToCart(data))
  }

  return (
    <div className={styles.card}>
      <Image src={sneaker.image} alt={sneaker.title} width={228} height={130} />
      <p className={styles.card__title}>{sneaker.title}</p>
      <div className={styles.card__action}>
        <button
          className={styles.card__action_cart}
          onClick={() => onAddToCart(sneaker)}
        >
          <BsCart2 size={24} color='#FFFFFF' />
        </button>
        <p>$ {sneaker.price}</p>
      </div>
    </div>
  )
}

export default SneakerCard