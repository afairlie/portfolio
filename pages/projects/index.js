import fs from 'fs'
import path from 'path'

import Layout from '../../components/layout'
import Project from '../../components/project'

import styled from 'styled-components'

const ProjectContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 25rem));
  grid-gap: 1rem; 
  justify-content: space-evenly;
`

export default function Projects({ projectsData }) {

  return (
    <Layout>
    <h1>Projects</h1>
    <p>browse what I've been building lately</p>
    <ProjectContainer>
      {projectsData.map((p, i) => <Project key={i} {...p}/>)}
    </ProjectContainer>
    </Layout>
  )
}

export async function getStaticProps() {
  const projectsDirectory = path.join(process.cwd(), 'projects')
  const filenames = fs.readdirSync(projectsDirectory)

  const projectsData = filenames.map(filename => {
    const filePath = path.join(projectsDirectory, filename)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const projects = JSON.parse(fileContents)
    return projects
  })[0]
  return {
    props: {
      projectsData
    }
  }
}