import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { ExternalLink, Github, ChevronRight, ChevronLeft, Code2 } from 'lucide-react';
import ecomproj from '../assets/ecomproj.png';
import netflixproj from '../assets/netflixproj.jpg';
import hotelproj from '../assets/hotelproj.png';
import cmsproj from '../assets/cmsproj.png';
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
          title: "E-commerce Web Application",
          description: "Full Stack Wall Art Selling Shop web application - It enables users to sell wall arts, and allows the admin to manage products, orders, and users via a dedicated admin panel.",
          tech: ["React", "Node.js", "MongoDB ", "Express"],
          image: ecomproj,
          github: 'https://github.com/Yasintha8/wall-art-selling-shop-frontend.git',
          live: 'https://vibecanvas-wallart-selling-shop.vercel.app'
        },
        {
          title: "Hotel Booking Web Application",
          description: "Full-Stack Hotel Booking Web Application. The application allows users to browse hotels and rooms, make secure bookings, and hotel owners to manage listings.payments are processed using Stripe.",
          tech: ["React", "Node.js", "MongoDB ", "Express"],
          image: hotelproj,
          github: 'https://github.com/Yasintha8/hotel-booking-web-app.git',
          live: 'https://staysure.vercel.app'
        },
        {
          title: "Cleaning Management System",
          description: "Full-Stack Cleaning Management System - It enables users to book cleaning services, manage their bookings, and allows the admin to manage services and users via a dedicated admin panel.",
          tech: ["React", "Node.js", "MongoDB", "Express"],
          image: cmsproj,
          github: 'https://github.com/Yasintha8/cleaning-service-management-system-frontend.git',
          live: 'https://smartcare-cleaningservice.vercel.app'
        },
        {
          title: "Netflix Clone",
          description: "A fully functional Netflix clone built, Firebase for authentication, and the TMDB API for fetching movie data. It includes features such as user authentication, movie browsing, and a responsive design.",
          tech: ["React", "Node.js", "Firebase", "TMDB API"],
          image: netflixproj,
          github: 'https://github.com/Yasintha8/netflix-clone-react',
          live: 'https://netflix-clone-projectdev.vercel.app'
        },
        {
          title: "Crypto Investment Site",
          description: "A showcase repository featuring various cryptocurrency investment plan packages. Built with React and Tailwind CSS, this project highlights different investment options.",
          tech: ["React"],
          image: cryptoproj,
          github: 'https://github.com/Yasintha8/crypto-investment-site',
          live: 'https://investmint-crypto.vercel.app'
        },
        {
          title: "Business Consultation Website",
          description: "Business Consultation Website - A modern, responsive frontend built with React and Tailwind CSS to showcase business consultation services. It features a clean and user-friendly design.",
          tech: ["React"],
          image: businessconsproj,
          github: 'https://github.com/Yasintha8/business-consultation-website',
          live: 'https://nextwave-solutions.vercel.app'
        },
        {
          title: "Tour and Travel Website",
          description: "Tour and Travel Website - A responsive and engaging website built using HTML, CSS, and JavaScript to showcase travel destinations and services. It features a clean and user-friendly design.",
          tech: ["HTML", "CSS", "JavaScript"],
          image: travelproj,
          github: 'https://github.com/Yasintha8/tour-and-travel-website',
          live: 'https://yasintha8.github.io/tour-and-travel-website'
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
          live: 'https://www.figma.com/proto/uGk4f3lDhvrftT1YYv0ZWE/Interior-Design-Web-Site?node-id=1-671&p=f&t=0Ut054lTamvvJeiu-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A671'
        },
        {
          title: "Railway Website - UI Redesign",
          description: "This is a redesign of a railway ticket booking website in sri lanka. - Group project.",
          tech: ["Figma", "Adobe XD", "Prototyping"],
          image: "/cover3.png",
          live: 'https://www.figma.com/proto/H37RhU9k53bXiE3GOS4ixj/HCI-Project?node-id=19-3&starting-point-node-id=19%3A3&t=soMIx04z3RXWTo2d-1'
        }
      ]
    },
    {
      title: "WordPress Dev",
      projects: [
        {
          title: "Clothing Shop Website",
          description: "User-friendly e-commerce website for clothing shop to ordering, developed using WordPress.",
          tech: ["WordPress", "PHP", "Custom Theme", "WooCommerce"],
          image: "/cover4.png",
          live: 'http://ceylonfashionhub.rf.gd'
        },
        {
          title: "Clothing Shop Website",
          description: "Fully Responsive User-friendly e-commerce website for clothing shop to ordering, developed using WordPress.",
          tech: ["WordPress", "PHP", "Custom Theme", "WooCommerce"],
          image: "/cover5.png",
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
           <TabList className="flex flex-wrap sm:flex-nowrap justify-center sm:justify-start p-1 sm:p-2 bg-white/5 backdrop-blur-sm rounded-full border border-accent/20 cursor-pointer">
            {projectCategories.map((category) => (
              <Tab
                key={category.title}
                className="w-[110px] sm:w-auto text-center px-2 sm:px-6 py-2 rounded-full text-xs sm:text-sm md:text-base text-gray-300 hover:text-white transition-colors whitespace-nowrap focus:outline-none"
                selectedClassName="!bg-accent !text-gray-900"
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
                      className="min-w-[300px] max-w-sm bg-gray-800 rounded-2xl border-2 border-accent/20 hover:border-accent/40 transition-colors overflow-hidden shadow-lg snap-start flex-shrink-0"
                    >
                      <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                      <div className="p-5">
                        <h3 className="text-white text-xl font-semibold mb-2">{project.title}</h3>
                        <p className="text-gray-400 text-sm mb-3">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tech.map((tech, idx) => (
                            <span
                              key={idx}
                              className="text-xs bg-accent/20 text-accent px-2 py-1 rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="flex space-x-4 pt-2 border-t border-white/10">
                            {category.title === "Web Development" && (
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
                            )}
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