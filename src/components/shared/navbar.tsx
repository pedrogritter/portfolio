import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import HamburgerMenu from "react-hamburger-menu";
import { Utils } from "../../core/utils";
import { down } from "styled-breakpoints";

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

const NavItem = styled.li<{ active: boolean }>`
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
    color: ${(props) => (props.active ? "#F06000" : "#FFF")};

    ${down("lg")}{
      font-size: 28px;
      padding: 12px 13px;
      /* padding: 3rem; */
    }

    -webkit-transition: color 0.2s ease-in-out;
    -moz-transition: color 0.2s ease-in-out;
    -o-transition: color 0.2s ease-in-out;
    -ms-transition: color 0.2s ease-in-out;
    transition: color 0.2s ease-in-out;


  }
`;

const MobileNavWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  /* padding: 2rem; */
  background: none;
  position: fixed;
  z-index: 100;
`;

const MobileNavContainer = styled.div<{ open?: boolean }>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 65vw;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.8);
  padding: 5rem 0rem;
  height: 100vh;
  margin-top: -85px;


  transition: transform .5s
              cubic-bezier(0, .52, 0, 1);

  ${(props) =>
    props.open
      ? css`
          transform: translate3d(0vw, 0, 0);
          overflow: hidden;
        `
      : css`
            transform: translate3d(-100vw, 0, 0);
        `}
`;

const MenuWrapper = styled.div`
  padding: 2rem;
  z-index: 100;
`

const Navbar = () => {
  const [current, setCurrent] = useState("Home");
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    openMenu ? Utils.BlockDocumentScroll() : Utils.ReleaseDocumentScroll();
  }, [openMenu])

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
        <a
          className="smoothscroll"
          href={item.ref}
          onClick={() => setCurrent(item.name)}
        >
          {item.name}
        </a>
      </NavItem>
    );
  });

  const mobileNav = (
    <MobileNavWrapper>
      <MenuWrapper>
        <HamburgerMenu
          isOpen={openMenu}
          menuClicked={() => setOpenMenu(!openMenu)}
          width={23}
          height={20}
          strokeWidth={1}
          rotate={0}
          color="white"
          borderRadius={0}
          animationDuration={0.5}
        />
      </MenuWrapper>
      <MobileNavContainer open={openMenu}>{NavItems}</MobileNavContainer>
    </MobileNavWrapper>
  );

  const desktopNav = (
    <NavbarContainer>
      <NavList id="nav" className="nav">
        {NavItems}
      </NavList>
    </NavbarContainer>
  );

  return Utils.isDesktop() ? desktopNav : mobileNav;
};

export default Navbar;
