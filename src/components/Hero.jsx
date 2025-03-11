import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import profileimg from '../assets/profileimg.png';

function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center relative container mx-auto px-50 pt-20">

      <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-left"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            Hi, I am <span className="text-accent">Yasintha Chamikara</span>
          </h1>
          <div className="text-2xl md:text-3xl mb-6 font-semibold text-white">
            <TypeAnimation
              sequence={[
                'Full Stack Web Developer',
                2000,
                'UI/UX Designer',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
          <p className="text-white text-lg mb-8">
            Passionate about creating beautiful and functional digital experiences
          </p>
          <button className="btn-primary hover:bg-accentDark">
            Download CV
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <motion.div
            className="w-64 h-64 md:w-96 md:h-96 rounded-3xl bg-secondary mx-auto overflow-hidden shadow-custom"
            whileHover={{ scale: 1.05 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          >
            <motion.img
              src={profileimg}
              alt="Profile"
              className="w-full h-full object-cover"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
