import { motion, useScroll, useTransform } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { GithubIcon, LinkedinIcon} from 'lucide-react';
import profileimg from '../assets/profileimg.png';

function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);
  
  const floatingElements = {
    initial: { y: 0 },
    animate: {
      y: [-20, 20, -20],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const socialLinks = [
    { Icon: GithubIcon, href: "https://github.com/Yasintha8", delay: 0.2 },
    { Icon: LinkedinIcon, href: "https://www.linkedin.com/in/yasintha-chamikara/", delay: 0.4 },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Background Decorative Elements */}
      <motion.div
        className="absolute inset-0 opacity-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-2 w-2 bg-accent rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.div>

      <div className="container mx-auto px-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 bg-accent/10 rounded-full"
            >
              <span className="text-accent">👋 Welcome to my portfolio</span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Hi, I am{" "}
              <motion.span
                className="text-accent inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Yasintha Chamikara
              </motion.span>
            </motion.h1>

            <motion.div
              className="text-2xl md:text-3xl font-semibold text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <TypeAnimation
                sequence={[
                  'Full Stack Web Developer',
                  2000,
                  'MERN Stack Developer',
                  2000,
                  'UI/UX Designer',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-accent"
              />
            </motion.div>

            <motion.p
              className="text-gray-300 text-lg max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              I’m a dedicated Full Stack Developer with a strong foundation in the MERN stack, focused on delivering scalable, user-centric web applications. 
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.a
                href="https://drive.google.com/file/d/1wNkWfSQkp941EVR0fiXj1FMf0F_oFLcl/view?usp=sharing"
                download
                className="btn-primary bg-accent hover:bg-accent/90 hover: text-gray-900 px-6 py-3 rounded-full font-semibold text-sm sm:text-base transition-all text-center w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download CV
              </motion.a>
                <button>
                  <a href="#contact">
                    <motion.button
                      className="btn-primary bg-transparent border-2 border-accent text-accent hover:bg-accent/90 hover:text-white px-6 py-3 rounded-full font-semibold text-sm sm:text-base transition-all text-center w-full sm:w-auto"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Contact Me
                    </motion.button>
                  </a>
                </button>
              
            </motion.div>
            <motion.div
              className="flex gap-6 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {socialLinks.map(({ Icon, href, delay }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  className="text-gray-400 hover:text-accent transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: delay }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            style={{ y }}
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="w-72 h-72 md:w-[450px] md:h-[450px] rounded-full mx-auto relative"
              variants={floatingElements}
              initial="initial"
              animate="animate"
            >
              {/* Decorative circles */}
              <motion.div
                className="absolute inset-0 border-2 border-accent rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-4 border-2 border-accent/50 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
              
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img
                  src={profileimg}
                  alt="Profile"
                  className="w-64 h-64 md:w-96 md:h-96 rounded-full object-cover shadow-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  whileHover={{ scale: 1.05 }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;