import Head from 'next/head'
import styled from 'styled-components'
import Layout from '../components/layout'

const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  h1 {
    font-size: 5em;
  }
`

export default function Home() {
  return (
    <Layout>
        <Head>
          <title>ariane's portfolio</title>
          <link rel="icon" href="/logo.jpg" />
        </Head>
        
        <Content>
          <h1>Ariane Fairlie</h1>
          <h2>
            Full Stack Developer
          </h2>
          <p>
            Typescript, Javascript, Ruby, HTML, CSS & SQL
          </p>
        </Content>
    </Layout>
  )
}
