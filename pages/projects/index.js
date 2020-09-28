import styled from 'styled-components'

import Layout from '../../components/layout'
import Project from '../../components/project'


const ProjectContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 1rem;
`

export default function Projects() {
  return (
    <Layout>
    <h1>Projects</h1>
    <p>browse what I've been building lately</p>
    <ProjectContainer>
      <Project api/>
      <Project/>
      <Project api/>
      <Project/>
      <Project/>
      <Project/>
    </ProjectContainer>
    </Layout>
  )
}