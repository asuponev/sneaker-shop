import Layout from '@/components/layout/Layout'
import ButtonBack from '@/components/buttons/back/ButtonBack'

import styles from './404.module.scss'

const NotFound: React.FC = () => {
  return (
    <Layout title='Page not found'>
      <div className={styles.notfound}>
        <p className={styles.notfound__text}>
          Page Not Found
        </p>
        <ButtonBack />
      </div>
    </Layout>
  )
}

export default NotFound