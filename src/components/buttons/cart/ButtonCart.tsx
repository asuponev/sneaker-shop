import { BsCart2 } from 'react-icons/bs'

import styles from './ButtonCart.module.scss'

interface IButtonCartProps {
  onClick: () => void
}

const ButtonCart: React.FC<IButtonCartProps> = ({
  onClick
}) => {
  return (
    <button
      className={styles.buttonCart}
      onClick={onClick}
    >
      <BsCart2 size={24} color='#FFFFFF' />
    </button>
  )
}

export default ButtonCart