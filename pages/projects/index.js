import styled from 'styled-components'

import Layout from '../../components/layout'
import Project from '../../components/project'

import projectsData from '../../public/projects'

const ProjectContainer = styled.div`
  /* display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 1rem 0.5rem 0; */
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 25rem));
  grid-gap: 1rem; 
  justify-content: space-evenly;
`

export default function Projects() {

  return (
    <Layout>
    <h1>Projects</h1>
    <p>browse what I've been building lately</p>
    <ProjectContainer>
      {projectsData.map(p => <Project {...p}/>)}
    </ProjectContainer>
    </Layout>
  )
}