import Image from 'next/image'
import { BsCart2 } from 'react-icons/bs'

import { ISneakerDataSingle } from '../interfaces/sneaker.interface'

import styles from './SneakerCard.module.scss'

const SneakerCard: React.FC<ISneakerDataSingle> = ({
  sneaker
}) => {
  return (
    <div className={styles.card}>
      <Image src={sneaker.image} alt={sneaker.title} width={228} height={130} />
      <p className={styles.card__title}>{sneaker.title}</p>
      <div className={styles.card__action}>
        <div className={styles.card__action_cart}>
          <BsCart2 size={24} color='#FFFFFF' />
        </div>
        <p>$ {sneaker.price}</p>
      </div>
    </div>
  )
}

export default SneakerCard