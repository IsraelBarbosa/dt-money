import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    /* Produto */
    --green-dark: #015F43;
    --green: #00875F;
    --green-light: #00B37E;
    --red-dark: #AA2834;
    --red: #F75A68;

    /* Base */
    --gray-1: #121214;
    --gray-2: #202024;
    --gray-3: #29292E;
    --gray-4: #323238;
    --gray-5: #7C7C8A;
    --gray-6: #C4C4CC;
    --gray-7: #E1E1E6;
    --white: #FFFFFF;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }

  body {
    background-color: var(--gray-2);
  }

  body, input, textarea, button {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
  }

  button {
    cursor: pointer;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    width: 100%;
    max-width: 576px;
    background-color: var(--gray-2);
    padding: 3rem;
    position: relative;
    border-radius: 0.24rem;
  }

  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background-color: transparent;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;
