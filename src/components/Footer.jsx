import { FaGithub, FaLinkedin, FaBehance, FaDribbble } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-secondary py-8 mt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-text mb-4 md:mb-0">
            © 2025 Yasintha Chamaikara. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="https://github.com/Yasintha8" target="_blank" rel="noopener noreferrer" className="text-text hover:text-accent">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/yasintha-chamikara/" target="_blank" rel="noopener noreferrer" className="text-text hover:text-accent">
              <FaLinkedin size={24} />
            </a>
            <a href="https://www.behance.net/yasinthachamikara" target="_blank" rel="noopener noreferrer" className="text-text hover:text-accent">
              <FaBehance size={24} />
            </a>
            <a href="https://dribbble.com/designs_yasintha" target="_blank" rel="noopener noreferrer" className="text-text hover:text-accent">
              <FaDribbble size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;