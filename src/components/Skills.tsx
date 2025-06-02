import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SkillCategory from './SkillCategory';
import { 
  mobileSkills, 
  backendSkills, 
  cloudSkills, 
  programmingSkills 
} from '../data/skillsData';

const Skills = () => {
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

  return (
    <section id="skills" className="bg-primary-50 dark:bg-gray-900 py-16">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="section-container"
      >
        <motion.h2 variants={itemVariants} className="section-title text-center">
          Skills
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <motion.div variants={itemVariants}>
            <SkillCategory 
              title="Mobile Development" 
              skills={mobileSkills} 
              icon="📱"
              bgColor="bg-primary-100 dark:bg-primary-900/30"
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <SkillCategory 
              title="Backend & API" 
              skills={backendSkills} 
              icon="⚙️"
              bgColor="bg-secondary-100 dark:bg-secondary-900/30"
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <SkillCategory 
              title="Cloud & DevOps" 
              skills={cloudSkills} 
              icon="☁️"
              bgColor="bg-accent-100 dark:bg-accent-900/30"
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <SkillCategory 
              title="Programming" 
              skills={programmingSkills} 
              icon="💻"
              bgColor="bg-primary-100 dark:bg-primary-900/30"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;