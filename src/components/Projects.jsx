import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {ExternalLink, Github, ChevronRight, ChevronLeft} from 'lucide-react';
import netflixproj from '../assets/netflixproj.jpg';
import crudproj from '../assets/crudproj.png';
import cryptoproj from '../assets/cryptoproj.png';
import businessconsproj from '../assets/businessconsproj.png';
import travelproj from '../assets/travelproj.png';

function Projects() {
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
          title: "crypto-investment-site ",
          description: "A showcase repository featuring various cryptocurrency investment plan packages. Built with React and Tailwind CSS, this project highlights different investment options, detailing their features, and potential returns. ",
          tech: ["React"],
          image: cryptoproj,
          github: 'https://github.com/Yasintha8/crypto-investment-site',
          live: 'https://investmint-crypto.vercel.app/'
        },
        {
          title: "business-consultation-website ",
          description: "Business Consultation Website - A modern, responsive frontend built with React and Tailwind CSS to showcase business consultation services",
          tech: ["React"],
          image: businessconsproj,
          github: 'https://github.com/Yasintha8/business-consultation-website',
          live: 'https://nextwave-solutions.vercel.app'
        },
        {
          title: "tour-and-travel-website",
          description: "Tour and Travel Website - A responsive and engaging website built using HTML, CSS, and JavaScript to showcase travel destinations and services.",
          tech: ["HTML", "CSS", "JavaScript"],
          image: travelproj,
          github: 'https://github.com/Yasintha8/tour-and-travel-website',
          live: 'https://yasintha8.github.io/tour-and-travel-website/'
        }
        // Add more web development projects
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
        },
        // Add more UI/UX projects
      ]
    },
    {
      title: "WordPress Development",
      projects: [
        {
          title: "Clothing Shop Website Development",
          description: " User-friendly e-commerce website for clothing shop to ordering,developed using WordPress.",
          tech: ["WordPress", "PHP", "Custom Theme", "WooCommerce"],
          image: "/cover4.png"
        },
        {
          title: "E-Commerce Website Development",
          description: " UFully Responsive User-friendly e-commerce website for clothing shop to ordering,developed using WordPress.",
          tech: ["WordPress", "PHP", "Custom Theme", "WooCommerce"],
          image: "/cover5.png"
        },
        // Add more WordPress projects
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
    <section id="projects" className="min-h-screen container mx-auto px-4 py-12 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="section-heading text-4xl md:text-5xl text-center">Projects</h2>
        <p className="section-subheading text-center text-sm md:text-base">
          Showcasing my best work across different domains
        </p>

        <Tabs
          selectedIndex={tabIndex}
          onSelect={index => setTabIndex(index)}
          className="relative"
        >
          <div className="flex md:justify-center">
          <TabList className="flex space-x-2 md:space-x-4 mb-6 md:mb-8 overflow-x-auto pb-2 px-2 md:px-0 hide-scrollbar">
            {projectCategories.map((category) => (
              <Tab
                key={category.title}
                className="cursor-pointer  px-4 md:px-6 py-2 rounded-lg bg-secondary text-text hover:text-accent transition-colors whitespace-nowrap text-sm md:text-base"
                selectedClassName="!bg-accent !text-primary"
              >
                {category.title}
              </Tab>
            ))}
          </TabList>
          </div>
          {projectCategories.map((category) => (
            <TabPanel key={category.title} className="relative">
              {showLeftArrow && (
                <button
                  onClick={() => scroll('left')}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90  p-2 md:p-3 rounded-full shadow-lg hover:bg-accentDark backdrop-blur-sm transition-all duration-300 -translate-x-1 md:-translate-x-2"
                >
                  <ChevronLeft className=" text-primary w-5 h-5 md:w-6 md:h-6" />
                </button>
              )}
              
              {showRightArrow && (
                <button
                  onClick={() => scroll('right')}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 p-2 md:p-3 rounded-full shadow-lg  hover:bg-accentDark backdrop-blur-sm transition-all duration-300 translate-x-1 md:translate-x-2"
                >
                  <ChevronRight className=" text-primary w-5 h-5 md:w-6 md:h-6" />
                </button>
              )}

              <div
                ref={scrollContainerRef}
                className="flex overflow-x-auto gap-4 md:gap-6 pb-4 snap-x snap-mandatory hide-scrollbar px-2 md:px-4 -mx-2 md:-mx-4"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {category.projects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="min-w-[280px] md:min-w-[300px] max-w-[280px] md:max-w-[300px] bg-secondary rounded-xl shadow-lg overflow-hidden snap-center transform hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="h-40 md:h-48 overflow-hidden relative group">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="p-4 md:p-6">
                      <h3 className="text-lg md:text-xl font-bold text-accent mb-2 line-clamp-1">
                        {project.title}
                      </h3>
                      <p className="text-text mb-3 md:mb-4 text-sm line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-3 md:mb-4">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 md:px-3 py-1 bg-primary rounded-full text-xs font-medium text-accent"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex space-x-4 pt-2 border-t border-gray-100">
                        <a
                          href={project.github}
                          className="flex items-center text-text hover:text-accent transition-colors text-sm"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4 mr-1" />
                          Code
                        </a>
                        <a
                          href={project.live}
                          className="flex items-center text-text hover:text-accent transition-colors text-sm"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-1" />
                          Live Demo
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabPanel>
          ))}
        </Tabs>
      </motion.div>
    </section>
  );
}

export default Projects;