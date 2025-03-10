import { useState } from 'react';
import { motion } from 'framer-motion';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {ExternalLink, Github } from 'lucide-react';
import cover from '../assets/cover.png';
import cover3 from '../assets/cover3.png';
import cover4 from '../assets/cover4.png';
import cover5 from  '../assets/cover5.png';
import netflixproj from '../assets/netflixproj.jpg';
import crudproj from '../assets/crudproj.png';
import cryptoproj from '../assets/cryptoproj.png';
import businessconsproj from '../assets/businessconsproj.png';
import travelproj from '../assets/travelproj.png';

function Projects() {
  const [tabIndex, setTabIndex] = useState(0);

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
          image: cover,
          github: '#',
          live: '#'
        },
        {
          title: "Railway Website - UI Redesign",
          description: "This is a redesign of a railway ticket booking website in sri lanka.",
          tech: ["Figma", "Adobe XD", "Prototyping"],
          image: cover3,
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
          image: cover4
        },
        {
          title: "E-Commerce Website Development",
          description: " UFully Responsive User-friendly e-commerce website for clothing shop to ordering,developed using WordPress.",
          tech: ["WordPress", "PHP", "Custom Theme", "WooCommerce"],
          image: cover5
        },
        // Add more WordPress projects
      ]
    }
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center container mx-auto px-10 ">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="section-heading text-5xl">Projects</h2>
        <p className="section-subheading">
          Showcasing my best work across different domains
        </p>

        <Tabs
          selectedIndex={tabIndex}
          onSelect={index => setTabIndex(index)}
          className="mt-12"
        >
          <TabList className="flex justify-center space-x-4 mb-8">
            {projectCategories.map((category) => (
              <Tab
                key={category.title}
                className="cursor-pointer px-6 py-2 rounded-lg bg-secondary text-text hover:text-accent transition-colors"
                selectedClassName="!bg-accent !text-primary"
              >
                {category.title}
              </Tab>
            ))}
          </TabList>

          {projectCategories.map((category) => (
            <TabPanel key={category.title}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                {category.projects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="bg-secondary rounded-lg overflow-hidden"
                  >
                    <div className="h-48 bg-gray-700">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-accent mb-2">
                        {project.title}
                      </h3>
                      <p className="text-text mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-primary rounded-full text-sm text-accent"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex space-x-4 mt-4">
                      <a
                  href={project.github}
                  className="flex items-center text-primary-600 hover:text- hover:text-accentDark transition-colors duration-300"
                      >
                  <Github size={20} className="mr-1" />
                  Code
                      </a>
                      <a
                  href={project.live}
                  className="flex items-center text-primary-600 hover:text-accentDark transition-colors duration-300"
                      >
                  <ExternalLink size={20} className="mr-1" />
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