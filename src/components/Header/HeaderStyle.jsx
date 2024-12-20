import styled from "styled-components";
import Flex from "../GlobalStyles/Flex";
import { breakpoints } from "../Navbar/NavbarStyle";

export const HeaderContainer = styled(Flex)`
    background: #988772;
    flex-direction: column;
`

export const MainHeader = styled.h2 `
    margin-top: 1rem ; 
    font-size: 2.3rem;
    font-family: "Special Elite";
    text-align: center;
    @media (max-width: ${breakpoints.tablet}) {
        font-size: 1rem;
    }
`
export const FormContainer = styled.form`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    border: 2px solid #8d764a;
    padding: 5px;
    box-shadow: 3px 2px 5px 2px;
    border-radius: 5px;
    margin: 1.2rem;
`

export const FoodInput = styled.input `
    height: 3rem;
    width: 15rem;
    border: none;
    border-radius: 4px;
    outline: none;
    text-indent: 1rem;
    margin: 5px;
    font-size: 1rem;
    font-family: "Nothing You Could Do", serif;
 
`

export const Button = styled.button `
    background-color: #105454;
    padding: 5px;
    outline: none;
    height: 2.5rem;
    border: none;
margin-top: 0.5rem;
    border-radius: 6px;
     font-family: "Fredericka the Great";
     @media (max-width: ${breakpoints.tablet}) {
        font-size: 0.8rem;
    }
    cursor: pointer;
    font-size: 1.2rem;
    &:hover {
        background: bisque;
        color: darkgoldenrod;
        transition: all 0.3s ease-in;
    }
`
    export const Select = styled.select `
    border-radius: 6px;
    cursor: pointer;
    padding: 5px;
    margin-top: 0.5rem;
    margin-left: 5px;
    height: 2.5rem;
    border: none;
    font-size:1rem;
    font-family: "Fredericka the Great";
    background-color: bisque;
    color: darkgoldenrod;
    @media (max-width: ${breakpoints.tablet}) {
        font-size: 0.8rem;
    }
    &:hover {
        background-color: #105454;
        color: black;
        transition: all 0.3s ease-in;
    }
    `
