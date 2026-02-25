import { motion, useScroll, useTransform } from 'framer-motion';
import { GraduationCap, Briefcase, Code, Palette, Brain, Coffee } from 'lucide-react';

function About() {
  const { scrollY } = useScroll();
  // eslint-disable-next-line no-unused-vars
  const opacity = useTransform(scrollY, [0, 200], [0, 1]);

  const skills = [
    { icon: Code, label: "Web Development", color: "text-blue-400" },
    { icon: Palette, label: "UI/UX Design", color: "text-purple-400" },
    { icon: Brain, label: "Problem Solving", color: "text-green-400" },
  ];

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

  return (
    <section id="about" className="min-h-screen py-20 relative overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800">
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
              About <span className="text-accent">Me</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="text-gray-300 max-w-3xl mx-auto text-lg"
          >
            I am a final-year Software Engineering undergraduate at NSBM Green University with hands-on experience in full-stack
            development and advanced WordPress solutions. I focus on building scalable, high-performance web applications and am
            currently seeking internship opportunities to further apply and expand my technical expertise.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          <motion.div
            variants={cardVariants}
            custom={0}
            className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-accent/20 hover:border-accent/40 transition-colors"
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center mb-4">
              <GraduationCap className="w-8 h-8 text-accent mr-3" />
              <h3 className="text-xl font-semibold text-white">Education Journey</h3>
            </div>
            <p className="text-gray-300">
              Final-year Software Engineering undergraduate at NSBM Green University, with hands-on industry experience gained through a
              6-month internship, building strong expertise in software architecture and scalable web technologies.
            </p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            custom={1}
            className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-accent/20 hover:border-accent/40 transition-colors"
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            <div className="flex items-center mb-4">
              <Briefcase className="w-8 h-8 text-accent mr-3" />
              <h3 className="text-xl font-semibold text-white">Career Aspirations</h3>
            </div>
            <p className="text-gray-300">
              To secure a full-time software engineering role where I can apply my expertise in full-stack and advanced WordPress
              development to build scalable, high-performance web applications while continuously growing as an engineer.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-semibold text-white mb-8">Core Competencies</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.label}
                variants={cardVariants}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-accent/20"
              >
                <motion.div
                  animate={{
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="flex justify-center mb-4"
                >
                  <skill.icon className={`w-10 h-10 ${skill.color}`} />
                </motion.div>
                <h4 className="text-white font-medium">{skill.label}</h4>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 bg-accent/10 px-6 py-3 rounded-full border border-accent/20"
          >
            <Coffee className="w-5 h-5 text-accent" />
            <span className="text-accent">Always eager to learn and grow</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;