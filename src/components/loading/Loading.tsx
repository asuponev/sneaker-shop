import { PuffLoader } from 'react-spinners'

import styles from './Loading.module.scss'

const Loader = () => {
  return (
    <div className={styles.loader}>
      <PuffLoader
        size={100}
        color='black'
      />
    </div>
  )
}

export default Loader