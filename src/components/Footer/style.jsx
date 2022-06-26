import styled from "styled-components";

export const Wrapper = styled.footer`
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Main = styled.div`
    width: 100%;
    height: 38vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: 700px){
        padding: 7.5vh 10vw 0 10vw;
        height: 15vh;
        flex-direction: row-reverse;
        justify-content: space-between;
    }
`;

export const Menu = styled.ul`
    height: 20vh;
    margin: 10vh 0 3vh 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @media screen and (min-width: 700px){
        width: 40%;
        flex-direction: row;
        justify-content: space-between;
    }
`;

export const Link = styled.a`
    font-size: 1.3em;
    color: black;
    font-weight: 900;
`;

export const SocialMedias = styled.div`
    margin-top: 5vh;
    width: 60%;
    display: flex;
    justify-content: space-between;

    @media screen and (min-width: 700px){
        width: 40%;
    }

    @media screen and (min-width: 920px){
        width: 18%;
    }
`;

export const Icons = styled.img`
    width: 12vw;

    @media screen and (min-width: 700px){
        width: 7vw;
    }

    @media screen and (min-width: 920px){
        width: 3vw;
    }
`;

export const copyright = styled.div`
    width: 100%;
    height: auto;
    margin-top: 10vh;
    padding: 2%;
    font-size: 0.5em;
    color: #FFF;
    font-weight: 900;
    text-align: justify;
    background-color: #446061;
    display: flex;
    align-items: center;

    @media screen and (min-width: 700px){
        font-size: 1em;
        padding: 0.5%;
    }
`;