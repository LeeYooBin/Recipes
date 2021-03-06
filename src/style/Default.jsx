import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;

export const Body = styled.body`
    @import url('https://fonts.googleapis.com/css2?family=Prompt:wght@100&family=Roboto+Condensed:ital@1&family=Roboto:wght@100&display=swap');
    font-family: 'Prompt', sans-serif;
`;