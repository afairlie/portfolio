import styled from 'styled-components'

// const ICON_COLOR = `ff7f50`
const ICON_COLOR = `0000ff`

const ProjectContainer = styled.a`
  background-color: cornsilk;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 5px 0px;

  display: flex;
  flex-direction: column;
  align-items: center;
  
  border-radius: 2px;

  margin: 0 0.5rem;

  transition: .3s;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
    transform: scale(1.025);
  }
`

const Image = styled.img`
  border-radius: 2px;

  width: 100%;
  min-width: 200px;
`

const Container = styled.div`
  max-width: 22rem;
  padding: 1rem;
  width: 100%;
`

const Header = styled.div`
  
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* border-bottom: 1px dashed blue; */
`

const Title = styled.h1`
  margin: 0.5rem 0;
`

// const IconsContainer = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: flex-end;
//   align-items: center;
// `

// const Icon = styled.a`
//   margin-left: 0.25rem;
// `

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

const TechDetails = styled.div`
  padding: 0.5;

`
const SubHeading = styled.h3`
  margin: 0.5rem 0;
`

const Text = styled.p`
  margin: 1rem 0;
`

export default function Project({
  id,
  img,
  title,
  repo,
  url,
  description,
  stack,
  api,
}) {
  return (
    <div>
      <ProjectContainer href={'/projects/'+id}>
        {img && <Image src={`${img}`} width='350'></Image>}
        <Container>
          <Header>
            <TitleContainer>
              <Title>{title}</Title>
              <IconsContainer>
                <a href={repo} target='_blank'><img src={`https://img.icons8.com/small/26/${ICON_COLOR}/repository.png`}/></a>
                {url && <a href={url} target='_blank'><img src={`https://img.icons8.com/small/26/${ICON_COLOR}/external-link.png`}/></a>}
              </IconsContainer>
            </TitleContainer>
            <Text>{description}</Text>
          </Header>
          <TechDetails>
            <SubHeading>Stack</SubHeading>
            <Text>{stack}</Text>
            {api && 
            <>
            <TitleContainer>
              <SubHeading>API</SubHeading>
              <IconsContainer>
                <a href={api.repo} target='_blank'><img src={`https://img.icons8.com/small/26/${ICON_COLOR}/repository.png`}/></a>
                {api.url && <a href={api.url} target='_blank'><img src={`https://img.icons8.com/small/26/${ICON_COLOR}/external-link.png`}/></a>}
              </IconsContainer>
            </TitleContainer> 
            <Text>{api.stack}</Text>
            </>}
          </TechDetails>
        </Container>
      </ProjectContainer>
    </div>
  )
}