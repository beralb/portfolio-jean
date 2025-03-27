import { motion } from 'framer-motion';

// Importando as imagens
import portfolio01 from '../projects/portfolio-01.png';
import portfolio02 from '../projects/portfolio-02.png';
import portfolio03 from '../projects/portfolio-03.png';
import portfolio04 from '../projects/portfolio-04.png';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Dra. Brena Marques Odontologia',
    description: 'Site profissional para consultório odontológico, desenvolvido em WordPress com design personalizado e sistema de agendamento.',
    tags: ['WordPress', 'CSS', 'Responsive Design', 'SEO'],
    image: portfolio01,
    link: 'https://brenamarquesodontologia.com.br/'
  },
  {
    id: 2,
    title: 'Dr. José Francisco do Rêgo',
    description: 'Site profissional para médico, com área de blog e sistema de agendamentos.',
    tags: ['WordPress', 'PHP', 'JavaScript', 'Custom Theme'],
    image: portfolio02,
    link: 'https://www.drjosefcorego.com.br/'
  },
  {
    id: 3,
    title: 'Dr. Victor Hugo Vascular',
    description: 'Website para cirurgião vascular com informações sobre procedimentos e agendamento online.',
    tags: ['WordPress', 'UI/UX', 'Responsive Design', 'SEO'],
    image: portfolio03,
    link: 'https://victorhugovascular.com.br/'
  },
  {
    id: 4,
    title: 'Ortopedista São Paulo',
    description: 'Portal especializado para clínica de ortopedia com informações sobre serviços, procedimentos e atendimento.',
    tags: ['WordPress', 'PHP', 'SEO', 'Responsive Design'],
    image: portfolio04,
    link: 'https://ortopedistasaopaulo.com.br/'
  }
];

const Projects = () => {
  return (
    <section id="trabalhos" className="py-20 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading-lg text-center mb-12">
            Projetos <span className="text-gradient">Selecionados</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: project.id * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-secondary"
              >
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                  {/* Project Image */}
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Project Info */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <h3 className="text-2xl font-display font-bold text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-white/80 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </a>
              </motion.article>
            ))}
          </div>

          <div className="text-center mt-12">
            <motion.a
              href="https://github.com/jeanwilker"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-lg font-medium text-primary hover:opacity-70 transition-opacity"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver mais projetos
              <span className="text-2xl">🔥</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 