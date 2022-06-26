import styled from "styled-components";
import mobCover from '../../img/mobile-cover.png';
import cover from '../../img/cover.png';

export const Wrapper = styled.header`
    padding: 2%;
`;

export const Header = styled.section`
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
    font-size: 3em;
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