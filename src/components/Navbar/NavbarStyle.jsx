import styled from "styled-components";
import { Link } from "react-router-dom";
import Flex from "../GlobalStyles/Flex";
import theme from "../GlobalStyles/theme";

const breakpoints = {
  mobile: "320px",
  tablet: "768px",
  desktop: "1024px",
};

export const Menu = styled(Flex)`
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 1rem;
    display: flex;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "400" : "0")};
    overflow: hidden;
  }
  h1 {
    font-size: 1.3rem;
  }
`;

export const NavRes = styled(Flex)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5rem;
`;

export const NavLi = styled(Link)`
  color: #8d764a;
  text-align: center;
  text-decoration: none;
  margin: 1rem;
  font-size: 1.1rem;
  display: flex;
  h1 {
    font-size: 2rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1rem;
    display: flex;
    flex-direction: column;

    h1 {
      font-size: 1.3rem;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    margin: 0.5rem;
    font-size: 1rem;

    h1 {
      font-size: 1rem;
    }
  }
`;

export const Nav = styled(Flex)`
  justify-content: space-between;
  background-color: bisque;
  font-family: "Fredericka the Great", serif;

  h1 {
    color: darkgreen;
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Hamburger = styled.div`
  display: none;
  font-size: 1.5rem;
  color: darkgreen;
  cursor: pointer;
  @media (max-width: ${breakpoints.tablet}) {
    display: block;
  }
`;
