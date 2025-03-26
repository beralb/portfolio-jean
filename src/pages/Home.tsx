import React from 'react';
import styled from 'styled-components';
import ScrollAnimation from '../components/ScrollAnimation';

const HomeContainer = styled.section`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 0;
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

const ButtonPlaceholder = styled.div`
  height: 60px;
  margin: 0;
  padding: 0;
  display: block;
  width: 100%;
  max-width: 450px;
`;

const Home: React.FC = () => {
  return (
    <HomeContainer id="home">
      <BackgroundShape />
      <div className="container">
        <HomeContent className="HomeContent">
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

          {/* Placeholder para os botões injetados lado a lado */}
          <ButtonPlaceholder id="button-placeholder" />
          
          {/* Ícones de redes sociais removidos da página inicial */}
        </HomeContent>
      </div>
    </HomeContainer>
  );
};

export default Home; 