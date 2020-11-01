import Link from 'next/link'
import { useRouter } from 'next/router'

import styled from 'styled-components'

const Container = styled.div`
  position: sticky;
  z-index: 1200;
  top: 0.5rem;
  right: 0.5rem;
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;
  


  div {
    background-color: cornsilk;
    padding: 5px;
    border: 1px solid lightgray;
    border-radius: 2px;
    /* box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px; */
  }
`

const StyledLink = styled.a`
  margin: 0.25rem;
  border-bottom: ${props => props.active ? '1px orange solid' : 'none'};

  &:first-child {
    margin-left: 0;
  }

  &:hover {
    background-color: ${({theme}) => theme.colors.highlight};
  }
`

export default function Nav() {
  const router = useRouter()

  return (
  <Container>
    <div>
      <Link href="/" passHref>
        <StyledLink active={router.pathname === '/'}>Home</StyledLink>
      </Link>
      <Link href="/about" passHref>
        <StyledLink active={router.pathname === '/about'}>About</StyledLink>
      </Link>
      <Link href="/projects" passHref>
        <StyledLink active={router.pathname === '/projects'}>Projects</StyledLink>
      </Link>
      <Link href="/cv" passHref>
        <StyledLink active={router.pathname === '/cv'}>CV</StyledLink>
      </Link>
    </div>
  </Container>
  )
}