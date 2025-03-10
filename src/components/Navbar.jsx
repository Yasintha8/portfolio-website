import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaBehance, FaDribbble, FaBars, FaTimes } from 'react-icons/fa';
import PropTypes from 'prop-types';

function Navbar({ activeSection, setActiveSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (section) => {
    setActiveSection(section.toLowerCase());
    document.getElementById(section.toLowerCase())?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    setIsMenuOpen(false); // Close menu after clicking
  };

  Navbar.propTypes = {
    activeSection: PropTypes.string.isRequired,
    setActiveSection: PropTypes.func.isRequired,
  };
  
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-secondary shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-10 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold text-accent"
          >
            Yasintha Chamikara
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {['Home', 'About', 'Skills', 'Projects', 'Education', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className={`hover:text-accent transition-colors ${
                  activeSection === item.toLowerCase() ? 'text-accent' : 'text-textLight'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Social Icons (Always Visible) */}
          <div className="hidden md:flex space-x-4">
            <a href="https://github.com/Yasintha8" target="_blank" rel="noopener noreferrer" className="text-textLight hover:text-accent">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/yasintha-chamikara/" target="_blank" rel="noopener noreferrer" className="text-textLight hover:text-accent">
              <FaLinkedin size={24} />
            </a>
            <a href="https://www.behance.net/yasinthachamikara" target="_blank" rel="noopener noreferrer" className="text-textLight hover:text-accent">
              <FaBehance size={24} />
            </a>
            <a href="https://dribbble.com/designs_yasintha" target="_blank" rel="noopener noreferrer" className="text-textLight hover:text-accent">
              <FaDribbble size={24} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-textLight focus:outline-none"
          >
            {isMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-secondary shadow-lg"
          >
            <div className="flex flex-col items-center py-4 space-y-4">
              {['Home', 'About', 'Skills', 'Projects', 'Education', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  className={`hover:text-accent transition-colors text-lg ${
                    activeSection === item.toLowerCase() ? 'text-accent' : 'text-textLight'
                  }`}
                >
                  {item}
                </button>
              ))}

              {/* Social Icons in Mobile Menu */}
              <div className="flex space-x-4 mt-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-textLight hover:text-accent">
                  <FaGithub size={24} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-textLight hover:text-accent">
                  <FaLinkedin size={24} />
                </a>
                <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="text-textLight hover:text-accent">
                  <FaBehance size={24} />
                </a>
                <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="text-textLight hover:text-accent">
                  <FaDribbble size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}

export default Navbar;
