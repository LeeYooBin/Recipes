import styled from "styled-components";

export const Wrapper = styled.section`
    width: 100%;
    height: auto;
    background-color: #DFE4DE;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.h1`
    margin-top: 12vh;
    font-size: 2.1em;
    font-weight: bolder;
    letter-spacing: 3px;
`;

export const Text = styled.p`
    margin: 2vh 0 2vh 0;
    font-size: 1.7em;
    font-weight: 900;
    text-align: justify;
`;

export const Input = styled.input`
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

export const Submit = styled.button`
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

