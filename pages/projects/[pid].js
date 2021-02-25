import fs from 'fs'
import path from 'path'
import Layout from '../../components/layout'

import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import styled from 'styled-components'
import Link from 'next/link'

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(45vw, auto));
    justify-content: space-around;
    width: 100vw;
    height: 100%;
    padding: 2rem;
    gap: 2rem;
    margin: auto;

    article.description {
        height: max-content;
        background-color: cornsilk;
        box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 5px 0px;
        padding: 1rem 2rem 2rem;
    }

    div.slider {
        margin: 0;
    }

    .swiper-slide {
        width: min-content;
        text-align: center;
    }

    img {
        max-width: 100%;
        max-height: 70vh;
        width: auto;
        height: auto;
        object-fit: scale-down;
        box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 5px 0px;
        margin: 0 auto;
    }
`

const StyledLink = styled.a`
  display: block;
  position: absolute;
  left: 2rem;
  padding-bottom: 3px;
  font-size: 18px;

  &:after {    
        background: none repeat scroll 0 0 transparent;
        bottom: 0;
        content: "";
        display: block;
        height: 2px;
        left: 50%;
        position: absolute;
        background: blue;
        transition: width 0.3s ease 0s, left 0.3s ease 0s;
        width: 0;
    }
    &:hover:after { 
        width: 100%; 
        left: 0; 
    }
`
SwiperCore.use([Navigation, Pagination]);
const ProjectPage = ({data, images}) => {
    
  return (
      <Layout>
          <Link href="/projects" passHref>
              <StyledLink>Back to Projects</StyledLink>
          </Link>
          <Container>
            <article className='description'>
                <h1>{data.title}</h1>
                <p>{data.description}</p>
                {data.detailed_description && <p>{data.detailed_description}</p>}
                <h3>Stack</h3>
                <p>{data.stack}</p>
                {data.api && <>
                    <h3>API Stack</h3>
                    <p>{data.api.stack}</p>
                </>}
            </article>
            <div className='slider'>
            {data.img && <Swiper
                spaceBetween={3}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                >
                    {images && images.map(i => <SwiperSlide><img src={`/images/${data.id}/${i}`}></img></SwiperSlide>)}  
                </Swiper>}
            </div>
          </Container>
      </Layout>
  )
}

export default ProjectPage

export async function getServerSideProps(ctx) {
    const props = {}

    const projectsDirectory = path.join(process.cwd(), 'projects')
    const filename = fs.readdirSync(projectsDirectory).find(f => f.replace('.json', '') === ctx.params.pid)
    const imageDirectory = path.join(process.cwd(), `public/images/${filename.replace('.json', '')}`)

    try {
        props.images = fs.readdirSync(imageDirectory)
    } catch (e) {
        console.log(e.code)
    }
    
    if (filename) {
        const filePath = path.join(projectsDirectory, filename)
        const fileContents = fs.readFileSync(filePath, 'utf8')
        props.data = JSON.parse(fileContents)
    } else {
        ctx.res.statusCode = 302
        ctx.res.setHeader('Location', '/projects')
        ctx.res.end()
    }

    return {
        props
    }

  }