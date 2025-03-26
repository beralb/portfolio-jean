import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import ScrollAnimation from '../components/ScrollAnimation';

const HomeContainer = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
  position: relative;
  overflow: hidden;
`;

const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 650px;
  z-index: 1;
  text-align: center;
  width: 100%;
  align-items: center;
`;

const BackgroundShape = styled.div`
  position: absolute;
  top: 50%;
  right: -300px;
  width: 800px;
  height: 800px;
  border-radius: 50%;
  background: linear-gradient(45deg, rgba(64, 160, 86, 0.1), rgba(64, 160, 86, 0.05));
  transform: translateY(-50%);
  z-index: 0;
`;

const SmallText = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--primary);
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  color: var(--dark);
  line-height: 1.2;
  margin-bottom: 1.5rem;
  
  span {
    display: block;
    color: var(--primary);
    font-size: 2.5rem;
    font-weight: 700;
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
    
    span {
      font-size: 1.8rem;
    }
  }
`;

const HeroText = styled.p`
  font-size: 1.25rem;
  color: var(--text-light);
  line-height: 1.8;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
  }
`;

const LinkButton = styled.a`
  display: inline-block;
  padding: 15px 30px;
  margin: 10px;
  border-radius: 4px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  width: 200px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
  
  @media (max-width: 768px) {
    width: 80%;
    margin: 5px auto;
  }
`;

const PrimaryButton = styled(LinkButton)`
  background-color: var(--primary);
  color: white;
  border: none;
  
  &:hover {
    background-color: var(--primary-dark);
  }
`;

const SecondaryButton = styled(LinkButton)`
  background-color: transparent;
  color: var(--text);
  border: 1px solid var(--border);
  
  &:hover {
    border-color: var(--primary);
    color: var(--primary);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
  width: 100%;
  max-width: 300px;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SocialContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 20px;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(64, 160, 86, 0.1);
  color: var(--primary);
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--primary);
    color: white;
    transform: translateY(-3px);
  }
`;

const Home: React.FC = () => {
  
  const handleNavigation = (path: string) => {
    window.location.href = `/portfolio-jean/#${path}`;
  };
  
  return (
    <HomeContainer id="home">
      <BackgroundShape />
      <div className="container">
        <HomeContent>
          <ScrollAnimation direction="down">
            <SmallText>Olá, eu sou</SmallText>
          </ScrollAnimation>
          
          <ScrollAnimation direction="left" delay={0.2}>
            <HeroTitle>
              Jean Paul Bernhardt
              <span>Desenvolvedor Web</span>
            </HeroTitle>
          </ScrollAnimation>
          
          <ScrollAnimation direction="right" delay={0.4}>
            <HeroText>
              Desenvolvedor web com experiência em WordPress e React. 
              Criando sites profissionais e soluções web personalizadas.
            </HeroText>
          </ScrollAnimation>

          <ButtonContainer>
            <PrimaryButton 
              href="/portfolio-jean/#/portfolio"
              role="button"
              aria-label="Ver Projetos"
              onTouchStart={() => {}}
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.preventDefault();
                handleNavigation('/portfolio');
              }}
            >
              Ver Projetos
            </PrimaryButton>
            
            <SecondaryButton 
              href="/portfolio-jean/#/contact"
              role="button"
              aria-label="Contato"
              onTouchStart={() => {}}
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.preventDefault();
                handleNavigation('/contact');
              }}
            >
              Contato
            </SecondaryButton>
          </ButtonContainer>
          
          <ScrollAnimation direction="up" delay={0.8}>
            <SocialContainer>
              <SocialLink 
                href="https://github.com/seu-usuario" 
                target="_blank" 
                rel="noopener noreferrer"
                onTouchStart={() => {}}
              >
                <FaGithub />
              </SocialLink>
              <SocialLink 
                href="https://www.linkedin.com/in/seu-usuario/" 
                target="_blank" 
                rel="noopener noreferrer"
                onTouchStart={() => {}}
              >
                <FaLinkedin />
              </SocialLink>
              <SocialLink 
                href="mailto:beralb@tutanota.com"
                onTouchStart={() => {}}
              >
                <FaEnvelope />
              </SocialLink>
            </SocialContainer>
          </ScrollAnimation>
        </HomeContent>
      </div>
    </HomeContainer>
  );
};

export default Home; 