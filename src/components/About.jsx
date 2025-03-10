import { motion } from 'framer-motion';

function About() {
  return (
    <section id="about" className=" min-h-screen  container mx-auto px-10 ">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="section-heading text-5xl">About Me</h2>
        <p className="section-subheading">
          I am a passionate undergraduate software engineer at NSBM Green University,
          specializing in full-stack development and UI/UX design. I am currently seeking
          internship opportunities to apply and expand my skills in a professional environment.
        </p>
        
        <div className="mt-12 flex flex-col items-center gap-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-secondary p-6 rounded-lg w-8/12"
          >
            <h3 className="text-xl font-bold text-accent mb-4">Education</h3>
            <p className="text-text">
              Currently pursuing my degree in Software Engineering at NSBM Green University,
              where I am developing a strong foundation in both technical and design aspects
              of software development.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-secondary p-6 rounded-lg w-8/12"
          >
            <h3 className="text-xl font-bold text-accent mb-4">Career Goals</h3>
            <p className="text-text">
              Seeking an internship opportunity where I can contribute my full-stack development
              and UI/UX design skills while learning from experienced professionals in the field.
            </p>
          </motion.div>
        </div>

      </motion.div>
    </section>
  );
}

export default About;