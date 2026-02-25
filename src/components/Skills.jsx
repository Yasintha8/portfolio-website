import { motion, useScroll, useTransform, } from 'framer-motion';
import { SiNodedotjs, SiExpress, SiMongodb, SiGraphql, SiDocker, SiFirebase, SiFigma, SiHtml5, SiJavascript, SiReact, SiTypescript, SiPostgresql, SiGithub, SiVercel, SiGithubactions }
  from 'react-icons/si';
import {
  Code2,
  Palette,
  Database,
  Layout,
  Server,
  PenTool,
  Monitor,
  FileText,
  Home,
  Rocket,
} from 'lucide-react';
import { FiLink2 } from 'react-icons/fi';

function Skills() {
  const { scrollY } = useScroll();
  // eslint-disable-next-line no-unused-vars
  const opacity = useTransform(scrollY, [0, 200], [0, 1]);

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Layout,
      skills: [
        { name: "HTML/CSS", icon: SiHtml5, color: "text-orange-400" },
        { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
        { name: "React", icon: SiReact, color: "text-blue-400" },
        { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
        { name: "Responsive & Performance Optimization", icon: Code2, color: "text-green-400" }
      ]
    },
    {
      title: "Backend Development",
      icon: Server,
      skills: [
        { name: "Node.js", icon: SiNodedotjs, color: "text-green-400" },
        { name: "Express.js", icon: SiExpress, color: "text-gray-400" },
        { name: "RESTful APIs", icon: FiLink2, color: "text-purple-400" },
      ]
    },
    {
      title: "Database Management",
      icon: Database,
      skills: [
        { name: "MySQL", icon: SiGraphql, color: "text-blue-500" },
        { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "text-indigo-500" },
        { name: "Firebase", icon: SiFirebase, color: "text-orange-500" }
      ]
    },
    {
      title: "DevOps & Deployment",
      icon: Rocket,
      skills: [
        { name: "Git & GitHub", icon: SiGithub, color: "text-gray-500" },
        { name: "Netlify / Vercel", icon: SiVercel, color: "text-blue-500" },
        { name: "Docker", icon: SiDocker, color: "text-cyan-500" },
        { name: "CI/CD", icon: SiGithubactions, color: "text-indigo-400" }
      ]
    },
    {
      title: "UI/UX Design",
      icon: Palette,
      skills: [
        { name: "Figma", icon: SiFigma, color: "text-pink-400" },
        { name: "Wireframing", icon: PenTool, color: "text-blue-400" },
        { name: "Prototyping", icon: Monitor, color: "text-indigo-400" }
      ]
    },
    {
      title: "WordPress Development",
      icon: Home,
      skills: [
        { name: "Theme Development", icon: FileText, color: "text-indigo-500" },
        { name: "Custom Post Types", icon: Database, color: "text-green-400" },
        { name: "WooCommerce Integration", icon: Server, color: "text-orange-500" }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const skillItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section id="skills" className="min-h-screen py-20 relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
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
              My <span className="text-accent">Skills</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="text-gray-300 max-w-2xl mx-auto text-lg"
          >
            A comprehensive overview of my technical expertise and professional capabilities
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              custom={index}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className={`${category.title === "WordPress Development" ? "justify-center" : ""
                } bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-accent/20 hover:border-accent/40 transition-colors`}
            >
              <div className="flex items-center mb-6">
                <category.icon className="w-8 h-8 text-accent mr-3" />
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={skillItemVariants}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-3 group"
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors"
                    >
                      <skill.icon className={`w-5 h-5 ${skill.color}`} />
                    </motion.div>
                    <span className="text-gray-300 group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

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
            <span className="text-accent">Continuously learning new technologies</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
