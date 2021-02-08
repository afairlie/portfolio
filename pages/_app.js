import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'
import 'swiper/swiper-bundle.css';

const GlobalStyle = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

body {
  background-color: cornsilk;
  background-size: 40px 40px;
  background-image:
    linear-gradient(to left, lightGrey 1px, transparent 1px),
    linear-gradient(to top, lightGrey 1px, transparent 1px);
  color: blue;
}

a {
  color: inherit;
  text-decoration: none;
  cursor: pointer;
}

* {
  box-sizing: border-box;
}
`

function MyApp({ Component, pageProps }) {
  return(
  <>
  <GlobalStyle />
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
  </>
  )
}

export default MyApp