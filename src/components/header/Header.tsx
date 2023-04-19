import { useRouter } from 'next/router'
import { BsCart2 } from 'react-icons/bs'
import { RxHamburgerMenu } from 'react-icons/rx'

import { useAppSelector, useAppDispatch } from '@/hooks/hook'
import { toggleOpenCart } from '@/store/cartSlice'

import styles from './Header.module.scss'

const Header: React.FC = () => {
  const router = useRouter()
  const { sneakers } = useAppSelector(state => state.cart)
  const dispatch = useAppDispatch()

  const selectedItemsCount = sneakers.reduce((acc, cur) => acc + cur.selectedItemsCount, 0)

  const onClickLogo = () => {
    if (router.pathname !== '/') {
      return router.push('/')
    }
  }

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div
          className={styles.header__logo}
          onClick={onClickLogo}
        >
          <span>SP</span>.shop
        </div>
        <div className={styles.header__icons}>
          <div
            onClick={() => dispatch(toggleOpenCart())}
            className={styles.header__cart}
          >
            <BsCart2 size={24} />
            <div className={styles.header__cart_count}>
              <span>{selectedItemsCount}</span>
            </div>
          </div>
          <div
            onClick={() => dispatch(toggleOpenCart())}
            className={styles.header__burger}
          >
            <RxHamburgerMenu size={34} />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header