import Head from 'next/head'
import styled from 'styled-components'

import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <h1>SPLASH!</h1>
    </Layout>
  )
}
