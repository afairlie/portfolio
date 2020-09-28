import styled from 'styled-components'

import Nav from './nav'
import Footer from './footer'

const Wrapper = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-grow: auto;
  flex-direction: column;
  align-items: center;
`

const Container = styled.main`
  min-height: calc(100vh - 100px - 3rem);
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

function Layout({ children }) {
  return (
    <Wrapper>
      <Nav/>
      <Container>{children}</Container>
      <Footer/>
    </Wrapper>
  )
}

export default Layout