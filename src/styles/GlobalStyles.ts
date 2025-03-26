import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary: #40a056; /* Verde da logo */
    --primary-dark: #328444; /* Verde mais escuro */
    --secondary: #6b9f78; /* Verde mais claro */
    --dark: #1e3d28; /* Verde muito escuro */
    --light: #f8faf9; /* Branco levemente esverdeado */
    --gray-light: #f1f5f3; /* Cinza claro esverdeado */
    --gray: #e2e9e5; /* Cinza esverdeado */
    --text: #334741; /* Cinza escuro esverdeado */
    --text-light: #697b72; /* Cinza médio esverdeado */
    --border: #dce6e0; /* Borda esverdeada */
    --success: #40a056; /* Verde da logo */
    --error: #e74c3c; /* Vermelho */
  }

  /* Tema claro (padrão) */
  :root.theme-light {
    --primary: #328444; /* Verde mais escuro para melhor contraste */
    --primary-dark: #286836; /* Verde ainda mais escuro */
    --secondary: #5a876a; /* Verde secundário mais escuro */
    --dark: #112317; /* Verde escuro quase preto para títulos */
    --light: #f8faf9;
    --gray-light: #e5eae6; /* Cinza claro ajustado */
    --gray: #c5d0c9; /* Cinza médio ajustado */
    --text: #1e3326; /* Texto principal mais escuro */
    --text-light: #405245; /* Texto secundário mais escuro */
    --border: #b0c5b8; /* Borda mais escura */
    --success: #328444;
    --error: #d32f2f; /* Vermelho mais escuro */
    --bg-primary: #ffffff;
    --bg-secondary: #f0f5f2;
    --card-bg: #ffffff;
    --card-shadow: rgba(30, 61, 40, 0.2); /* Sombra mais forte */
    --overlay: rgba(248, 250, 249, 0.95);
  }

  /* Tema escuro */
  :root.theme-dark {
    --primary: #7df59a; /* Verde ainda mais brilhante */
    --primary-dark: #5edb7a;
    --secondary: #a2e6b7; /* Verde secundário mais claro */
    --dark: #ffffff; /* Branco puro para títulos */
    --light: #0d120e; /* Fundo ainda mais escuro */
    --gray-light: #2d392f;
    --gray: #3a4a3f;
    --text: #ffffff; /* Branco puro para texto principal */
    --text-light: #f0f5f2; /* Texto secundário quase branco */
    --border: #3a4a3f;
    --success: #7df59a;
    --error: #ff6b6b; /* Vermelho mais brilhante */
    --bg-primary: #0d120e; /* Fundo mais escuro */
    --bg-secondary: #151c17;
    --card-bg: #141e19; /* Cards mais escuros para contraste */
    --card-shadow: rgba(0, 0, 0, 0.6); /* Sombra ainda mais forte */
    --overlay: rgba(13, 18, 14, 0.98);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', 'Roboto', 'Helvetica Neue', sans-serif;
    background-color: var(--bg-primary);
    color: var(--text);
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: color 0.3s ease;
  }

  ul, ol {
    list-style: none;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font-family: inherit;
  }

  img {
    max-width: 100%;
    display: block;
  }

  h1, h2, h3, h4, h5, h6 {
    color: var(--dark);
    line-height: 1.2;
    transition: color 0.3s ease, text-shadow 0.3s ease;
  }

  section {
    padding: 5rem 0;
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }

  @media (max-width: 768px) {
    section {
      padding: 3rem 0;
    }
  }

  button, a, div, span, p, section, article, input, textarea {
    transition: color 0.3s ease, background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
  }
`;

export default GlobalStyles; 