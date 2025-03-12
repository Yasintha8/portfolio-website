import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { ExternalLink, Github, ChevronRight, ChevronLeft, Code2 } from 'lucide-react';
import netflixproj from '../assets/netflixproj.jpg';
import crudproj from '../assets/crudproj.png';
import cryptoproj from '../assets/cryptoproj.png';
import businessconsproj from '../assets/businessconsproj.png';
import travelproj from '../assets/travelproj.png';

function Projects() {
  const { scrollY } = useScroll();
  // eslint-disable-next-line no-unused-vars
  const opacity = useTransform(scrollY, [0, 200], [0, 1]);
  const [tabIndex, setTabIndex] = useState(0);
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const projectCategories = [
    {
      title: "Web Development",
      projects: [
        {
          title: "Netflix Clone",
          description: "A fully functional Netflix clone built using React, Firebase for authentication, and the TMDB API for fetching movie data.",
          tech: ["React", "Node.js", "Firebase", "TMDB API"],
          image: netflixproj,
          github: 'https://github.com/Yasintha8/netflix-clone-react',
          live: 'https://netflix-clone-projectdev.vercel.app/'
        },
        {
          title: "Student Management System",
          description: "Full-Stack Student Management System - A CRUD application with a React and Tailwind CSS frontend and a Node.js, Express, and MongoDB backend for managing student data.",
          tech: ["React", "Node.js", "MongoDB", "Express"],
          image: crudproj,
          github: 'https://github.com/Yasintha8/student-management-frontend',
          live: 'https://student-management-system-project.vercel.app/'
        },
        {
          title: "Crypto Investment Site",
          description: "A showcase repository featuring various cryptocurrency investment plan packages. Built with React and Tailwind CSS, this project highlights different investment options.",
          tech: ["React"],
          image: cryptoproj,
          github: 'https://github.com/Yasintha8/crypto-investment-site',
          live: 'https://investmint-crypto.vercel.app/'
        },
        {
          title: "Business Consultation Website",
          description: "Business Consultation Website - A modern, responsive frontend built with React and Tailwind CSS to showcase business consultation services",
          tech: ["React"],
          image: businessconsproj,
          github: 'https://github.com/Yasintha8/business-consultation-website',
          live: 'https://nextwave-solutions.vercel.app'
        },
        {
          title: "Tour and Travel Website",
          description: "Tour and Travel Website - A responsive and engaging website built using HTML, CSS, and JavaScript to showcase travel destinations and services.",
          tech: ["HTML", "CSS", "JavaScript"],
          image: travelproj,
          github: 'https://github.com/Yasintha8/tour-and-travel-website',
          live: 'https://yasintha8.github.io/tour-and-travel-website/'
        }
      ]
    },
    {
      title: "UI/UX Design",
      projects: [
        {
          title: "Interior Design Website",
          description: "A modern and elegant website design for an interior design company.",
          tech: ["Figma", "Adobe XD", "Prototyping"],
          image: "/cover1.png",
          github: '#',
          live: '#'
        },
        {
          title: "Railway Website - UI Redesign",
          description: "This is a redesign of a railway ticket booking website in sri lanka.",
          tech: ["Figma", "Adobe XD", "Prototyping"],
          image: "/cover3.png",
          github: '#',
          live: '#'
        }
      ]
    },
    {
      title: "WordPress Development",
      projects: [
        {
          title: "Clothing Shop Website",
          description: "User-friendly e-commerce website for clothing shop to ordering, developed using WordPress.",
          tech: ["WordPress", "PHP", "Custom Theme", "WooCommerce"],
          image: "/cover1.png",
          github: '#',
          live: '#'
        },
        {
          title: "E-Commerce Website",
          description: "Fully Responsive User-friendly e-commerce website for clothing shop to ordering, developed using WordPress.",
          tech: ["WordPress", "PHP", "Custom Theme", "WooCommerce"],
          image: "/cover5.png",
          github: '#',
          live: '#'
        },
      ]
    }
  ];

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      const container = scrollContainerRef.current;
      const newScrollLeft = direction === 'left' 
        ? container.scrollLeft - scrollAmount 
        : container.scrollLeft + scrollAmount;
      
      container.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      setShowLeftArrow(container.scrollLeft > 0);
      setShowRightArrow(
        container.scrollLeft < container.scrollWidth - container.clientWidth
      );
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollPosition);
      checkScrollPosition();
      return () => container.removeEventListener('scroll', checkScrollPosition);
    }
  }, []);

  return (
    <section id="projects" className="min-h-screen py-20 relative overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 bg-accent/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              My <span className="text-accent">Projects</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="text-gray-300 max-w-2xl mx-auto text-lg"
          >
            A showcase of my creative work and technical projects
          </motion.p>
        </motion.div>

        <Tabs
          selectedIndex={tabIndex}
          onSelect={index => setTabIndex(index)}
          className="relative"
        >
          <motion.div 
            className="flex justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <TabList className="flex space-x-4 p-2 bg-white/5 backdrop-blur-sm rounded-full border border-accent/20">
              {projectCategories.map((category) => (
                <Tab
                  key={category.title}
                  className="cursor-pointer px-6 py-2 rounded-full text-gray-300 hover:text-white transition-colors whitespace-nowrap text-sm md:text-base focus:outline-none"
                  selectedClassName="!bg-accent !text-white"
                >
                  {category.title}
                </Tab>
              ))}
            </TabList>
          </motion.div>


          {projectCategories.map((category) => (
            <TabPanel key={category.title} className="relative">
              {showLeftArrow && (
                <motion.button
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  onClick={() => scroll('left')}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-accent/20 transition-all duration-300"
                >
                  <ChevronLeft className="text-white w-6 h-6" />
                </motion.button>
              )}
              
              {showRightArrow && (
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  onClick={() => scroll('right')}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-accent/20 transition-all duration-300"
                >
                  <ChevronRight className="text-white w-6 h-6" />
                </motion.button>
              )}

              <div
                ref={scrollContainerRef}
                className="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory hide-scrollbar"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {category.projects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="min-w-[300px] md:min-w-[350px] bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden snap-center group border border-accent/20 hover:border-accent/40 transition-all duration-300"
                  >
                    <motion.div 
                      className="h-48 overflow-hidden relative"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2 line-clamp-1">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 mb-4 text-sm line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-accent/10 rounded-full text-xs font-medium text-accent"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex space-x-4 pt-2 border-t border-white/10">
                        <motion.a
                          href={project.github}
                          className="flex items-center text-gray-300 hover:text-accent transition-colors text-sm group"
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github className="w-4 h-4 mr-1 group-hover:rotate-12 transition-transform" />
                          Code
                        </motion.a>
                        <motion.a
                          href={project.live}
                          className="flex items-center text-gray-300 hover:text-accent transition-colors text-sm group"
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink className="w-4 h-4 mr-1 group-hover:rotate-12 transition-transform" />
                          Live Demo
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabPanel>
          ))}
        </Tabs>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 bg-accent/10 px-6 py-3 rounded-full border border-accent/20"
          >
            <Code2 className="w-5 h-5 text-accent" />
            <span className="text-accent">More projects coming soon!</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;