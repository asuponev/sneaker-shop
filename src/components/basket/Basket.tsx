import { ISneakerData } from '@/interfaces/sneaker.interface'

import styles from './Basket.module.scss'
import BasketItem from './BasketItem'

const Basket: React.FC<ISneakerData> = ({
  sneakers
}) => {
  return (
    <div className={styles.basket}>
      <p className={styles.basket__title}>My basket</p>
      <div className={styles.basket__list}>
        {sneakers.length ?
          sneakers.map((sneaker) => <BasketItem key={sneaker.id} sneaker={sneaker} />)
          : <div>Sneakers is empty</div>}
      </div>
      <div className={styles.basket__price}>
        <div className={styles.basket__price_line}>
          <p>Subtotal</p>
          <p>$ 1 850</p>
        </div>
        <div className={styles.basket__price_line}>
          <p>Tax</p>
          <p>$ 100</p>
        </div>
        <div className={styles.basket__price_line}>
          <p>Shipping</p>
          <p>$ 150</p>
        </div>
        <div className={styles.basket__price_line}>
          <p>Total</p>
          <p>$ 2 150</p>
        </div>
      </div>
    </div>
  )
}

export default Basket