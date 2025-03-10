import { motion } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, 
  FaDatabase, FaFigma, FaSketch 
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiTypescript, SiMongodb, SiAdobexd 
} from 'react-icons/si';

function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
        { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
        { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
        { name: "React", icon: FaReact, color: "#61DAFB" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", icon: FaNodeJs, color: "#339933" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "SQL", icon: FaDatabase, color: "#4479A1" },
      ]
    },
    {
      title: "UI/UX Design",
      skills: [
        { name: "Figma", icon: FaFigma, color: "#F24E1E" },
        { name: "Adobe XD", icon: SiAdobexd, color: "#FF61F6" },
        { name: "Sketch", icon: FaSketch, color: "#F7B500" },
      ]
    }
  ];

  return (
    <section id="skills" className="min-h-screen container mx-auto px-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="section-heading text-5xl">Skills</h2>
        <p className="section-subheading">My technical toolkit and areas of expertise</p>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="card"
            >
              <h3 className="text-xl font-bold text-accent mb-6">{category.title}</h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="skill-item flex items-center gap-2">
                    <skill.icon className="text-2xl " style={{ color: skill.color }} />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Skills;
