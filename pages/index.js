import Head from 'next/head'
import styled, {keyframes} from 'styled-components'
import Layout from '../components/layout'

const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  z-index: 1000;

  h1 {
    font-size: 5em;
  }

  p {
    text-align: center;
  }
`

const Comp = styled.div`
  position: relative;
  font-size:calc(50px + 6vw);
  z-index: 900;
`
const rotate = keyframes`
  from {
    transform: scale(-1, 1) rotate(0deg);
  }

  50% {
    transform: scale(-1, 1) rotate(20deg);
  }

  to {
    transform: scale(-1, 1) rotate(0deg);
  }
`;

const Hello = styled.div`
  position: absolute;
  font-size:calc(50px + 6vw);
  z-index: 900;
  right: 12vw;
  top: calc(58% - 23vmin);
  transform: scale(-1, 1);

  animation: ${rotate} 0.4s linear 2;
  animation-delay: 0.75s;
`

export default function Home() {
  return (
    <Layout>
        <Head>
          <title>ariane's portfolio</title>
          <link rel="icon" href="/logo.jpg" />
        </Head>
        <Hello>👋</Hello>
        <Content>
          <h1>Ariane Fairlie</h1>
          <Comp>💻</Comp>
          <h2>
            Full Stack Developer
          </h2>
          <p>
            Typescript, React, Node.js, PostgreSQL, Go, Apollo GraphQL
          </p>
        </Content>
    </Layout>
  )
}