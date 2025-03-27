import { motion } from 'framer-motion';
import { FiMail } from 'react-icons/fi';

const Contact = () => {
  const email = 'jeanpaul.webdev@gmail.com';

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}?subject=Contato via Portfolio`;
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
            onClick={handleEmailClick}
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-light dark:bg-light dark:text-primary rounded-full font-medium hover:bg-primary/90 dark:hover:bg-light/90 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiMail className="text-xl" />
            Enviar Email
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