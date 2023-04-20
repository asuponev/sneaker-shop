import Layout from '@/components/layout/Layout'
import ButtonBack from '@/components/buttons/back/ButtonBack'

import styles from './CustomError.module.scss'

interface ICustomErrorProps {
  text?: string
}

const CustomError: React.FC<ICustomErrorProps> = ({
  text = 'Something went wrong'
}) => {
  return (
    <Layout title='Page not found'>
      <div className={styles.custom_error}>
        <p>{text}</p>
        <ButtonBack />
      </div>
    </Layout>
  )
}

export default CustomError