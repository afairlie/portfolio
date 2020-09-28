import styled from 'styled-components'
import Link from 'next/link'

const Container = styled.div`
  position: sticky;
  top: 0.5rem;
  right: 0.5rem;
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`

const StyledLink = styled.a`
  margin-left: 0.5rem;
  padding: 0.25rem;

  &:hover {
    background-color: ${({theme}) => theme.colors.highlight};
  }
`

export default function Nav() {
  return (
  <Container>
    <Link href="/#content" passHref>
      <StyledLink>Home</StyledLink>
    </Link>
    <Link href="/about" passHref>
      <StyledLink>About</StyledLink>
    </Link>
    <Link href="/projects" passHref>
      <StyledLink>Projects</StyledLink>
    </Link>
    <Link href="/cv" passHref>
      <StyledLink>CV</StyledLink>
    </Link>
  </Container>
  )
}