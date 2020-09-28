import styled from 'styled-components'

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  min-height: 100px;

  border: 20px solid ${({theme}) => theme.colors.highlight};

  padding: 0.5rem;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

function Footer() {
  return (
    <>
      <StyledFooter>
        <p>a website by Ariane Fairlie built with Nextjs</p>
      </StyledFooter>
    </>
  )
}

export default Footer