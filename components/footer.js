import styled from 'styled-components'

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
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

const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  img {
    margin-left: 0.25rem;
  }
`

function Footer() {
  return (
    <>
      <StyledFooter>
        <p>a website by Ariane Fairlie built with Nextjs</p>
        <IconsContainer>
          <img src="https://img.icons8.com/ios/24/0000ff/github.png"/>
          <img src="https://img.icons8.com/ios/24/0000ff/linkedin.png"/>
          <img src="https://img.icons8.com/ios/24/0000ff/email.png"/>
        </IconsContainer>
      </StyledFooter>
    </>
  )
}

export default Footer