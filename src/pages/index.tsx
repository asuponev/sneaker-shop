import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'

import { SneakerService } from '@/services/sneaker.service'
import { ISneakerData } from '@/interfaces/sneaker.interface'

import Header from '@/components/header/Header'
import MainScreen from '@/components/screens/main/MainScreen'

const Home: NextPage<ISneakerData> = ({
  sneakers
}) => {
  return (
    <>
      <Head>
        <title>SB.shop</title>
        <meta name="description" content="Sneaker shop" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <MainScreen sneakers={sneakers} />
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<ISneakerData> = async () => {
  const sneakers = await SneakerService.getAll()

  return {
    props: { sneakers }
  }
}

export default Home