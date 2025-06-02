import React from 'react';
import { motion } from 'framer-motion';

export interface Skill {
  name: string;
  icon: string;
  description: string;
}

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
  icon: string;
  bgColor: string;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills, icon, bgColor }) => {
  return (
    <div className={`p-6 rounded-xl ${bgColor} h-full`}>
      <div className="flex items-center mb-4">
        <span className="text-2xl mr-2">{icon}</span>
        <h3 className="text-xl font-bold text-primary-700 dark:text-primary-300">{title}</h3>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        {skills.map((skill, index) => (
          <motion.div 
            key={index}
            className="skill-card group cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl group-hover:scale-125 transition-transform">{skill.icon}</span>
              <h4 className="font-semibold text-primary-700 dark:text-primary-300">{skill.name}</h4>
            </div>
            <p className="text-sm text-primary-600 dark:text-primary-400 opacity-0 group-hover:opacity-100 transition-opacity">
              {skill.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;