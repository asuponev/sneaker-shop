import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { ISneakerDataSingle } from '@/interfaces/sneaker.interface'

import Container from '@/components/container/Container'

import ButtonCart from '../buttons/cart/ButtonCart'
import styles from './SneakerDetail.module.scss'

const SneakerDetail: React.FC<ISneakerDataSingle> = ({
  sneaker
}) => {
  const router = useRouter()

  return (
    <Container>
      <div className={styles.product}>
        <button
          onClick={() => router.push('/')}
          className={styles.product__backbtn}
        >
          Back in catalog
        </button>
        <Image
          src={sneaker.image}
          alt={sneaker.title}
          width={890}
          height={508}
          className={styles.product__image}
        />
        <div className={styles.product__info}>
          <p className={styles.product__info_title}>{sneaker.title}</p>
          <p>Item model number: {sneaker.model}</p>
        </div>
        <div className={styles.product__action}>
          <ButtonCart sneaker={sneaker} />
          <p>$ {sneaker.price}</p>
        </div>
      </div>
    </Container>
  )
}

export default SneakerDetail