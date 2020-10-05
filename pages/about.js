import styled from 'styled-components'

import Layout from '../components/layout'

const Description = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 1rem;

  /* border: 1px solid blue;
  border-radius: 2px; */

  img {
    /* height: 450px; */

    border: 1px solid blue;
    border-radius: 2px;
  }

  div {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 1rem;

    p {
      text-indent: 2rem;
      font-size: 1.5em;
      max-width: 700px;
      
      span {
        background-color: ${({theme}) => theme.colors.highlight};
      }
    }
  }
`

export default function About() {
  return (
    <Layout>
      <Description>
        <div>
        <h1>About</h1>
          <p>
            I'm a <span>full stack developer</span> based in Montreal, QC. Originally trained as an artist, I've worked as an entrepreneur, studio manager, and recruiter.
          </p>
          <p>
            I'm an impassioned learner and creative problem solver, interested in <span>design and ethics in tech</span>.
          </p>
          <p>
            If you're interested in working together or simply want to connect, please feel free to reach out by email or the socials linked below!
          </p>
        </div>
        <img src='portrait.jpg' width='300'></img>
      </Description>
    </Layout>
  )
}