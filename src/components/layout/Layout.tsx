import { PropsWithChildren } from 'react'
import Head from 'next/head'

import Header from '@/components/header/Header'

interface ILayoutProps {
  title?: string
  description?: string
}

const Layout: React.FC<PropsWithChildren<ILayoutProps>> = ({
  children,
  title = 'SP.shop',
  description = 'Sneaker Shop'
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='og:title' content={title} />
        <meta name='og:description' content={description} />
      </Head>
      <Header />
      <main>
        {children}
      </main>
    </>
  )
}

export default Layout