import { motion } from 'framer-motion';
import { FiArrowDown } from 'react-icons/fi';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="heading-xl mb-6">
            CRIANDO
            <br />
            EXPERIÊNCIAS
            <br />
            <span className="text-gradient">INCRÍVEIS</span>
          </h1>
          
          <p className="text-lg md:text-xl text-primary/80 mb-8 max-w-2xl mx-auto">
            Desenvolvedor Full Stack apaixonado por criar soluções digitais inovadoras
            e experiências web memoráveis.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col md:flex-row items-center justify-center gap-4"
          >
            <a
              href="#trabalhos"
              className="px-8 py-4 bg-primary text-light dark:bg-light dark:text-primary rounded-full font-medium hover:bg-primary/90 dark:hover:bg-light/90 transition-colors"
            >
              Ver Projetos
            </a>
            <a
              href="#contato"
              className="px-8 py-4 border-2 border-primary dark:border-light rounded-full font-medium hover:bg-primary hover:text-light dark:hover:bg-light dark:hover:text-primary transition-colors"
            >
              Entrar em Contato
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse",
          duration: 1
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <FiArrowDown className="text-3xl animate-bounce" />
      </motion.div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default Hero; 