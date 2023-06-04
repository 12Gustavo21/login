import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
    }

    ::selection {
        background-color: #04C35C;
        color: #fff;
    }

    body {
        overflow: hidden;
    }
`;