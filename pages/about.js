import styled from 'styled-components'

import Layout from '../components/layout'

const Description = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  max-width: 1175px;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 1rem 5%;
  margin-bottom: 1rem;

  img {
    box-shadow: rgba(0, 0, 0, 0.04) 0px 0px 2px 2px;
    border-radius: 2px;
    padding: 0;
    margin: 0;
  }

  div {
    align-items: center;
    display: flex;
    flex-direction: column;
    flex: 2;
    padding: 0.5rem;
    margin: 0 1rem;
    
    h1 {
      width: 100%;
      text-align: left;
      max-width: 500px;
      min-width: 300px;
    }

    p {
      text-indent: 2rem;
      font-size: 1.2em;
      max-width: 500px;
      min-width: 300px;
      
      span {
        background-color: ${({theme}) => theme.colors.highlight};
      }
    }
  }

  div.image {
    align-items: center;
    flex: 1;
    padding: 0;
  }
`

export default function About() {
  return (
    <Layout>
      <Description>
        <div>
          <h1>About</h1>
          <p>
            I'm a full stack web developer based in Montreal, QC. Originally trained as an artist, I've worked as an entrepreneur, studio manager, and recruiter. I'm an impassioned learner and creative problem solver, interested in design and ethics in tech.
          </p>
          <p>
            If you're interested in working together or simply want to connect, please email ariane.fairlie[at]gmail.com or click the socials linked below!
          </p>
        </div>
        <div className='image'>
          <img src='portrait.jpg' width='300'></img>
        </div>
      </Description>
    </Layout>
  )
}