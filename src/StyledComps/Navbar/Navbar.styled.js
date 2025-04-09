// components/Navbar/Navbar.styled.js
import styled from 'styled-components';

export const Header = styled.header`
  font-family: 'Poppins', sans-serif;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 60px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 10px 20px;
  }
`;

export const BrandLogo = styled.a`
  img {
    height: 80px;
  }
`;

export const Hamburger = styled.div`
  font-size: 26px;
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: 35px;
  list-style: none;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    position: absolute;
    top: 100%;
    left: 0;
    background: #fff;
    width: 100%;
    flex-direction: column;
    gap: 20px;
    padding: 20px 0;
    display: ${({ open }) => (open ? 'flex' : 'none')};
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }
`;

export const NavLinkItem = styled.li`
  a {
    text-decoration: none;
    color: #111;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;

    &:hover {
      color: #a82c48;
    }
  }
`;

export const MainButton = styled.button`
  background-color: #a82c48;
  color: white;
  padding: 10px 16px;
  font-weight: bolder;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  font-size: 14px;

  &:hover {
    background-color: #8c233b;
  }
`;
