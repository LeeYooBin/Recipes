import styled from "styled-components";

export const Wrapper = styled.main`
    padding: 2%;
    width: 100%;
    height: auto;
    background-color: #cccfcb;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.h1`
    margin-top: 8vh;
    font-size: 2.1em;
    font-weight: bolder;
`;

export const MainLine = styled.div`
    margin-top: 3.5vh;
    margin-bottom: 5vh;
    width: 30vw;
    height: 1vh;
    background-color: black;

    @media screen and (min-width: 920px){
        width: 8vw;
    }
`;

export const Recipes = styled.div`
    margin-bottom: 1.5vh;

    @media screen and (min-width: 920px){
        display: flex;
        width: 90%;
        font-size: 0.8em;
        margin-bottom: 3vh;
    }
`;

export const Recipe = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1.5vh;

    :hover{
        transform: scale(1.05);
    }
`;

export const Image = styled.img`
    width: 95%;

    @media screen and (min-width: 920px){
        width: 80%;
    }
`;

export const RecipeInfo = styled.div`
    width: 95%;
    min-height: 40vh;
    background-color: #FFF;
    color: #000;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media screen and (min-width: 920px){
        width: 80%;
    }
`;

export const Line = styled.div`
    margin-bottom: 2.5vh;
    width: 20vw;
    height: 1vh;
    background-color: black;

    @media screen and (min-width: 920px){
        width: 5vw;
    }
`;