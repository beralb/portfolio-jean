import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const whatsappNumber = '5585986050157';
  const message = 'Olá! Vim pelo seu portfólio e gostaria de conversar sobre um projeto.';

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="contato" className="py-20 bg-background relative overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="heading-lg text-center mb-12">
            Vamos <span className="text-gradient">Conversar</span>
          </h2>

          <div className="text-center mb-12">
            <p className="text-xl text-primary/80">
              Tem um projeto em mente? Vamos trabalhar juntos para criar algo incrível.
            </p>
          </div>

          <motion.button
            onClick={handleWhatsAppClick}
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-light dark:bg-light dark:text-primary rounded-full font-medium hover:bg-primary/90 dark:hover:bg-light/90 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaWhatsapp className="text-xl" />
            Conversar no WhatsApp
          </motion.button>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default Contact; 