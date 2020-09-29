import styled from 'styled-components'

const ICON_COLOR = `ff7f50`

const ProjectItem = styled.div`
  border: 1px solid blue;
  border-radius: 2px;
  margin-bottom: 3rem;
  max-height: fit-content;

  padding: 0.5rem;
`

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Image = styled.img`
  border: 20px solid ${({theme}) => theme.colors.highlight};
  max-width: 400px;
`

const Container = styled.div`
  max-width: 22rem;
  padding: 0 1rem;
`

const Header = styled.div`
  border-bottom: 1px dashed blue;
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Title = styled.h1`
  margin: 0.5rem 0;
`

const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`

const Icon = styled.a`
  margin-left: 0.25rem;
`

const TechDetails = styled.div`
  padding: 0.5;
`
const SubHeading = styled.h3`
  margin: 0.5rem 0;
`

const Text = styled.p`
  margin: 1rem 0;
`

export default function Project({api}) {
  return (
    <ProjectItem>
      <ImgContainer>
        <Image src='./shoppies2.bmp'></Image>
      </ImgContainer>
      <Container>
        <Header>
          <TitleContainer>
            <Title>Shoppies</Title>
            <IconsContainer>
              <Icon href='#' target='_blank'><img src={`https://img.icons8.com/small/26/${ICON_COLOR}/repository.png`}/></Icon>
              <Icon href='#' target='_blank'><img src={`https://img.icons8.com/small/26/${ICON_COLOR}/external-link.png`}/></Icon>
            </IconsContainer>
          </TitleContainer>
          <Text>
            An app to vote for your favourite films using the OMDB API
          </Text>
        </Header>
        <TechDetails>
          <SubHeading>Stack</SubHeading>
          <Text>
            Next js, React, Styled Components, Framer Motion
          </Text>
          {api && 
          <>
          <TitleContainer>
            <SubHeading>API</SubHeading>
            <IconsContainer>
              <Icon href='#' target='_blank'><img src={`https://img.icons8.com/small/26/${ICON_COLOR}/repository.png`}/></Icon>
              <Icon href='#' target='_blank'><img src={`https://img.icons8.com/small/26/${ICON_COLOR}/external-link.png`}/></Icon>
            </IconsContainer>
          </TitleContainer> 
          <Text>
            Rails API, Active Record, JWT Auth
          </Text>
          </>}
        </TechDetails>
      </Container>
    </ProjectItem>
  )
}