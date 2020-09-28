import Head from 'next/head'
import styled from 'styled-components'

import Layout from '../components/layout'

const SplashContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Content = styled.div`
  height: 120vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default function Home() {
  return (
    <>
    <SplashContainer>
      <h1>SPLASH!</h1>
    </SplashContainer>
    <Layout>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <Content>
          <p>home page content</p>
        </Content>
    </Layout>
    </>
  )
}
