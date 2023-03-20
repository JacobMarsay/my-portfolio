import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        font-family: 'Inter', sans-serif;
        background: #1b1b1b;
        width: 100%;
        overflow-x: hidden;
    }

    html{
        font-size: 62.5%
    }
    button{
        font-family: 'Inter', sans-serif;
        font-weight: bold;
        font-size: 1.1rem;
        cursor: pointer;
        padding: 1rem 2rem;
        border: 3px solid #23d997;
        background: transparent;
        color: #ffffff;
        transition: all 0.5s ease;
        &:hover{
            background-color: #23d997;
            color: #ffffff;
        }
    }
    h2{
        font-weight: lighter;
        font-size: 4rem;
        color: #ffffff;
        // Mobile
    @media (min-width: 280px) and (max-width: 540px) {
      font-size: 2.5rem;
    }
    }
    h3{
        color: #ffffff;
    }

    h4{
        font-weight: bold;
        font-size: 2rem;
    }
    span{
        font-weight: bold;
        color: #23d997;
    }
    a{
        font-size: 1.1rem;
        text-decoration: none;
        color: #fff;
    }
    p{
        padding: 3rem 3rem 3rem 0rem;
        color: #cccccc;
        font-size: 1.4rem;
    }
`;

export default GlobalStyle;
