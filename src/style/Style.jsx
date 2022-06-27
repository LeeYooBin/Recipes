import styled from "styled-components";
import mobCover from '../img/mobile-cover.png';
import cover from '../img/cover.png';

export const Header = styled.header`
    padding: 2%;
`;

export const HeaderWrapper = styled.section`
    width: 100%;
    height: 100vh;
    background-image: url(${mobCover});
    background-position-y: 25%;
    background-size: cover;
    padding: 2%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media screen and (min-width: 821px){
        flex-direction: row-reverse;
        justify-content: space-between;
    }

    @media screen and (min-width: 1000px){
        background-image: url(${cover});
        background-position-y: 50%;
    }
`;

export const Title = styled.h1`
    margin-top: 40vh;
    font-size: 2.7em;
    align-self: center;
    letter-spacing: 3px;
    font-weight: bolder;

    @media screen and (min-width: 821px){
        display: none;
    }
`;

export const Logo = styled.img`
    display: none;

    @media screen and (min-width: 821px){
        display: block;
        width: 3.5vw;
        height: auto;
    }
`;

export const Recipes = styled.main`
    padding: 2%;
    width: 100%;
    height: auto;
    background-color: #cccfcb;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const SubTitle = styled.h1`
    margin-top: 8vh;
    font-size: 2.1em;
    font-weight: bolder;
`;

export const Line = styled.div`
    margin-top: 3.5vh;
    margin-bottom: 5vh;
    width: 30vw;
    height: 1vh;
    background-color: black;

    @media screen and (min-width: 920px){
        width: 8vw;
    }
`;

export const RecipesWrapper = styled.div`
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

    @media screen and (min-width: 1100px){
        :hover{
            transform: scale(1.05);
        }
    }
`;

export const RecipeImage = styled.img`
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

export const RecipeLine = styled.div`
    margin-bottom: 2.5vh;
    width: 20vw;
    height: 1vh;
    background-color: black;

    @media screen and (min-width: 920px){
        width: 5vw;
    }
`;

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

export const AboutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const AboutImage = styled.img`
    width: 100%;
    height: 60vh;

    @media screen and (min-width: 920px){
        min-width: 50vw;
        height: 90vh;
    }
`;

export const AboutText = styled.p`
    font-weight: 900;
    margin: 0 3.5vw 7vh 3.5vw;
    text-align: justify;
`;

export const Subscriber = styled.section`
    width: 100%;
    height: auto;
    background-color: #DFE4DE;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const SubscriberText = styled.p`
    margin: 2vh 0 2vh 0;
    font-size: 1.7em;
    font-weight: 900;
    text-align: justify;
`;

export const EmailInput = styled.input`
    width: 75%;
    padding: 5%;
    font-size: 1em;
    border: none;
    outline: none;
    background-color: #EFF1EE;

    @media screen and (min-width: 700px){
        padding: 2%;
        width: 40%;
    }
`;

export const SubmitButton = styled.button`
    margin-bottom: 10vh;
    width: 75%;
    padding: 5%;
    font-size: 1em;
    border: 3px #000 solid;
    background-color: #DFE4DE;
    cursor: pointer;
    margin-top: 2vh;
    font-weight: 900;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    letter-spacing: 5px;

    @media screen and (min-width: 700px){
        padding: 1%;
        width: 15%;
    }
`;

export const Footer = styled.footer`
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const FooterWrapper = styled.div`
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

export const FooterMenu = styled.ul`
    height: 20vh;
    margin: 10vh 8vw 3vh 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @media screen and (min-width: 700px){
        margin-right: 0;
        width: 50%;
        flex-direction: row;
        justify-content: space-between;
    }

    @media screen and (min-width: 920px){
        width: 40%;
    }
`;

export const FooterLink = styled.a`
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

export const SocialMediaIcons = styled.img`
    width: 12vw;

    @media screen and (min-width: 700px){
        width: 7vw;
    }

    @media screen and (min-width: 920px){
        width: 3vw;
    }
`;

export const FooterIcons = styled.img`
    width: 12vw;

    @media screen and (min-width: 700px){
        width: 7vw;
    }

    @media screen and (min-width: 920px){
        width: 3vw;
    }
`;

export const Copyright = styled.div`
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
    justify-content: center;

    @media screen and (min-width: 700px){
        font-size: 1em;
        padding: 0.5%;
    }
`;