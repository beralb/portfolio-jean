import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import ScrollAnimation from '../components/ScrollAnimation';

// Import das imagens do portfólio
import placeholderImg from '../assets/images/portfolio/placeholder.svg';
import portfolio1Img from '../assets/images/portfolio/portfolio-01.png';
import portfolio2Img from '../assets/images/portfolio/portfolio-02.png';
import portfolio3Img from '../assets/images/portfolio/portfolio03.png';
import portfolio4Img from '../assets/images/portfolio/portfolio-04.png';

// Definições de tipos para as imagens reais
const brenaMarquesImg = placeholderImg;
const joseRegoImg = placeholderImg;
const victorHugoImg = placeholderImg;
const ortopedistaImg = placeholderImg;

// Quando as imagens reais estiverem disponíveis, descomente estas linhas e remova as definições acima
// import brenaMarquesImg from '../assets/images/portfolio/brena-marques.jpg';
// import joseRegoImg from '../assets/images/portfolio/jose-rego.jpg';
// import victorHugoImg from '../assets/images/portfolio/victor-hugo.jpg';
// import ortopedistaImg from '../assets/images/portfolio/ortopedista-sp.jpg';

// Imports das imagens reais do portfolio

const PortfolioContainer = styled.section`
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

const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
  }
`;

const ProjectCard = styled(motion.div)`
  border-radius: 8px;
  overflow: hidden;
  background-color: var(--card-bg);
  box-shadow: 0 4px 10px var(--card-shadow);
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px var(--card-shadow);
  }
`;

const ProjectImage = styled.div`
  height: 200px;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: flex-end;
  padding: 1.5rem;

  ${ProjectImage}:hover & {
    opacity: 1;
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: var(--dark);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;

const ProjectDescription = styled.p`
  color: var(--text-light);
  margin-bottom: 1rem;
  font-size: 0.875rem;
  line-height: 1.6;
  font-weight: 500;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: var(--primary);
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: var(--primary-dark);
  }
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const Tag = styled.span`
  padding: 0.25rem 0.75rem;
  background-color: var(--gray-light);
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--secondary);
`;

const CategoryTitle = styled.h3`
  font-size: 1.75rem;
  font-weight: 600;
  margin: 4rem 0 2rem;
  color: var(--dark);
  position: relative;
  padding-left: 1rem;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background-color: var(--primary);
    border-radius: 4px;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin: 3rem 0 1.5rem;
  }
`;

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const profissionalProjects: Project[] = [
  {
    id: 1,
    title: 'Dra. Brena Marques Odontologia',
    description: 'Site profissional para consultório odontológico, desenvolvido em WordPress com design personalizado e sistema de agendamento.',
    image: portfolio1Img,
    tags: ['WordPress', 'CSS', 'Responsive Design', 'SEO'],
    liveUrl: 'https://brenamarquesodontologia.com.br/'
  },
  {
    id: 2,
    title: 'Dr. José Francisco do Rêgo',
    description: 'Site profissional para médico, com área de blog e sistema de agendamentos.',
    image: portfolio2Img,
    tags: ['WordPress', 'PHP', 'JavaScript', 'Custom Theme'],
    liveUrl: 'https://www.drjosefcorego.com.br/'
  },
  {
    id: 3,
    title: 'Dr. Victor Hugo Vascular',
    description: 'Website para cirurgião vascular com informações sobre procedimentos e agendamento online.',
    image: portfolio3Img,
    tags: ['WordPress', 'UI/UX', 'Responsive Design', 'SEO'],
    liveUrl: 'https://victorhugovascular.com.br/'
  },
  {
    id: 4,
    title: 'Ortopedista São Paulo',
    description: 'Portal especializado para clínica de ortopedia com informações sobre serviços, procedimentos e atendimento.',
    image: portfolio4Img,
    tags: ['WordPress', 'PHP', 'SEO', 'Responsive Design'],
    liveUrl: 'https://ortopedistasaopaulo.com.br/'
  }
];

const Portfolio: React.FC = () => {
  return (
    <PortfolioContainer id="portfolio">
      <div className="container">
        <ScrollAnimation>
          <SectionTitle>Meu Portfólio</SectionTitle>
        </ScrollAnimation>

        <ScrollAnimation delay={0.2}>
          <CategoryTitle>Projetos Profissionais</CategoryTitle>
        </ScrollAnimation>
        
        <PortfolioGrid>
          {profissionalProjects.map((project, index) => (
            <ScrollAnimation 
              key={project.id} 
              delay={0.1 * (index + 1)}
              duration={0.4}
            >
              <ProjectCard>
                <ProjectImage>
                  <img src={project.image} alt={project.title} />
                  <ProjectOverlay>
                    <TagsContainer>
                      {project.tags.map((tag, index) => (
                        <Tag key={index}>{tag}</Tag>
                      ))}
                    </TagsContainer>
                  </ProjectOverlay>
                </ProjectImage>
                <ProjectContent>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  <ProjectLinks>
                    {project.liveUrl && (
                      <ProjectLink href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt /> Ver site
                      </ProjectLink>
                    )}
                    {project.githubUrl && (
                      <ProjectLink href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <FaGithub /> Ver código
                      </ProjectLink>
                    )}
                  </ProjectLinks>
                </ProjectContent>
              </ProjectCard>
            </ScrollAnimation>
          ))}
        </PortfolioGrid>
      </div>
    </PortfolioContainer>
  );
};

export default Portfolio; 