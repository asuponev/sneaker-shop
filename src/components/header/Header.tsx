import Link from 'next/link'
import { BsCart2 } from 'react-icons/bs'

import styles from './Header.module.scss'

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <Link href='/'>
          <span>SP</span>.shop
        </Link>
      </div>
      <div className={styles.header__cart}>
        <BsCart2 size={24} />
        <div className={styles.header__cart_count}>
          <span>2</span>
        </div>
      </div>
    </header>
  )
}

export default Header