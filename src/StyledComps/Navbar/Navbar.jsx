// components/Navbar/Navbar.jsx
import React, { useState } from 'react';
import Logo from '../../assets/logo.png'; 
import {
  Header,
  Nav,
  BrandLogo,
  Hamburger,
  NavLinks,
  NavLinkItem,
  MainButton
} from './Navbar.styled';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <Header>
      <Nav>
        <BrandLogo href="#">
          <img src={Logo} alt="Logo" />
        </BrandLogo>

        <Hamburger onClick={toggleMenu}>☰</Hamburger>

        <NavLinks open={menuOpen}>
          <NavLinkItem><a href="#home">Home</a></NavLinkItem>
          <NavLinkItem><a href="#about">About</a></NavLinkItem>
          <NavLinkItem><a href="#explore">Explore</a></NavLinkItem>
          <NavLinkItem><a href="#reviews">Reviews</a></NavLinkItem>
          <NavLinkItem><a href="#faq">FAQ</a></NavLinkItem>
          <NavLinkItem><a href="#contact">Contact</a></NavLinkItem>
          <NavLinkItem><MainButton>1200 345 123</MainButton></NavLinkItem>
        </NavLinks>
      </Nav>
    </Header>
  );
};

export default Navbar;
