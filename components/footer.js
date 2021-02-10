import styled from 'styled-components'

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-wrap: wrap;

  width: 100%;
  min-height: 100px;

  /* border: 20px solid ${({theme}) => theme.colors.highlight}; */

  padding: 0.5rem;
`

const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    border-radius: 20rem;

    &:hover {
      background-color: ${({theme}) => theme.colors.highlight};
    }
  }
`

function Footer() {
  return (
    <StyledFooter>
      {/* <p>built with Next js & Styled Components</p> */}
      <IconsContainer>
        <a href='https://github.com/afairlie' target='_blank'><img src="https://img.icons8.com/ios/24/0000ff/github.png"/></a>
        <a href='https://linkedin.com/in/arianefairlie' target='_blank'><img src="https://img.icons8.com/ios/24/0000ff/linkedin.png"/></a>
        <a href='https://dev.to/afairlie' target='_blank'><img src="https://img.icons8.com/windows/32/0000ff/dev.png"/></a>
        <a href='mailto:ariane.fairlie@gmail.com' target='_blank'><img src="https://img.icons8.com/ios/24/0000ff/email.png"/></a>
      </IconsContainer>
      {/* <p>ariane.fairlie[at]gmail.com</p> */}
    </StyledFooter>
  )
}

export default Footer