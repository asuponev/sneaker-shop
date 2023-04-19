import Link from 'next/link'
import { BsCart2 } from 'react-icons/bs'

import { useAppSelector, useAppDispatch } from '@/hooks/hook'
import { toggleOpenCart } from '@/store/cartSlice'

import styles from './Header.module.scss'

const Header: React.FC = () => {
  const { sneakers } = useAppSelector(state => state.cart)
  const dispatch = useAppDispatch()

  const selectedItemsCount = sneakers.reduce((acc, cur) => acc + cur.selectedItemsCount, 0)

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__logo}>
          <Link href='/'>
            <span>SP</span>.shop
          </Link>
        </div>
        <div
          onClick={() => dispatch(toggleOpenCart())}
          className={styles.header__cart}
        >
          <BsCart2 size={24} />
          <div className={styles.header__cart_count}>
            <span>{selectedItemsCount}</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header