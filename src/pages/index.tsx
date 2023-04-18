import { GetServerSideProps, NextPage } from 'next'

import { SneakerService } from '@/services/sneaker.service'
import { ISneakerData } from '@/interfaces/sneaker.interface'

import Layout from '@/components/layout/Layout'
import SneakerCards from '@/components/sneaker-cards/SneakerCards'
import Basket from '@/components/basket/Basket'

const Home: NextPage<ISneakerData> = ({
  sneakers
}) => {
  return (
    <Layout>
      <div className='screen'>
        <SneakerCards sneakers={sneakers} />
        <Basket />
      </div>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps<ISneakerData> = async () => {
  const sneakers = await SneakerService.getAll()

  return {
    props: { sneakers }
  }
}

export default Home