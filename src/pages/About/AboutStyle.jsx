import styled from 'styled-components';

export const AboutContainer = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: fit-content;
  
  font-family: "Nothing You Could Do", serif;
  

  img {
    width:30%;
    border: 2px solid goldenrod;
    margin: 1rem 2rem;
    border-radius: 3rem;
    

    @media (max-width: 768px) {
      margin: 1rem;
      width:300px;
    }
  }
  img:hover{
    scale:1.1;
  }
  h4 {
    line-height: 1.5rem;
    border: 2px solid goldenrod;
    border-radius:2rem;
    padding: 2rem 2rem;
    width: 50%;

    @media (max-width: 768px) {
      padding: 1rem;
      font-size: 1.2rem;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
