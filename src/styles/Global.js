import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
   * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
   }

   html {
      @media (max-width: 1080px) {
         font-size: 93.75%;
      }
      @media (max-width: 720px) {
         font-size: 87.5%;
      }
   }

   body {
      background-color: ${({ theme }) => theme.colors.background};
      cursor: default;
      line-height: 160%;
      margin: 0;
      padding: 0;
      text-rendering: optimizeSpeed;
      --webkit-font-smoothing: antialiased;
   }

   body, input, text-area, button {
      font-family: ${({ theme }) => theme.fonts.primary};
	   font-weight: 300;
   }

   a {
      color: inherit;
      font-weight: 400;
      text-decoration: none;
   }

   a:not([class]) {
      text-decoration-skip-ink: auto;
   }

   p {
      margin: 0 0 1rem 0;
   }

   ul {
      margin-bottom: 1rem;
      padding-left: 1.12rem;
   }

   h1,
   h2,
   h3,
   h4,
   h5,
   h6 {
      color: ${({ theme }) => theme.colors.textTitle};
      font-weight: 700;
      line-height: 120%;
      margin-bottom: 1rem;

      a {
         font-weight: 700;
      }
   }

   strong {
      font-weight: 700;
   }

   button {
      background-color: transparent;
      border: none;
      cursor: pointer;
      padding: 0;
   }

   [disabled] {
      cursor: not-allowed;
      opacity: 0.6;
   }

   main {
      ${({ theme }) => theme.containerWidth}
      padding: 6rem 1rem 2rem 1rem;


   }


`;
