import styled from "styled-components";

export const About = styled.section`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: 920px){
        flex-direction: row;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Image = styled.img`
    width: 100%;
    height: 60vh;

    @media screen and (min-width: 920px){
        min-width: 50vw;
        height: 90vh;
    }
`;

export const Title = styled.h1`
    margin-top: 7vh;
    font-size: 2.1em;
    font-weight: bolder;
    letter-spacing: 3px;
`;

export const Line = styled.div`
    margin-top: 3.5vh;
    margin-bottom: 5vh;
    width: 25vw;
    height: 1vh;
    background-color: black;

    @media screen and (min-width: 760px){
        width: 12vw;
    }

    @media screen and (min-width: 920px){
        width: 8vw;
    }
`;

export const Text = styled.p`
    font-weight: 900;
    margin: 0 3.5vw 7vh 3.5vw;
    text-align: justify;
`;