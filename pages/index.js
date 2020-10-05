import Head from 'next/head'
import styled from 'styled-components'
import {Canvas} from 'react-three-fiber'
import Layout from '../components/layout'
import Box from '../components/box'

const SplashContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const SplashWelcome = styled.h1`
  position: absolute;
  top: 38vh;
  font-size: 5em;
  z-index: 900;
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
    <SplashContainer id='splash'>
      <SplashWelcome>Welcome!</SplashWelcome>
      <Canvas>
        <ambientLight intensity={0.8} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Box position={[2, 0, 0]} color={'#a1bccf'}/>
        <Box position={[0, 0, 0]} color={'#ff751c'} activeStart/>
        <Box position={[-2, 0, 0]} color={'#3a867d'}/>
      </Canvas>
    </SplashContainer>
    <Layout>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <Content id='content'>
          <p>home page content</p>
        </Content>
    </Layout>
    </>
  )
}
