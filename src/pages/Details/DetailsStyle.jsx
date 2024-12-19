import styled from "styled-components";
import Flex from "../../components/GlobalStyles/Flex";


export const DetailContainer = styled(Flex)`
    flex-direction: column;
    background-color: darkgray;
    min-height: calc(100vh-75px);
    padding: 0.5rem;
    font-family: "Fredericka the Great", serif;
`

export const DetailPart = styled(Flex) `
    flex-direction: row;
    margin: 1rem;
    border: 1px solid beige;
    border-radius: 5px;
    background-color: #5e5b54;
`

export const ImgContainer = styled.div`
    border: 1px solid bisque;
    padding: 10px;
    border-radius: 3px;
    margin: 2rem;
    img{
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 15rem;
    }
`
export const HeaderContainer = styled.div`
    margin: 25px;
    text-align: center;
        img {
            margin-top: 2rem;
        width: 200px;
    }
`

export const IngContainer = styled.div`
h4{
    font-family: "Fredericka the Great", serif;
    font-size: 1.5rem;
    margin-bottom: 1rem;
}
display: flex;
flex-direction: column;
     width: 400px;
     font-size: 1.2rem;
    margin: 1.5rem;

`

export const OtherPart = styled.div `
    width: 400px;
    text-align: right;
    font-size: 1.8rem;
    margin: 2rem;
`