import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { BsCart2 } from 'react-icons/bs'

import { useAppDispatch, useAppSelector } from '@/hooks/hook'
import { ISneaker, ISneakerDataSingle } from '@/interfaces/sneaker.interface'
import { addToCart, incOneItem } from '@/store/cartSlice'

import styles from './SneakerCard.module.scss'
import ButtonCart from '../buttons/cart/ButtonCart'

const SneakerCard: React.FC<ISneakerDataSingle> = ({
  sneaker
}) => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const { sneakers } = useAppSelector(state => state.cart)

  const onAddToCart = (sneaker: ISneaker) => {
    if (sneakers.some(item => item.id === sneaker.id)) {
      dispatch(incOneItem(sneaker))
      return
    }

    dispatch(addToCart(sneaker))
  }

  return (
    <div className={styles.card}>
      <div
        className={styles.card__content}
        onClick={() => router.push(`/sneaker/${sneaker.id}`)}
      >
        <Image src={sneaker.image} alt={sneaker.title} width={228} height={130} />
        <p className={styles.card__title}>{sneaker.title}</p>
      </div>
      <div className={styles.card__action}>
        <ButtonCart onClick={() => onAddToCart(sneaker)} />
        <p>$ {sneaker.price}</p>
      </div>
    </div>
  )
}

export default SneakerCard