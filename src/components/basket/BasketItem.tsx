import Image from 'next/image'
import {
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
  AiOutlineClose
} from 'react-icons/ai'

import { ISneakerDataSingle } from '@/interfaces/sneaker.interface'

import styles from './Basket.module.scss'

const BasketItem: React.FC<ISneakerDataSingle> = ({
  sneaker
}) => {
  return (
    <div className={styles.basket__item}>
      <Image src={sneaker.image} alt={sneaker.title} width={90} height={51} />
      <div>
        <div className={styles.basket__item_top}>
          <p>{sneaker.title}</p>
          <button>
            <AiOutlineClose size={26} color='#CFCFCF' />
          </button>
        </div>
        <div className={styles.basket__item_bottom}>
          <div className={styles.basket__item_counter}>
            <button>
              <AiOutlineMinusCircle size={22} color='#000000' />
            </button>
            <p>1</p>
            <button>
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