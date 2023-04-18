import { ISneakerData } from '@/interfaces/sneaker.interface'

import SneakerCards from '@/components/sneaker-cards/SneakerCards'
import Basket from '@/components/basket/Basket'

import styles from './MainScreen.module.scss'

const MainScreen: React.FC<ISneakerData> = ({
  sneakers
}) => {
  return (
    <div className={styles.main}>
      <SneakerCards sneakers={sneakers} />
      <Basket sneakers={sneakers} />
    </div>
  )
}

export default MainScreen