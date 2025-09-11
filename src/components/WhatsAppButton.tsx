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
      className="fixed bottom-20 sm:bottom-6 right-8 z-50 inline-flex items-center gap-3 px-8 py-4 bg-green-500 text-white rounded-full font-medium hover:bg-green-600 transition-colors shadow-lg"
      aria-label="Contato via WhatsApp"
    >
      <FaWhatsapp className="text-xl" />
      Fale Comigo
    </motion.button>
  );
};

export default WhatsAppButton; 