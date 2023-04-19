import { TfiClose } from 'react-icons/tfi'

import { useAppSelector, useAppDispatch } from '@/hooks/hook'
import { toggleOpenCart } from '@/store/cartSlice'
import { formatPrice } from '@/services/formatPrice'

import BasketItem from './BasketItem'
import styles from './Basket.module.scss'

const Basket = () => {
  const { sneakers, price, isOpen } = useAppSelector(state => state.cart)
  const dispatch = useAppDispatch()

  return (
    <div className={isOpen ? `${styles.basket} ${styles.open}` : styles.basket}>
      <div className={styles.basket__close}>
        <button onClick={() => dispatch(toggleOpenCart())}>
          <TfiClose size={25} color='#000000' />
        </button>
      </div>
      <div className={styles.basket__container}>
        <p className={styles.basket__title}>My basket</p>
        <div className={styles.basket__list}>
          {sneakers.length ?
            sneakers.map((sneaker) => <BasketItem key={sneaker.id} sneaker={sneaker} />)
            : <p>Basket is empty</p>}
        </div>
      </div>
      <div className={styles.basket__price}>
        <div className={styles.basket__price_line}>
          <p>Subtotal</p>
          <p>$ {formatPrice(price)}</p>
        </div>
        <div className={styles.basket__price_line}>
          <p>Tax</p>
          <p>$ {price ? '100' : '0'}</p>
        </div>
        <div className={styles.basket__price_line}>
          <p>Shipping</p>
          <p>$ {price ? '150' : '0'}</p>
        </div>
        <div className={styles.basket__price_line}>
          <p>Total</p>
          <p>$ {price ? formatPrice(price + 100 + 150) : 0}</p>
        </div>
      </div>
    </div>
  )
}

export default Basket