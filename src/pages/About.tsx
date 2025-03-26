import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import aboutImage from '../assets/images/portfolio/about-01.jpeg';
import ScrollAnimation from '../components/ScrollAnimation';

const AboutContainer = styled.section`
  padding-top: 120px;
  min-height: 100vh;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  text-align: center;
  color: var(--dark);
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background-color: var(--primary);
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-top: 3rem;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const AboutImageWrapper = styled.div`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(30, 61, 40, 0.1);

  &:before {
    content: '';
    position: absolute;
    top: 20px;
    left: 20px;
    right: 20px;
    bottom: 20px;
    border: 4px solid var(--primary);
    border-radius: 4px;
    z-index: 0;
  }

  img {
    width: 100%;
    height: auto;
    position: relative;
    z-index: 1;
    transition: transform 0.5s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }

  @media (max-width: 992px) {
    max-width: 500px;
    margin: 0 auto;
  }
`;

const AboutText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const AboutTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  color: var(--dark);
  margin-bottom: 1rem;

  span {
    color: var(--primary);
  }

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

const AboutParagraph = styled.p`
  color: var(--text-light);
  font-size: 1.125rem;
  line-height: 1.8;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const AboutInfoTable = styled.table`
  margin-top: 1.5rem;
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.75rem;
  
  @media (max-width: 992px) {
    margin-top: 1rem;
  }
`;

const AboutInfoRow = styled.tr`
  vertical-align: top;
`;

const AboutInfoLabelCell = styled.td`
  font-weight: 600;
  color: var(--dark);
  padding-right: 0.75rem;
  white-space: nowrap;
  width: 150px;
`;

const AboutInfoValueCell = styled.td`
  color: var(--text-light);
`;

const About: React.FC = () => {
  return (
    <AboutContainer id="about">
      <div className="container">
        <ScrollAnimation>
          <SectionTitle>Sobre Mim</SectionTitle>
        </ScrollAnimation>

        <AboutContent>
          <ScrollAnimation direction="left" delay={0.2}>
            <AboutImageWrapper>
              <img 
                src={aboutImage} 
                alt="Jean Paul Bernhardt" 
              />
            </AboutImageWrapper>
          </ScrollAnimation>

          <ScrollAnimation direction="right" delay={0.4}>
            <AboutText>
              <AboutTitle>
                Olá, sou <span>Jean Paul Bernhardt</span>
              </AboutTitle>
              
              <AboutParagraph>
                Sou engenheiro mecânico por formação e atualmente estou dedicado ao Desenvolvimento Web. Essa transição de carreira foi motivada pela minha paixão por criar soluções digitais e pela crescente demanda por profissionais qualificados nesta área.
              </AboutParagraph>
              
              <AboutParagraph>
                Tenho experiência com desenvolvimento de sites profissionais utilizando WordPress, e atualmente estou expandindo meus conhecimentos em tecnologias modernas como React, Node.js e outras ferramentas do ecossistema JavaScript.
              </AboutParagraph>
              
              <AboutParagraph>
                Sou brasileiro e moro na bela cidade de Fortaleza, no estado do Ceará. Além do desenvolvimento web, tenho interesse em tecnologias emergentes, design de interfaces e otimização de performance web.
              </AboutParagraph>

              <AboutInfoTable>
                <tbody>
                  <AboutInfoRow>
                    <AboutInfoLabelCell>Nome:</AboutInfoLabelCell>
                    <AboutInfoValueCell>Jean Paul Bernhardt</AboutInfoValueCell>
                  </AboutInfoRow>
                  <AboutInfoRow>
                    <AboutInfoLabelCell>Localização:</AboutInfoLabelCell>
                    <AboutInfoValueCell>Fortaleza, CE - Brasil</AboutInfoValueCell>
                  </AboutInfoRow>
                  <AboutInfoRow>
                    <AboutInfoLabelCell>Email:</AboutInfoLabelCell>
                    <AboutInfoValueCell>beralb@tutanota.com</AboutInfoValueCell>
                  </AboutInfoRow>
                  <AboutInfoRow>
                    <AboutInfoLabelCell>Disponibilidade:</AboutInfoLabelCell>
                    <AboutInfoValueCell>Disponível para projetos</AboutInfoValueCell>
                  </AboutInfoRow>
                </tbody>
              </AboutInfoTable>
            </AboutText>
          </ScrollAnimation>
        </AboutContent>
      </div>
    </AboutContainer>
  );
};

export default About;