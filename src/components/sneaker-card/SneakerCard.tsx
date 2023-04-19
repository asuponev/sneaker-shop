import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { ISneakerDataSingle } from '@/interfaces/sneaker.interface'
import useCart from '@/hooks/useCart'

import ButtonCart from '../buttons/cart/ButtonCart'
import styles from './SneakerCard.module.scss'

const SneakerCard: React.FC<ISneakerDataSingle> = ({
  sneaker
}) => {
  const router = useRouter()
  const { onAddToCart } = useCart()

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