



export const DetailPart = styled(flex) `
    flex-direction: row;
    margin: 1rem;
    border: 1px solid beige;
    border-radius: 5px;
    background-color: red;
`

export const ImgContainer = styled.div`
    border: 1px solid red;
    padding: 10px;
    border-radius: 3px;
    margin: 2rem;
    img{
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`
export const HeaderContainer = styled.div`
    margin: 25px;
    img {
        width: 200px;
    }
`

export const IngContainer = styled.div`
     width: 400px;
     font-size: 1.4rem;
    margin: 2rem;
`

export const OtherPart = styled.div `
    width: 400px;
    text-align: right;
    font-size: 1.8rem;
    margin: 2rem;
`