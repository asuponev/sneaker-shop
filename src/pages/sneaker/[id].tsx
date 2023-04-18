import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { ParsedUrlQuery } from 'querystring'

import { SneakerService } from '@/services/sneaker.service'
import { ISneakerDataSingle } from '@/interfaces/sneaker.interface'

import Layout from '@/components/layout/Layout'
import SneakerDetail from '@/components/sneaker-detail/SneakerDetail'
import Basket from '@/components/basket/Basket'

const SneakerPage: NextPage<ISneakerDataSingle> = ({
  sneaker
}) => {

  return (
    <Layout>
      <div className='screen'>
        <SneakerDetail sneaker={sneaker} />
        <Basket />
      </div>
    </Layout>
  )
}

interface IParams extends ParsedUrlQuery {
  id: string
}

export const getStaticPaths: GetStaticPaths<IParams> = async () => {
  const sneakers = await SneakerService.getAll()

  return {
    paths: sneakers.map(sneaker => ({
      params: {
        id: sneaker.id.toString()
      }
    })),
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps<ISneakerDataSingle> = async ({
  params
}) => {
  const sneaker = await SneakerService.getById(String(params?.id))

  return {
    props: { sneaker },
    revalidate: 60
  }
}

export default SneakerPage