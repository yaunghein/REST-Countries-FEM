import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`${css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Nunito Sans', sans-serif;
  }

  :root {
    --clr-element: hsl(0, 0%, 100%);
    --clr-background: hsl(0, 0%, 98%);
    --clr-input: hsl(0, 0%, 52%);
    --clr-text: hsl(200, 15%, 8%);

    --timing-cubic: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  html {
    font-size: 1vw;
    color: ${({ theme }) => theme.text};

    /* @media (min-width: 1920px) {
      font-size: 16px;
    } */

    @media (max-width: 1000px) {
      font-size: 16px;
    }
  }

  body {
    background: ${({ theme }) => theme.background};
    transition: all 0.2s ease;
  }

  img {
    max-width: 100%;
    object-fit: cover;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`}`

export default GlobalStyles
