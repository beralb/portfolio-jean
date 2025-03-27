import { motion } from 'framer-motion';
import { FiMessageSquare } from 'react-icons/fi';

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open('https://wa.me/5585986050157?text=Olá! Vim pelo seu portfólio.', '_blank');
  };

  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      className="fixed bottom-8 right-8 z-50 bg-primary text-light dark:bg-light dark:text-primary px-6 py-3 rounded-full shadow-lg hover:bg-primary/80 dark:hover:bg-light/90 transition-colors flex items-center gap-2 border border-light"
      aria-label="Contato via WhatsApp"
    >
      <FiMessageSquare className="text-2xl" />
      <span className="font-medium">WhatsApp</span>
    </motion.button>
  );
};

export default WhatsAppButton; 