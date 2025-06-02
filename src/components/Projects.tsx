import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projectsData';

const Projects = () => {
  const [filter, setFilter] = useState<string | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Get unique categories for filtering
  const categories = Array.from(
    new Set(projects.flatMap((project) => project.categories))
  );

  const filteredProjects = filter
    ? projects.filter((project) => project.categories.includes(filter))
    : projects;

  return (
    <section id="projects" className="bg-white dark:bg-gray-800 py-16 md:py-24">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="section-container"
      >
        <motion.h2 variants={itemVariants} className="section-title text-center">
          Featured Projects
        </motion.h2>
        
        <motion.p variants={itemVariants} className="section-subtitle text-center mx-auto">
          A showcase of my recent work and technical capabilities
        </motion.p>
        
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setFilter(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === null
                ? 'bg-primary-600 text-white'
                : 'bg-primary-100 dark:bg-gray-700 text-primary-600 dark:text-primary-300 hover:bg-primary-200 dark:hover:bg-gray-600'
            }`}
          >
            All
          </button>
          
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === category
                  ? 'bg-primary-600 text-white'
                  : 'bg-primary-100 dark:bg-gray-700 text-primary-600 dark:text-primary-300 hover:bg-primary-200 dark:hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;