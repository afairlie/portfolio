import Layout from '../components/layout'
import styled from 'styled-components'

// const PDF = styled.embed`
//   margin: 1rem;

//   @media (max-width: 900px) {
//     display: none;
//   }
// `

const Instructions = styled.p`
  a {
    background-color: ${({theme}) => theme.colors.highlight};
  }
`
const Description = styled.div`
    display: flex;
    flex: 1;
    max-width: 800px;
    align-items: left;
    flex-direction: column;
    padding: 2rem 3rem 4rem;
    margin: 1rem 0.5rem;
    text-align: left;

    background-color: cornsilk;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;

    p > span {
      font-weight: bold;
    }

    h2 {
      text-align: left;
    }

    li {
      margin: 0.5rem 0;
    }

    a {
    text-decoration: underline;
    }
`

const Secondary = styled.p`
  margin: 0;
  text-indent: 2rem;
`

export default function CV() {
  return (
    <Layout>
      <h1>CV</h1>
      <Instructions>click <a href='/ariane-fairlie-cv.pdf' target='_blank'>here</a> to open PDF in new tab</Instructions>
      {/* <PDF width="825" height="1120" type="application/pdf" src="/ariane-fairlie-cv.pdf" frameborder="0">
      </PDF> */}
      <Description>
          <h2>Stack</h2>
          <p><span>Languages:</span> Typescript, Javascript, Python, Ruby, SQL, PHP, HTML, CSS</p>
          <p><span>Libraries & Frameworks:</span><br/><br/>ReactJS, Mithril, NodeJS, Express.
          <br/>Ruby on Rails, Web2Py, Flask.
          <br />Styled-Components, Material UI, Framer-Motion, PostCSS, CK Editor, Bootstrap, SASS, jQuery.</p>
          <p><span>Databases:</span> PostgreSQL, MariaDB/MySQL, Sqlite.</p>
          <p><span>Testing:</span> Postman, Cypress, Jest, Mocha + Chai, Rspec</p>
          <p><span>Tools:</span> Git, Github, VS Code, Bash, Makefile, Browserify, Webpack, Eleventy.</p>
          <p><span>Hosting/Cloud</span> Netlify, Heroku, Amazon S3.</p>
          <p><span>Design Tools:</span> Storybook, Figma, Photoshop, InDesign, Image Magick.</p>

          <h2>Work Experience</h2>
          <p><span>Full Stack Web Development Intern</span> - <a href='https://waldman.co/en' target='_blank'>Waldman Co.</a> | Oct. 2020 - Present</p>
          <ul>
            <h4><a href='https://strongproject.com/' target='_blank'>Strong Project</a></h4>
            <li> React/Mithril, PHP, MySQL, S3.</li>
            <li>Optimized performance for web and mobile.</li>
            <li>Improved Page Speed score by 30-40% on both</li>
            <h4><a href='https://oclare.org/' target='_blank'>Oclare</a></h4>
            <li>Mithril, CKEditor, Web2Py, MySQL, Latex</li>
            <li>Integrate R editor, CKEdit/Latex sync (ordered lists), Bug Fixes</li>
          </ul>
          <p><span>HR & Recruiting</span> - <a href='http://www.sliq.com/' target='_blank'>Sliq Media Technologies</a> | Dec. 2017 - March 2020</p>
          <ul>
            <li>Coordinated recruiting - Interviewed and successfully filled 6 positions in under 1 year for a wide range of roles including Support Manager, Sales Engineer, System Integrator</li>
            <li>Managed remote contractors, coordinated small projects (documentation, contract review),and worked with CEO to implement organizational systems</li>
          </ul>

          <p><span>Studio Manager</span> - <a href='https://zoepawlak.com/' target='_blank'>Zoë Pawlak</a> | Dec. 2014 - July 2017</p>
          <ul>
            <li>Managed a team of 3 part-time staff, finances, client relationships, and sales</li>
            <li>Designed client proposals, catalogues and promo for print and online distribution</li>
            <li>Produced exhibitions at international design fairs (ICFF, IDSWest) and private galleries</li>
          </ul>

          <h2>Education</h2>
          <p><span><a href='https://www.lighthouselabs.ca/' target='_blank'>Lighthouse Labs</a></span> - Diploma | June 2020</p>
          <Secondary>Full Stack Web Development Bootcamp</Secondary>
          <br></br>
          <p><span>Concordia University</span> - Bachelor of Fine Arts | May 2014</p>
          <Secondary>Graduate with Distinction in Studio Arts - Painting and Drawing</Secondary>
          <br></br>
          <h2>Extra-Vocational Projects</h2>
          <p><span><a href='https://www.articule.org/' target='_blank'>articule</a></span> - Artist run center in Mile End | Sept 2019 - Present</p>
          <Secondary>Board of Directors, President (formerly Treasurer)</Secondary>
      </Description>
    </Layout>
  )
}