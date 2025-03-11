import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import campuslogo from '../assets/campuslogo.png';

import cert1 from '../assets/cert1.png';
import cert2 from '../assets/cert2.png';
import cert3 from '../assets/cert3.png';
import cert4 from '../assets/cert4.png';
import cert5 from '../assets/cert5.png';
import cert6 from '../assets/cert6.png';

function Education() {
  const [selectedCert, setSelectedCert] = useState(null);
  const scrollContainerRef = useRef(null);
  const desktopScrollContainerRef = useRef(null);

  const certificates = [
    { title: "Introduction to Web Development", provider: "Coursera", year: "2025" , image: cert1, link: "https://drive.google.com/file/d/165-qpg2N3TmPRxmdOdAM08KRLr43-yqc/view?usp=sharing" },
    { title: "React Essentials Traing", provider: "Linkedln", year: "2025", image: cert2, link: "https://www.linkedin.com/learning/certificates/f82999aa63f531d376fb275efe7d82e2de93d116a6e95d44be21efd01ffebe61" },
    { title: "MERN Full-Stack Development", provider: "Simplilearn", year: "2025", image: cert3, link: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIzMzM3IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvNzg4OTU4MF84MjEzMDE2MTczOTI1MTQ3MzczNS5wbmciLCJ1c2VybmFtZSI6Illhc2ludGhhIENoYW1pa2FyYSJ9&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F6129%2FIntroduction-to-MERN-Stack%2Fcertificate%2Fdownload-skillup&%24web_only=true&_branch_match_id=1427705797152106546&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FVt8jOSncPTC0MCUyyrytKTUstKsrMS49PKsovL04tsvUBqkpN8cwDAMlGy1RBAAAA" },
    { title: "React.js Code Challenges", provider: "Linkedln", year: "2025", image: cert2, link: "https://www.linkedin.com/learning/certificates/78582b7068a2b0917a9007da36cf97941282b3fabc12ff743050a5a3059ce37d"},
    { title: "Introduction to Generative AI", provider: "Google", year: "2025", image: cert4, link: "https://www.cloudskillsboost.google/public_profiles/af922dc8-ca0b-4167-994a-bf117fd92241/badges/13500769?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share"},
    { title: "DP Figma Course", provider: "DP Education", year: "2025", image: cert5, link: "https://drive.google.com/file/d/1qv18J1X1p_2AbMssF1itj--a4a27Ie8o/view?usp=drive_link" },
    { title: "Web Design Using WordPress", provider: "SuhuruSara", year: "2024", image: cert6, link: "https://drive.google.com/file/d/1mZg5VRQds4JYHkw00MbtPNpn9Z0w468e/view?usp=drive_link" },
  ];

  const scroll = (direction, isMobile = true) => {
    const container = isMobile ? scrollContainerRef.current : desktopScrollContainerRef.current;
    const scrollAmount = isMobile ? 300 : 600;
    if (container) {
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="education" className="min-h-screen container mx-auto px-6">
      {/* Mobile View */}
      <div className="md:hidden">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-[500px] mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-2">Education & Certificates</h2>
          <p className="text-center text-sm text-gray-600 mb-8">
            My academic journey and achievements
          </p>

          {/* Degree Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-secondary p-4 rounded-lg mb-8 shadow-lg"
          >
            <h3 className="text-xl font-bold mb-2 text-accent">
              🎓 BSc (Hons) in Software Engineering
            </h3>
            <div className="flex items-center mb-2">
              <img src={campuslogo} alt="NSBM Logo" className="w-8 h-8 mr-2" />
              <span className="font-medium text-sm">NSBM Green University</span>
            </div>
            <p className="text-sm text-gray-500 mb-3">2020 - Present</p>
            <ul className="text-sm space-y-1">
              <li>⚡ Specialized in Full-stack Development</li>
              <li>🎨 Focus on UI/UX Design principles</li>
              <li>📚 Relevant coursework in Software Engineering</li>
            </ul>
          </motion.div>

          {/* Certificates Section */}
          <div className="relative">
            <h3 className="text-xl font-bold mb-4">📜 Certificates</h3>
            
            {/* Scroll Buttons */}
            <button 
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 text-primary p-2 rounded-full shadow-md"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 text-primary p-2 rounded-full shadow-md"
            >
              <ChevronRight size={20} />
            </button>

            {/* Certificates Container */}
            <div 
              ref={scrollContainerRef}
              className="flex overflow-x-auto scrollbar-hide gap-4 pb-4 px-2 -mx-2 snap-x snap-mandatory"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {certificates.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex-none w-[250px] snap-center bg-secondary p-4 rounded-lg shadow-md"
                >
                  <img src={cert.image} alt={cert.title} className="w-12 h-12 mb-2 mx-auto" />
                  <h4 className="text-base font-semibold text-center mb-1">{cert.title}</h4>
                  <p className="text-xs text-gray-500 text-center mb-3">{cert.provider} - {cert.year}</p>
                  <button 
                    onClick={() => window.open(cert.link, '_blank')}
                    className="w-full bg-accent text-primary text-sm py-2 rounded-lg hover:bg-accentDark transition"
                  >
                    View Certificate
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Desktop View */}
      <div className="hidden md:block">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-heading text-4xl md:text-5xl text-center">Education & Certificates</h2>
          <p className="section-subheading text-center text-sm md:text-base">
            My academic journey and achievements
          </p>

          <div className="max-w-6xl mx-auto">
            {/* Degree Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-secondary p-6 rounded-lg mb-6 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-accent mb-2">
                🎓 BSc (Hons) in Software Engineering
              </h3>
              <p className="text-text mb-2 flex items-center">
                <img src={campuslogo} alt="NSBM Logo" className="w-10 h-10 mr-2" />
                <span className="font-medium">NSBM Green University</span>
              </p>
              <p className="text-text mb-4 font-semibold text-gray-400">2022 - Present</p>
              <ul className="list-disc list-inside text-text space-y-2">
                <li>⚡ Specialized in Full-stack Development</li>
                <li>🎨 Focus on UI/UX Design principles</li>
                <li>📚 Relevant coursework in Software Engineering practices</li>
              </ul>
            </motion.div>

            {/* Certificates Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-secondary p-6 rounded-lg shadow-lg relative"
            >
              <h3 className="text-2xl font-bold text-accent mb-4">📜 Certificates</h3>
              
              {/* Desktop Scroll Buttons */}
              <button 
                onClick={() => scroll('left', false)}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 text-primary p-3 rounded-full shadow-md hover:bg-accentDark transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={() => scroll('right', false)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/80  text-primary p-3 rounded-full shadow-md hover:bg-accentDark transition-colors"
              >
                <ChevronRight size={24} />
              </button>

              <div 
                ref={desktopScrollContainerRef}
                className="overflow-x-auto scrollbar-hide"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                <div className="flex gap-4 px-8">
                  {certificates.map((cert, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.2 }}
                      viewport={{ once: true }}
                      className="flex-none w-[300px] flex flex-col items-center bg-primary p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow"
                    >
                      <img src={cert.image} alt={cert.title} className="w-12 h-12 mb-2" />
                      <h4 className="text-lg font-semibold text-center">{cert.title}</h4>
                      <p className="text-sm text-gray-400">{cert.provider} - {cert.year}</p>
                      <button 
                        onClick={() => window.open(cert.link, '_blank')} 
                        className="mt-3 bg-accent text-primary px-4 py-2 rounded-lg hover:bg-accentDark transition"
                      >
                        View Certificate
                      </button>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Modal for Viewing Certificates */}
      {selectedCert && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center p-4 z-50"
          onClick={() => setSelectedCert(null)}
        >
          <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-sm relative">
            <button 
              onClick={() => setSelectedCert(null)}
              className="absolute -top-2 -right-2 bg-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm"
            >
              ✕
            </button>
            <img src={selectedCert.image} alt={selectedCert.title} className="w-full rounded-md" />
            <h4 className="text-lg font-semibold text-center mt-3">{selectedCert.title}</h4>
            <p className="text-center text-gray-500 text-sm">{selectedCert.provider} - {selectedCert.year}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Education;