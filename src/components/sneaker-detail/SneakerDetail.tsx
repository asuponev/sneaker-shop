import Image from 'next/legacy/image'

import { ISneakerDataSingle } from '@/interfaces/sneaker.interface'
import { formatPrice } from '@/services/formatPrice'

import Container from '@/components/container/Container'
import ButtonCart from '@/components/buttons/cart/ButtonCart'
import ButtonBack from '../buttons/back/ButtonBack'
import styles from './SneakerDetail.module.scss'

const SneakerDetail: React.FC<ISneakerDataSingle> = ({
  sneaker
}) => {
  return (
    <Container>
      <div className={styles.product}>
        <ButtonBack />
        <Image
          src={sneaker.image}
          alt={sneaker.title}
          width={890}
          height={508}
          className={styles.product__image}
          layout='responsive'
        />
        <div className={styles.product__info}>
          <p className={styles.product__info_title}>{sneaker.title}</p>
          <p>Item model number: {sneaker.model}</p>
        </div>
        <div className={styles.product__action}>
          <ButtonCart sneaker={sneaker} />
          <p>$ {formatPrice(sneaker.price)}</p>
        </div>
      </div>
    </Container>
  )
}

export default SneakerDetail