import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative">
      <div className="section-container flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <div className="w-80 h-80 rounded-full border-4 border-primary-300 dark:border-primary-600 overflow-hidden">
            <img
              src="https://res.cloudinary.com/dufruso0d/image/upload/v1748860702/selfImg_sxrmuf.jpg"
              alt="Priyanshu Samal"
              className="w-full h-full object-cover translate-x-[5px] scale-110"
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-800 dark:text-primary-200 mb-4"
        >
          Hey there, I'm <span className="text-primary-600 dark:text-primary-400">Priyanshu Samal</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl lg:text-3xl font-medium text-primary-600 dark:text-primary-400 mb-8 h-16"
        >
          <TypeAnimation
            sequence={[
              'Full Stack Developer',
              1000,
              'Cloud Architecture Enthusiast',
              1000,
              'Flutter & FastAPI Developer',
              1000,
              'System Design Passionate',
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 mt-6"
        >
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={700}
          >
            <button className="btn-primary">View My Work</button>
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={700}
          >
            <button className="btn-outline">Get In Touch</button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="absolute bottom-8"
        >
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={700}
            className="cursor-pointer"
          >
            <ChevronDown size={36} className="text-primary-600 dark:text-primary-400 animate-bounce-slow" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;