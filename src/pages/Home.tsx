import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import ScrollAnimation from '../components/ScrollAnimation';

const HomeContainer = styled.section`
  min-height: 100vh;
  display: flex;
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
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1rem;
  color: var(--dark);

  span {
    color: var(--primary);
  }

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  color: var(--text-light);
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
  }
`;

const PrimaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.875rem 1.75rem;
  background-color: var(--primary);
  color: white;
  border-radius: 4px;
  font-weight: 500;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(37, 99, 235, 0.25);

  &:hover {
    background-color: var(--primary-dark);
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(37, 99, 235, 0.3);
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const SecondaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.875rem 1.75rem;
  background-color: transparent;
  color: var(--text);
  border: 1px solid var(--border);
  border-radius: 4px;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--primary);
    color: var(--primary);
    transform: translateY(-2px);
  }

  @media (max-width: 480px) {
    width: 100%;
  }
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

// Novos componentes estilizados
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
  max-width: 600px;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2.5rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.75rem;
  }
`;

const SocialContainer = styled.div`
  display: flex;
  gap: 1rem;
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
          
          <ScrollAnimation direction="up" delay={0.6}>
            <ButtonContainer>
              <PrimaryButton to="/portfolio">Ver Projetos</PrimaryButton>
              <SecondaryButton to="/contact">Contato</SecondaryButton>
            </ButtonContainer>
          </ScrollAnimation>
          
          <ScrollAnimation direction="up" delay={0.8}>
            <SocialContainer>
              <SocialLink href="https://github.com/seu-usuario" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/seu-usuario/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </SocialLink>
              <SocialLink href="mailto:beralb@tutanota.com">
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