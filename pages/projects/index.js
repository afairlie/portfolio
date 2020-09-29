import styled from 'styled-components'

import Layout from '../../components/layout'
import Project from '../../components/project'

const projectMock = {
  img: 'shoppies3.png',
  title: 'Shoppies',
  repo: '#',
  url: '#',
  description: 'an app to nominate movies from OMDB API',
  stack: 'Typescript, React, Styled Components, Framer Motion',
  api: {
    stack: 'Rails Api, Active Record, JWT Auth',
    repo: '#',
    url: '#',
  },
}

const ProjectContainer = styled.div`
  display: flex;
  /* width: 100%; */
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 1rem 0.5rem 0;
`

export default function Projects() {

  return (
    <Layout>
    <h1>Projects</h1>
    <p>browse what I've been building lately</p>
    <ProjectContainer>
      <Project {...projectMock} title='Shoppies Mobile' img={null} api={null}/>
      <Project {...projectMock}/>
      <Project {...projectMock} title='Reco'img='reco.png'description='an app that supports local business through word of mouth. Users create lists and recommend businesses'/>
      <Project {...projectMock} title='Scheduler' api={null} img={null}/>
      <Project {...projectMock} title='Story Creator' img={null}/>
    </ProjectContainer>
    </Layout>
  )
}