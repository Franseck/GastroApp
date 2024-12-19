import styled from "styled-components";
import Flex from "../GlobalStyles/Flex";

export const MainContainer = styled(Flex)`
    flex-direction: row;
`;

export const Card = styled(Flex)`
    flex-direction: column;
    gap: 1rem;
    font-family: "Nothing You Could Do", serif;
    height: 20rem;
    width: 20rem;
    background-color: #ba9f5b;
    padding: 0.5rem;
    border-radius: 6px;
    margin: 0.7rem;
    box-shadow: 3px 3px 10px 1px ;
    &:hover{
        box-shadow: none;
        transition: all 0.3s ease-in;
    }
`

export const Image = styled.img`
    height: 10rem;
    border-radius:10px;
    `
export const Button = styled.button `
    background: teal;
    padding: 0.7rem;
    outline: none;
    border: none;
    margin: 0.5rem;
    border-radius: 6px;
    font-family: "Nothing You Could Do", serif;
    cursor: pointer;
    &:hover{
          background-color: #8d5844;
    }
`

export const Header = styled.h1`
    font-size: 1rem;
    text-align: center;
`