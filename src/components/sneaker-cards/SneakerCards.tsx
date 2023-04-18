import { ISneakerData } from '@/interfaces/sneaker.interface'

import Container from '../container/Container'
import SneakerCard from '../sneaker-card/SneakerCard'

import styles from './SneakerCards.module.scss'

const SneakerCards: React.FC<ISneakerData> = ({
  sneakers
}) => {
  return (
    <Container>
      <div className={styles.cards}>
        {sneakers.length ?
          sneakers.map((sneaker) => <SneakerCard key={sneaker.id} sneaker={sneaker} />)
          : <div>Sneakers not found</div>}
      </div>
    </Container>
  )
}

export default SneakerCards