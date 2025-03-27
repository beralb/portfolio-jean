import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Projetos Selecionados', href: '#trabalhos' },
    { name: 'Sobre Mim', href: '#sobre' },
    { name: 'Vamos Conversar', href: '#contato' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full z-[100] transition-all duration-300 ${
          isScrolled || isOpen ? 'bg-background/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <nav className="container flex items-center justify-between py-4">
          <a href="/" className="font-display text-2xl font-bold text-primary hover:opacity-70 transition-opacity">
            Jean Paul Bernhardt
          </a>

          {/* Desktop Menu */}
          <div className="hidden xl:flex items-center space-x-8">
            <ul className="flex items-center space-x-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-primary transition-all duration-300 hover:opacity-70"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <ThemeToggle />
          </div>

          {/* Mobile/Tablet Menu Button */}
          <div className="xl:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              className="text-2xl text-primary hover:opacity-70 transition-opacity"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile/Tablet Menu Overlay - Moved outside header */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-[90]"
          >
            <div className="fixed inset-x-0 top-[72px] bottom-0">
              <div className="container">
                <div className="flex flex-col py-8">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-lg font-bold dark:text-primary text-black hover:opacity-70 transition-opacity py-4"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar; 