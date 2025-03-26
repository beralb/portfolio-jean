import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: var(--dark);
  color: var(--light);
  padding: 5px 0;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  height: 40px; /* Altura aumentada em 10px (5px em cada borda) */
  display: flex;
  align-items: center;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 0.8rem;
  align-items: center;
`;

const FooterLogo = styled(Link)`
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--light);

  span {
    color: var(--primary);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 0.6rem;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: rgba(64, 160, 86, 0.2);
  color: var(--light);
  font-size: 0.8rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--primary);
    transform: translateY(-2px);
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterLogo to="/">
          Jean<span>Bernhardt</span>
        </FooterLogo>

        <SocialLinks>
          <SocialLink href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </SocialLink>
          <SocialLink href="mailto:beralb@tutanota.com" aria-label="Email">
            <FaEnvelope />
          </SocialLink>
        </SocialLinks>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer; 