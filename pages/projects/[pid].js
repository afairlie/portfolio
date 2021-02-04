import fs from 'fs'
import path from 'path'
import Layout from '../../components/layout'

import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    max-width: 100%;
    justify-content: space-between;
    padding: 2rem;
    margin: 2rem;
    width: calc(100% - 1rem);

    background-color: cornsilk;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 5px 0px;

    div.description {
        max-height: 500px;
        max-width: 500px;
    }

    div.slider {
        max-height: 500px;
        max-width: 800px;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: center;
    }
`

const ProjectPage = ({projectData}) => {
  return (
      <Layout>
          <Container>
            <div className='description'>
                <h1>{projectData.title}</h1>
                <p>{projectData.description}</p>
                <h3>Stack</h3>
                <p>{projectData.stack}</p>
                {projectData.api && <>
                    <h3>API Stack</h3>
                    <p>{projectData.api.stack}</p>
                </>}
            </div>
            <div className='slider'>
                {projectData.img && <img src={'/'+projectData.img}></img>}
            </div>
          </Container>
      </Layout>
  )
}

export default ProjectPage

export async function getServerSideProps(ctx) {
    let projectData = null

    const projectsDirectory = path.join(process.cwd(), 'projects')
    const filename = fs.readdirSync(projectsDirectory).find(f => f.replace('.json', '') === ctx.params.pid)
    
    if (filename) {
        const filePath = path.join(projectsDirectory, filename)
        const fileContents = fs.readFileSync(filePath, 'utf8')
        projectData = JSON.parse(fileContents)
    } else {
        ctx.res.statusCode = 302
        ctx.res.setHeader('Location', '/projects')
        ctx.res.end()
    }

    return {
        props: {
            projectData
        }
    }

  }