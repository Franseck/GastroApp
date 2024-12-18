import styled from "styled-components";
import Flex from "../../components/GlobalStyles/Flex";

export const LoginContainer = styled(Flex)`
    height : 100vh;
background-image: url("https://cdn.pixabay.com/photo/2022/10/23/22/40/vegetables-7542255_960_720.jpg");
background-repeat: no-repeat;
background-size: cover;
background-attachment: fixed;

` ;

export const FormContainer = styled(Flex)`
    width: 30rem;
    height: 30rem;
    max-width: 50rem;
    background: #7d511a7d;
    border-radius:50% ;
    border: 1px solid bisque;
    padding: 0.5rem;
    flex-direction: column;
    position: relative;
`;
export const Header = styled.h1 `
    color: white;
    font-size: 2rem;
margin: 2rem;
`

export const StyledInput = styled.input`
    height: 2rem;
    font-size: 1rem;
    width: 10rem;
    border-radius: 5px;
    text-indent: 2.2rem;
    margin: 0.5rem;

`

export const StyledForm = styled.form `
    display : flex;
    flex-direction: column;
`;
export const StyledButton = styled.button `
    font-size : 1rem;
background: rgba(0,0,0,0.6);
color: white;
border: none;
margin: 1rem;
border-radius: 5px;
cursor : pointer;
&:hover {
    opacity: 0.8;
}
`;
export const StyledImg = styled.img `
    width: 8rem;
 position: absolute;
 top: 0;
 border-radius: 10px;
 border: 2px solid chocolate;
    margin: 1rem;
`