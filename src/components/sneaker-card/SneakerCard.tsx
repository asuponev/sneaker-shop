import Image from 'next/image'
import { BsCart2 } from 'react-icons/bs'

import styles from './SneakerCard.module.scss'

interface ISneakerCardProps {
  title: string
  image: string
  price: number
}

const SneakerCard: React.FC<ISneakerCardProps> = ({
  title,
  image,
  price
}) => {
  return (
    <div className={styles.card}>
      <Image src={image} alt={title} width={228} height={130} />
      <p className={styles.card__title}>{title}</p>
      <div className={styles.card__action}>
        <div className={styles.card__action_cart}>
          <BsCart2 size={24} color='#FFFFFF' />
        </div>
        <p>$ {price}</p>
      </div>
    </div>
  )
}

export default SneakerCard