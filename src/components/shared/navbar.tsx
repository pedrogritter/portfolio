import { useState } from "react";
import styled from "styled-components";

const NavbarContainer = styled.nav`
  font: 20px "Titillium Web", sans-serif;
  font-weight: 400;
  width: 100%;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  /* margin: 0 auto; */
  z-index: 100;
  position: fixed;
  left: 0;
  top: 0;
`;

const NavList = styled.ul`
  min-height: 48px;
  width: auto;
  /* center align the menu */
  text-align: center;
`;

const NavItem = styled.li<{ active?: boolean }>`
  position: relative;
  list-style: none;
  height: 48px;
  display: inline-block;

  a {
    display: inline-block;
    padding: 8px 13px;
    line-height: 32px;
    text-decoration: none;
    text-align: left;
    color: ${props => props.active ? "#F06000" : "#FFF"};

    -webkit-transition: color 0.2s ease-in-out;
    -moz-transition: color 0.2s ease-in-out;
    -o-transition: color 0.2s ease-in-out;
    -ms-transition: color 0.2s ease-in-out;
    transition: color 0.2s ease-in-out;
  }
`;

const Navbar = () => {
const [current, setCurrent] = useState("Home");

  const Items = [
    { name: "Home", ref: "#home" },
    { name: "About", ref: "#about" },
    { name: "Resume", ref: "#resume" },
    { name: "Projects", ref: "#projects" },
    { name: "Stack", ref: "#stack" },
    { name: "Contact", ref: "#contact" },
  ];

  const NavItems = Items.map((item, key) => {
    return (
      <NavItem key={key} active={current === item.name}>
        <a className="smoothscroll" href={item.ref} onClick={() => setCurrent(item.name)}>
          {item.name}
        </a>
      </NavItem>
    );
  });

  return (
    // <nav id="nav-wrap">
    //         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
    //       <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
    //         <ul id="nav" className="nav">
    //            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
    //            <li><a className="smoothscroll" href="#about">About</a></li>
    //          <li><a className="smoothscroll" href="#resume">Resume</a></li>
    //            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
    //            <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
    //            <li><a className="smoothscroll" href="#contact">Contact</a></li>
    //         </ul>
    //      </nav>

    <NavbarContainer>
      <NavList id="nav" className="nav">
        {NavItems}
      </NavList>
    </NavbarContainer>
  );
};

export default Navbar;
