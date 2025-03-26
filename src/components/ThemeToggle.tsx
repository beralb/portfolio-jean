import React from 'react';
import styled from 'styled-components';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

const ToggleContainer = styled.button`
  background: var(--gray-light);
  color: var(--text);
  border-radius: 30px;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  width: 2.5rem;
  height: 2.5rem;
  transition: background-color 0.3s ease;
  
  &:hover {
    background: var(--gray);
  }

  @media (max-width: 768px) {
    width: 2.2rem;
    height: 2.2rem;
    padding: 0.4rem;
  }
`;

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <ToggleContainer onClick={toggleTheme} aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}>
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: theme === 'light' ? 0 : 180 }}
        transition={{ duration: 0.5 }}
      >
        {theme === 'light' ? <FaMoon size={18} /> : <FaSun size={18} />}
      </motion.div>
    </ToggleContainer>
  );
};

export default ThemeToggle; 