import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

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
      className="fixed bottom-20 sm:bottom-6 right-8 z-50 bg-primary text-light dark:bg-light dark:text-primary w-14 h-14 rounded-full shadow-lg hover:bg-primary/80 dark:hover:bg-light/90 transition-colors flex items-center justify-center border border-light"
      aria-label="Contato via WhatsApp"
    >
      <FaWhatsapp className="text-2xl" />
    </motion.button>
  );
};

export default WhatsAppButton; 