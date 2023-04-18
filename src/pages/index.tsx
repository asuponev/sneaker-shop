import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'

import { SneakerService } from '@/services/sneaker.service'
import { ISneakerData } from '@/interfaces/sneaker.interface'

import Layout from '@/components/layout/Layout'
import MainScreen from '@/components/screens/main/MainScreen'

const Home: NextPage<ISneakerData> = ({
  sneakers
}) => {
  return (
    <Layout>
      <MainScreen sneakers={sneakers} />
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