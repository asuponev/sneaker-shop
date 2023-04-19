import useLoading from '@/hooks/useLoading'

import Loading from '@/components/loading/Loading'
import styles from './Container.module.scss'

interface IContainerProps {
  children: React.ReactNode
}

const Container: React.FC<IContainerProps> = ({
  children
}) => {
  const { loading } = useLoading()

  return (
    <div className={styles.container}>
      {loading ? <Loading /> : <>{children}</>}
    </div>
  )
}

export default Container