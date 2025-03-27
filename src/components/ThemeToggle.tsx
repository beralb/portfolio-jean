import { motion } from 'framer-motion';
import { FiMoon, FiSun } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="p-3 rounded-full bg-primary dark:bg-light text-light dark:text-primary hover:bg-primary/90 dark:hover:bg-light/90 transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      {isDark ? <FiSun className="text-xl" /> : <FiMoon className="text-xl" />}
    </motion.button>
  );
};

export default ThemeToggle; 