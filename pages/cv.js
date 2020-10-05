import Layout from '../components/layout'
import styled from 'styled-components'

const PDF = styled.embed`
  margin: 1rem;

  @media (max-width: 900px) {
    display: none;
  }
}
`

const Instructions = styled.p`
  a {
    background-color: ${({theme}) => theme.colors.highlight};
  }
`

export default function CV() {
  return (
    <Layout>
      <h1>CV</h1>
      <Instructions>click <a href='/ariane-fairlie-cv.pdf' target='_blank'>here</a> to open PDF in new tab</Instructions>
      <PDF width="825" height="1120" type="application/pdf" src="/ariane-fairlie-cv.pdf" frameborder="0">
      </PDF>
    </Layout>
  )
}