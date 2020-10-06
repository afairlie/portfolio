import styled from 'styled-components'
import Link from 'next/link'

const Container = styled.div`
  position: sticky;
  z-index: 1000;
  top: 0.5rem;
  right: 0.5rem;
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`

const LinkFormat = ({ as, children, className, href }) => (
  <Link href={href} as={as} passHref>
    <a className={className}>{children}</a>
  </Link>
)

const StyledLink = styled(LinkFormat)`
  margin-left: 0.5rem;
  padding: 0.25rem;

  &:hover {
    background-color: ${({theme}) => theme.colors.highlight};
  }
`

export default function Nav() {
  return (
  <Container>

      <StyledLink href="/">Home</StyledLink>


      <StyledLink href="/about">About</StyledLink>


      <StyledLink href="/projects">Projects</StyledLink>


      <StyledLink href="/cv">CV</StyledLink>

  </Container>
  )
}
