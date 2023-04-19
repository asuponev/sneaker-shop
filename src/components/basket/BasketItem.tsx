import Image from 'next/image'
import {
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
  AiOutlineClose
} from 'react-icons/ai'

import { useAppDispatch } from '@/hooks/hook'
import { ISneakerDataSingle } from '@/interfaces/sneaker.interface'
import { removeFromCart, incOneItem, decOneItem } from '@/store/cartSlice'

import styles from './Basket.module.scss'

const BasketItem: React.FC<ISneakerDataSingle> = ({
  sneaker
}) => {
  const dispatch = useAppDispatch()

  return (
    <div className={styles.basket__item}>
      <Image src={sneaker.image} alt={sneaker.title} width={90} height={51} />
      <div>
        <div className={styles.basket__item_top}>
          <p>{sneaker.title}</p>
          <button
            onClick={() => dispatch(removeFromCart(sneaker))}
          >
            <AiOutlineClose size={26} color='#CFCFCF' />
          </button>
        </div>
        <div className={styles.basket__item_bottom}>
          <div className={styles.basket__item_counter}>
            <button
              disabled={sneaker.selectedItemsCount === 1}
              onClick={() => dispatch(decOneItem(sneaker))}
            >
              <AiOutlineMinusCircle size={22} color='#000000' />
            </button>
            <p>{sneaker.selectedItemsCount}</p>
            <button
              onClick={() => dispatch(incOneItem(sneaker))}
            >
              <AiOutlinePlusCircle size={22} color='#000000' />
            </button>
          </div>
          <p>$ {sneaker.price}</p>
        </div>
      </div>
    </div>
  )
}

export default BasketItem