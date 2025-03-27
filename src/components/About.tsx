import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="heading-lg text-center mb-12">
            Sobre <span className="text-gradient">Mim</span>
          </h2>

          {/* Bio */}
          <div className="prose prose-lg mx-auto text-center">
            <p className="text-xl leading-relaxed text-primary/80">
              Desenvolvedor Full Stack com mais de 5 anos de experiência,
              especializado em criar experiências digitais excepcionais.
              Apaixonado por tecnologia e inovação, busco constantemente
              aprender e aplicar novas tecnologias em projetos desafiadores.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default About; 