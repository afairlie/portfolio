import styled from 'styled-components'

import Layout from '../components/layout'

const Description = styled.div`
  display: flex;
  max-width: 800px;
  justify-content: space-evenly;
  align-items: center;
  flex: 1;
  flex-wrap: wrap;
  margin-bottom: 0.5rem;
  padding: 1rem 2rem;

  border: 1px solid blue;
  border-radius: 2px;

  img {
    max-height: 450px;

    border: 1px solid blue;
    border-radius: 2px;
  }

  div {
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 1rem;

    p {
      text-indent: 2rem;
      font-size: 1.5em;
      flex: 2;
      max-width: 750px;
      
      span {
        background-color: ${({theme}) => theme.colors.highlight};
      }
    }
  }
`

export default function About() {
  return (
    <Layout>
      <h1>About</h1>
      <Description>
        <div>
          <h2>Ariane Fairlie</h2>
          <p>
            I'm a <span>full stack developer</span> based in Montreal. Originally trained as an artist, I've worked as an entrepreneur, studio manager, and recruiter. I have experience in project management, team oversight, and system/process creation.
          </p>
          <p>
            I'm an impassioned learner and creative problem solver, interested in design and ethics in tech.
          </p>
        </div>
        <img src='blue.jpg'></img>
      </Description>
    </Layout>
  )
}