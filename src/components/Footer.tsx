import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: var(--dark);
  color: var(--light);
  padding: 3rem 0;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

const FooterLogo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--light);
  margin-bottom: 1.5rem;

  span {
    color: var(--primary);
  }

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(64, 160, 86, 0.2);
  color: var(--light);
  font-size: 1.25rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--primary);
    transform: translateY(-3px);
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--text-light);
  font-size: 0.875rem;
`;

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <FooterLogo to="/">
          Jean<span>Bernhardt</span>
        </FooterLogo>

        <FooterLinks>
          <SocialLinks>
            <SocialLink href="https://github.com/beralb" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </SocialLink>
            <SocialLink href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </SocialLink>
            <SocialLink href="mailto:beralb@tutanota.com" aria-label="Email">
              <FaEnvelope />
            </SocialLink>
          </SocialLinks>
        </FooterLinks>
      </FooterContent>
      
      <div className="container">
        <Copyright>
          &copy; {currentYear} Jean Paul Bernhardt. Todos os direitos reservados.
        </Copyright>
      </div>
    </FooterContainer>
  );
};

export default Footer; 