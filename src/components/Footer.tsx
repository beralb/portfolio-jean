import { motion } from 'framer-motion';
import { FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <FiLinkedin className="text-xl" />,
      url: 'https://linkedin.com/in/beralb',
    },
    {
      name: 'Email',
      icon: <FiMail className="text-xl" />,
      url: 'mailto:jeanpaul.webdev@gmail.com',
    },
  ];

  return (
    <footer className="py-12 bg-background">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-8">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full text-primary hover:bg-primary/10 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={link.name}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-primary/60 text-sm">
            <p>© {currentYear} Jean Paul Bernhardt. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 