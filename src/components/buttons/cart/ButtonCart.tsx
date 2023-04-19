import { BsCart2 } from 'react-icons/bs'

import useCart from '@/hooks/useCart'
import { ISneaker } from '@/interfaces/sneaker.interface'

import styles from './ButtonCart.module.scss'

interface IButtonCartProps {
  sneaker: ISneaker
}

const ButtonCart: React.FC<IButtonCartProps> = ({
  sneaker
}) => {
  const { onAddToCart } = useCart()

  return (
    <button
      className={styles.buttonCart}
      onClick={() => onAddToCart(sneaker)}
    >
      <BsCart2 size={24} color='#FFFFFF' />
    </button>
  )
}

export default ButtonCart