import Link from 'next/link'
import { useRouter } from 'next/router'

import styled from 'styled-components'

const Container = styled.div`
  position: sticky;
  top: .5em;
  z-index: 1200;
  align-self: flex-end;

  display: flex;

  background-color: cornsilk;
  border-radius: 2px;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 0px 2px 2px;

  padding: 7px;
`

const StyledLink = styled.a`
  margin: 0 .25em;
  padding-top: 3px;
  display: block;
  /* background-color: ${props => props.active && 'rgba(255, 150, 0, 0.2)'}; */

  &:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    position: relative;
    background: ${props => props.active ? 'blue' : 'blue'};
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
    top: 2px;

    width: ${props => props.active && '100%'};
    left: ${props => props.active && '0'};
  }

  &:hover:after {
    width: 100%; 
    left: 0;
  }
`

export default function Nav() {
  const router = useRouter()

  return (
  <Container>
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
  </Container>
  )
}