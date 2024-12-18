import { useState } from "react";
import NavbarStyle from "./NavbarStyle"
import { NavLi, Nav, Hamburger, Menu } from "./NavbarStyle";
import { RxDropdownMenu } from "react-icons/rx";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <div>
        <NavLi to="/">
          <h1>RECIPE</h1>
        </NavLi>
      </div>
<Hamburger  onClick={()=>setIsOpen(!isOpen)}>
<RxDropdownMenu/>
</Hamburger>
      <Menu isOpen={isOpen} onClick={()=>setIsOpen(false)}>
        <NavLi to="/about">About</NavLi>
        <NavLi to="/contact">Contact</NavLi>
        <NavLi to="/login" onClick={()=>sessionStorage.clear()}>Logout</NavLi>
      </Menu>
    </Nav>
  );
};

export default Navbar;