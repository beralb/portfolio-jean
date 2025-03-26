import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logoImage from '../assets/images/portfolio/logo-pq.jpg';
import ThemeToggle from './ThemeToggle';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: var(--overlay);
  backdrop-filter: blur(10px);
  box-shadow: 0 1px 3px var(--card-shadow);
  z-index: 1000;
  transition: all 0.3s ease;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 1.5rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
  }
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  z-index: 1001;
  
  img {
    height: 70px;
    width: auto;
    transition: transform 0.3s ease;
    
    &:hover {
      transform: scale(1.05);
    }
  }

  @media (max-width: 768px) {
    img {
      height: 50px;
    }
  }
`;

const NavLinks = styled.ul<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  gap: 2.5rem;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 70%;
    max-width: 400px;
    flex-direction: column;
    justify-content: center;
    background-color: var(--light);
    transform: ${({ $isOpen }: { $isOpen: boolean }) => ($isOpen ? 'translateX(0)' : 'translateX(100%)')};
    transition: transform 0.3s ease-in-out;
    box-shadow: -2px 0 5px rgba(30, 61, 40, 0.1);
    z-index: 1000;
  }
`;

const NavLink = styled(Link)`
  font-size: 1rem;
  font-weight: 500;
  color: var(--text);
  position: relative;
  transition: color 0.3s ease;

  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--primary);
    transition: width 0.3s ease;
  }

  &:hover, &.active {
    color: var(--primary);
    
    &:after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: var(--dark);
  cursor: pointer;
  z-index: 1001;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Overlay = styled.div<{ $isOpen: boolean }>`
  display: ${({ $isOpen }: { $isOpen: boolean }) => ($isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  transition: opacity 0.3s ease;
`;

const NavControls = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    closeMenu();
  };

  return (
    <HeaderContainer>
      <Nav>
        <Logo onClick={() => handleNavigation('/')} to="/" style={{ cursor: 'pointer' }}>
          <img src={logoImage} alt="Jean Paul Bernhardt Logo" />
        </Logo>

        <NavControls>
          <ThemeToggle />
          <MenuButton onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </MenuButton>
        </NavControls>

        <Overlay $isOpen={isMenuOpen} onClick={closeMenu} />

        <NavLinks $isOpen={isMenuOpen}>
          <li><NavLink as="span" onClick={() => handleNavigation('/')} style={{ cursor: 'pointer' }}>Home</NavLink></li>
          <li><NavLink as="span" onClick={() => handleNavigation('/about')} style={{ cursor: 'pointer' }}>Sobre</NavLink></li>
          <li><NavLink as="span" onClick={() => handleNavigation('/portfolio')} style={{ cursor: 'pointer' }}>Portfólio</NavLink></li>
          <li><NavLink as="span" onClick={() => handleNavigation('/skills')} style={{ cursor: 'pointer' }}>Habilidades</NavLink></li>
          <li><NavLink as="span" onClick={() => handleNavigation('/contact')} style={{ cursor: 'pointer' }}>Contato</NavLink></li>
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
};

export default Header; 