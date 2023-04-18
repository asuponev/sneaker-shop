import { useAppDispatch, useAppSelector } from '@/hooks/hook'

import styles from './Basket.module.scss'
import BasketItem from './BasketItem'

const Basket = () => {
  const dispatch = useAppDispatch()
  const { sneakers} = useAppSelector(state => state.cart)

  return (
    <div className={styles.basket}>
      <p className={styles.basket__title}>My basket</p>
      <div className={styles.basket__list}>
        {sneakers.length ?
          sneakers.map((sneaker) => <BasketItem key={sneaker.id} sneaker={sneaker} />)
          : <div>Basket is empty</div>}
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