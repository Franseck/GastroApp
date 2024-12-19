import { useState } from "react";
import NavbarStyle from "./NavbarStyle"
import { NavLi, Nav, Hamburger, Menu, NavRes } from "./NavbarStyle";
import { RxDropdownMenu } from "react-icons/rx";
import logo from "../../assets/Logo.png"

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (

    <Nav>
<NavRes>
        <NavLi to="/">
          <h1>NUTRIENTS and RECIPES</h1>
          <img src={logo} alt="" />
        </NavLi>
    
<Hamburger  onClick={()=>setIsOpen(!isOpen)}>
<RxDropdownMenu/>
</Hamburger>
</NavRes>

      <Menu isOpen={isOpen} onClick={()=>setIsOpen(false)}>
        <NavLi to="/about">About</NavLi>
          <NavLi to="/contact">Contact</NavLi>
        <NavLi to="/login" onClick={()=>sessionStorage.clear()}>Logout</NavLi>
      </Menu>
    </Nav>
  );
};

export default Navbar;