import styled from 'styled-components'

import Nav from './nav.js'
import Footer from './footer.js'

const Wrapper = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-grow: auto;
  flex-direction: column;
  align-items: center;
`

const Container = styled.main`
  min-height: calc(100vh - 100px - 3rem - 10px);
  display: flex;
  width: 100vw;
  flex-direction: column;
  justify-content: flex-start;
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