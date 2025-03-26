import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaGitAlt, 
  FaWordpress,
  FaBootstrap,
  FaNpm
} from 'react-icons/fa';
import { SiJest, SiTypescript } from 'react-icons/si';
import ScrollAnimation from '../components/ScrollAnimation';

const SkillsContainer = styled.section`
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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 1.5rem;
  }
`;

const SkillCard = styled(motion.div)`
  background-color: var(--card-bg);
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 10px var(--card-shadow);
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px var(--card-shadow);
  }
`;

const SkillIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 1rem;
  color: var(--primary);
`;

const SkillName = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--dark);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;

const SkillLevel = styled.div`
  width: 100%;
  height: 6px;
  background-color: var(--gray);
  border-radius: 3px;
  margin-top: 1rem;
  overflow: hidden;
`;

const SkillProgress = styled.div<{ $level: number }>`
  height: 100%;
  background-color: var(--primary);
  border-radius: 3px;
  width: ${({ $level }: { $level: number }) => `${$level}%`};
`;

interface Skill {
  id: number;
  name: string;
  level: number;
  icon: React.ReactNode;
}

const skills: Skill[] = [
  {
    id: 1,
    name: 'HTML5',
    level: 100,
    icon: <FaHtml5 />
  },
  {
    id: 2,
    name: 'CSS3',
    level: 100,
    icon: <FaCss3Alt />
  },
  {
    id: 3,
    name: 'JavaScript',
    level: 100,
    icon: <FaJs />
  },
  {
    id: 4,
    name: 'React',
    level: 100,
    icon: <FaReact />
  },
  {
    id: 5,
    name: 'Node.js',
    level: 100,
    icon: <FaNodeJs />
  },
  {
    id: 6,
    name: 'Python',
    level: 100,
    icon: <FaPython />
  },
  {
    id: 7,
    name: 'Git',
    level: 100,
    icon: <FaGitAlt />
  },
  {
    id: 8,
    name: 'WordPress',
    level: 100,
    icon: <FaWordpress />
  },
  {
    id: 9,
    name: 'Bootstrap',
    level: 100,
    icon: <FaBootstrap />
  },
  {
    id: 10,
    name: 'Jest',
    level: 100,
    icon: <SiJest />
  },
  {
    id: 11,
    name: 'TypeScript',
    level: 100,
    icon: <SiTypescript />
  },
  {
    id: 12,
    name: 'NPM',
    level: 100,
    icon: <FaNpm />
  }
];

const Skills: React.FC = () => {
  return (
    <SkillsContainer id="skills">
      <div className="container">
        <ScrollAnimation>
          <SectionTitle>Minhas Habilidades</SectionTitle>
        </ScrollAnimation>

        <ScrollAnimation delay={0.2}>
          <SkillsGrid>
            {skills.map((skill) => (
              <ScrollAnimation 
                key={skill.name} 
                delay={0.1 * skill.id}
                duration={0.4}
              >
                <SkillCard>
                  <SkillIcon>{skill.icon}</SkillIcon>
                  <SkillName>{skill.name}</SkillName>
                  <SkillLevel>
                    <SkillProgress $level={skill.level} />
                  </SkillLevel>
                </SkillCard>
              </ScrollAnimation>
            ))}
          </SkillsGrid>
        </ScrollAnimation>
      </div>
    </SkillsContainer>
  );
};

export default Skills; 