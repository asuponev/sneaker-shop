import { useRouter } from 'next/navigation'

import styles from './ButtonBack.module.scss'

const ButtonBack: React.FC = () => {
  const router = useRouter()

  return (
    <button
      onClick={() => router.push('/')}
      className={styles.backButton}
    >
      Back in catalog
    </button>
  )
}

export default ButtonBack